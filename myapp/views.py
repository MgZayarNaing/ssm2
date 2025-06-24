from django.shortcuts import render
from .models import ServiceModel
from .models import Team_memberModel
from .models import BookingTextModel,RoomModel,SubscriberTextModel,BookingFormModel,SubscriberModel
from .models import CounterModel
# Create your views here.

def index(request):
    service = ServiceModel.objects.all()
    member  = Team_memberModel.objects.all()
    context = {
        'service'   :service,
        'member'    :member,
        'btext' : BookingTextModel.objects.all()[:1],
        'broom' : RoomModel.objects.all(),
        'scriber' : SubscriberTextModel.objects.all()[:1],
        'counter' : CounterModel.objects.all(),
    }
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        zipcode = request.POST.get('zipcode')
        bedrooms = request.POST.get('bedrooms')
        bathrooms = request.POST.get('bathrooms')
        services = request.POST.get('services')
        if name and email and phone and zipcode and bedrooms and bathrooms and services:
            BookingFormModel.objects.create(customer_name=name, 
                                            customer_email=email, 
                                            customer_phone=phone, 
                                            customer_zipcode=zipcode, 
                                            bedrooms=bedrooms, 
                                            bathrooms=bathrooms, 
                                            services=services)
        semail = request.POST.get('semail')
        if semail:
            SubscriberModel.objects.create(subscriber_email = semail)
    return render(request, 'index.html',context)
