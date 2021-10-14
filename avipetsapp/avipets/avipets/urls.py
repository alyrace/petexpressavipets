"""avipets URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView



urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin', admin.site.urls),
    path('api/airlines/', include('airlines.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('', include('users.urls')),
    path('api/employees/', include('employees.urls')),
    path('api/inventory/', include('inventory.urls')),
    path('api/security/', include('security.urls')),
    path('api/invoice/', include('invoice.urls')),
    path('api/compliance/', include('compliance.urls')),
    path('api/usdavet/', include('usdavet.urls')),
    #path('api/operations/', include('operations.urls')),
    path('api/pethotel/', include('pethotel.urls')),
    path('api/sales/', include('sales.urls')),
    path('api/clients/', include('clients.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

# AMDIN SITE PREFERENCES
admin.site.index_title = 'AVI PETS'
admin.site.site_header = 'AVI PETS ADMIN'
admin.site.site_title = 'ADMIN'
