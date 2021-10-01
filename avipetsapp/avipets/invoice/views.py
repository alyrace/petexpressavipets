from django.core.exceptions import PermissionDenied
from rest_framework import permissions, serializers
from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from .serializers import InvoiceSerializer#, ItemSerializer
from .models import Invoice #, Item
#from .forms import InvoiceCreateForm
from rest_framework.views import APIView
#from .filters import InvoiceFilter
#from django_filters import rest_framework as filters

class InvoiceHomeView(generics.ListAPIView):
    serializer_class = InvoiceSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Invoice.objects.all()

    """
    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
    
    def perform_create(self, serializer):
       serializer.save(created_by=self.request.user) 

    def perform_update(self, serializer):
        obj = self.get_object()

        if self.request.user != obj.created_by:
            raise PermissionDenied('Wrong Object Owner')

        serializer.save()
    """     
"""
class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    def get_queryset(self):
        invoice_id = self.request.GET.get('Invoice_id', 0)

        return self.queryset.filter(invoice__id =invoice_id)            

class InvoiceHomeView(generics.ListAPIView):
    queryset= Invoice.objects.get_queryset().order_by('id')
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer  
    paginate_by = 12
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = InvoiceFilter
"""
class AddInvoiceView(generics.ListCreateAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer
    #form_class = InvoiceCreateForm()

    def post(self, request, format=None):
        data = request.data
        serializer = InvoiceSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            new_data = serializer.data
            return Response(new_data)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)    

class UpdateInvoiceView(generics.RetrieveUpdateAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer

class DeleteInvoiceView(generics.DestroyAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer

class InvoiceDetailView(generics.RetrieveDestroyAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer
    lookup_field = 'pk'
"""
class ItemViewSet(generics.ListAPIView):
    queryset= Invoice.objects.get_queryset().order_by('id')
    permission_classes = [permissions.AllowAny]
    serializer_class = ItemSerializer
"""
class UpdateItemView(generics.RetrieveUpdateAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer

class DeleteItemView(generics.DestroyAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer
"""
class ItemDetailView(generics.RetrieveDestroyAPIView):
    queryset= Invoice.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = InvoiceSerializer
    lookup_field = 'pk'

"""