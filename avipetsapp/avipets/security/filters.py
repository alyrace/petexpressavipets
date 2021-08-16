from django_filters import rest_framework as filters
from .models import Agent

class AgentFilter(filters.FilterSet):
    class Meta:
        model = Agent
        fields = ['agent_name', 'main_contact']