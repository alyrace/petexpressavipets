from rest_framework import permissions
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from .serializers import AgentSearchSerializer, AgentSerializer 
from .models import Agent
from .forms import AgentCreateForm
from .filters import AgentFilter
from django_filters import rest_framework as filters
from rest_framework.response import Response
from rest_framework.views import APIView

class AgentHomeView(generics.ListAPIView):
    queryset= Agent.objects.get_queryset().order_by('id')
    permission_classes = [permissions.AllowAny]
    serializer_class = AgentSerializer  
    paginate_by = 12
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = AgentFilter

class AddAgentView(APIView):
    queryset= Agent.objects.get_queryset().order_by('id')
    permission_classes = [permissions.AllowAny]
    serializer_class = AgentSerializer, AgentSearchSerializer
    form_class = AgentCreateForm()
    
    
    def post(self, request, format=None):
        data = request.data
        serializer = AgentSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            new_data = serializer.data
            return Response(new_data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)    

class UpdateAgentView(generics.RetrieveUpdateAPIView):
    queryset= Agent.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AgentSerializer

class DeleteAgentView(generics.DestroyAPIView):
    queryset= Agent.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AgentSerializer


class AgentDetailView(generics.RetrieveDestroyAPIView):
    queryset= Agent.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AgentSerializer
    lookup_field = 'pk'