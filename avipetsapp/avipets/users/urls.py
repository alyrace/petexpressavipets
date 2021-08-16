from django.urls import path
from django.urls.conf import include
from .views import ListUsersView, UserDetail

urlpatterns = [
    #path('create',  CustomUserCreate.as_view(), name='create_user'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('api/userlist/', ListUsersView.as_view(), name="user list"),
    path('api/user/<str:pk>/', UserDetail.as_view(), name="user detail"),
]
