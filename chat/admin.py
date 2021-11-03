from django.contrib import admin
from chat.models import Message
# Register your models here.
class MessageAdmin(admin.ModelAdmin):
    list_display = ["id","room","sender", "receiver"]

    class Meta:
        model = Message

admin.site.register(Message, MessageAdmin)