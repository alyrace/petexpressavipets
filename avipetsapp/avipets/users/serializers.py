from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
#from .models import NewUser
#from rest_framework_simplejwt.tokens import RefreshToken
from django.conf  import settings
#from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
#from rest_framework_simplejwt.settings import api_settings
#from django.contrib.auth.models import update_last_login
from djoser.serializers import UserCreateSerializer
#User = settings.AUTH_USER_MODEL
from django.contrib.auth import get_user_model
User = get_user_model()
def upload_to(instance, filename):
    return 'airlines/{filename}'.format(filename=filename)

class CustomUserSerializer(UserCreateSerializer):
    
    #_id = serializers.UUIDField(format='hex_verbose')
    email = serializers.EmailField(required=True)
    user_name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    is_employee = serializers.BooleanField(default=False)
    #is_active = serializers.SerializerMethodField()
    #is_staff = serializers.SerializerMethodField()
    #is_admin = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'email','user_name', 'first_name', 'last_name',
                  'is_staff', 'is_admin', 'is_active', 'is_employee')
        
        extra_kwargs = {'password': {'write_only': True}}

        def get__id(self, obj):
            return obj.id

        def get_isAdmin(self, obj):
            return obj.is_staff

            
    """    
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