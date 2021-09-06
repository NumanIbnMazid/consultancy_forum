from django.contrib import admin
from .models import Thread

class ThreadAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "created_at", "updated_at"]

    class Meta:
        model = Thread


admin.site.register(Thread, ThreadAdmin)
