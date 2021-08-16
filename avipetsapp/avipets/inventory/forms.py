from django import forms
from .models import Inventory

class InventoryCreateForm(forms.ModelForm):
    class Meta:
        model = Inventory
        fields = ('category', 'item_name', 'quantity', 'export_to_CSV')

    
    def clean_category(self):
        category = self.cleaned_data.get('category')
        if not category:
            return forms.ValidationError("This field is required!")
        for instance in Inventory.objects.all():
            if instance.category == category:
                raise forms.ValidationError(category + 'is alreadt created.')
        return category

    def clean_item_name(self):
        item_name = self.cleaned_data.get('item_name')
        if not item_name:
            raise forms.ValidationError('This field is required!')
        return item_name

    def clean_quantity(self):
        quantity = self.cleaned_data.get('quantity')
        if not quantity:
            raise forms.ValidationError('This field is required!')
        return quantity        

class InventoryUpdate(forms.ModelForm):
    class Meta:
        model = Inventory
        fields = ['category', 'item_name', 'quantity']

class InventorySearchForm(forms.ModelForm):
    class Meta:
        model = Inventory
        fields = ['category', 'item_name']

