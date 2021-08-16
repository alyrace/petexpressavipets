from django.urls import path
from django.conf import settings
from .views import EmployeeList, EmployeeProfile, EditProfile, DeleteProfile
from django.views.generic import TemplateView

urlpatterns = [
    path('', EmployeeList.as_view(), name='employee list'),
    path('<str:pk>/', EmployeeProfile.as_view(), name='profile'),
    path('edit/<str:pk>/', EditProfile.as_view(), name='profile edit'),
    path('delete/<str:pk>/', DeleteProfile.as_view(), name='profile delete'),

]
