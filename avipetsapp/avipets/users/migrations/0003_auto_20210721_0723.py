# Generated by Django 3.2.5 on 2021-07-21 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_newuser_is_staff'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='is_manager',
            field=models.BooleanField(choices=[('YES', 'Yes'), ('NO', 'No')], default='False'),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='is_team_lead',
            field=models.BooleanField(choices=[('YES', 'Yes'), ('NO', 'No')], default='False'),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='supervisor_status',
            field=models.BooleanField(choices=[('YES', 'Yes'), ('NO', 'No')], default='False'),
        ),
    ]