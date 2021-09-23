from django.contrib import admin
from .models import Thread, Post, Comment, CommentReply

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

class CommentAdmin(admin.ModelAdmin):
    list_display = ["post", "commented_by", "created_at"]

    class Meta:
        model = Comment
admin.site.register(Comment, CommentAdmin)

class CommentReplyAdmin(admin.ModelAdmin):
    list_display = ["comment", "replied_by", "created_at"]

    class Meta:
        model = CommentReply
admin.site.register(CommentReply, CommentReplyAdmin)