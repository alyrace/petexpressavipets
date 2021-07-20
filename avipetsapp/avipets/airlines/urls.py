from django.urls import path
from . import views

urlpatterns = [
    path('', views.airlinelist),
    path('<int:airline_id>', views.airlinedetails),
    #path('search', views.search, name='search'),
]
