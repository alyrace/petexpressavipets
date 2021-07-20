from django.db import models
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from users.models import NewUser

# for images


def upload_to(instance, filename):
    return 'airlines/{filename}'.format(filename=filename)


class Airline(models.Model):
    FREQUENCY = (
        ('FREQUENTLY_VISITED', 'Frequently visited'),
        ('RARELY_VISITED', 'Rarely visited')
    )

    FACILITY = (
        ('CARGO', 'Cargo'),
        ('AIRPORT', 'Airport'),
        ('TBD', 'TBD')
    )
    CITIES = (
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco'),
        ('OTHER', 'Other')
    )
    FLIGHT_OPTIONS = (
        ('BAGGAGE', 'Baggage'),
        ('CABIN', 'Cabin'),
        ('CARGO', 'Cargo'),
        ('OPEN', 'OPEN')
    )
    PORT_LOCATION = (
        ('LEFT', 'Left hand side'),
        ('RIGHT', 'Right hand side'),
        ('SAME', 'Same building')
    )

    employee = models.ForeignKey(NewUser, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=200)
    airline_code = models.CharField(max_length=10)
    airline_network = models.TextField(blank=True)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100, choices=CITIES, default='LAX')
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=20)
    cargo_phone = models.CharField(max_length=20)
    reservation_phone = models.CharField(max_length=20)
    description = models.TextField(blank=True)
    has_grass = models.BooleanField(default=True)
    special_instructions = models.TextField(blank=True)
    import_station = models.TextField(
        blank=True, choices=PORT_LOCATION, default='Same buidling')
    export_station = models.TextField(
        blank=True, choices=PORT_LOCATION, default='Same buidling')
    frequently_used = models.TextField(
        choices=FREQUENCY, default='Frequently visited')
    onsite_parking = models.BooleanField(default=True)
    have_account = models.BooleanField(default=True)
    account_number = models.CharField(max_length=20)
    acclimation_needed = models.BooleanField(default=True)
    food_needed = models.BooleanField(default=True)
    photo_of_pet_needed = models.BooleanField(default=True)
    contact_label_needed = models.BooleanField(default=True)
    cut_off_deadline = models.TextField(
        blank=True, choices=PORT_LOCATION, default='Same buidling')
    pick_up_delay = models.TextField(
        blank=True, choices=PORT_LOCATION, default='Same buidling'),
    has_loading_ramp = models.BooleanField(default=True)
    website = models.TextField(blank=True)
    crate_inspection_required = models.BooleanField(default=True)
    photo_main = models.ImageField(
        _("Image"), upload_to=upload_to, default='airlines/default.png')
    # photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    # photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    # photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    # photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    # photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    # photo_6 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    compliance_notes = models.TextField(blank=True)
    driver_notes = models.TextField(blank=True)
    ok_to_forward_required = models.BooleanField(default=True)
    earliest_book_date = models.CharField(max_length=100)
    breed_restrictions = models.TextField(blank=True)
    Weather_restrictions = models.BooleanField(default=True)
    pet_reservations = models.TextField(blank=True)
    pets_checkin_options = models.CharField(
        max_length=100, choices=FLIGHT_OPTIONS, default='Cargo')
    last_updated = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

    def __str__(self):
        return self.website

    def __str__(self):
        return self.earliest_book_date
