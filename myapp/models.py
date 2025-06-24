from django.db import models
from ckeditor.fields import RichTextField
from phonenumber_field.modelfields import PhoneNumberField

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
    customer_zipcode = models.PositiveIntegerField(max_length=10)
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

class CounterModel(models.Model):
    icon1 = models.FileField(upload_to='counter_icons/', null=True, blank=True)
    icon1_text = models.CharField(max_length=255)
    icon1_des = models.CharField(max_length=255)
    icon2 = models.FileField(upload_to='counter_icons/', null=True, blank=True)
    icon2_text = models.CharField(max_length=255)
    icon2_des = models.CharField(max_length=255)
    icon3 = models.FileField(upload_to='counter_icons/', null=True, blank=True)
    icon3_text = models.CharField(max_length=255)
    icon3_des = models.CharField(max_length=255)
    icon4 = models.FileField(upload_to='counter_icons/', null=True, blank=True)
    icon4_text = models.CharField(max_length=255)
    icon4_des = models.CharField(max_length=255)
    image = models.ImageField(upload_to='counter_images/', null=True, blank=True)
    des = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)