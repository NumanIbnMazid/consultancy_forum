from django import forms
from plans.models import PointPlan, FlatRatePlan

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
