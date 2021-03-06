# Generated by Django 3.2.5 on 2021-08-15 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0005_auto_20210814_2106'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='title',
            field=models.CharField(choices=[('ACCOUNTANT', 'Accountant'), ('ASSISTANT_MANAGER', 'Assistant Manager'), ('CONTRACTOR', 'Contractor'), ('COMPLIANCE', 'Compliance/Processing'), ('DEV', 'Developer'), ('DRIVER', 'Driver, Pet Handler'), ('GUEST', 'GUEST'), ('MANAGER', 'Manager'), ('OPERATIONS_LEAD', 'Operations Lead'), ('OPERATIONS_ASSISTANT', 'Operations Assistant'), ('OWNER', 'Owner'), ('SALES_LEAD', 'Sale Lead'), ('SALESPERSON', 'Salesperson'), ('SECURITY_COORDINATOR', 'Security Coordinator'), ('VET', 'Vet'), ('WEBSITE_ADMIN', 'Website Admin')], default='Contractor', max_length=200),
        ),
    ]
