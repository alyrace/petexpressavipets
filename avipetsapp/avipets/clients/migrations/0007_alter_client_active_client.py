# Generated by Django 3.2.5 on 2021-09-30 05:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0006_alter_client_active_client'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='active_client',
            field=models.CharField(blank=True, choices=[('IS ACTIVE', 'Is Active'), ('NOT ACTIVE', 'Not Active')], max_length=100, null=True, verbose_name='Active'),
        ),
    ]
