from django import forms
from posts.models import Thread, Post
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

# #........................... **** ...........................
# #........................... Post ...........................
# #........................... **** ...........................
class PostManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(PostManageForm, self).__init__(*args, **kwargs)

        self.fields['weight'].widget.attrs.update({
            'placeholder': 'Enter Post Weight...',
        })

    class Meta:
        model = Post
        fields = [
            'weight'
        ]