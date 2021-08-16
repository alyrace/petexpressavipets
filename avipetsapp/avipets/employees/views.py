from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from .serializers import EmployeeSerializer, EmployeeProfileSerializer
from django.http import Http404
from django.shortcuts import render, redirect

from .forms import ProfileForm
from .models import Employee
from .filters import EmployeeFilter
from django_filters import rest_framework as filters



class EmployeeList(generics.ListAPIView):
    queryset = Employee.objects.get_queryset().order_by('id')
    permission_classes = [AllowAny]
    serializer_class = EmployeeSerializer
    paginate_by = 12
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EmployeeFilter

class EmployeeProfile(generics.RetrieveAPIView):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()
    permission_classes = [AllowAny]
    #lookup_field = 'fullname'
    """
    def get_object(self, queryset=None, **kwargs):
        item = self.kwargs.get('pk')
        return get_object_or_404(Employee, fullname=item)
    """
class EditProfile(generics.RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = EmployeeProfileSerializer
    queryset = Employee.objects.all()            
    form_class = ProfileForm()

class DeleteProfile(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated, IsAdminUser]
    serializer_class = EmployeeProfileSerializer
    queryset = Employee.objects.all()
    