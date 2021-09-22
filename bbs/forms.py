from django import forms
from users.models import Husband
from ckeditor.widgets import CKEditorWidget


# # -------------------------------------------------------------------
# #                              Husband
# # -------------------------------------------------------------------

class HusbandManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(HusbandManageForm, self).__init__(*args, **kwargs)

    class Meta:
        model = Husband
        fields = '__all__'
        exclude = ['slug','user']