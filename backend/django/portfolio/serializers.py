from rest_framework import serializers
from .models import Project, Post, Guestbook


# 직렬화 : 파이썬 모델 > JSON 
# 역직렬화 : JSON > 파이썬 모델
class ProjectSerializer(serializers.ModelSerializer):
    # DRF 규칙:
    # SerializerMethodField → get_<fieldname>() 호출
    
    thumbnail = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = '__all__' # 각 모델의 모든 필드를 API 입출력으로 사용
        
    def get_thumbnail(self, obj):
        request = self.context.get("request")
        
        if obj.thumbnail:
            url = obj.thumbnail.url
            
            if request: 
                return request.build_absolute_uri(url)
            return url
    
        return None
    
class PostSerializer(serializers.ModelSerializer):
    filename = serializers.ReadOnlyField()
    class Meta:
        model = Post
        fields = '__all__'
                
class GuestbookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guestbook
        fields = '__all__'