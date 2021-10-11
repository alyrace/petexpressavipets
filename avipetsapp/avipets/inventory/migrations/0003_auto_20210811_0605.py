# Generated by Django 3.2.5 on 2021-08-11 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0002_alter_inventory_cat'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='inventory',
            name='cat',
        ),
        migrations.AddField(
            model_name='inventory',
            name='last_updated',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='inventory',
            name='category',
            field=models.CharField(blank=True, choices=[('CLEANING', 'Cleaning'), ('CRATES', 'Crates'), ('ELECTRONICS', 'Electronics'), ('MISCELLANEOUS', 'Miscellaneous'), ('OFFICE MAIN', 'Office Main'), ('OFFICE OTHER', 'Office Other'), ('OFFICE SALES', 'Office Sales'), ('PET', 'Pet'), ('PET TRAVEL', 'Pet Travel')], max_length=50, null=True, verbose_name='Category'),
        ),
    ]