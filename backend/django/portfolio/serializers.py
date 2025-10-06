from rest_framework import serializers
from .models import Project, Post, Guestbook

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
class GuestbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guestbook
        fields = '__all__'