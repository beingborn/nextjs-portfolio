from rest_framework import serializers
from .models import Project, Post, Guestbook


# 직렬화 : 파이썬 모델 > JSON 
# 역직렬화 : JSON > 파이썬 모델
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__' # 각 모델의 모든 필드를 API 입출력으로 사용
        
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
        
class GuestbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guestbook
        fields = '__all__'