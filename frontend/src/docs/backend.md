# Backend 구조 문서 (Django)

이 프로젝트의 백엔드는 `backend/django` 기준으로 구성되어 있습니다.  
프론트엔드(Next.js)와 연동되는 REST API 서버 역할을 합니다.

---

## 1) 전체 구조

```text
backend/
└─ django/
	├─ manage.py
	├─ requirements.txt
	├─ db.sqlite3
	├─ myportfolio/                # Django 프로젝트(전역 설정)
	│  ├─ settings.py              # 앱 등록, 미들웨어, DB, CORS 설정
	│  ├─ urls.py                  # 최상위 URL 라우팅
	│  ├─ asgi.py                  # ASGI 진입점
	│  └─ wsgi.py                  # WSGI 진입점
	└─ portfolio/                  # 실제 도메인 앱(API 구현)
		├─ models.py                # DB 모델(Project, Post, Guestbook)
		├─ serializers.py           # DRF 직렬화
		├─ views.py                 # API 뷰(조회/생성)
		├─ admin.py                 # 관리자 등록 관련
		├─ tests.py                 # 테스트 파일
		├─ apps.py                  # 앱 설정
		└─ migrations/              # 마이그레이션 이력
```

---

## 2) 핵심 파일 역할

### `myportfolio/settings.py`

- Django 전역 설정 파일
- `INSTALLED_APPS`에 `portfolio`, `rest_framework`, `corsheaders` 등록
- DB는 SQLite(`db.sqlite3`) 사용
- CORS 허용: `http://localhost:3000`

### `myportfolio/urls.py`

최상위 URL이 아래처럼 연결되어 있습니다.

- `/admin/` → Django Admin
- `/hello` → `hello` 함수 뷰
- `/api/project` → `ProjectListView`
- `/api/guestbook` → `GuestbookView`

### `portfolio/models.py`

주요 모델:

- `Project`: 프로젝트 정보(제목, 썸네일, 설명, 기간, 인원, 링크, 스킬, 타입)
- `Post`: 게시글 정보(내용, 파일, 생성/수정일)
- `Guestbook`: 방명록 정보(제목, 작성자, 내용, 색상)

### `portfolio/serializers.py`

- `ProjectSerializer`, `PostSerializer`, `GuestbookSerializer`
- 모두 `ModelSerializer` + `fields = '__all__'` 사용

### `portfolio/views.py`

- `ProjectListView`: `ListCreateAPIView`
- `PostListView`: `ListCreateAPIView`
- `GuestbookView`: `ListCreateAPIView`
- `hello`: POST 요청을 받아 메시지 응답

---

## 3) API 동작 관점 요약

- 현재 URL에 등록된 API는 `project`, `guestbook`, `hello` 입니다.
- `PostListView` 클래스는 존재하지만 `urls.py`에 경로 등록은 아직 없습니다.
- DRF Generic View(`ListCreateAPIView`) 기반이라, 기본적으로 GET(목록) / POST(생성) 동작을 제공합니다.

---

## 4) 확인된 참고 사항

코드 기준으로 구조 파악 시 참고할 점:

- `Project` 모델에 `title` 필드가 중복 선언되어 있습니다.
- `Post.__str__`에서 `self.name`을 반환하는데, 모델에 `name` 필드는 없습니다.
- 위 항목들은 향후 모델 정리/수정 시 우선 점검 대상입니다.

---

## 5) 로컬 실행 기본 명령

`backend/django` 폴더에서:

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

## 직렬화

프론트엔드는 일반적으로 `http://localhost:3000`, 백엔드는 `http://127.0.0.1:8000`으로 연동합니다.
