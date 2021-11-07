import random
import string
import time
from django.utils.text import slugify
from deep_translator import GoogleTranslator
from django.conf import settings
from django.dispatch import receiver
from django.db import models
import uuid


def random_string_generator(size=4, chars=string.ascii_lowercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def random_number_generator(size=4, chars='1234567890'):
    return ''.join(random.choice(chars) for _ in range(size))


def simple_random_string():
    timestamp_m = time.strftime("%Y")
    timestamp_d = time.strftime("%m")
    timestamp_y = time.strftime("%d")
    timestamp_now = time.strftime("%H%M%S")
    random_str = random_string_generator()
    random_num = random_number_generator()
    bindings = (
        random_str + timestamp_d + random_num + timestamp_now +
        timestamp_y + random_num + timestamp_m
    )
    return bindings


def unique_slug_generator(instance=None, field=None, new_slug=None):
    if field == None:
        field = instance.title
    if new_slug is not None:
        slug = new_slug
    else:
        slug = slugify(field[:50])

    Klass = instance.__class__
    qs_exists = Klass.objects.filter(slug=slug).exists()
    if qs_exists:
        new_slug = "{slug}-{randstr}".format(
            slug=slug,
            randstr=random_string_generator(size=4)
        )
        return unique_slug_generator(instance, new_slug=new_slug)
    return slug


def autoslugFromUUID():
    def decorator(model):
        assert hasattr(model, "slug"), "Model is missing a slug field"

        @receiver(models.signals.pre_save, sender=model, weak=False)
        def generate_slug(sender, instance, *args, raw=False, **kwargs):
            if not raw and not instance.slug:
                try:
                    instance.slug = str(uuid.uuid4())
                except Exception as e:
                    instance.slug = simple_random_string()
        return model
    return decorator


def translate_to_jp(value):
    if settings.USE_TRANSLATION:
        value = GoogleTranslator(source='auto', target='ja').translate(value)
    return value