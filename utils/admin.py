from django.contrib import admin
from .models import DashboardSetting, BBStranslation


class DashboardSettingAdmin(admin.ModelAdmin):
    list_display = ['title', 'allow_auto_translation', 'skin', 'menu_collapsed',
                    'layout_width', 'navbar_color', 'navbar_type', 'footer_type', 'created_at', 'updated_at']

    class Meta:
        model = DashboardSetting


admin.site.register(DashboardSetting, DashboardSettingAdmin)

class BBStranslationAdmin(admin.ModelAdmin):
    list_display = ['id','english_version','japanese_version']
    class Meta:
        model = BBStranslation
admin.site.register(BBStranslation, BBStranslationAdmin)
