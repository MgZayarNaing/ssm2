from django.shortcuts import render
from .models import ServiceModel
from .models import Team_memberModel
# Create your views here.

def index(request):
    service = ServiceModel.objects.all()
    member  = Team_memberModel.objects.all()
    context = {
        'service'   :service,
        'member'    :member,
    }
    return render(request, 'index.html',context)

def index3(request):
    service = ServiceModel.objects.all()
    member  = Team_memberModel.objects.all()
    context = {
        'service'   :service,
        'member'    :member,
    }
    return render(request, 'index3.html',context)