from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.conf  import settings
from .models import NewUser
from .filters import UserFilter
from django_filters import rest_framework as filters

User = settings.AUTH_USER_MODEL

class CustomUserCreate(APIView):

    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomStaffUserCreate(APIView):

    permission_classes = [IsAuthenticated]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
        if user:
            json = serializer.data
            return Response(json, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        data = self.request.data

        user_name = data['user_name']
        email = data['email']
        first_name=data['first_name']
        last_name= ['last_name']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exists'})
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be at least 6 characters'})
                else:
                    user = User.objects.create_user(email=email, password=password, user_name=user_name, first_name=first_name, last_name=last_name)

                    user.save()
                    return Response({'success': 'User created successfully'})
        else:
            return Response({'error': 'Passwords do not match'})

class ListUsersView(generics.ListAPIView):
    queryset = NewUser.objects.get_queryset().order_by('id')
    permission_classes = [AllowAny]
    serializer_class = CustomUserSerializer
    paginate_by = 12
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = UserFilter

class UserDetail(generics.RetrieveAPIView):
    serializer_class = CustomUserSerializer
    queryset = NewUser.objects.all()
    permission_classes = [AllowAny]

"""
class ProfileView(generics.RetrieveAPIView):
    queryset= User.objects.all()
"""    