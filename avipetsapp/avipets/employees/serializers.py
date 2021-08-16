from rest_framework import serializers
from .models import Employee

def upload_to(instance, filename):
    return 'media/{filename}'.format(filename=filename)
"""
class BranchSerializer(serializers.ModelSerializer):
    office = serializers.ChoiceField((
        ('AU', 'Austailia'),
        ('LAX', 'Los Angeles'),
        ('SFO', 'San Francisco')
    ))
    class Meta:
        model = Branch
        fields = "__all__"

class DepartmentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Department
        fields = "__all__"

class RoleSerializer(serializers.ModelSerializer):
    role_title = serializers.MultipleChoiceField((
        ('ACCOUNTANT', 'Accountant'),
        ('ASSISTANT_MANAGER', 'Assistant Manager'),
        ('CONTRACTOR', 'Contractor'),
        ('COMPLIANCE', 'Compliance/Processing'),
        ('DEV', 'Devloper'),
        ('DRIVER', 'Driver/Pet Handler'),
        ('GUEST', 'GUEST'),
        ('MANAGER', 'Manager'),
        ('OPERATIONS_LEAD', 'Operations Lead'),
        ('OPERATIONS_ASSISTANT', 'Operations Assistant'),
        ('OWNER', 'Owner'),
        ('SALESPERSON', 'Salesperson'),
        ('SECURITY_COORDINATOR', 'Security Coordinator'),
        ('VET', 'Vet'),
        ('WEBSITE_ADMIN', 'Website Admin')
    ), required=False)
    class Meta:
        model = Role
        fields = "__all__"
"""
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        lookup_field = 'fullname'
        fields= '__all__'

class EmployeeProfileSerializer(serializers.ModelSerializer):
    """
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    user_name = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    """
    avatar = serializers.ImageField(max_length=None, allow_empty_file=True, use_url=upload_to)
    phone = serializers.CharField(allow_blank=True, max_length=20)
    emergency_contact = serializers.CharField(max_length=200)
    emergency_contact_number = serializers.CharField(allow_blank=True, max_length=20)
    
    class Meta:
        model = Employee
        fields = [
            "id",
            "avatar",
            "phone",
            "emergency_contact",
            "emergency_contact_number",
        ]
    def get_first_name(self, obj):
        return obj.user.first_name
    
    def get_last_name(self, obj):
        return obj.user.last_name
    
    def get_username(self, obj):
        return obj.user.user_name

    def get_email(self, obj):
        return obj.user.email    
        