#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from pathlib import Path
import environ

# ******* Reading Project Environment *******
ENV_FILE_DIR = Path(__file__).resolve().parent
env = environ.Env()
env.read_env(env_file=os.path.join(ENV_FILE_DIR, '.env'))

def main():
    """Run administrative tasks."""
    if env.bool('IS_PRODUCTION', default='') == True:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bbs.settings.production')
    elif env.bool('IS_PRODUCTION', default='') == False and env.bool('IS_STAGING', default='') == True:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bbs.settings.staging')
    else:
        os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bbs.settings.development')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
