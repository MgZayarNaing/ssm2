from django.urls import path
from .views import index
from .views import index3

urlpatterns = [
    path('index/', index, name='index'),
    path('index3/', index3, name='index3'),
]