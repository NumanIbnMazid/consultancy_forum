from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models import CheckConstraint, Q
from bbs.helpers import get_dynamic_fields
from bbs.utils import (
    unique_slug_generator
)
from django.db.models.signals import post_save, pre_save
from django.utils.translation import gettext_lazy as _


""" 
-------------------------------------------------------------------
                            ** PointPlan ***
-------------------------------------------------------------------
"""


class PointPlan(models.Model):
    class Currency(models.IntegerChoices):
        YEN = 0, _("Yen")
        DOLLAR = 1, _("Dollar")
    title = models.CharField(
        max_length=254, unique=True
    )
    slug = models.SlugField(
        unique=True
    )
    point = models.PositiveIntegerField(
        default=0
    )
    price = models.FloatField(
        default=0, validators=[MinValueValidator(0.0)]
    )
    currency = models.SmallIntegerField(
        choices=Currency.choices, default=0
    )
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated at'
    )

    class Meta:
        verbose_name = ("Point Plan")
        verbose_name_plural = ("Point Plans")
        ordering = ["-created_at"]
        constraints = (
            # for checking in the DB
            CheckConstraint(
                check=Q(price__gte=0.0),
                name='point_plan_price_float_range'
            ),
        )

    def __str__(self):
        return self.title

    def get_fields(self):
        def get_dynamic_fields(field):
            if field.name == 'currency':
                return (field.name, self.get_currency_icon_class(), field.get_internal_type())
            else:
                return (field.name, field.value_from_object(self), field.get_internal_type())
        return [get_dynamic_fields(field) for field in self.__class__._meta.fields]

    def get_currency_icon_class(self):
        if self.currency == 1:
            return "fas fa-dollar-sign"
        return "<i class='fas fa-yen-sign'></i>"

    def get_currency_str(self):
        if self.currency == 1:
            return "USD"
        return "YEN"
""" 
-------------------------------------------------------------------
                            ** FlatRatePlan ***
-------------------------------------------------------------------
"""


class FlatRatePlan(models.Model):
    class Currency(models.IntegerChoices):
        YEN = 0, _("Yen")
        DOLLAR = 1, _("Dollar")
    class ExpirationCycle(models.IntegerChoices):
        MONTHLY = 0, _("Monthly")
        YEARLY = 1, _("Yearly")
        LIFETIME = 2, _("Lifetime")

    title = models.CharField(
        max_length=254, unique=True
    )
    slug = models.SlugField(
        unique=True
    )
    price = models.FloatField(
        default=0, validators=[MinValueValidator(0.0)]
    )
    currency = models.SmallIntegerField(
        choices=Currency.choices, default=0
    )
    expiration_cycle = models.SmallIntegerField(
        choices=ExpirationCycle.choices, default=0
    )
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name='created at'
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name='updated at'
    )

    class Meta:
        verbose_name = ("Flat Rate Plan")
        verbose_name_plural = ("Flat Rate Plans")
        ordering = ["-created_at"]
        constraints = (
            # for checking in the DB
            CheckConstraint(
                check=Q(price__gte=0.0),
                name='flat_rate_plan_price_float_range'
            ),
        )

    def __str__(self):
        return self.title

    def get_fields(self):
        def get_dynamic_fields(field):
            if field.name == 'currency':
                return (field.name, self.get_currency_icon_class(), field.get_internal_type())
            elif field.name == 'expiration_cycle':
                return (field.name, self.get_expiration_cycle_str(), field.get_internal_type())
            else:
                return (field.name, field.value_from_object(self), field.get_internal_type())
        return [get_dynamic_fields(field) for field in self.__class__._meta.fields]

    def get_currency_icon_class(self):
        if self.currency == 1:
            return "fas fa-dollar-sign"
        return "<i class='fas fa-yen-sign'></i>"

    def get_currency_str(self):
        if self.currency == 1:
            return "USD"
        return "YEN"

    def get_expiration_cycle_str(self):
        if self.expiration_cycle == 1:
            return "Yearly"
        elif self.expiration_cycle == 2:
            return "Lifetime"
        return "Monthly"


# # -------------------------------------------------------------------
# #                  Pre-Save Post-Save Configurations
# # -------------------------------------------------------------------


# # PointPlan

def point_plan_slug_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(
            instance=instance, field=instance.title
        )


pre_save.connect(point_plan_slug_pre_save_receiver, sender=PointPlan)


# # FlatRatePlan

def flat_rate_plan_slug_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(
            instance=instance, field=instance.title
        )


pre_save.connect(flat_rate_plan_slug_pre_save_receiver, sender=FlatRatePlan)
