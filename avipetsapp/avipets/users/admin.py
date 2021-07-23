from django.contrib import admin
from .models import NewUser
from .forms import CustomUserCreationForm, CustomUserChangeForm
from django.contrib.auth.admin import UserAdmin
from django.forms import Textarea

TEXT = 'IMPORTANT: Is_active must remain checked for user to exist. Is_staff and Superuser status are only for account manager and dev to create new users. All other checkboxes are optional'
TEXT2 = 'INSTRUCTIONS: Write in first names of Manager, Department Supervisor, and Team Lead.'


class UserAdminConfig(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm

    model = NewUser
    search_fields = ('email', 'username', 'first_name',
                     'last_name', 'title', '_id',)
    list_filter = ('email', 'username', 'first_name', 'last_name',
                   'is_active', 'is_staff', 'title')
    ordering = ('-last_name',)
    list_display = ('email', 'username', 'first_name', 'last_name',
                    'is_active', 'is_staff')

    fieldsets = (
        (None, {'fields': ('email', 'password',
                           'username', 'first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_superuser', ('is_staff', 'is_active'),
                                    ('is_manager', 'supervisor_status', 'is_team_lead'), ('groups')),
                         'description': '%s' % TEXT
                         }),
        ('Contact Information', {
         'fields': ('phone', 'emergency_contact', 'emergency_contact_number')}),
        ('Role', {'fields': ('office', 'title', 'department',
                             'sta_number', 'manager', 'supervisor', 'team_lead',
                             'hire_date'), 'description': '%s' % TEXT2}),
        ('Personal', {'fields': ('drivers_license', 'birth_date', 'about')})
    )
    formfield_overrides = {
        NewUser.about: {'widget': Textarea(attrs={'rows': 10, 'cols': 40})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'first_name', 'last_name', 'password1', 'password2', 'is_active', 'is_staff')}
         ),
    )


admin.site.register(NewUser, UserAdminConfig)