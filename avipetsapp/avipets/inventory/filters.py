from django_filters import rest_framework as filters
from .models import Inventory

class InventoryFilter(filters.FilterSet):
    export_to_CSV = filters.BooleanFilter(field_name='export_to_CSV')
    class Meta:
        model = Inventory
        fields = ['category', 'item_name']