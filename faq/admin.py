from django.contrib import admin
from .models import FAQ

# Register your models here.
class FAQAdmin(admin.ModelAdmin):
    list_display = ["question_title","is_active", "created_at"]

    class Meta:
        model = FAQ

admin.site.register(FAQ, FAQAdmin)