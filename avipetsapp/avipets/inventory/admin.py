from django import forms
from django.contrib import admin
from .models import Inventory
from .forms import InventoryCreateForm

class InventoryCreateAdmin(admin.ModelAdmin):
        list_display = ['category', 'item_name', 'quantity', 'export_to_CSV']
        form = InventoryCreateForm
        list_filter =['category']
        search_fields = ['category', 'item_name']

admin.site.register(Inventory, InventoryCreateAdmin)
