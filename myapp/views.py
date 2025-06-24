from django.shortcuts import render
from .models import Post
# Create your views here.

def index(request):
    posts = Post.objects.all().order_by('-created_at')[:3]
    return render(request, 'index.html', {'posts': posts})

def blog(request):
    posts = Post.objects.all().order_by('-created_at')[:3]
    return render(request, 'blog.html', {'posts': posts})