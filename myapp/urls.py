from django.urls import path
from .views import index, blog

urlpatterns = [
    path('index/', index, name='index'),
    path('index/blog/', blog, name='blog'),
]