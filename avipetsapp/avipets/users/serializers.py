from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from .models import NewUser
#from rest_framework_simplejwt.tokens import RefreshToken
from django.conf  import settings
#from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
#from rest_framework_simplejwt.settings import api_settings
#from django.contrib.auth.models import update_last_login
from djoser.serializers import UserCreateSerializer
User = settings.AUTH_USER_MODEL

def upload_to(instance, filename):
    return 'airlines/{filename}'.format(filename=filename)

class CustomUserSerializer(UserCreateSerializer):
    
    _id = serializers.UUIDField(format='hex_verbose')
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    user_name = serializers.CharField(max_length=255)
    about = serializers.CharField(
        max_length=None, min_length=None, allow_blank=True, trim_whitespace=True)
    avatar = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=upload_to)
    banner = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=upload_to)
    drivers_license = serializers.CharField(max_length=20)
    emergency_contact = serializers.CharField(max_length=200)
    emergency_contact_number = serializers.CharField(allow_blank=True, max_length=20)
    birth_date = serializers.DateTimeField()
    phone = serializers.IntegerField(required=False, max_value=20, min_value=10)
    office = serializers.ChoiceField((
        ('AU', 'Austailia'),
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco')
    ))
    department = serializers.MultipleChoiceField((
        ('ACCOUNTING', 'Accounting'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('MANAGEMENT', 'Management'),
        ('OPERATIONS', 'Operations'),
        ('PETCARE', 'Petcare'),
        ('SALES', 'Sales'),
        ('SECURITY', 'TSA Security'),
    ))
    title = serializers.MultipleChoiceField((
        ('ACCOUNTANT', 'Accountant'),
        ('ASSISTANT_MANAGER', 'Assistant Manager'),
        ('CONTRACTOR', 'Contractor'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('DEV', 'Devloper'),
        ('DRIVER', 'Driver/Pet Handler'),
        ('GUEST', 'GUEST'),
        ('MANAGER', 'Manager'),
        ('OPERATIONS_LEAD', 'Operations Lead'),
        ('OPERARATIONS_ASSITANT', 'Operations Assitant'),
        ('OWNER', 'Owner'),
        ('SALESPERSON', 'Salesperson'),
        ('SECURITY_COORDINATOR', 'Security Coordinator'),
        ('VET', 'Vet'),
        ('WEBSITE_ADMIN', 'Website Admin')
    ))
    hire_date = serializers.DateTimeField()
    sta_number = serializers.CharField(required=False, allow_blank=True)
    manager = serializers.CharField(required=False, allow_blank=True)
    is_manager = serializers.BooleanField(default=False)
    team_lead = serializers.CharField(required=False, allow_blank=True)
    is_team_lead = serializers.BooleanField(default=False)
    supervisor = serializers.CharField(required=False, allow_blank=True)
    supervisor_status = serializers.BooleanField(default=False)
    is_active = serializers.SerializerMethodField()
    is_staff = serializers.SerializerMethodField()
    is_admin = serializers.SerializerMethodField()

    class Meta:
        model = NewUser
        fields = ('id', '_id', 'email', 'first_name', 'last_name', 'title', 'office',
                  'department', 'title','about', 'avatar', 'banner', 
                  'drivers_license', 'phone', 'emergency_contact', 
                  'emergency_contact_number','birth_date', 
                  'hire_date', 'sta_number', 'manager', 'is_manager', 
                  'team_lead', 'is_team_lead', 'supervisor', 'office', 
                  'supervisor_status', 'supervisor', 'supervisor_status',
                  'is_staff', 'is_admin')
        extra_kwargs = {'password': {'write_only': True}}

        def get__id(self, obj):
            return obj.id

        def get_isAdmin(self, obj):
            return obj.is_staff

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        # as long as the fields are the same, we can just use this
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
            instance.save()
            return instance       



class UserRegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = NewUser
        fields = ('email', 'user_name', 'first_name', 'last_name')
        extra_kwargs = {'password': {'write_only': True}}        
"""
class UserSerializerWithToken(CustomUserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = NewUser
        fields = ['_id', 'email', 'first_name', 'last_name', 'title', 'office',
                  'department', 'title','about', 'avatar', 'banner', 
                  'drivers_license', 'phone', 'emergency_contact', 
                  'emergency_contact_number','birth_date', 
                  'hire_date', 'sta_number', 'manager', 'is_manager', 
                  'team_lead', 'is_team_lead', 'supervisor', 'office', 
                  'supervisor_status', 'supervisor', 'supervisor_status',
                  'is_staff', 'is_admin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
"""