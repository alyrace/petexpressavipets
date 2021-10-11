# Generated by Django 3.2.5 on 2021-08-15 06:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0006_alter_role_title'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='role',
            options={'ordering': ['role_title', 'created'], 'verbose_name': 'Role', 'verbose_name_plural': 'Roles'},
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='title',
            new_name='role_title',
        ),
        migrations.RenameField(
            model_name='role',
            old_name='title',
            new_name='role_title',
        ),
    ]