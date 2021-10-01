from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email,user_name, password, **other_fields):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, password=password, **other_fields)

        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, user_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        #other_fields.setdefault('is_active', True)
        other_fields.setdefault('is_superuser', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True')
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must be assigned to is_superuser=True')

        user = self.create_user(
            email, user_name, password, **other_fields)

        user.save()

        return user


class NewUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_name = models.CharField(max_length=255, unique=True)
    is_employee = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name', 'user_name' ]

    objects = UserAccountManager()

    #@property
    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'

    def get_short_name(self):
        return self.first_name
    
    def __str__(self):
        return self.email

    def __str__(self):
        return self.user_name
    
    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True
