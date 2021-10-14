from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL
from django.db.models.enums import Choices
from django.db.models.expressions import F
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from airlines.models import Airline

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
    pet = models.ForeignKey('Pet', verbose_name=_('Pets'), blank=True, null=True, max_length=50, on_delete=SET_NULL) 
    address1 = models.CharField(verbose_name=_('Address1'), blank=True, null=True, max_length=100)
    address2 = models.CharField(verbose_name=_('Address2'), blank=True, null=True, max_length=100)
    zipcode =  models.CharField(verbose_name=_('Zipcode'), blank=True, null=True, max_length=50)
    place = models.CharField(verbose_name=_('Place'), blank=True, null=True, max_length=100)
    country = models.CharField(verbose_name=_('Contact'), blank=True, null=True, max_length=100)
    primary_contact = models.CharField(verbose_name=_('Primary Contact'), blank=True, null=True, max_length=100)
    contact_reference = models.CharField(verbose_name=_('Contact Reference'), blank=True, null=True, max_length=100)
    #created_by = models.ForeignKey(User, verbose_name=_('Created By'), related_name='clients', on_delete=CASCADE, blank=True)
    created_at = models.DateTimeField(verbose_name=_('Created At'), auto_now_add=True)
    last_updated = models.DateTimeField(verbose_name=_('Last Updated'), auto_now_add=False, auto_now=True)
    active_client = models.CharField(verbose_name=_('Active'), choices=ACTIVITY, blank=True, null=True, max_length=100)
    airline = models.ForeignKey(Airline, blank=True, null=True, max_length=100, on_delete=SET_NULL)
    destination = models.CharField(verbose_name=_('Destination'), blank=True, null=True, max_length=100)
    dom_airline = models.CharField(verbose_name=_('Doemestic Airline'), blank=True, null=True, max_length=100)
    dom_flight = models.CharField(verbose_name=_('Domestic Flight'), blank=True, null=True, max_length=100)
    int_airline = models.CharField(verbose_name=_('International Airline'), blank=True, null=True, max_length=100)
    int_flight = models.CharField(verbose_name=_('International Flight'), blank=True, null=True, max_length=100)
    dom_cutoff = models.CharField(verbose_name=_('Domestic CutOff'), blank=True, null=True, max_length=100)
    int_cutoff = models.CharField(verbose_name=_('International Cutoff'), blank=True, null=True, max_length=100)
    awb1 = models.CharField(verbose_name=_('AWB 1'), blank=True, null=True, max_length=100)
    awb2 = models.CharField(verbose_name=_('AWB 2'), blank=True, null=True, max_length=100)
    awb3 = models.CharField(verbose_name=_('AWB 3'), blank=True, null=True, max_length=100)
    awb4 = models.CharField(verbose_name=_('AWB 4'), blank=True, null=True, max_length=100)
    
    def __str__(self):
        return self.name

    def __str__(self):
        return self.scooby

    def __str__(self):
        return self.active_client    

