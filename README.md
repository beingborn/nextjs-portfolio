# Mhlee Portfolio

Next.js(App Router) + Django REST API 기반의 개인 포트폴리오 프로젝트입니다.  
퍼블리싱 경험을 바탕으로 **사용성**과 **컴포넌트 설계**에 초점을 맞춰 직접 구현한 디자인 시스템을 포함하고 있습니다.

> 개발자: **이민혁** | 프론트엔드 개발자

---

## 목차

- [미리보기](#미리보기)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [페이지 구성](#페이지-구성)
- [UI 컴포넌트 시스템](#ui-컴포넌트-시스템)
- [시작하기](#시작하기)
- [환경 변수](#환경-변수)
- [API 엔드포인트](#api-엔드포인트)
- [스크립트](#스크립트)
- [CI/CD](#cicd)
- [개선 예정 사항](#개선-예정-사항)

---

## 미리보기

> 스크린샷을 `docs/` 폴더에 추가하고 아래 링크를 교체해주세요.

<!-- ![메인 화면](docs/screenshot-main.png) -->
<!-- ![프로젝트 페이지](docs/screenshot-project.png) -->

---

## 주요 기능

| 페이지 | 기능 |
|---|---|
| **Home** | About Me / Skill & Experience / Contact 탭 구성 |
| **Project** | 프로젝트 목록 (전체/회사/개인 필터), 상세 모달 |
| **Guestbook** | 방명록 조회 및 색상 포스트잇 형태로 등록 |
| **Board** | 게시글 목록, 검색, 페이지네이션, 상세 보기 |
| **User Interface** | 자체 제작 UI 컴포넌트 쇼케이스 |
| **Contact** | EmailJS 기반 이메일 문의 폼 |

---

## 기술 스택

### Frontend

| 분류 | 기술 |
|---|---|
| 프레임워크 | Next.js 15 (App Router), React 19 |
| 언어 | TypeScript 5 |
| 스타일링 | Tailwind CSS 4, SASS |
| 상태 관리 | Zustand 5 (사이드바 상태) |
| HTTP 클라이언트 | Axios |
| 이메일 | EmailJS (@emailjs/browser) |
| UI 유틸리티 | CVA (class-variance-authority), clsx, tailwind-merge |
| 아이콘 | Lucide React |
| 팝오버 위치 계산 | @floating-ui/react |
| 컴포넌트 문서화 | Storybook 10 |
| 비주얼 회귀 테스트 | Chromatic |
| 폰트 | Pretendard (가변 폰트, Next.js localFont) |

### Backend

| 분류 | 기술 |
|---|---|
| 프레임워크 | Django 5 |
| REST API | Django REST Framework 3 |
| CORS | django-cors-headers |
| 이미지 처리 | Pillow |
| DB | SQLite (개발 기본) |

---

## 프로젝트 구조

```text
nextjs-portfolio/
├── .github/
│   └── workflows/
│       └── chromatic.yml          # Chromatic 자동 배포 (master push 시)
│
├── frontend/                      # Next.js 앱
│   └── src/
│       ├── app/                   # App Router 페이지
│       │   ├── (home)/            # 홈 (라우트 그룹)
│       │   │   └── _components/   # About / Skill / Experience / Contact 섹션
│       │   ├── project/           # 프로젝트 목록
│       │   ├── guestbook/         # 방명록
│       │   ├── board/             # 게시판
│       │   ├── ui/                # UI 컴포넌트 쇼케이스
│       │   ├── _layout/           # BaseLayout (사이드바 + 헤더 + 브레드크럼)
│       │   └── layout.tsx         # 루트 레이아웃 (메타데이터, 폰트)
│       │
│       ├── components/
│       │   ├── layout/            # Sidebar, Header, Breadcrumbs
│       │   └── ui/                # 공용 UI 컴포넌트 (Button, Tab, Accordion ...)
│       │
│       ├── features/              # 도메인 단위 UI/로직
│       │   ├── project/           # 프로젝트 목록/모달
│       │   ├── guestbook/         # 방명록 폼/목록
│       │   └── board/             # 게시판 검색
│       │
│       ├── constants/
│       │   └── api.ts             # API 엔드포인트 상수
│       │
│       ├── hooks/
│       │   └── useFetch.ts        # 제네릭 데이터 페칭 훅 (Axios + 로딩/에러 상태)
│       │
│       ├── store/
│       │   └── sidebar.ts         # Zustand 사이드바 상태
│       │
│       └── data/                  # 정적 데이터 (skills, qna 등)
│
└── backend/django/                # Django REST API
    ├── myportfolio/               # 프로젝트 설정 (urls, asgi, wsgi)
    └── portfolio/                 # 앱 (models, views, serializers, migrations)
```

---

## 페이지 구성

### Home (`/`)
탭 컴포넌트(`contained` variant)로 세 섹션을 전환합니다.

- **AboutME** — 자기소개, Q&A 아코디언, 이력서 다운로드
- **Skill & Experience** — 기술 스택 아이콘 그리드 (팝오버로 상세 설명), 경력 타임라인
- **Contact** — EmailJS 연동 문의 폼

### Project (`/project`)
Django API에서 프로젝트 목록을 페칭합니다.  
탭으로 전체 / 회사 프로젝트 / 개인 프로젝트를 필터링하며, 카드 클릭 시 상세 모달이 열립니다.

### Guestbook (`/guestbook`)
방명록 조회(목록) 및 등록(포스트잇 색상 선택)을 지원합니다.  
등록 수가 40개를 초과하면 폼이 비활성화됩니다.

### Board (`/board`, `/board/[id]`)
게시글 목록과 페이지네이션, 상세 보기를 제공합니다.  
`useSearchParams` 기반 URL 파라미터로 검색 상태를 관리합니다.

### Layout
- **사이드바** — Zustand로 열림/닫힘 상태 관리, 현재 경로에 따른 active 스타일
- **브레드크럼** — 홈을 제외한 모든 페이지에 표시
- **웹 접근성** — 본문 바로가기(skip navigation) 구현

---

## UI 컴포넌트 시스템

외부 UI 라이브러리 없이 직접 구현한 공용 컴포넌트입니다.  
CVA(class-variance-authority)로 variant를 타입 안전하게 관리하고, Compound Component 패턴을 적용했습니다.

| 컴포넌트 | 설명 | Storybook |
|---|---|---|
| `Button` | contained / outline / text × primary / secondary | ✅ |
| `Tab` | Compound Component (TabProvider.Button / TabProvider.Panel) | — |
| `Accordion` | Compound Component, single / multi 모드 | — |
| `Popover` | @floating-ui/react 기반 위치 계산 | — |
| `Card` | Card.Body 서브 컴포넌트 | ✅ |
| `CustomInput` | label, error/success/default 상태 | ✅ |
| `CustomTextArea` | resize 없는 textarea | ✅ |
| `Loading` | 전체 화면 로딩 스피너 | ✅ |
| `CommonModal` | Portal 기반 오버레이 모달 | — |
| `SelectBox` | 커스텀 셀렉트 박스 | — |
| `Table` | 공용 테이블 | — |
| `PageTitle` | 페이지 제목 | ✅ |

---

## 시작하기

### 사전 준비

- Node.js LTS (20 이상)
- Python 3.10 이상

### 1) 백엔드 실행

```bash
cd backend/django

# 가상환경 생성 및 활성화
python -m venv venv

# Windows
.\venv\Scripts\activate
# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

관리자 계정이 필요하면 아래를 추가로 실행합니다.

```bash
python manage.py createsuperuser
```

Django Admin: `http://127.0.0.1:8000/admin`

### 2) 환경 변수 설정

`frontend/.env.local` 파일을 생성합니다. ([환경 변수 전체 목록](#환경-변수) 참고)

### 3) 프론트엔드 실행

```bash
cd frontend
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 에 접속합니다.

> [!TIP]
> 프론트엔드는 `NEXT_PUBLIC_API_BASE_URL` 기준으로 API 주소를 구성합니다.  
> Contact 폼을 사용하려면 EmailJS 환경 변수도 함께 설정해야 합니다.

---

## 환경 변수

`frontend/.env.local`에 아래 값을 설정합니다.

```env
# Django REST API 베이스 URL
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000/api

# EmailJS (Contact 폼)
# https://www.emailjs.com 에서 발급
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> [!NOTE]
> EmailJS 키가 없으면 Contact 폼 전송이 실패합니다. 나머지 기능에는 영향 없습니다.

---

## API 엔드포인트

Base URL: `http://127.0.0.1:8000/api`

| Method | Endpoint | 설명 |
|---|---|---|
| GET | `/project/` | 프로젝트 목록 |
| GET | `/project/{id}/` | 프로젝트 상세 |
| GET | `/post/` | 게시글 목록 |
| GET | `/post/{id}/` | 게시글 상세 |
| POST | `/post/` | 게시글 생성 |
| PUT | `/post/{id}/` | 게시글 수정 |
| DELETE | `/post/{id}/` | 게시글 삭제 |
| GET | `/guestbook/` | 방명록 목록 |
| POST | `/guestbook/` | 방명록 등록 |

> Django REST Framework는 기본적으로 trailing slash(`/`)를 사용합니다.

---

## 스크립트

`frontend/` 기준:

```bash
npm run dev              # 개발 서버 실행 (Turbopack)
npm run build            # 프로덕션 빌드
npm run start            # 프로덕션 서버 실행
npm run lint             # ESLint 검사
npm run storybook        # Storybook 로컬 실행
npm run build-storybook  # Storybook 정적 빌드
npm run chromatic        # Chromatic 수동 배포
```

---

## CI/CD

### Chromatic (시각적 회귀 테스트)

`master` 브랜치에 push 시 GitHub Actions가 자동으로 Chromatic에 Storybook을 배포합니다.

```
.github/workflows/chromatic.yml
```

필요한 GitHub Secrets:
- `CHROMATIC_PROJECT_TOKEN` — Chromatic 프로젝트 토큰
- `G_TOKEN` — GitHub Personal Access Token

---

## 개선 예정 사항

> 아래 항목은 현재 확인된 개선점입니다. 추후 단계적으로 수정 예정입니다.

### UI/UX
- [ ] 스크린샷 및 배포 URL README에 추가
- [ ] 애니메이션/트랜지션 강화 (현재 포트폴리오가 정적인 느낌)
- [ ] 에러 상태 UI 개선 (현재 `<h1>에러가 발생했습니다</h1>` 단순 처리)

### 코드 품질
- [ ] `ExperienceSection` 주요 업무 내용 placeholder 텍스트 실제 내용으로 교체
- [ ] `AboutSection` 개발자 소개 텍스트 완성 (현재 테스트 문구 포함)
- [ ] 타입 파일 통합 — 현재 `types`가 여러 위치에 분산되어 있음
- [ ] Accordion 컴포넌트 Storybook 스토리 추가
- [ ] Tab, Popover, Modal 컴포넌트 Storybook 스토리 추가
- [ ] `guestbook/page.tsx` 내 `console.log` 제거

### 아키텍처
- [ ] `useFetch` POST/PUT/DELETE 요청 지원 확장 (현재 GET 전용)
- [ ] `board/[id]` 상세 페이지 구현 완성
- [ ] SQLite → PostgreSQL 전환 (운영 환경 배포 시)
- [ ] 프로덕션 배포 환경 구성 (현재 로컬 개발 기준만 문서화됨)

### 기타
- [ ] `frontend/.next` 빌드 산출물 `.gitignore`에 추가 확인
- [ ] CORS 허용 도메인 환경별로 분리 (현재 `localhost:3000` 고정)
