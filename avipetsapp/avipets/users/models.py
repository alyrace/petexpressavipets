from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser, AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, user_name, first_name, last_name, password, **other_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name,
                          first_name=first_name, last_name=last_name,
                          password=password, **other_fields)

        user.set_password(password)
        user.save()
        return user

    def create_staffuser(self, email, user_name, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_active', True)

        user = self.create_user(
            email, user_name, first_name, last_name, password, **other_fields
        )

        user.save(using=self._db)
        return user

    def create_superuser(self, email, user_name, first_name, last_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True')

        user = self.create_user(
            email, user_name, first_name, last_name, password, **other_fields)

        user.save()

        return user


class NewUser(AbstractBaseUser, PermissionsMixin):
    BRANCHES = (
        ('AU', 'Austailia'),
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco')
    )

    DEPARTMENTS = (
        ('ACCOUNTANTING', 'Accountanting'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('MANAGEMENT', 'Management'),
        ('OPERATIONS', 'Operations'),
        ('PETCARE', 'Petcare'),
        ('SALES', 'Sales'),
        ('SECURITY', '  TSA Security'),
    )

    ROLES = (
        ('ACCOUNTANT', 'Accountant'),
        ('ASSISTANT_MANAGER', 'Assistant Manager'),
        ('CONTRACTOR', 'Contractor'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('COMPLIANCE_LEAD', 'Compliance/Processing Lead'),
        ('COMPLIANCE_TRAINEE', 'Compliance/Processing Trainee'),
        ('DEV', 'Devloper'),
        ('DRIVER', 'Driver'),
        ('DRIVER_LEAD', 'Driver Lead'),
        ('DRIVER_TRAINEE', 'Driver Trainee'),
        ('GUEST', 'GUEST'),
        ('MANAGER', 'Manager'),
        ('OPERATIONS_LEAD', 'Operations Lead'),
        ('OPERARATIONS_ASSITANT', 'Operations Assitant'),
        ('OWNER', 'Owner'),
        ('PETHANDLER', 'Pet Handler'),
        ('SALESPERSON', 'Salesperson'),
        ('SALESPERSON_LEAD', 'Salesperson Lead'),
        ('SALESPERSON_TRAINEE', 'Salesperson Trainee'),
        ('SECURITY_COORDINATOR', 'Security Coordinator'),
        ('TRAINEE', 'Trainee'),
        ('VET', 'Vet'),
        ('WEBSITE_ADMIN', 'Website Admin')
    )

    email = models.EmailField(max_length=255, unique=True)
    user_name = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=20, blank=True)
    office = models.CharField(
        max_length=200, choices=BRANCHES, default='Los Angeles')
    department = models.TextField(
        blank=True, choices=DEPARTMENTS, default='Petcare')
    title = models.CharField(max_length=200, choices=ROLES, default='Trainee')
    drivers_license = models.CharField(max_length=20, blank=True)
    emergency_contact = models.CharField(max_length=200)
    hire_date = models.DateTimeField(default=timezone.now, blank=True)
    birth_date = models.DateTimeField(default=timezone.now, blank=True)
    sta_number = models.CharField(max_length=200)
    manager = models.CharField(max_length=200)
    is_manager = models.BooleanField(default=False)
    team_lead = models.CharField(max_length=200)
    is_team_lead = models.BooleanField(default=False)
    supervisor = models.CharField(max_length=200)
    supervisor_status = models.BooleanField(default=False)
    about = models.TextField(_(
        'about'), max_length=500, blank=True)
    is_active = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['user_name', 'first_name', 'last_name']

    objects = UserAccountManager()

    def __str__(self):
        return self.email

    def __str__(self):
        return self.user_name
