from django import forms
from .models import Agent

class AgentCreateForm(forms.ModelForm):
    class Meta:
        model = Agent
        fields = '__all__'
        