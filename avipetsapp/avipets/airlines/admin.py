from django.contrib import admin
from .models import Airline


TEXT = 'IMPORTANT: is_published must be checked, to appear on site. Otherewise will remain as draft'

class ListingAdmin(admin.ModelAdmin):
    list_display = ('title', 'published', 'frequently_used', '_id')
    list_display_links = (('title', 'frequently_used'))
    list_filter = (('title', 'category','frequently_used'))
    list_editable = ('published', )
    prepopulated_fields = {'slug': ('title',), }
    search_fields = ('title', 'address', 'city', 'state', 
    'zipcode', 'airline_code', 'airline_network','frequently_used', 'pets_flight_options', 
    'have_account', 'acclimation_needed', 'photo_of_pet_needed',
    'breed_restrictions', 'weather_restrictions', 
    'pet_reservations_info', 'pets_check_options', 
    'onsite_parking', 'contact_label_needed', 'has_grass',
    'has_loading_ramp', 'crate_inspection_required', 
    'airline_code', 'airline_network')
    list_per_page = 25

    


admin.site.register(Airline, ListingAdmin)
