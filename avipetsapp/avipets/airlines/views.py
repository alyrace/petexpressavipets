from django.shortcuts import get_object_or_404
from rest_framework import status
#from django.shortcuts import render
from rest_framework import filters, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status, permissions
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth.mixins import AccessMixin, PermissionRequiredMixin
from rest_framework.response import Response
#from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Airline
from .serializers import AirlineSerializer, AirlineDetailSerializer


# for pdf file upload
from django.http import FileResponse
import io
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter

# generate pdf files for airlines


def airline_pdf(request):
    # create byestream buffer
    buf = io.BytesIO()
    # create a canvas
    c = canvas.Canvas(buf, pagesize=letter, bottomup=0)
    # create a text object
    textobj = c.beginText()
    textobj.setTextOrigin(inch, inch)
    textobj.setFont('Helvetica', 14)
    # add lines of text


class AirlineList(generics.ListAPIView):
    queryset = Airline.objects.all()
    #queryset = Airline.objects.order_by('-title').filter(published=True)
    #authentication_classes = [TokenAuthentication]
    permission_classes = [permissions.AllowAny]
    #permission_required =[permissions.IsAuthenticated]
    serializer_class = AirlineSerializer
    #lookup_field = 'slug'


class AirlineDetail(generics.RetrieveAPIView):
    serializer_class = AirlineDetailSerializer
    permission_classes = [permissions.AllowAny]
    queryset = Airline.objects.all()
    lookup_field = 'slug'

    """
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Airline, slug=item)
    """
class AirlineListDetailFilter(PermissionRequiredMixin, generics.ListAPIView):

    queryset = Airline.objects.all()
    serializer_class = AirlineSerializer
    filter_backends = [filters.SearchFilter]
    # '^' Starts-with search.
    # '=' Exact matches.
    search_fields = ['^slug']

class AdminAirlineDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Airline.objects.all()
    serializer_class = AirlineDetailSerializer

class CreateAirline(PermissionRequiredMixin, APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = AirlineDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditAirline(PermissionRequiredMixin, generics.UpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = AirlineDetailSerializer
    queryset = Airline.objects.all()


class DeleteAirline(generics.RetrieveDestroyAPIView):
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]
    serializer_class = AirlineDetailSerializer
    queryset = Airline.objects.all()


""" Concrete View Classes
# CreateAPIView
Used for create-only endpoints.
# ListAPIView
Used for read-only endpoints to represent a collection of model instances.
# RetrieveAPIView
Used for read-only endpoints to represent a single model instance.
# DestroyAPIView
Used for delete-only endpoints for a single model instance.
# UpdateAPIView
Used for update-only endpoints for a single model instance.
# ListCreateAPIView
Used for read-write endpoints to represent a collection of model instances.
RetrieveUpdateAPIView
Used for read or update endpoints to represent a single model instance.
# RetrieveDestroyAPIView
Used for read or delete endpoints to represent a single model instance.
# RetrieveUpdateDestroyAPIView
Used for read-write-delete endpoints to represent a single model instance.
"""

"""
def airlinelist(request):
    return render(request, 'index.html'),

def airlinedetails(request):
    return render(request, 'index.html'),
"""    