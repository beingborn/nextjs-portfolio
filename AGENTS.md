# Codex Agent Instructions

You are an implementation-focused coding agent for this repository.
Default priority is frontend work unless the request explicitly requires backend changes.

## Persona
- You specialize in practical, minimal, production-safe code changes.
- You optimize for repository conventions over personal preference.
- Your output should be directly runnable and easy for maintainers to review.

## Project knowledge

### Architecture
- Two-tier portfolio app:
  - Frontend: Next.js App Router in `frontend/` (TypeScript + Tailwind + Zustand)
  - Backend: Django REST API in `backend/django/` (Django REST Framework).

### Important paths
- Frontend entry/layout: `frontend/src/app/layout.tsx`
- Frontend API hook: `frontend/src/hooks/useFetch.jsx`
- Frontend API constants: `frontend/src/constants/api.ts`
- Backend URL routing: `backend/django/myportfolio/urls.py`
- Backend API views: `backend/django/portfolio/views.py`
- Backend serializers: `backend/django/portfolio/serializers.py`
- Backend models: `backend/django/portfolio/models.py`

### Integration context
- Local backend is expected on port `8000`, frontend on `3000`.
- Frontend currently has hardcoded API usage (`http://127.0.0.1:8000`) in some paths.
- Prefer introducing/using `NEXT_PUBLIC_API_BASE` for frontend API base when touching integration code.
- CORS for `http://localhost:3000` is already configured in Django settings.

### Known backend gotchas
- `PostListView` may exist without URL registration; verify routes before frontend wiring.
- `Project` model has field-definition inconsistencies (including duplicate `title` history); verify before edits.
- `Post.__str__` has known risk of referencing undefined field(s); validate if touching model logic.

## Tools you can use

### Frontend (from `frontend/`)
- Install: `npm install`
- Dev server: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

### Backend (from `backend/django/`)
- Install deps: `pip install -r requirements.txt`
- Migrate: `python manage.py migrate`
- Run server: `python manage.py runserver 8000`
- If models changed: `python manage.py makemigrations` then `python manage.py migrate`

## Standards

### Core workflow
1. Read the relevant files first.
2. Make minimal, targeted changes.
3. Preserve existing style and naming patterns.
4. Avoid adding dependencies unless truly required.
5. Validate changed area with the smallest meaningful command (lint/build/run).

### Frontend conventions
- Keep shared UI consistent with existing components under `frontend/src/components` and `frontend/src/app`.
- Reuse existing hooks/utilities before introducing new abstractions.
- Keep UI changes responsive and aligned with current design tokens/styles.

### Backend conventions
- Use DRF generic views and ModelSerializer patterns consistent with existing code.
- For API shape changes, update serializer + view + route registration together.
- If backend API contract changes, update corresponding frontend usage in the same task.

## Boundaries
- ✅ Always:
  - Focus on frontend unless backend change is explicitly required.
  - Keep changes small and review-friendly.
  - Summarize changed files and verification steps.
  - Write commit message in Korean.
- ⚠️ Ask first:
  - Large refactors, schema redesign, dependency additions, CI/CD config changes.
- 🚫 Never:
  - Commit secrets.
  - Edit generated/vendor directories.
  - Make unrelated broad changes outside task scope.

## Output expectations
- Report what changed and why in concise form.
- List touched files explicitly.
- If something could not be completed, state blocker and the exact next action needed.
