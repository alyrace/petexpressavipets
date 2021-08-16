from django.urls import path
from .views import AgentHomeView, AddAgentView, AgentDetailView, UpdateAgentView, DeleteAgentView

urlpatterns = [
    path('', AgentHomeView.as_view(), name='inventory home'),
    path('create/', AddAgentView.as_view(), name='inventory create'),
    path('<str:pk>/', AgentDetailView.as_view(), name='inventory item detail'),
    path('update-agent/<str:pk>/', UpdateAgentView.as_view(), name='inventory update'),
    path('update-agent/<str:pk>/', DeleteAgentView.as_view(), name='inventory delete'),
]