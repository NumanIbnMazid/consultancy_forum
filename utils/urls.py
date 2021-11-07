from django.urls import path
from .views import (
    DashboardSettingView, BBStranslationCreateView, BBStranslationDetailView, BBStranslationUpdateView, delete_translation
)


urlpatterns = [
    path('dashboard-setting/', DashboardSettingView.as_view(), name="dashboard_setting"),
    # ==============================*** BBS Translation URLS ***==============================
    path("create-translation/", BBStranslationCreateView.as_view(), name="create_translation"),
    path("update-translation/<slug>/", BBStranslationUpdateView.as_view(), name="update_translation"),
    path("translation/<slug>/detail/", BBStranslationDetailView.as_view(), name="translation_detail"),
    path("delete/translation/", delete_translation, name="delete_translation"),
]
