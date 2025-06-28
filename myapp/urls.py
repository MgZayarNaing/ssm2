from django.urls import path
from .views import index, blog,about_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('index/', index, name='index'),
    path('index/blog/', blog, name='blog'),
    path('about/', about_view, name='about'),
]
