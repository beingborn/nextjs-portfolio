# GitHub Copilot instructions for this repository ✅

## Purpose / Big picture 🔧
- This repo is a **two-tier portfolio app**:
  - Frontend: Next.js (app router) in `frontend/` (TypeScript + JS, Tailwind + SCSS, MUI + Radix + Tiptap). Key entry: `frontend/src/app/layout.jsx`.
  - Backend: Django REST API in `backend/django/` using Django REST Framework. Key entry: `backend/django/myportfolio/urls.py` and `backend/django/portfolio/views.py`.
- The frontend fetches data from the Django backend (local dev backend runs on port 8000 by convention). CORS for `http://localhost:3000` is already enabled in Django settings.

## Quick start (local dev) ▶️
- Backend (Django):
  - cd `backend/django`
  - (optional) create venv: `python -m venv .venv`
  - `pip install -r requirements.txt`
  - `python manage.py migrate`
  - `python manage.py runserver 8000`

- Frontend (Next):
  - cd `frontend`
  - `npm install` (or `pnpm/yarn`)
  - `npm run dev` (uses Next with turbopack; serves on :3000)

> Note: the frontend currently calls `http://127.0.0.1:8000` directly in `src/hooks/useDataApi.jsx` (see section below).

## Important files & where to look 🔎
- Frontend
  - `frontend/src/hooks/useDataApi.jsx` — central data-fetching hook; hardcoded API base (`http://127.0.0.1:8000`).
  - `frontend/src/app/pages/guestbook/page.jsx` — example POST to `/api/guestbook`.
  - `frontend/src/app/pages/posts/*` — examples using axios and JSONPlaceholder.
  - `frontend/src/app/components/` & `frontend/src/components/` — many reusable UI controls (Modal, Input, Button, FileUpload, etc.).
  - `frontend/package.json` — scripts: `dev`, `build`, `start`, `lint`.

- Backend
  - `backend/django/portfolio/models.py` — domain models (Project, Post, Guestbook). Watch for small issues (see notes below).
  - `backend/django/portfolio/serializers.py` — DRF serializers for models.
  - `backend/django/portfolio/views.py` — DRF views (ListCreateAPIView) and small custom views (`hello`, `signin`).
  - `backend/django/myportfolio/urls.py` — registers routes (notable endpoints: `/hello`, `/api/project`, `/api/guestbook`).
  - `backend/django/requirements.txt` — Python dependencies.

## Conventions & patterns to follow 🎯
- Frontend uses the Next.js `app/` router and mixes `.jsx` / `.tsx` files; prefer placing shared UI bits under `src/app/components/common`.
- Axios is used for HTTP (`axios` is a dependency). Use `useDataApi` to fetch lists where appropriate.
- Styling: Tailwind + SCSS variables coexist — check `src/styles` for shared variables and keyframes.
- Backend uses DRF generic views and ModelSerializers; add endpoints following those patterns (see `ProjectListView` / `GuestbookView`).

## Integration notes / gotchas ⚠️
- API base is hardcoded:
  - `useDataApi.jsx` sets `const API = 'http://127.0.0.1:8000'`. Prefer introducing `NEXT_PUBLIC_API_BASE` in the frontend for flexibility.
- CORS: `CORS_ALLOWED_ORIGINS` already includes `http://localhost:3000` in `settings.py`.
- Endpoint registration: `PostListView` exists in `views.py` but is not registered in `myportfolio/urls.py` — check before expecting `/api/post` to work.
- Model issues (pay attention when changing models):
  - `Project` has duplicate `title` declarations and some fields with questionable constraints.
  - `Post.__str__` references `self.name` but `name` is not defined — tests / manual verification necessary after edits.
  - Run `manage.py makemigrations` and `migrate` after any model changes and add migration files to PRs.

## Typical tasks: short checklists ✅
- Add a backend API endpoint:
  1. Add view in `portfolio/views.py` (follow existing DRF generic patterns).
  2. Add serializer in `serializers.py` if needed.
  3. Register URL in `myportfolio/urls.py`.
  4. `python manage.py makemigrations` → `python manage.py migrate`.
  5. Update frontend to call the new endpoint (prefer `NEXT_PUBLIC_API_BASE`).

- Fix frontend-backend API mismatch:
  - Check serializer fields, and confirm what frontend expects (see guestbook page and `useDataApi`).
  - Update API shape or adapt the frontend; when changing API shape, update both `serializers.py` and front-end usage.

## Developer workflows & commands ✍️
- Frontend lint: `npm run lint` in `frontend/`.
- No test runner is configured for frontend; backend has an empty `tests.py` file — add tests in Django when changing model/serializer logic.

## PR / Agent behavior rules 🤖
- Always run both dev servers locally before submitting changes that touch integration points.
- If you change models or serializers, include migrations and tests in the PR and verify the frontend integration manually.
- Prefer small, focused PRs for API shape changes; update frontend references and environment variables in the same PR.

---

If anything is unclear or you want more detail on any area (e.g., typical Next.js patterns used here, Tiptap usage, or specific model fixes), tell me which part and I will expand or add examples. 💡