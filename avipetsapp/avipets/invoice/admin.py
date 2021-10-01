from django.contrib import admin
from .models import Invoice, Item
#from .forms import InvoiceCreateForm
'''
class InvoiceCreateAdmin(admin.ModelAdmin):
        #list_display = ['invoice_type', 'scooby', 'total']
        list_display = ['category', 'scooby', 'invoice']
        form = InvoiceCreateForm
        list_filter =['scooby']
        search_fields = ['category', 'scooby']
        #list_filter =['invoice_type']
        #search_fields = ['invoice_type', 'scooby']
'''
admin.site.register(Invoice)
admin.site.register(Item)
