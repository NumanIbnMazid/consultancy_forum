from django.contrib import admin
from .models import Thread, Post

class ThreadAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "created_at", "updated_at"]

    class Meta:
        model = Thread


admin.site.register(Thread, ThreadAdmin)

class PostAdmin(admin.ModelAdmin):
    list_display = ["title", "slug","user","thread", "created_at"]

    class Meta:
        model = Post
admin.site.register(Post, PostAdmin)