from django.db import models
from datetime import datetime


class Employee(models.Model):
    name = models.CharField(max_length=200)
    #photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    email = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    office = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    title = models.TextField(blank=True)
    drivers_liscense = models.CharField(max_length=20, blank=True)
    # drivers_liscense_photo_1 = models.ImageField(
    # upload_to='photos/%Y/%m/%d/', blank=True)
    emergency_contact = models.CharField(max_length=200)
    hire_date = models.DateTimeField(default=datetime.now, blank=True)
    birth_date = models.DateTimeField(default=datetime.now, blank=True)
    sta_number = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    manager = models.CharField(max_length=200)
    team_lead = models.CharField(max_length=200)
    supervisor = models.CharField(max_length=200)
    supervisor_status = models.BooleanField(default=True)

    def __str__(self):
        return self.name
