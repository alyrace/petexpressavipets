from rest_framework import serializers
from .models import NewUser
from rest_framework_simplejwt.tokens import RefreshToken


class CustomUserSerializer(serializers.ModelSerializer):

    _id = serializers.UUIDField(format='hex_verbose')
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=10)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
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
        ('SECURITY', '  TSA Security'),
    ))
    title = serializers.MultipleChoiceField((
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
    ))

    drivers_license = serializers.CharField()
    emergency_contact = serializers.CharField()
    emergency_contact_number = serializers.IntegerField(
        required=True, max_value=20, min_value=10)
    hire_date = serializers.DateTimeField()
    birth_date = serializers.DateTimeField()
    sta_number = serializers.CharField()
    manager = serializers.BooleanField()
    is_manager = serializers.BooleanField()
    team_lead = serializers.CharField()
    is_team_lead = serializers.BooleanField()
    supervisor = serializers.CharField()
    supervisor_status = serializers.BooleanField()
    about = serializers.CharField(
        max_length=None, min_length=None, allow_blank=False, trim_whitespace=True)
    is_active = serializers.SerializerMethodField()
    is_staff = serializers.SerializerMethodField()
    is_Admin = serializers.SerializerMethodField()

    class Meta:
        model = NewUser
        fields = ('id', '_id', 'email', 'username', 'first_name',
                  'last_name', 'title', 'phone', 'office',
                  'department', 'title', 'drivers_license',
                  'emergency_contact', 'emergency_contact_number', 'hire_date', 'birth_date',
                  'sta_number', 'manager', 'is_manager', 'team_lead', 'is_team_lead', 'supervisor',
                  'supervisor_status', 'supervisor', 'supervisor_status',
                  'about', 'is_staff', 'is_admin')
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
        fields = ['id', '_id', 'email', 'username', 'first_name',
                  'last_name', 'title', 'phone', 'office',
                  'department', 'title', 'drivers_license',
                  'emergency_contact' 'emergency_contact_number', 'hire_date', 'birth_date',
                  'sta_number', 'manager', 'is_manager', 'team_lead', 'is_team_lead', 'supervisor',
                  'supervisor_status', 'supervisor', 'supervisor_status',
                  'about', 'is_staff', 'is_admin' 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
