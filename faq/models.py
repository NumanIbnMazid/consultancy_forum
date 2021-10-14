from django.db import models
from bbs.helpers import get_dynamic_fields
from bbs.utils import (
    unique_slug_generator
)
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
# Create your models here.

class FAQ(models.Model):
    question_title = models.CharField(
        max_length=255, verbose_name='question title'
    )
    slug = models.SlugField(
        unique=True
    )
    answer = models.TextField(
        blank=True, null=True, verbose_name='question answer'
    )
    is_active = models.BooleanField(default= False)
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated at'
    )
    class Meta:
        verbose_name = ("FAQ")
        verbose_name_plural = ("FAQs")
        ordering = ["-created_at"]

    def __str__(self):
        return self.question_title

# # FAQ

def faq_slug_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance=instance, field=instance.title)
pre_save.connect(faq_slug_pre_save_receiver, sender=FAQ)