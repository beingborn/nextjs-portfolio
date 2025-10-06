import json

from rest_framework import generics
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from .models import Project, Post, Guestbook
from .serializers import ProjectSerializer, PostSerializer, GuestbookSerializer

class ProjectListView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    
class PostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class GuestbookView(generics.ListCreateAPIView):
    queryset = Guestbook.objects.all()
    serializer_class = GuestbookSerializer

@csrf_exempt
@require_POST
def hello(request):
    data = json.loads(request.body)
    name = data.get('name')
    return JsonResponse({'message' : name + 'hello!!!'}, status=200 )

@csrf_exempt
@require_POST
def signin(request):
    try:
        data = json.loads(request.body)
        name = data.get('name')
        nickname = data.get('nickname')
        gender = data.get('gender')
        address = data.get('address')
        email = data.get('email')
        password = data.get('password')
        birth = data.get('birth')
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

