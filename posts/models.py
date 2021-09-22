from django.db import models
from bbs.helpers import get_dynamic_fields
from bbs.utils import (
    unique_slug_generator
)
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save


""" 
-------------------------------------------------------------------
                            ** Thread ***
-------------------------------------------------------------------
"""

class Thread(models.Model):
    title = models.CharField(
        max_length=254, unique=True
    )
    slug = models.SlugField(
        unique=True
    )
    weight = models.PositiveIntegerField(
        default=0, blank=True, null=True, verbose_name="thread weight"
    )
    description = models.TextField(
        blank=True, null=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated at'
    )

    class Meta:
        verbose_name = ("Thread")
        verbose_name_plural = ("Threads")
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

    def get_fields(self):
        return [get_dynamic_fields(field, self) for field in self.__class__._meta.fields]


# # -------------------------------------------------------------------
# #                             Post
# # -------------------------------------------------------------------

class Post(models.Model):
    title = models.CharField(
        max_length=255
    )
    slug = models.SlugField(
        unique=True
    )
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="post_users"
    )
    thread = models.ForeignKey(
        Thread, on_delete=models.CASCADE, related_name="post_threads"
    )
    weight = models.PositiveIntegerField(
        default=0, blank=True, null=True, verbose_name="post weight"
    )
    description = models.TextField(
        blank=True, null=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated at'
    )

    class Meta:
        verbose_name = ("Post")
        verbose_name_plural = ("Posts")
        ordering = ["-created_at"]

    def __str__(self):
        return self.title

    def get_fields(self):
        return [get_dynamic_fields(field, self) for field in self.__class__._meta.fields]

# # -------------------------------------------------------------------
# #                  Pre-Save Post-Save Configurations
# # -------------------------------------------------------------------


# # Thread

def thread_slug_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance=instance, field=instance.title)


pre_save.connect(thread_slug_pre_save_receiver, sender=Thread)



# # Post

def thread_slug_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance=instance, field=instance.title)


pre_save.connect(thread_slug_pre_save_receiver, sender=Post)