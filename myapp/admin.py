from django.contrib import admin
from .models import HomeModel
from .models import ServiceModel
from .models import Team_memberModel
from .models import BookingTextModel,RoomModel,BookingFormModel
from .models import SubscriberTextModel,SubscriberModel
from .models import CounterModel,TestimonialModel
# Register your models here.
admin.site.register(HomeModel)
admin.site.register(ServiceModel)
admin.site.register(Team_memberModel)
admin.site.register([BookingTextModel,RoomModel,BookingFormModel])
admin.site.register([SubscriberTextModel,SubscriberModel])
admin.site.register([CounterModel,TestimonialModel])