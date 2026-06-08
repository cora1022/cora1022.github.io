# cora1022.github.io

GitHub Pages 배포를 위한 React/Vite 정적 빌드 결과물입니다.

## 프로젝트 목적

간단한 글 목록을 작성하고 좋아요/삭제/상세 모달을 테스트하는 React 미니 게시판 데모를 GitHub Pages에 올리기 위한 저장소입니다. 현재 저장소에는 원본 React 소스가 아니라 빌드된 `index.html`과 `assets/` 번들이 포함되어 있습니다.

## 기술 스택

- React
- Vite build output
- HTML/CSS/JavaScript
- GitHub Pages

## 아키텍처

브라우저는 `index.html`을 로드하고, Vite가 생성한 JS/CSS 번들이 `#root`에 React 앱을 마운트합니다. 앱 상태는 클라이언트 메모리에만 존재하며 별도 백엔드나 데이터베이스는 없습니다.

## 폴더 구조

```text
.
├── assets/
│   ├── index-*.css
│   └── index-*.js
├── index.html
├── vite.svg
└── README.md
```

## 실행 방법

```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 열면 빌드된 앱을 확인할 수 있습니다.
