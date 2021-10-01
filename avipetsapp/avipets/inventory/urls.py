from django.urls import path
from .views import InventoryHomeView, AddItemView, ItemDetailView, UpdateItemView, DeleteItemView

urlpatterns = [
    path('', InventoryHomeView.as_view(), name='inventory home'),
    path('create/', AddItemView.as_view(), name='inventory create'),
    path('<str:pk>/', ItemDetailView.as_view(), name='inventory item detail'),
    path('update-items/<str:pk>/', UpdateItemView.as_view(), name='inventory update'),
    path('<str:pk>/', DeleteItemView.as_view(), name='inventory delete'),
    #path('search-inventory/<str:pk>/', SearchItemView.as_view(), name='inventory search'),
    #path('filter-cat/<str:pk>/', FilterCategoryView.as_view(), name='inventory filter cat'),
    #path('filter-item/<str:pk>/', FilterItemView.as_view(), name='inventory filter item'),

]
