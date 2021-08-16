from django.contrib import admin
from .models import NewUser
from .forms import CustomUserCreationForm, CustomUserChangeForm
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea
from django.db import models
from employees.models import Employee


class ProfileInline(admin.StackedInline):
    model = Employee
    fk_name = 'user'
    max_num = 1

TEXT = 'IMPORTANT: Is_active must remain checked for user to exist. is_superuser is for dev only(leave unchecked always). Check is_staff to all user to create, read and update.  is_admin is for are only for account manager and dev to create new users. Check is_employee to added new employee. All other checkboxes are optional'



class UserAdminConfig(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    inlines = [ProfileInline,]

    model = NewUser
    search_fields = ('email', 'first_name',
                     'last_name')
    list_filter = ('email', 'first_name', 'user_name', 'last_name',
                   'is_active', 'is_staff','is_admin', 'is_employee')
    ordering = ('-last_name',)
    list_display = ('email','is_employee', 'first_name', 'last_name', 'user_name', 
                    'is_active', 'is_staff', 'is_admin')

    fieldsets = (
        (None, {'fields': ('email', 'password',
                           'user_name', 'first_name', 'last_name',)}),
        ('Permissions', {'fields': ('is_superuser', ( 'is_staff', 'is_admin', 'is_active','is_employee'),
                                ('groups')),
                         'description': '%s' % TEXT
                         }),
       
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email','first_name', 'user_name','last_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )



#admin.site.unregister(NewUser)
admin.site.register(NewUser, UserAdminConfig)

