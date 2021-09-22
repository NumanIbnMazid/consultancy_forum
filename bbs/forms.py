from django import forms
from users.models import Husband
from posts.models import Post
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

class PostManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(PostManageForm, self).__init__(*args, **kwargs)

    class Meta:
        model = Post
        fields = '__all__'
        exclude = ['slug','user']