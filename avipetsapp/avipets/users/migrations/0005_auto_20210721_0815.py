# Generated by Django 3.2.5 on 2021-07-21 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_rename_emergency_number_newuser_emergency_contact_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='department',
            field=models.CharField(blank=True, choices=[('ACCOUNTING', 'Accounting'), ('COMPLIANCE', 'Compliance/Processing'), ('MANAGEMENT', 'Management'), ('OPERATIONS', 'Operations'), ('PETCARE', 'Petcare'), ('SALES', 'Sales'), ('SECURITY', '  TSA Security'), ('SITEADMIN', 'Site Admin')], default='Petcare', max_length=100),
        ),
        migrations.AlterField(
            model_name='newuser',
            name='title',
            field=models.CharField(choices=[('ACCOUNTANT', 'Accountant'), ('ASSISTANT_MANAGER', 'Assistant Manager'), ('CONTRACTOR', 'Contractor'), ('COMPLIANCE', 'Compliance/Processing'), ('COMPLIANCE_LEAD', 'Compliance/Processing Lead'), ('COMPLIANCE_TRAINEE', 'Compliance/Processing Trainee'), ('DEV', 'Developer'), ('DRIVER', 'Driver'), ('DRIVER_LEAD', 'Driver Lead'), ('DRIVER_TRAINEE', 'Driver Trainee'), ('GUEST', 'GUEST'), ('MANAGER', 'Manager'), ('OPERATIONS_LEAD', 'Operations Lead'), ('OPERARATIONS_ASSITANT', 'Operations Assitant'), ('OWNER', 'Owner'), ('PETHANDLER', 'Pet Handler'), ('SALESPERSON', 'Salesperson'), ('SALESPERSON_LEAD', 'Salesperson Lead'), ('SALESPERSON_TRAINEE', 'Salesperson Trainee'), ('SECURITY_COORDINATOR', 'Security Coordinator'), ('TRAINEE', 'Trainee'), ('VET', 'Vet'), ('WEBSITE_ADMIN', 'Website Admin')], default='Trainee', max_length=200),
        ),
    ]