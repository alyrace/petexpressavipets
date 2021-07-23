from django.urls import path
from django.conf import settings
from .views import AirlineList, AirlineDetail
from django.views.generic import TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name="index.html")),
    path('', AirlineList.as_view()),
    path('<slug>', AirlineDetail.as_view()),
    #path('search', views.search, name='search'),
    # path('view_csv'), views.csv, name='views_csv'),
    # path('view_pdf'), views.pdf, name='views_pdf')
]
