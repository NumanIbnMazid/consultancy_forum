from django.contrib import admin
from .models import PointPlan, FlatRatePlan


class PointPlanAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "point", "price", "currency", "created_at", "updated_at"]

    class Meta:
        model = PointPlan


admin.site.register(PointPlan, PointPlanAdmin)


class FlatRatePlanAdmin(admin.ModelAdmin):
    list_display = ["title", "slug", "price", "currency", "expiration_cycle", "created_at", "updated_at"]

    class Meta:
        model = FlatRatePlan


admin.site.register(FlatRatePlan, FlatRatePlanAdmin)
