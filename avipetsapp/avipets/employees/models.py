from django.db import models
from .managers import EmployeeManager
from django.utils.translation import gettext_lazy as _
from django.db.models.signals import post_save
from django.conf import settings
from django.utils import timezone

def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)

User = settings.AUTH_USER_MODEL
"""
class Branch(models.Model):
    BRANCHES = (
        ('AU', 'Austailia'),
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco')

    )
    office = models.CharField(
        max_length=200, choices=BRANCHES, default='Los Angeles')
    created = models.DateTimeField(verbose_name=_('Created'),auto_now_add=True)
    updated = models.DateTimeField(verbose_name=_('Updated'),auto_now=True)


    class Meta:
        verbose_name = _('Branch')
        verbose_name_plural = _('Branches')
        ordering = ['office','created']
    
    def __str__(self):
        return self.office    

class Department(models.Model):
    DEPARTMENTS = (
        ('ACCOUNTING', 'Accounting'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('CONTRACTOR', 'Contractor'),
        ('HUMAN RESOURCES', 'Human Resources'),
        ('MANAGEMENT', 'Management'),
        ('OPERATIONS', 'Operations'),
        ('PETCARE', 'Petcare'),
        ('SALES', 'Sales'),
        ('SECURITY', '  TSA Security'),
        ('SITEADMIN', 'Site Admin'),
        ('VET', 'Vet')
    )
    department_type = models.CharField(
        max_length=100, blank=True, choices=DEPARTMENTS, default='Petcare')
    #description = models.CharField(max_length=125,null=True,blank=True)

    created = models.DateTimeField(verbose_name=_('Created'),auto_now_add=True)
    updated = models.DateTimeField(verbose_name=_('Updated'),auto_now=True)

    class Meta:
        verbose_name = _('Department')
        verbose_name_plural = _('Departments')
        ordering = ['department_type','created']
    
    def __str__(self):
        return self.department_type

class Role(models.Model):
    ROLES = (
        ('ACCOUNTANT', 'Accountant'),
        ('ASSISTANT_MANAGER', 'Assistant Manager'),
        ('CONTRACTOR', 'Contractor'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('DEV', 'Developer'),
        ('DRIVER', 'Driver, Pet Handler'),
        ('GUEST', 'GUEST'),
        ('MANAGER', 'Manager'),
        ('OPERATIONS_LEAD', 'Operations Lead'),
        ('OPERATIONS_ASSISTANT', 'Operations Assistant'),
        ('OWNER', 'Owner'),
        ('SALES_LEAD', 'Sales Lead'),
        ('SALES_PERSON', 'Sales Person'),
        ('SECURITY_COORDINATOR', 'Security Coordinator'),
        ('VET', 'Vet'),
        ('WEBSITE_ADMIN', 'Website Admin')
    )
    role_title = models.CharField(max_length=200, choices=ROLES, default='Contractor')
    #about = models.TextField(_('About'), max_length=500, blank=True)
    created = models.DateTimeField(verbose_name=_('Created'),auto_now_add=True)
    updated = models.DateTimeField(verbose_name=_('Updated'),auto_now=True)
    
    class Meta:
        verbose_name = _('Role')
        verbose_name_plural = _('Roles')
        ordering = ['role_title','created']


    def __str__(self):
        return self.role_title
"""
class FollowerRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey("Employee", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Employee(models.Model):
    """
    BRANCHES = (
        ('AU', 'Austailia'),
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco')

    )
    """
    DEPARTMENTS = (
        ('ACCOUNTING', 'Accounting'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('CONTRACTOR', 'Contractor'),
        ('HUMAN RESOURCES', 'Human Resources'),
        ('MANAGEMENT', 'Management'),
        ('OPERATIONS', 'Operations'),
        ('PETCARE', 'Petcare'),
        ('SALES', 'Sales'),
        ('SECURITY', '  TSA Security'),
        ('SITEADMIN', 'Site Admin'),
        ('VET', 'Vet')
    )

    """
    EMPLOYEETYPE = (
        ('FULL_TIME', 'Full-Time'),
        ('PART_TIME', 'Part-Time'),
        ('CONTRACT', 'Contract'),
        ('TRAINEE', 'Trainee'),
    )
    ROLES = (
        ('ACCOUNTANT', 'Accountant'),
        ('ASSISTANT_MANAGER', 'Assistant Manager'),
        ('CONTRACTOR', 'Contractor'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('DEV', 'Developer'),
        ('DRIVER', 'Driver, Pet Handler'),
        ('GUEST', 'GUEST'),
        ('MANAGER', 'Manager'),
        ('OPERATIONS_LEAD', 'Operations Lead'),
        ('OPERATIONS_ASSISTANT', 'Operations Assistant'),
        ('OWNER', 'Owner'),
        ('SALES_LEAD', 'Sales Lead'),
        ('SALES_PERSON', 'Sales Person'),
        ('SECURITY_COORDINATOR', 'Security Coordinator'),
        ('VET', 'Vet'),
        ('WEBSITE_ADMIN', 'Website Admin')
    )
    """
    user = models.OneToOneField(User, on_delete=models.PROTECT) 
    avatar = models.ImageField(_('Avatar'), upload_to=upload_to, default='media/default.png')
    fullname = models.CharField(
        max_length=50, blank=True)
    office = models.CharField(
        max_length=20, blank=True)
    department_type = models.CharField(
        max_length=100, blank=True, choices=DEPARTMENTS, default='Petcare')
    role_title = models.CharField(max_length=50, blank=True)
    drivers_license = models.CharField(_('Drivers License'), max_length=20, blank=True)
    phone = models.CharField(_('Phone Number'), max_length=20, blank=True)
    emergency_contact = models.CharField(_('Emergency Contact Name'), max_length=200, blank=True)
    emergency_contact_number = models.CharField(_('Emergency Conatct Number'), max_length=20, blank=True)
    birth_date = models.DateTimeField(_('Birth Date'), default=timezone.now, blank=True)
    hire_date = models.DateTimeField(_('Hire Date'), default=timezone.now, blank=True)
    employeetype = models.CharField(_('Employee Type'),max_length=15, blank=True, null=True)
    sta_number = models.CharField(_('STA Number'), max_length=200, blank=True)
    manager = models.CharField(max_length=200, blank=True)
    is_deleted = models.BooleanField(_('Is Deleted'),help_text='button to toggle employee deleted and undelete',default=False)
    is_manager = models.BooleanField(default='False')
    team_lead = models.CharField(max_length=200, blank=True)
    is_team_lead = models.BooleanField(default='False')
    supervisor = models.CharField(max_length=200, blank=True)
    supervisor_status = models.BooleanField(default='False')
    updated = models.DateTimeField(verbose_name=_('Updated'),auto_now=True,null=True)
    hiring_docs = models.FileField(blank=True)
    sta_docs = models.FileField(blank=True) 
    sta_exp = models.DateField();
    
    

    def __str__(self):
        return self.user.email

    objects = EmployeeManager()

    class Meta:
        verbose_name = _('Employee')
        verbose_name_plural = _('Employees')
        ordering = ['id']
    
def create_user_profile(sender, instance, created, **kwargs):
        #Create the UserProfile when a new User is saved
    if created:
        profile = Employee()
        profile.user = instance
        profile.save()

post_save.connect(create_user_profile, sender=User)
    
    
"""
        def save(self,*args,**kwargs):
    
        overriding the save method - for every instance that calls the save method 
        perform this action on its sta_number
        
        '''
        get_sta = self.sta_number #grab employee_id number from submitted form field
        self.employeeid = get_sta #pass the new code to the employee_id as its orifinal or actual code
        super().save(*args,**kwargs) # call the parent save method
    
def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        Employee.objects.get_or_create(user=instance)

post_save.connect(user_did_save, sender=User)     


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Employee.objects.create(employee=instance)


def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)
"""