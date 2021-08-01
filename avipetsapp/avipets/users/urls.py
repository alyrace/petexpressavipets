from django.urls import path
from django.urls.conf import include, include
from .views import CustomUserCreate

urlpatterns = [
    path('create',  CustomUserCreate.as_view(), name='create_user'),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),

]
