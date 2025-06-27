from django.db import models
from ckeditor.fields import RichTextField
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class HomeModel (models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='home',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class ServiceModel (models.Model):
    name = RichTextField()
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='service_image',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Team_memberModel(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='banners',null=True,blank=True)
    video = models.FileField(upload_to='banners',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class BookingTextModel (models.Model):
    title1 = RichTextField()
    title2 = RichTextField()
    help = models.CharField(max_length=255)
    help_phone = PhoneNumberField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class RoomModel (models.Model):
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    services = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class BookingFormModel (models.Model):
    customer_name = models.CharField(max_length=20)
    customer_email = models.EmailField()
    customer_phone = PhoneNumberField()
    customer_zipcode = models.PositiveIntegerField()
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    services = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class SubscriberTextModel (models.Model):
    subscriber_logo = models.FileField(upload_to='akm_subcriber_logo/')
    subscriber_title = models.CharField(max_length=255)
    subscriber_text =models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class SubscriberModel (models.Model):
    subscriber_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CounterModel (models.Model):
    icon = models.ImageField(upload_to='tda/')
    title = models.PositiveIntegerField()
    variable = models.CharField(max_length=50,blank=True,default="")
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class TestimonialModel(models.Model):
    logo = models.CharField(max_length=100)
    text = models.TextField()
    title = models.CharField(max_length=100)
    position = RichTextField()
    model_image = models.ImageField(upload_to='tda/',blank=True,default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Post(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='blog/',null=True,blank=True)
    category = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title