class Pet(models.Model):
    FOOD =[
        ('PET EXPRESS FOOD', 'Pet Express Food'),
        ('OWN FOOD', 'Own Food')
    ]

    FREQUENCY =[
        ('1 X DAILY', '1 X Daily'),
        ('2 X DAILY', '2 X Daily'),
        ('3 X DAILY', '3 X Daily'),
        ('4 X DAILY', '4 X Daily' )
    ]

    CRATE = [
        ('BUY', 'Buy'),
        ('OWN', 'Own')
    ]

    CONDITION = [
        ('GOOD', 'Good'),
        ('Issue', 'Issue')
    ]

    TRANSPORT = [
        ('DELIVERY', 'Delivery'),
        ('MEET AT OFFICE', 'Meet At Office'),
        ('CUT OFF', 'Cut Off')
    ]

    pet_name = models.CharField(verbose_name=_('Pet Name'), blank=True, null=True, max_length=100)
    breed = models.CharField(verbose_name=_('Breed'), blank=True, null=True, max_length=100)
    sex = models.CharField(verbose_name=_('Sex'), blank=True, null=True, max_length=100)
    weight = models.CharField(verbose_name=_('Weight'), blank=True, null=True, max_length=100)
    color = models.CharField(verbose_name=_('Color'), blank=True, null=True, max_length=100)
    age = models.CharField(verbose_name=_('Age'), blank=True, null=True, max_length=100)
    size = models.CharField(verbose_name=_('Size'), blank=True, null=True, max_length=100)
    temperment = models.CharField(verbose_name=_('Temperment'), blank=True, null=True, max_length=100)
    notes = models.TextField(verbose_name=_('Notes'), blank=True, null=True)
    medication1 = models.CharField(verbose_name=_('Medication1'), blank=True, null=True, max_length=100)
    medication_dose1 = models.CharField(verbose_name=_('Medication Dose 1'), blank=True, null=True, max_length=100)
    medication_freq1= models.CharField(verbose_name=_('Medication Frequency 1'), blank=True, null=True, max_length=100)
    medication2 = models.CharField(verbose_name=_('Medication1'), blank=True, null=True, max_length=100)
    medication_dose2 = models.CharField(verbose_name=_('Medication Dose 2'), blank=True, null=True, max_length=100)
    medication_freq2 = models.CharField(verbose_name=_('Medication Frequency 2'), blank=True, null=True, max_length=100)
    medication3 = models.CharField(verbose_name=_('Medication3'), blank=True, null=True, max_length=100)
    medication_dose3 = models.CharField(verbose_name=_('Medication Dose 3'), blank=True, null=True, max_length=100)
    medication_freq3 = models.CharField(verbose_name=_('Medication Frequency 3'), blank=True, null=True, max_length=100)
    medication4 = models.CharField(verbose_name=_('Medication4'), blank=True, null=True, max_length=100)
    medication_dose4 = models.CharField(verbose_name=_('Medication Dose 4'), blank=True, null=True, max_length=100)
    medication_freq4 = models.CharField(verbose_name=_('Medication Frequency 4'), blank=True, null=True, max_length=100)
    allergies = models.CharField(verbose_name=_('Allergies'), blank=True, null=True, max_length=100)
    food_type = models.CharField(verbose_name=_('Food Type'), blank=True, null=True, max_length=100, choices=FOOD, default='PET EXPRESS FOOD')
    food_brand = models.CharField(verbose_name=_('Food Brand'), blank=True, null=True, max_length=100)
    food_amount = models.CharField(verbose_name=_('Food Amount'), blank=True, null=True, max_length=100)
    feed_frequency = models.CharField(verbose_name=_('Feed Frequency'), blank=True, null=True, max_length=100, choices=FREQUENCY, default='2 X DAILY')
    treat_allowed = models.BooleanField(verbose_name=_('Treat allowed'), default=False)
    treat_amount = models.CharField(verbose_name=_('Treat Amount'), blank=True, null=True, max_length=100)
    treat_frequency = models.CharField(verbose_name=_('Treat Freqeuncy'), blank=True, null=True, max_length=100, choices=FREQUENCY, default='2 X DAILY')
    crate_type = models.CharField(verbose_name=_('Crate Type'), blank=True, null=True, max_length=100, choices=CRATE, default='BUY')
    crate_size = models.CharField(verbose_name=_('Crate Size'), blank=True, null=True, max_length=100)
    microchip = models.CharField(verbose_name=_('Microchip'), blank=True, null=True, max_length=100)
    activity = models.ForeignKey('Activity', on_delete=SET_NULL, null=True, blank=True)
    escape_artist = models.BooleanField(verbose_name=_('Escape Artist'), default=False)
    eyes_in = models.CharField(verbose_name=_('Eyes At Check In'),blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    eyes_out = models.CharField(verbose_name=_('Eyes At Check Out'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    paws_in = models.CharField(verbose_name=_('Paws at Check In'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    paws_out = models.CharField(verbose_name=_('Paws at Check Out'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    mouth_in = models.CharField(verbose_name=_('Mouth At Check In'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    mouth_out = models.CharField(verbose_name=_('Mouth At Check Out'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    nose_in = models.CharField(verbose_name=_('Nose At Check In'),blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    nose_out = models.CharField(verbose_name=_('Nose At Check Out'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    delivery_date = models.CharField(verbose_name=_('Delivery Date'), blank=True, null=True, max_length=100, choices=CONDITION, default='GOOD')
    moa_date = models.CharField(verbose_name=_('MOA Date'), blank=True, null=True, max_length=100)
    fwd_date = models.CharField(verbose_name=_('Forward Date'), blank=True, null=True, max_length=100)
    fw_time = models.CharField(verbose_name=_('Forward Time'), blank=True, null=True, max_length=100)
    delivery_location = models.CharField(verbose_name=_('Delivery Location'), blank=True, null=True, max_length=100)
    transport_type = models.CharField(verbose_name=_('Transport Type'), blank=True, null=True, max_length=100, choices=TRANSPORT, default="DELIVERY")
    last_meal = models.CharField(verbose_name=_('Last Meal'), blank=True, null=True, max_length=100)
    item_name = models.CharField(verbose_name=_('Item 1'), blank=True, null=True, max_length=100)
    item_name2 = models.CharField(verbose_name=_('Item 2'), blank=True, null=True, max_length=100)
    item_name3 = models.CharField(verbose_name=_('Item 3'), blank=True, null=True, max_length=100)
    item_name4 = models.CharField(verbose_name=_('Item 4'), blank=True, null=True, max_length=100)
    item_name5 = models.CharField(verbose_name=_('Item 5'), blank=True, null=True, max_length=100)
    checked_in_by = models.ForeignKey(User, verbose_name=_('Checked In By'), on_delete=SET_NULL, null=True)
    pet_photo = models.CharField(verbose_name=_('Pet Photo'), blank=True, null=True, max_length=100)

    def __str__(self):
        return self.pet_name

class Activity(models.Model):
    ACTIVITY_TYPE= [
        ('PLAY TIME', 'Play Time'),
        ('OPEN PLAY', 'Open Play'),
        ('VET VISIT', 'Vet Visit'),
        ('WALK', 'Walk'),
        ('CLEANED ROOM', 'Cleaned Room'),
        ('WATERED', 'Watered'),
        ('BATHED', 'Bathed'),
        ('GIVEN MEDICATION', 'Given Medication'),
        ('FED', 'Fed'),
        ('TREAT', 'Treat'),
        ('PHOTO TAKEN', 'Photo Taken'),
        ('CLIENT UPDATED', 'Client Updated'),
        ('PENDING', 'Pending')
    ]

    activity_type= models.CharField(verbose_name=_('Activity'), blank=True, null=True, max_length=100, choices=ACTIVITY_TYPE, default='Pending')
    date = models.DateTimeField(verbose_name=_('Date'), auto_now=False, auto_now_add=False)    
    notes = models.TextField( verbose_name=_('Notes'),blank=True, null=True)
    urine = models.BooleanField(verbose_name=_('Urine'), default=False)
    fecal = models.BooleanField(verbose_name=_('Fecal'), default=False)
    rx_given= models.BooleanField(verbose_name=_('RX Given'), default=False)
    rx_type = models.CharField(verbose_name=_('RX Type'), blank=True, null=True, max_length=100)
    play_time = models.CharField(verbose_name=_('Play Time'), blank=True, null=True, max_length=100)
    food_amount = models.CharField(verbose_name=_('Food Amount'), blank=True, null=True, max_length=100)
    treat_amount = models.CharField(verbose_name=_('Treat Amount'), blank=True, null=True, max_length=100)
    handler = models.ForeignKey(User, verbose_name=_('Handler'), on_delete=SET_NULL, null=True)
    client_emailed = models.BooleanField(verbose_name=_('Client Emailed'), default=False)
    client_called = models.BooleanField(verbose_name=_('Client Called'), default=False)
    photo_taken = models.BooleanField(verbose_name=_('Photo Taken'), default=False)

    def __str__(self):
        return self.activity_type




