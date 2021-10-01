from django.urls import path, include
from .views import  InvoiceHomeView, AddInvoiceView, UpdateInvoiceView, DeleteInvoiceView, InvoiceDetailView
#from rest_framework.routers import DefaultRouter
#router = DefaultRouter()
#router.register("invoice", InvoiceViewSet, basename="invoice")
#router.register("items", ItemViewSet, basename="items") 

urlpatterns = [
    #path('', include(router.urls)),
    path('', InvoiceHomeView.as_view(), name='invoice home'),
    path('create/', AddInvoiceView.as_view(), name='invoice create'),
    path('<str:pk>/', InvoiceDetailView.as_view(), name='invoice item detail'),
    path('update-items/<str:pk>/', UpdateInvoiceView.as_view(), name='invoice update'),
    path('update-items/<str:pk>/', DeleteInvoiceView.as_view(), name='invoice delete'),
]