from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
# from django.views.static import serve
from .views import (
    HomeView
)

USER_PANEL_URLS = [
    path("", HomeView.as_view(), name="home"),
    path("utils/", include(("utils.urls", "utils"), namespace="utils")),
]
urlpatterns = [
    # For handling Static Files in Debug False Mode
    # url(r'^media/(?P<path>.*)$', serve,
    #     {'document_root': settings.MEDIA_ROOT}),
    # url(r'^static/(?P<path>.*)$', serve,
    #     {'document_root': settings.STATIC_ROOT}),
    # Application URLS
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
] + USER_PANEL_URLS

if settings.DEBUG:
    urlpatterns = urlpatterns + \
        static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + \
        static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
