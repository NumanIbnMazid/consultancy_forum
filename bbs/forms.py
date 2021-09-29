from django import forms
from users.models import Husband, User
from posts.models import Post
from ckeditor.widgets import CKEditorWidget

# # -------------------------------------------------------------------
# #                              User
# # -------------------------------------------------------------------
class UserManageForm(forms.ModelForm):
    GENDER_CHOICES = (
        ('', '--- Select Gender ---'),
        (0, 'Male'),
        (1, 'Female'),
        (2, 'Other'),
    )
    def __init__(self, *args, **kwargs):
        super(UserManageForm, self).__init__(*args, **kwargs)
    gender = forms.ChoiceField(
        choices=GENDER_CHOICES, label="Gender", initial='',
        widget=forms.Select(), required=True
    )
    class Meta:
        model = User
        fields = ['name','gender','contact_number','dob',
                 'address','marriage_experience','purpose_of_use']

# # -------------------------------------------------------------------
# #                              Husband
# # -------------------------------------------------------------------

class HusbandManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(HusbandManageForm, self).__init__(*args, **kwargs)

        self.fields['name'].widget.attrs.update({
            'placeholder': 'Full Name'
        })
        self.fields['nationality'].widget.attrs.update({
            'placeholder': 'Nationality'
        })
        self.fields['address'].widget.attrs.update({
            'placeholder': 'Address'
        })
        self.fields['dob'].widget.attrs.update({
            'placeholder': 'YYYY-MM-DD'
        })

    class Meta:
        model = Husband
        fields = '__all__'
        exclude = ['slug','user']

class PostManageForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(PostManageForm, self).__init__(*args, **kwargs)

        self.fields['title'].widget.attrs.update({
            'placeholder': 'Title'
        })

    class Meta:
        model = Post
        fields = '__all__'
        exclude = ['slug','user','weight']

        widgets = {
            'description': CKEditorWidget(),
        }
