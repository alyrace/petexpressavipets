from rest_framework import permissions
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from .models import Client
from rest_framework.views import APIView
from .serializers import ClientSerializer
from .filters import ClientFilter
from django_filters import rest_framework as filters

class ClientHomeView(generics.ListAPIView):
    serializer_class = ClientSerializer
    queryset = Client.objects.get_queryset().order_by('id')
    permission_classes = [permissions.AllowAny]
    paginate_by = 12
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ClientFilter
    """
    def get_queryset(self):
        return self.queryset.filter(created_by = self.request.user)
    """
class AddClientView(APIView):
    queryset= Client.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ClientSerializer,

    def post(self, request, format=None):
        data = request.data
        serializer = ClientSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            new_data = serializer.data
            return Response(new_data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)

class UpdateClientView(generics.RetrieveUpdateAPIView):
    queryset= Client.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ClientSerializer

class DeleteClientView(generics.DestroyAPIView):
    queryset = Client.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ClientSerializer

class ClientDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ClientSerializer
    lookup_field = 'pk'    