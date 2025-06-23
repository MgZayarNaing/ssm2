from django.contrib import admin
from .models import ServiceModel
from .models import Team_memberModel
from .models import BookingTextModel,RoomModel,BookingFormModel
from .models import SubscriberTextModel,SubscriberModel
# Register your models here.
admin.site.register(ServiceModel)
admin.site.register(Team_memberModel)
admin.site.register([BookingTextModel,RoomModel,BookingFormModel])
admin.site.register([SubscriberTextModel,SubscriberModel])
