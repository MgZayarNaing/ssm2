from django.urls import path
from .views import index, blog
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('index/', index, name='index'),
    path('index/blog/', blog, name='blog'),
]

