# Generated by Django 3.2.5 on 2021-07-29 00:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20210726_1837'),
    ]

    operations = [
        migrations.RenameField(
            model_name='newuser',
            old_name='picture',
            new_name='avatar',
        ),
        migrations.RenameField(
            model_name='newuser',
            old_name='username',
            new_name='user_name',
        ),
        migrations.AddField(
            model_name='newuser',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='newuser',
            name='is_employee',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='title',
            field=models.CharField(choices=[('ACCOUNTANT', 'Accountant'), ('ASSISTANT_MANAGER', 'Assistant Manager'), ('CONTRACTOR', 'Contractor'), ('COMPLIANCE', 'Compliance/Processing'), ('DEV', 'Developer'), ('DRIVER', 'Driver, Pet Handler'), ('GUEST', 'GUEST'), ('MANAGER', 'Manager'), ('OPERATIONS_LEAD', 'Operations Lead'), ('OPERATIONS_ASSISTANT', 'Operations Assistant'), ('OWNER', 'Owner'), ('SALESPERSON', 'Salesperson'), ('SECURITY_COORDINATOR', 'Security Coordinator'), ('VET', 'Vet'), ('WEBSITE_ADMIN', 'Website Admin')], default='Contractor', max_length=200),
        ),
    ]