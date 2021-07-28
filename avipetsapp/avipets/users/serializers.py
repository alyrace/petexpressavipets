from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from serializers import NewUser
from rest_framework_simplejwt.tokens import RefreshToken


def upload_to(instance, filename):
    return 'airlines/{filename}'.format(filename=filename)

class CustomUserSerializer(serializer= serializerserializer):
    
    _id = serializers.UUIDField(format='hex_verbose')
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    user_name = serializers.CharField(max_length=255, unique=True)
    about = serializers.TextField(_(
        'about'), max_length=500, blank=True)
    avatar = serializers.ImageField(_("Image"), upload_to=upload_to, default='media/default.png')
    banner = serializers.ImageField(_("Image"), upload_to=upload_to, default='media/default.png')
    drivers_license = serializers.CharField(max_length=20, blank=True)
    phone = serializers.CharField(max_length=20, blank=True)
    emergency_contact = serializers.CharField(max_length=200)
    emergency_contact_number = serializers.CharField(max_length=20, blank=True)
    birth_date = serializers.DateTimeField()
    timezone= serializers.DateTimeField()
    phone = serializers.IntegerField(required=True, max_value=20, min_value=10)
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
    sta_number = serializers.CharField()
    manager = serializers.BooleanField(allow_blank=True)
    is_manager = serializers.BooleanField()
    team_lead = serializers.CharField(allow_blank=True)
    is_team_lead = serializers.BooleanField()
    supervisor = serializers.CharField(allow_blank=True)
    supervisor_status = serializers.BooleanField()
    is_active = serializers.SerializerMethodField()
    is_staff = serializers.SerializerMethodField()
    is_admin = serializers.SerializerMethodField()

    class Meta:
        model = NewUser
        fields = ('id', '_id', 'email', 'first_name', 'last_name', 'title', 'office',
                  'department', 'title', 'hire_date', 'sta_number', 'manager', 
                  'is_manager', 'team_lead', 'is_team_lead', 'supervisor',
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

class UserSerializerWithToken(CustomUserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = NewUser
        fields = ['id', '_id', 'email', 'first_name', 'last_name', 'office','department', 'title', 'drivers_license', 
                  'hire_date', 'sta_number', 'manager', 'is_manager', 'team_lead', 'is_team_lead', 'supervisor',
                  'supervisor_status', 'supervisor', 'supervisor_status', 'is_staff', 'is_admin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
