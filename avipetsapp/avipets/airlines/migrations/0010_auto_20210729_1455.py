# Generated by Django 3.2.5 on 2021-07-29 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('airlines', '0009_airline_is_published'),
    ]

    operations = [
        migrations.AlterField(
            model_name='airline',
            name='cut_off_deadline',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='airline',
            name='pick_up_delay',
            field=models.TextField(blank=True),
        ),
    ]