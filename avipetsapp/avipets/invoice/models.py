from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from clients.models import Client
from datetime import timedelta
import decimal
from django.utils import timezone

User = settings.AUTH_USER_MODEL


class Invoice(models.Model):
    
    INVOICE_TYPE = [
        ('RECIEPT','Receipt'),
        ('PROFORMA INVOICE','Proforma Invoice'),
        ('INVOICE','Invoice'),
        ('CREDIT', 'Credit')
    ]
    """
    PAYMENT =[
        ('TO SEND', 'To Send'),
        ('PAID', 'Paid'),
        ('PENDING', 'Pending')
    ]
    """
    created_by = models.ForeignKey(User, verbose_name=_('Created By'), related_name='created_invoices', on_delete=CASCADE)
    created_at = models.DateTimeField(verbose_name=_('Created At'), default=timezone.now, blank=True)
    last_updated = models.DateTimeField(verbose_name=_('Last Updated'), auto_now=True)
    modified_by = models.ForeignKey(User, verbose_name=_('Modified By'), related_name='modified_invoices', on_delete=CASCADE, blank=True, null=True)
    #category = models.CharField(verbose_name=_('Category'), choices=PAYMENT, default='TO SEND', max_length=100)
    client = models.ForeignKey(Client, verbose_name=_('Client'), related_name='invoices', on_delete=CASCADE)
    invoice_number = models.IntegerField(verbose_name=_('Invoice Number'), null=True, blank=True, default=1)
    sender_reference = models.CharField(verbose_name=_('Sender Reference'), null=True, blank=True, max_length=100) 
    invoice_type = models.CharField(verbose_name=_('Invoice Type'), choices=INVOICE_TYPE, default="INVOICE", max_length=50, blank=True, null=True)
    due_date = models.IntegerField(verbose_name=_('Due Date'), blank=True, null=True, default=14)
    is_credit_for = models.ForeignKey('self', verbose_name=_('Credit For'), blank=True, null=True, on_delete=CASCADE)
    is_sent = models.BooleanField(verbose_name=_('Is Sent'), default=False)
    gross_amount = models.DecimalField(verbose_name=_('Gross Amount'), max_digits=6, decimal_places=2, default=0)
    vat_amount = models.DecimalField(verbose_name=_('Vat/Tax Amount'), max_digits=6, decimal_places=2, default=0)
    net_amount = models.DecimalField(verbose_name=_('Net Amount'), max_digits=6, decimal_places=2, default=0)
    discount_amount = models.DecimalField(verbose_name=_('Discount Amount'),max_digits=6, decimal_places=2, default=0)
    paid = models.BooleanField(verbose_name=_('Paid'), default=False)
    notes = models.TextField(verbose_name=_('Notes'), blank=True, null=True, max_length=500)
    class Meta:
        ordering = ('-created_at',)
    
    def get_due_date(self):
        return self.created_at + timedelta(days=self.due_days)
    
    def get_due_date_formatted(self):
        return self.get_due_date().strftime("%d.%m.%Y")

    
    
class Item(models.Model):
    SERVICES= [
        ('PURCHASE CRATE', 'Purchase Crate'),
        ('SHIP CRATE', 'Ship Crate'),
        ('CRATE PICK UP', 'Crate Pick Up'),
        ('CRATE DELIVERY', 'Pet Delivery'),
        ('PET AIRFARE', 'Pet Airfare'),
        ('PET COMFORT STOP', 'Pet Comfort Stop'),
        ('PET DELIVERY', 'Pet Delivery'),
        ('PET BATH/GROOMING', 'Pet Bath/Grooming'),
        ('PET EMERGENCY SERVICE', 'Pet Emergency Service'),
        ('PET VETERINARY SERVICE', 'Pet Veterinary Service'),
        ('PET BOARDING', 'Pet Boarding'),
        ('PET PICK UP', 'Pet Pick Up'),
        ('OTHER', 'Other')
    ]

    invoice = models.ForeignKey(Invoice, verbose_name=_('Invoice'), related_name='items', on_delete=CASCADE)
    service = models.CharField(verbose_name=_('Service'), choices=SERVICES, default='PURCHASE CRATE', max_length=255)
    quantity = models.IntegerField(verbose_name=_('Quantity'), default=1)
    unit_price = models.DecimalField(verbose_name=_('Unit Price'), max_digits=6, decimal_places=2)
    net_amount = models.DecimalField(verbose_name=_('Net Amount'), max_digits=6, decimal_places=2)
    vat_rate = models.IntegerField(verbose_name=_('Vat/Tax Rate'), default=0)
    discount = models.IntegerField(verbose_name=_('Discount'), default=0)

    def get_gross_amount(self):
        vat_rate = decimal.Decimal(self.vat_rate/100)
        return self.net_amount + (self.net_amount * vat_rate)