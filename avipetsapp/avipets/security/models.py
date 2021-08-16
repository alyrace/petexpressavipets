from datetime import datetime
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.utils import timezone

class Agent(models.Model):
    AGENTS = (
        ('AIR ANIMAL-IAC:OWN TESTING/STA', 'Air Animal-IAC: Own Testing/STA'),
        ('AIRBORNE ANIMALS', 'Airborne Animals'),
        ('AIRPETS AMERICA', 'Airpets America'),
        ('AIRVETS PET RELOCATION', 'AirVets Pet Relocation'),
        ('AMERICAN EXPEDITING', 'American Expediting'),
        ('ANIMAL MOTEL', 'Animal Motel'),
        ('THE ARK JFK', 'The Ark JFK'),
        ('ARTWOOD PET TRANSPORT', 'Artwood Pet Transport'),
        ('BARKING BARBERS', 'Barking Barbers'),
        ("BOBBIE'S PET WORLD:OWN TRAINING", "Bobbie's Pet World:Own Training"),
        ("BRIT'S BOW WOW", "Brit's Bow Wow"),
        ('CAPITOL PET MOVERS', 'Capitol Pet Movers'),
        ('CHICAGO PET TRAVEL', 'Chicago Pet Travel'),
        ('CLUB PET INTERNATIONAL', 'Club Pet Intertional'),
        ('COME SIT STAY PET RESORT', 'Come Sit Stay Pet Resort'),
        ('CONTINENTAL PET RELOCATION(CHAROLETTE)', 'Continental Pet Relocation(Charolette)'),
        ('COUNTRY LANE PET RESORT', 'Country Lane Pet Resort'),
        ('DOG GONE TAXI- SEA', 'Dog Gone Taxi- SEA'),
        ("THE DIPPIN' DOG:NEED TRAINING", "The Dippin' Dog:Need Training "),
        ('DSC PETS 2 GO LLC', 'DSC Pet 2 Go LLC'),
        ('GOLDWOOD KENNELS', 'Goldwood Kennels'),
        ("HORKY'S PAWS", "Horky's Paws"),
        ('KRISDAN KENNEL', 'Krisdan Kennel'),
        ('LYNN BUREK', 'Lyn Burek'),
        ('MERIDA ENTERPRISE', 'MERIDA ENTERPRISE'),
        ("MIKE'S COAST TO COAST PET TRANSIT LLC", "Mike's Coast To Coast Pet Transit LLC"),
        ('PACK YOUR PETS', 'Pack Your Pets'),
        ('PAWS AROUND CHICAGO', 'Paws Around Chicago'),
        ('PET AIR', 'Pet Air'),
        ('PET AWAY', 'Pet Away'),
        ('PET RELOCATOR', 'Pet Relocator'),
        ('PETSFLY DENVER', 'Petsfly Denver'),
        ('PETSFLY VEGAS', 'Petsfly Vegas'),
        ('PETSFLY ORD', 'Petsfly ORD'),
        ('PETSFLY PHX', 'Petsfly PHX'),
        ('PETS ON THE GO "HOURGLASS INC DBA"', 'Pets On The Go "Hourglass Inc DBA'),
        ('PETS 2 VETS', 'Pets 2 Vets'),
        ('PETS WITH PASSPORTS', 'Pets With Passports'),
        ('PUPPY TRAVEL.COM: IAC', 'Puppy Travel.com: IAC'),
        ('RABBIT CREEK KENNEL', 'Rabbit Creek Kennel'),
        ('ROB CARY PET RESORT', 'ROB CARY PET RESORT'),
        ('SHIP MY PETS', 'Ship My Pets'),
        ('SLEEPY HOLLOW PET RANCH', 'Sleepy Hollow Pet Ranch'),
        ('STARWOOD ANIMAL TRANSPORT(GLOBAL PET)', 'Starwood Animnal Transport(Global Pet)'),
        ('TOWN AND COUNTRY PET CARE CENTER', 'Town and Country Pet Care Center'),
        ('THE TRANSPETTERS', 'The Transpetters'),
        ('THE WAGGIN TRAVEL EXPRESS', 'The Waggin Travel Express'),
        ('WORLD PET TRAVEL', 'World Pet Travel')
    )
    agent_name = models.CharField(max_length=200, choices=AGENTS, blank=True)
    main_contact = models.CharField(max_length=50, blank=True) 
    agent_employee = models.CharField(max_length=50, blank=True)
    email_contact = models.CharField(max_length=50, blank=True)
    contact_number = models.CharField(max_length=50, blank=True)
    sta_agent_number = models.CharField(max_length=50, blank=True)
    sta_agent_exp = models.DateField()
    notes = models.TextField(max_length=200, blank=True)
    tsa_training_exp1 = models.CharField(max_length=50, blank=True)
    tsa_training_exp2 = models.CharField(max_length=50, blank=True)
    tsa_training_form1 = models.FileField(null=True)
    tsa_training_form2 = models.FileField(null=True)
    
    tsa_form = models.FileField(null=True)

    def __str__(self):
        return self.agent_name
