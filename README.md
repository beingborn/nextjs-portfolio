# Mhlee Portfolio

Next.js(App Router) + Django REST API 기반의 개인 포트폴리오 프로젝트입니다.  
프로젝트, 게시판, 방명록 기능을 포함하며 프론트엔드와 백엔드를 분리한 2-tier 구조로 구성되어 있습니다.

## 주요 기능

- 탭 기반 메인 포트폴리오 화면 (About / Skill & Experience / Contact)
- 프로젝트 목록/필터(전체, 회사, 개인) 및 상세 모달
- 게시판 목록 + 페이지네이션
- 방명록 조회/등록
- 공용 UI 컴포넌트와 Storybook 기반 UI 개발 환경

## 기술 스택

### Frontend

- Next.js 15 (App Router, TypeScript)
- React 19
- Tailwind CSS 4
- Zustand
- Axios
- Storybook 10

### Backend

- Django 5
- Django REST Framework
- django-cors-headers
- SQLite (개발 기본 DB)

## 프로젝트 구조

```text
nextjs-portfolio/
├─ frontend/                  # Next.js 앱
│  ├─ src/app/                # App Router 페이지
│  ├─ src/features/           # 도메인 단위 UI/로직
│  ├─ src/components/         # 공용 컴포넌트
│  ├─ src/constants/api.ts    # API 엔드포인트 상수
│  └─ src/hooks/useFetch.ts   # 공통 데이터 페칭 훅
└─ backend/django/            # Django REST API
	 ├─ myportfolio/urls.py     # API 라우팅
	 └─ portfolio/              # 모델/시리얼라이저/뷰
```

## 시작하기

### 1) 사전 준비

- Node.js LTS
- Python 3.x

### 2) 백엔드 실행

```bash
cd backend/django
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

### 3) 프론트엔드 환경 변수 설정

`frontend/.env.local` 파일을 생성하고 아래 값을 설정합니다.

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api
```

### 4) 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 확인할 수 있습니다.

> [!TIP]
> 프론트엔드는 `NEXT_PUBLIC_API_BASE_URL` 기준으로 API 주소를 구성합니다.

## API 엔드포인트 (개발 기준)

Base URL: `http://127.0.0.1:8000/api`

| Method | Endpoint | 설명 |
|---|---|---|
| GET | `/project` | 프로젝트 목록 |
| GET | `/project/{id}/` | 프로젝트 상세 |
| GET | `/post` | 게시글 목록 |
| GET | `/post/{id}/` | 게시글 상세 |
| POST | `/post` | 게시글 생성 |
| PUT | `/post/{id}/` | 게시글 수정 |
| DELETE | `/post/{id}/` | 게시글 삭제 |
| GET | `/guestbook` | 방명록 목록 |
| POST | `/guestbook` | 방명록 등록 |

## 프론트엔드 스크립트

`frontend/` 기준:

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run storybook
npm run build-storybook
```

## 개발 메모

> [!WARNING]
> 현재 저장소에는 `frontend/.next` 빌드 산출물이 포함되어 있을 수 있습니다. 실행/배포 이슈 분석 시 소스(`frontend/src`) 기준으로 확인하세요.

- CORS는 `http://localhost:3000` 기준 허용되어 있습니다.
- 백엔드 미디어 파일은 `backend/django/media` 경로를 사용합니다.
