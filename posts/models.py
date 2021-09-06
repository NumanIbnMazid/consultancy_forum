from django.db import models
from bbs.helpers import get_dynamic_fields
from bbs.utils import (
    unique_slug_generator
)
from django.db.models.signals import post_save, pre_save

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
# #                  Pre-Save Post-Save Configurations
# # -------------------------------------------------------------------


# # Thread

def thread_slug_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance=instance, field=instance.title)


pre_save.connect(thread_slug_pre_save_receiver, sender=Thread)
