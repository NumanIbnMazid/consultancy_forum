from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from .models import User, UserWallet


class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password', 'name', 'gender', 'contact_number', 'dob', 'address', 'membership_type', 'marriage_experience', 'purpose_of_use', 'last_login')}),
        ('Permissions', {'fields': (
            'is_active',
            'is_staff',
            'is_superuser',
            'groups',
            'user_permissions',
        )}),
    )
    add_fieldsets = (
        (
            None,
            {
                'classes': ('wide',),
                'fields': ('email', 'password1', 'password2')
            }
        ),
    )

    list_display = ('email', 'username', 'name', 'gender', 'membership_type', 'contact_number', 'is_staff', 'last_login')
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    search_fields = ('email',)
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)


admin.site.register(User, UserAdmin)


class UserWalletAdmin(admin.ModelAdmin):
    list_display = ["user", "available_points", "is_in_flat_plan", "flat_plan_created_at", "created_at", "updated_at"]

    class Meta:
        model = UserWallet


admin.site.register(UserWallet, UserWalletAdmin)
