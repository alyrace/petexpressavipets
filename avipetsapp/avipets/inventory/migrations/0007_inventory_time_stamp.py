# Generated by Django 3.2.5 on 2021-08-13 12:27

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0006_alter_inventory_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventory',
            name='time_stamp',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
