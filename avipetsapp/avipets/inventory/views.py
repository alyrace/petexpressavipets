from rest_framework import permissions
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from .serializers import InventorySearchSerializer, InventorySerializer, ItemDetailSerializer
from .models import Inventory
from .forms import InventoryCreateForm
from .filters import InventoryFilter
from django_filters import rest_framework as filters
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

class InventoryHomeView(generics.ListAPIView):
    queryset= Inventory.objects.get_queryset().order_by('id')
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer#, InventorySearchSerializer  
    paginate_by = 12
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = InventoryFilter

class AddItemView(APIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer
    form_class = InventoryCreateForm()
    
    
    def post(self, request, format=None):
        data = request.data
        serializer = InventorySerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            new_data = serializer.data
            return Response(new_data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)    

class UpdateItemView(generics.RetrieveUpdateAPIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer

class DeleteItemView(generics.DestroyAPIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer


class ItemDetailView(generics.RetrieveDestroyAPIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ItemDetailSerializer
    lookup_field = 'pk'



"""
class SearchItemView(generics.RetrieveAPIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer
    
class FilterCategoryView(generics.RetrieveAPIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer
    #filter_backends = [filters.SearchFilter]
    search_fields = ['=cat']    

class FilterItemView(generics.RetrieveAPIView):
    queryset= Inventory.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InventorySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['=item_name']    
"""    