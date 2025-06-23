from django.shortcuts import render
from .models import ServiceModel
# Create your views here.

def index(request):
    service = ServiceModel.objects.all()
    context = {
        'service':service,
    }
    return render(request, 'index.html',context)
