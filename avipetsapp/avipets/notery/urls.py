from django.urls import path
from .views import *

urlpatterns = [
    
    path('', NoteView.as_view(), name='Note home'),
    #path('create/', AddInvoiceView.as_view(), name='invoice create'),
    #path('<str:pk>/', InvoiceDetailView.as_view(), name='invoice item detail'),
    #path('update-items/<str:pk>/', UpdateInvoiceView.as_view(), name='invoice update'),
    #path('update-items/<str:pk>/', DeleteInvoiceView.as_view(), name='invoice delete'),
]