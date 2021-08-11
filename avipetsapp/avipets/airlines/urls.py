from django.urls import path
from .views import AirlineList, AirlineDetail, AirlineListDetailFilter, AdminAirlineDetail, CreateAirline, EditAirline, DeleteAirline


urlpatterns = [
    path('', AirlineList.as_view(), name='airlineslist'),
    path('<slug>', AirlineDetail.as_view()),
    #path('<str:pk>', AirlineDetail.as_view()),
    #path('<slug>', ListingView.as_view().as_view()),
    path('search/', AirlineListDetailFilter.as_view(), name='searchairline'),
     # Post Admin URLs
    path('admin/create/', CreateAirline.as_view(), name='createairline'),
    path('admin/edit/airlinedetail/<int:pk>/', AdminAirlineDetail.as_view(), name='admindetailairline'),
    path('admin/edit/<int:pk>/', EditAirline.as_view(), name='editairline'),
    path('admin/delete/<int:pk>/', DeleteAirline.as_view(), name='deleteairline'),
]
