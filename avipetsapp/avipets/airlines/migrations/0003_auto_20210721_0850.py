# Generated by Django 3.2.5 on 2021-07-21 15:50

import airlines.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airlines', '0002_airline_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='airline',
            name='photo_1',
            field=models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='airline',
            name='photo_2',
            field=models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='airline',
            name='photo_3',
            field=models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='airline',
            name='photo_4',
            field=models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='airline',
            name='photo_5',
            field=models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='airline',
            name='photo_6',
            field=models.ImageField(default='airlines/default.png', upload_to=airlines.models.upload_to, verbose_name='Image'),
        ),
    ]
