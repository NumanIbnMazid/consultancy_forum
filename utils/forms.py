from django import forms
from utils.models import BBStranslation

class BBStranslationManageForm(forms.ModelForm):
    
    def __init__(self, *args, **kwargs):
        super(BBStranslationManageForm, self).__init__(*args, **kwargs)

    class Meta:
        model = BBStranslation
        fields = '__all__'
        exclude = ['slug']
