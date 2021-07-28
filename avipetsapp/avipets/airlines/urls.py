from django.urls import path
from .views import AirlineList, AirlineDetail, AdminAirlineDetail, CreateAirline, EditAirline, DeleteAirline
from django.views.generic import TemplateView

urlpatterns = [
    path('', AirlineList.as_view(), name='airlineslist'),
    path('<slug>', AirlineDetail.as_view()),
     # Post Admin URLs
    path('admin/create/', CreateAirline.as_view(), name='createairline'),
    path('admin/edit/postdetail/<int:pk>/', AdminAirlineDetail.as_view(), name='admindetailairline'),
    path('admin/edit/<int:pk>/', EditAirline.as_view(), name='editairline'),
    path('admin/delete/<int:pk>/', DeleteAirline.as_view(), name='deleteairline'),
]
