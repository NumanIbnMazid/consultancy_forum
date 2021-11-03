import os
from pathlib import Path
import environ
from django.core.asgi import get_asgi_application

# CHANNEL
from channels.routing import ProtocolTypeRouter, URLRouter
import bbs.routing
from channels.auth import AuthMiddlewareStack

# ******* Reading Project Environment *******
ENV_FILE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()
env.read_env(env_file=os.path.join(ENV_FILE_DIR, '.env'))

if env.bool('IS_PRODUCTION', default='') == True:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bbs.settings.production')
elif env.bool('IS_PRODUCTION', default='') == False and env.bool('IS_STAGING', default='') == True:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bbs.settings.staging')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bbs.settings.development')

# FOR CHANNEL
# application = get_asgi_application()
application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            bbs.routing.websocket_urlpatterns
        )
    )
})