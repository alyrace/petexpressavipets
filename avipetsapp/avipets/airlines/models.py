from django.db import models
import uuid
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from users.models import NewUser
from django_countries.fields import CountryField


def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Airline(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='published')

    OPTIONS = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

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
        ('OPEN', 'Open')
    )
    PORT_LOCATION = (
        ('LEFT', 'Left hand side'),
        ('RIGHT', 'Right hand side'),
        ('SAME', 'Same building')
    )
    US_STATES = (('AL', 'Alabama'), ('AK', 'Alaska'),
                 ('AZ', 'Arizona'), ('AR', 'Arkansas'),
                 ('CA', 'California'), ('CO', 'Colorado'),
                 ('CT', 'Connecticut'), ('DE', 'Delaware'),
                 ('DC', 'District of Columbia'),
                 ('FL', 'Florida'), ('GA', 'Georgia'),
                 ('HI', 'Hawaii'), ('ID', 'Idaho'),
                 ('IL', 'Illinois'), ('IN', 'Indiana'),
                 ('IA', 'Iowa'), ('KS', 'Kansas'),
                 ('KY', 'Kentucky'), ('LA', 'Louisiana'),
                 ('ME', 'Maine'), ('MD', 'Maryland'),
                 ('MA', 'Massachusetts'), ('MI', 'Michigan'),
                 ('MN', 'Minnesota'), ('MS', 'Mississippi'),
                 ('MO', 'Missouri'), ('MT', 'Montana'),
                 ('NE', 'Nebraska'), ('NV', 'Nevada'),
                 ('NH', 'New Hampshire'), ('NJ', 'New Jersey'),
                 ('NM', 'New Mexico'), ('NY', 'New York'),
                 ('NC', 'North Carolina'), ('ND', 'North Dakota'),
                 ('OH', 'Ohio'), ('OK', 'Oklahoma'),
                 ('OR', 'Oregon'), ('PA', 'Pennsylvania'),
                 ('RI', 'Rhode Island'), ('SC', 'South Carolina'),
                 ('SD', 'South Dakota'), ('TN', 'Tennessee'),
                 ('TX', 'Texas'), ('UT', 'Utah'),
                 ('VT', 'Vermont'), ('VA', 'Virginia'),
                 ('WA', 'Washington'), ('WV', 'West Virginia'),
                 ('WI', 'Wisconsin'), ('WY', 'Wyoming')
                 )

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    _id = models.UUIDField(primary_key=True,
                           default=uuid.uuid4,
                           editable=False)
    employee = models.ManyToManyField(NewUser)
    slug = models.CharField(max_length=200, unique_for_date='published')
    title = models.CharField(max_length=200, unique=True)
    airline_code = models.CharField(max_length=10)
    airline_network = models.TextField(blank=True)
    address = models.CharField(max_length=200)
    pets_flight_options = models.CharField(max_length=100, 
        choices=FLIGHT_OPTIONS, default='Cargo')
    city = models.CharField(max_length=100, choices=CITIES, default='LAX')
    state = models.CharField(
        max_length=100, choices=US_STATES, default='California')
    zipcode = models.IntegerField()
    cargo_phone = models.IntegerField()
    reservation_phone = models.IntegerField()
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
    account_number = models.IntegerField()
    acclimation_needed = models.BooleanField(default=True)
    food_needed = models.BooleanField(default=True)
    photo_of_pet_needed = models.BooleanField(default=True)
    contact_label_needed = models.BooleanField(default=True)
    cut_off_deadline = models.TextField(
        blank=True, choices=PORT_LOCATION, default='Same buidling')
    pick_up_delay = models.TextField(
        blank=True, choices=PORT_LOCATION, default='Same buidling')
    has_loading_ramp = models.BooleanField(default=True)
    website = models.URLField(max_length=200)
    crate_inspection_required = models.BooleanField(default=True)
    photo_main = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
    photo_1 = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
    photo_2 = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
    photo_3 = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
    photo_4 = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
    photo_5 = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
    photo_6 = models.ImageField(
        _("Image"), upload_to=upload_to, default='media/default.png')
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
    weather_restrictions = models.BooleanField(default=True)
    pet_reservations_info = models.TextField(blank=True)
    pets_checkin_options = models.CharField(
        max_length=100, choices=FACILITY, default='Cargo')
    #created_at = models.DateTimeField(
      #  _("Created at"), auto_now_add=False, editable=False)
    last_updated = models.DateTimeField(_("Updated at"), default=datetime.now)
    terminal_number = models.CharField(blank=True, max_length=50)
    airline_docs = models.FileField(upload_to=upload_to, null=True)
    status = models.CharField(
        max_length=10, choices=OPTIONS, default='published')
    country = CountryField(null=True, blank_label=('United States of America'))
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return self.title

    def __str__(self):
        return self.website

    def __str__(self):
        return self.earliest_book_date
