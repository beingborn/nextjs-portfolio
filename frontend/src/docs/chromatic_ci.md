### Monorepo 환경에서 Chromatic CI 설정 가이드

1. 문제 배경

모노레포 구조에서 frontend, backend가 분리되어 있고,
루트에는 package.json이 없는 경우 GitHub Actions는 기본적으로 root 기준으로 실행됩니다.

이때 다음과 같은 문제가 발생합니다:

- npm ci 실행 시 package.json을 찾지 못함
- lock 파일 오류 발생
- Chromatic가 Storybook을 찾지 못함

2. 원인

GitHub Actions의 기본 작업 디렉토리는 저장소 루트입니다.

예시 구조:

```
root/
├── backend/
└── frontend/
├── package.json
├── package-lock.json
└── .storybook/
```

이 경우:

npm 명령은 frontend에서 실행되어야 함

Chromatic도 frontend 기준으로 실행되어야 함

3. 필수 설정 항목
   ① working-directory 지정

Job 전체에 기본 디렉토리를 지정하는 것이 가장 안전합니다.

defaults:
run:
working-directory: frontend
② cache-dependency-path 지정

setup-node에서 lock 파일 경로를 명시해야 합니다.

- uses: actions/setup-node@v4
  with:
  node-version: 20
  cache: 'npm'
  cache-dependency-path: frontend/package-lock.json
  ③ 의존성 설치 명령
- name: Install dependencies
  run: npm ci
  ④ Chromatic 실행 시 workingDir 지정
- uses: chromaui/action@latest
  with:
  projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
  workingDir: frontend

4. 최종 예시 워크플로우
   name: 'Chromatic Publish'

on: push

jobs:
test:
runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: frontend

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: frontend/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Publish to Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          workingDir: frontend

5. 핵심 요약

모노레포에서는 반드시 다음을 명시해야 합니다:

npm 실행 위치 (working-directory)

lock 파일 위치 (cache-dependency-path)

Chromatic 실행 위치 (workingDir)

이 설정이 없으면 CI는 root 기준으로 실행되어 실패합니다.
