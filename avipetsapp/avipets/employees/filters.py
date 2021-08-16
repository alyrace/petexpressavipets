from django_filters import rest_framework as filters
from .models import Employee

class EmployeeFilter(filters.FilterSet):
    #export_to_CSV = filters.BooleanFilter(field_name='export_to_CSV')
    class Meta:
        model = Employee
        fields = ['department_type', 'role_title', 'user', 'employeetype', 'office']