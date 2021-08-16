from django import forms
#from django.core.exceptions import ValidationError
from .models import Employee
from django.conf  import settings


def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)

User= settings.AUTH_USER_MODEL

class EmployeeCreateForm(forms.ModelForm):
	sta_number = forms.CharField(required=False)
	hiring_docs = forms.FileField(required=False, allow_empty_file=True)
	digital_license = forms.FileField(required=False, allow_empty_file=True)
	sta_docs = forms.FileField(required=False, allow_empty_file=True)
	
	class Meta:
		model = Employee
		exclude = ['is_deleted','created','updated']
		
class ProfileForm(forms.ModelForm):
	class Meta:
		model = Employee
		fields = '__all__'

class ProfileBasicForm(forms.Form):
	avatar = forms.ImageField(required=False)
	phone = forms.CharField(max_length=20)
	emergency_contact = forms.CharField(required=False, max_length=200)
	emergency_contact_number = forms.CharField(required=False, max_length=20)

class UserProfileForm(forms.ModelForm):
	avatar = forms.ImageField(required=False)
	phone = forms.CharField(max_length=20)
	emergency_contact = forms.CharField(required=False, max_length=200)
	emergency_contact_number = forms.CharField(required=False, max_length=20)
	
	class Meta:
		model = Employee
		fields = '__all__'
    



