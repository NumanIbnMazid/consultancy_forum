from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls import url
# from django.views.static import serve

""" User Panel Views """
from .views import (
    HomeView,
)
""" Dashboard Views """
from .views import (
    DashboardView, 
    # Thread Views
    ThreadCreateView, ThreadUpdateView, ThreadDetailView, delete_thread,
)

USER_PANEL_URLS = [
    path("", HomeView.as_view(), name="home"),
]

DASHBOARD_PANEL_URLS = [
    path("dashboard/", DashboardView.as_view(), name="dashboard"),
    # ==============================*** UTILS URLS ***==============================
    path("utils/", include(("utils.urls", "utils"), namespace="utils")),
    # ==============================*** Thread URLS ***==============================
    path("create-thread/", ThreadCreateView.as_view(), name="create_thread"),
    path("update-thread/<slug>/", ThreadUpdateView.as_view(), name="update_thread"),
    path("thread/<slug>/detail/", ThreadDetailView.as_view(), name="thread_detail"),
    path("delete/thread/", delete_thread, name="delete_thread"),
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
    path('ckeditor/', include('ckeditor_uploader.urls')),
] + USER_PANEL_URLS + DASHBOARD_PANEL_URLS

if settings.DEBUG:
    urlpatterns = urlpatterns + \
        static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns = urlpatterns + \
        static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
