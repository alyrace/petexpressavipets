from django.db import models
from django.utils.translation import gettext_lazy as _

class Inventory(models.Model):
    INVENTORY_CHOICE = (
        ('CLEANING', 'Cleaning'),
        ('CRATES', 'Crates'),
        ('ELECTRONICS', 'Electronics'),
        ('MISCELLANEOUS', 'Miscellaneous'),
        ('OFFICE MAIN', 'Office Main'),
        ('OFFICE OTHER', 'Office Other'),
        ('OFFICE SALES', 'Office Sales'),
        ('PET', 'Pet'),
        ('PET TRAVEL', 'Pet Travel')
    )

    category = models.CharField(verbose_name=_('Category'), max_length=50, blank=True, null=True, choices=INVENTORY_CHOICE)
    item_name = models.CharField(verbose_name=_('Item Name'), max_length=50, blank=True, null=True)
    quantity = models.IntegerField(verbose_name=_('Quantity'), default='0', blank=True, null=True)
    created_by = models.CharField(max_length=50, blank=True, null=True)
    last_updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    time_stamp = models.DateTimeField(auto_now_add=True, auto_now=False)
    export_to_CSV = models.BooleanField(default=False)

    def __str__(self):
        return self.category

    def __str__(self):
        return self.item_name + ' ' + str(self.quantity)