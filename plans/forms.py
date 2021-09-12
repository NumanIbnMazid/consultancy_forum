from django import forms
from plans.models import PointPlan, FlatRatePlan, UserWalletTransaction
from django_select2 import forms as s2forms


""" 
-------------------------------------------------------------------
                           ** PointPlan ***
-------------------------------------------------------------------
"""


class PointPlanManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(PointPlanManageForm, self).__init__(*args, **kwargs)

        self.fields['title'].widget.attrs.update({
            'placeholder': 'Enter Point Plan Title...',
            'maxlength': 150
        })

    class Meta:
        model = PointPlan
        fields = [
            "title", "point", "price", "currency"
        ]

""" 
-------------------------------------------------------------------
                        ** FlatRatePlan ***
-------------------------------------------------------------------
"""


class FlatRatePlanManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(FlatRatePlanManageForm, self).__init__(*args, **kwargs)

        self.fields['title'].widget.attrs.update({
            'placeholder': 'Enter Flat Rate Plan Title...',
            'maxlength': 150
        })

    class Meta:
        model = FlatRatePlan
        fields = [
            "title", "price", "currency", "expiration_cycle"
        ]


""" 
-------------------------------------------------------------------
                    ** UserWalletTransaction ***
-------------------------------------------------------------------
"""


class UserWidget(s2forms.ModelSelect2Widget):
    search_fields = [
        "username__icontains",
        "email__icontains",
        "contact_number__icontains",
    ]

class UserWalletTransactionManageForm(forms.ModelForm):
    
    def __init__(self, *args, **kwargs):
        super(UserWalletTransactionManageForm, self).__init__(*args, **kwargs)

    class Meta:
        model = UserWalletTransaction
        fields = [
            "user", "transaction_type", "point_plan", "flat_rate_plan"
        ]
        widgets = {
            "user": UserWidget
        }
