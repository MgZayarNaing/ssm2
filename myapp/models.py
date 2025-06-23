from django.db import models
from ckeditor.fields import RichTextField
from django.conf import settings
# Create your models here.

class ServiceModel (models.Model):
    name = RichTextField()
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='service',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Team_memberModel(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='banners',null=True,blank=True)
    video = models.FileField(upload_to='banners',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)