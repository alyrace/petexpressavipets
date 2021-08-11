# Generated by Django 3.2.5 on 2021-08-08 05:48

import airlines.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airlines', '0002_airline_employee'),
    ]

    operations = [
        migrations.AddField(
            model_name='airline',
            name='weather_restrictions_desc',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_1',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Image1'),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_2',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Image2'),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_3',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Image3'),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_4',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Image4'),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_5',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Image5'),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_6',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Image6'),
        ),
        migrations.AlterField(
            model_name='airline',
            name='photo_main',
            field=models.ImageField(default='media/default.png', upload_to=airlines.models.upload_to, verbose_name='Main Banner'),
        ),
    ]
