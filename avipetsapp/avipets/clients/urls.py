from django.urls import path
from .views import ClientHomeView, AddClientView, UpdateClientView, DeleteClientView, ClientDetailView

urlpatterns = [
    path('', ClientHomeView.as_view(), name='client home'),
    path('create/', AddClientView.as_view(), name='client create'),
    path('<str:pk>/', ClientDetailView.as_view(), name='client detail'),
    path('update-clients/<str:pk>/', UpdateClientView.as_view(), name='client update'),
    path('delete/<str:pk>/', DeleteClientView.as_view(), name='client delete'),
]