from django import forms
from utils.models import BBStranslation
from ckeditor.widgets import CKEditorWidget
from bbs.utils import translate_to_jp

class BBStranslationManageForm(forms.ModelForm):
    
    def __init__(self, *args, **kwargs):
        super(BBStranslationManageForm, self).__init__(*args, **kwargs)

        self.fields['english_version'].widget.attrs.update({
            'id': 'english_version',
            'placeholder': translate_to_jp('Enter English Text...'),
            'rows': 5,
            'cols': 20,
        })
        self.fields['japanese_version'].widget.attrs.update({
            'id': 'japanese_version',
            'placeholder': translate_to_jp('Enter Japanese Text...'),
            'rows': 5,
            'cols': 20,
        })

    class Meta:
        model = BBStranslation
        fields = '__all__'
        exclude = ['slug']

