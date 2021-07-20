from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='users'),
    path('<int:users_id>', views.users, name='user'),
]
