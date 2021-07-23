from os import terminal_size
#from .views import airline_pdf
import datetime
from re import U
from django.db.models import fields
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Airline, NewUser
from django_countries.serializers import CountryFieldMixin
from django.utils.translation import gettext_lazy as _

# for datatime
now = datetime.datetime.now()
def upload_to(instance, filename):
    return 'airlines/{filename}'.format(filename=filename)

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        Model: Airline
        lookup_field = 'slug'
        fields = ('main_photo', 'name', 'status')


class AirlineDetailSerializer(serializers.ModelSerializer):

    _id = serializers.UUIDField(format='hex_verbose')
    #employee = serializers.ForeignKey(NewUser, on_delete=models.DO_NOTHING)
    slug = serializers.SlugField(
        max_length=50, min_length=None, allow_blank=False)
    title = serializers.CharField(required=True)
    airline_code = serializers.CharField(required=False)
    airline_network = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    address = serializers.CharField(required=False)
    pets_flight_options = serializers.MultipleChoiceField((
        ('BAGGAGE', 'Baggage'),
        ('CABIN', 'Cabin'),
        ('CARGO', 'Cargo'),
        ('OPEN', 'OPEN')
    ))
    city = serializers.ChoiceField((
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco'),
        ('OTHER', 'Other')
    ))
    state = serializers.ChoiceField((
        ('AL', 'Alabama'), ('AK', 'Alaska'),
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
    ))
    zipcode = serializers.IntegerField(
        required=False, max_value=5, min_value=None)
    cargo_phone = serializers.IntegerField(
        required=False, max_value=20, min_value=10)
    reservation_phone = serializers.IntegerField(
        required=False, max_value=20, min_value=10)
    description = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    has_grass = serializers.BooleanField(default=True)
    special_instructions = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    import_station = serializers.ChoiceField((
        ('LEFT', 'Left hand side'),
        ('RIGHT', 'Right hand side'),
        ('SAME', 'Same building')
    ))
    export_station = serializers.ChoiceField((
        ('LEFT', 'Left hand side'),
        ('RIGHT', 'Right hand side'),
        ('SAME', 'Same building')
    ))
    frequently_used = serializers.ChoiceField((
        ('FREQUENTLY_VISITED', 'Frequently visited'),
        ('RARELY_VISITED', 'Rarely visited')
    ))
    onsite_parking = serializers.BooleanField()
    have_account = serializers.BooleanField()
    account_number = serializers.IntegerField(
        required=False, max_value=50, min_value=None)
    acclimation_needed = serializers.BooleanField()
    food_needed = serializers.BooleanField()
    photo_of_pet_needed = serializers.BooleanField()
    contact_label_needed = serializers.BooleanField()
    cut_off_deadline = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    pick_up_delay = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    has_loading_ramp = serializers.BooleanField()
    website = serializers.URLField(
        max_length=200, min_length=None, allow_blank=True)
    crate_inspection_required = serializers.BooleanField()
    """""
    photo_main = serializers.ImageField(
        max_length=None, allow_empty_file=False)
    photo_1 = serializers.ImageField(
        max_length=None, allow_empty_file=True, use_url=upload_to)
    photo_3 = serializers.ImageField(
        max_length=None, allow_empty_file=True, use_url=upload_to)
    photo_4 = serializers.ImageField(
        max_length=None, allow_empty_file=True, use_url=upload_to)
    photo_5 = serializers.ImageField(
        max_length=None, allow_empty_file=True, use_url=upload_to)
    photo_6 = serializers.ImageField(
        max_length=None, allow_empty_file=True, use_url=upload_to)
    """
    compliance_notes = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    driver_notes = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    earliest_book_date = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    breed_restrictions = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    weather_restrictions = serializers.BooleanField(default=True)
    pet_reservations_info = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    pets_checkin_options = serializers.MultipleChoiceField((
        ('CARGO', 'Cargo'),
        ('AIRPORT', 'Airport'),
        ('TBD', 'TBD')
    ))
    #created_at = serializers.DateTimeField()
    last_updated = serializers.DateTimeField(format=now)
    airline_docs = serializers.FileField()
    #terminal_number = serializers.CharField(required=False, max_length=50)

    class Meta:
        Model: Airline
        lookup_field = 'slug'
        fields = ('title', 'airline_code', 'airline_network',
                  'address', 'city', 'state', 'zipcode' 'pet_flight_options',
                  'cargo_phone', 'reservation_phone', 'description', 'has_grass',
                  'import_station', 'export_station', 'special_instructions',
                  'frequently_used', 'onsite_parking', 'has_account', 'account_number',
                  'acclimation_needed', 'food_needed', 'photo_of+pey_needed',
                  'contact_label_needed', 'cut_off_deadline', 'pick_up_delay',
                  'has_loading_ramp', 'website', 'crate_inspection_required',
                  'main_photo', 'photo_1', 'photo_2', 'photo_3', 'photo_4',
                  'photo_5', 'photo_6', 'breed_restrictions', 'weather_restrictions',
                  'pet_reservations_info', 'pets_check_options', 'created_at',
                  'last updated', 'airline_docs', 'terminal_number')


class CountrySerializer(CountryFieldMixin, serializers.ModelSerializer):

    class Meta:
        model = Airline
        fields = ('name', 'country')
