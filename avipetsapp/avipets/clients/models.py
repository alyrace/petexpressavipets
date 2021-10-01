from django.db import models
from django.db.models.deletion import CASCADE
from django.utils.translation import gettext_lazy as _
from django.conf import settings


User = settings.AUTH_USER_MODEL

class Client(models.Model):
    ACTIVITY = [
        ('ACTIVE', 'Active'),
        ('INACTIVE', 'Inactive')
    ]
    scooby = models.CharField(verbose_name=_('Scooby'), blank=True, null=True, max_length=50)
    client_name = models.CharField(verbose_name=_('Client Name'), blank=True, null=True, max_length=100)
    phone = models.CharField(verbose_name=_('Phone'), blank=True, null=True, max_length=50)
    email = models.CharField(verbose_name=_('Email'), blank=True, null=True, max_length=50)
    pets = models.CharField(verbose_name=_('Pets'), blank=True, null=True, max_length=50) 
    address1 = models.CharField(verbose_name=_('Address1'), blank=True, null=True, max_length=100)
    address2 = models.CharField(verbose_name=_('Address2'), blank=True, null=True, max_length=100)
    zipcode =  models.CharField(verbose_name=_('Zipcode'), blank=True, null=True, max_length=50)
    place = models.CharField(verbose_name=_('Place'), blank=True, null=True, max_length=100)
    country = models.CharField(verbose_name=_('Contact'), blank=True, null=True, max_length=100)
    primary_contact = models.CharField(verbose_name=_('Primary Contact'), blank=True, null=True, max_length=100)
    contact_reference = models.CharField(verbose_name=_('Contact Reference'), blank=True, null=True, max_length=100)
    #created_by = models.ForeignKey(User, verbose_name=_('Created By'), related_name='clients', on_delete=CASCADE, blank=True)
    created_at = models.DateTimeField(verbose_name=_('Created At'), auto_now_add=True)
    last_updated = models.DateTimeField(auto_now_add=False, auto_now=True)
    active_client = models.CharField(verbose_name=_('Active'), choices=ACTIVITY, blank=True, null=True, max_length=100)
    
    def __str__(self):
        return self.name

    def __str__(self):
        return self.scooby

    def __str__(self):
        return self.active_client    