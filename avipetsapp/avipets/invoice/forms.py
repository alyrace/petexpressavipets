from django import forms
from .models import Invoice

class InvoiceCreateForm(forms.ModelForm):
    invoice = forms.FileField()
    class Meta:
        model = Invoice
        fields = ['category', 'scooby', 'invoice']
        """
        fields = ('client','phone', 'invoice_date', 'invoice_type', 'scooby', 
        'email','address', 'zipcode','state_or_province', 'pet_name', 
        'category_1', 'name_1', 'price_1', 'quantity_1', 'total_1', 
        'category_2', 'name_2', 'price_2', 'quantity_2', 'total_2', 
        'category_3', 'name_3', 'price_3', 'quantity_3', 'total_3', 
        'category_4', 'name_4', 'price_4', 'quantity_4', 'total_4', 
        'category_5', 'name_5', 'price_5', 'quantity_5', 'total_5', 
        'balance', 'total', 'category', 'notes')
        """
    """
    def clean_category(self):
        invoice_type = self.cleaned_data.get('invoice_type')
        if not invoice_type:
            return forms.ValidationError("This field is required!")
        for instance in Invoice.objects.all():
            if instance.invoice_type == invoice_type:
                raise forms.ValidationError(invoice_type + 'is alreadt created.')
        return invoice_type
    """
    def clean_category(self):
        category = self.cleaned_data.get('category')
        if not category:
            return forms.ValidationError("This field is required!")
        for instance in Invoice.objects.all():
            if instance.category == category:
                raise forms.ValidationError(category + 'is alreadt created.')
        return category

    def clean_scooby(self):
        scooby = self.cleaned_data.get('scooby')
        if not scooby:
            raise forms.ValidationError('This field is required!')
        return scooby

    def clean_invoice(self):
        invoice = self.cleaned_data.get('invoice')
        if not invoice:
            raise forms.ValidationError('This field is required!')
        return invoice    
    """
    def clean_quantity(self):
        total = self.cleaned_data.get('total')
        if not total:
            raise forms.ValidationError('This field is required!')
        return total        
    """
class InvoiceUpdate(forms.ModelForm):
    invoice = forms.FileField()
    class Meta:
        model = Invoice
        fields = ['category', 'scooby', 'invoice']
        """
        fields = ['client','phone', 'invoice_date', 'invoice_type', 'scooby', 
        'email','address', 'zipcode','state_or_province', 'pet_name', 
        'category_1', 'name_1', 'price_1', 'quantity_1', 'total_1', 
        'category_2', 'name_2', 'price_2', 'quantity_2', 'total_2', 
        'category_3', 'name_3', 'price_3', 'quantity_3', 'total_3', 
        'category_4', 'name_4', 'price_4', 'quantity_4', 'total_4', 
        'category_5', 'name_5', 'price_5', 'quantity_5', 'total_5', 
        'balance', 'total', 'category', 'notes']
        """
class InvoiceSearchForm(forms.ModelForm):
    class Meta:
        model = Invoice
        fields = ['category', 'scooby']
        #fields = ['invoice_type', 'scooby']

