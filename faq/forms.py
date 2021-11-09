from django import forms
from faq.models import FAQ
from ckeditor.widgets import CKEditorWidget
from django.core.files.uploadedfile import UploadedFile
from django.db.models.fields.files import ImageFieldFile
from django.template.defaultfilters import filesizeformat
import os
from bbs.utils import translate_to_jp
# # -------------------------------------------------------------------
# #                              FAQ
# # -------------------------------------------------------------------
class FAQManageForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(FAQManageForm, self).__init__(*args, **kwargs)

        self.fields['question_title'].widget.attrs.update({
            'placeholder': translate_to_jp('Enter FAQ Title')
        })
        self.fields['answer'].widget.attrs.update({
            'id': 'answer',
            'placeholder': translate_to_jp('Enter FAQ Answer...'),
            'rows': 10,
            'cols': 30,
        })

    class Meta:
        model = FAQ
        fields = ["question_title", "answer","is_active"]
        widgets = {
            'answer': CKEditorWidget(),
        }
