# Django ImageField → Next.js 출력 정리

## 1. ImageField 기본

```python
class Post(models.Model):
    image = models.ImageField(upload_to="images/")

업로드 파일 저장 위치

MEDIA_ROOT/images/파일명
2. MEDIA 설정
MEDIA_URL = "/media/"
MEDIA_ROOT = BASE_DIR / "media"
설정	의미
MEDIA_ROOT	실제 파일 저장 위치 (서버 디스크)
MEDIA_URL	브라우저 접근 URL

예

파일 위치
/media/images/cat.jpg

접근 URL
http://localhost:8000/media/images/cat.jpg
3. media 서빙 (개발 환경)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

역할

/media/... 요청
      ↓
MEDIA_ROOT 파일 반환

즉 Django가 업로드 파일을 브라우저에 전달

4. URL 종류
Relative URL
/media/images/cat.jpg

도메인 없음

Absolute URL
http://localhost:8000/media/images/cat.jpg

구성

scheme + domain + path

Next.js 같은 다른 서버에서 접근할 때 absolute URL 필요

5. Serializer에서 Image URL 반환
image = serializers.SerializerMethodField()

def get_image(self, obj):
    request = self.context.get("request")
    if obj.image:
        return request.build_absolute_uri(obj.image.url)
    return None

동작

obj.image.url
      ↓
/media/images/cat.jpg
      ↓
request.build_absolute_uri()
      ↓
http://localhost:8000/media/images/cat.jpg

API 응답

{
  "image": "http://localhost:8000/media/images/cat.jpg"
}
6. Next.js에서 출력
기본 img
<img src={post.image} />
Next Image
<Image
  src={post.image}
  width={500}
  height={300}
/>
7. Django 서버에서 이미지 확인 방법
브라우저
http://localhost:8000/media/images/cat.jpg
Django shell
obj.image.url
obj.image.path
속성	의미
url	브라우저 접근 URL
path	서버 파일 경로
8. Django URL 매칭

Django는 urlpatterns를 위에서 아래 순서로 검사

Using the URLconf defined in myportfolio.urls
Django tried these URL patterns in this order

→ 요청 URL과 매칭되는 패턴을 찾는 과정

매칭 실패 시

404 Not Found
핵심 흐름
ImageField 업로드
        ↓
MEDIA_ROOT 저장
        ↓
MEDIA_URL로 접근
        ↓
Django media 서빙
        ↓
Serializer absolute URL 반환
        ↓
Next.js img 렌더링
```

주의점 : View에서 request 객체 전달 필요
