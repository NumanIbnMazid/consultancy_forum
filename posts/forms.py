from django import forms
from posts.models import Thread
from ckeditor.widgets import CKEditorWidget

""" 
-------------------------------------------------------------------
                           ** Thread ***
-------------------------------------------------------------------
"""


class ThreadManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(ThreadManageForm, self).__init__(*args, **kwargs)

        self.fields['title'].widget.attrs.update({
            'placeholder': 'Enter Thread Title...',
            'maxlength': 150
        })

    class Meta:
        model = Thread
        fields = [
            "title", "weight", "description"
        ]
        widgets = {
            'description': CKEditorWidget(),
        }
