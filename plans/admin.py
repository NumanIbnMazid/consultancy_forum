from django.contrib import admin
from .models import PointPlan, FlatRatePlan, UserWalletTransaction


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


class UserWalletTransactionAdmin(admin.ModelAdmin):
    list_display = ["user", "slug", "transaction_type", "point_plan", "flat_rate_plan", "created_at", "updated_at"]

    class Meta:
        model = UserWalletTransaction


admin.site.register(UserWalletTransaction, UserWalletTransactionAdmin)
