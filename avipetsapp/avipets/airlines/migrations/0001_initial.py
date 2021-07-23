# Generated by Django 3.2 on 2021-07-21 13:36

import airlines.models
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Airline',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(max_length=200, unique=True)),
                ('title', models.CharField(max_length=200)),
                ('airline_code', models.CharField(max_length=10)),
                ('airline_network', models.TextField(blank=True)),
                ('address', models.CharField(max_length=200)),
                ('city', models.CharField(choices=[('LAX', 'Los Angeles'), ('SFO', 'San Francisco'), ('OTHER', 'Other')], default='LAX', max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('zipcode', models.CharField(max_length=20)),
                ('cargo_phone', models.CharField(max_length=20)),
                ('reservation_phone', models.CharField(max_length=20)),
                ('description', models.TextField(blank=True)),
                ('has_grass', models.BooleanField(default=True)),
                ('special_instructions', models.TextField(blank=True)),
                ('import_station', models.TextField(blank=True, choices=[('LEFT', 'Left hand side'), ('RIGHT', 'Right hand side'), ('SAME', 'Same building')], default='Same buidling')),
                ('export_station', models.TextField(blank=True, choices=[('LEFT', 'Left hand side'), ('RIGHT', 'Right hand side'), ('SAME', 'Same building')], default='Same buidling')),
                ('frequently_used', models.TextField(choices=[('FREQUENTLY_VISITED', 'Frequently visited'), ('RARELY_VISITED', 'Rarely visited')], default='Frequently visited')),
                ('onsite_parking', models.BooleanField(default=True)),
                ('have_account', models.BooleanField(default=True)),
                ('account_number', models.CharField(max_length=20)),
                ('acclimation_needed', models.BooleanField(default=True)),
                ('food_needed', models.BooleanField(default=True)),
                ('photo_of_pet_needed', models.BooleanField(default=True)),
                ('contact_label_needed', models.BooleanField(default=True)),
                ('cut_off_deadline', models.TextField(blank=True, choices=[('LEFT', 'Left hand side'), ('RIGHT', 'Right hand side'), ('SAME', 'Same building')], default='Same buidling')),
                ('has_loading_ramp', models.BooleanField(default=True)),
                ('website', models.TextField(blank=True)),
                ('crate_inspection_required', models.BooleanField(default=True)),
                ('photo_main', models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image')),
                ('compliance_notes', models.TextField(blank=True)),
                ('driver_notes', models.TextField(blank=True)),
                ('ok_to_forward_required', models.BooleanField(default=True)),
                ('earliest_book_date', models.CharField(max_length=100)),
                ('breed_restrictions', models.TextField(blank=True)),
                ('Weather_restrictions', models.BooleanField(default=True)),
                ('pet_reservations', models.TextField(blank=True)),
                ('pets_checkin_options', models.CharField(choices=[('BAGGAGE', 'Baggage'), ('CABIN', 'Cabin'), ('CARGO', 'Cargo'), ('OPEN', 'OPEN')], default='Cargo', max_length=100)),
                ('last_updated', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]