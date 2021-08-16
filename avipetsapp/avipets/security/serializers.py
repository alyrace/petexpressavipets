from rest_framework import serializers
from .models import Agent

class AgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = '__all__'

class AgentSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agent
        fields = ('agent_name', 'main_contact')