from django_filters import rest_framework as filters
from .models import NewUser

class UserFilter(filters.FilterSet):
    #export_to_CSV = filters.BooleanFilter(field_name='export_to_CSV')
    class Meta:
        model = NewUser
        fields = ['first_name', 'last_name', 'email', 'user_name']