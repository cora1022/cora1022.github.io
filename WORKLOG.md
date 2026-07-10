# Portfolio Worklog

## Current Goal

`https://cora1022.github.io/` 메인 페이지를 개인 GitHub 소개용 정적 포트폴리오로 정리한다.

## Current Structure

- `index.html`: 메인 포트폴리오 페이지
- `assets/css/styles.css`: 전체 디자인, 라이트/다크 모드, 반응형 스타일
- `assets/js/main.js`: 프로젝트 카드 데이터, 테마 토글, 연락처 복사, GitHub API 표시
- `projects/index.html`: 프로젝트 목록 보조 페이지
- `about.html`: 소개 보조 페이지
- `assets/img/image.png`: OpenCLIP 기술 스택 아이콘
- `assets/img/robot-project-thumbnail.png`: ROBOT 카드 이미지
- `assets/img/urban-simulation-thumbnail.png`: 도시 폐기물 카드 이미지
- `assets/img/martin-bennie-fFyIFm0pqNM-unsplash.jpg`: 배경 작업용 원본 이미지

## Design Decisions

- 메인 헤더 왼쪽은 GitHub 아이콘과 `cora1022`만 유지한다.
- 왼쪽 헤더 브랜드는 클릭 시 GitHub 프로필로 이동한다.
- 헤더 오른쪽 메뉴는 `개발기록`, `레포지토리`, `기술 스택`, `연락처`, 테마 토글만 둔다.
- 개발기록은 별도 저장소 `cora1022.github.io/blog`에서 관리한다.
- 메인 페이지의 개발기록 섹션은 글 제목과 날짜만 세로 리스트로 보여준다.
- 레포지토리 카드는 모달을 열지 않고 GitHub 저장소로 바로 이동한다.
- 일부 프로젝트 카드 하단에는 YouTube 또는 Page 액션 버튼을 둔다.
- 다크/라이트 모드는 CSS 애니메이션 배경으로 전환한다.
- 기술 스택 아이콘은 공식 로고를 사용하되, 다크 모드에서 흰 패널이 튀지 않도록 어두운 캡슐 톤을 사용한다.

## Featured Repositories

- OpenCV 기반 패션 이미지 유사도 검색
- ROBOT
- 도시 폐기물 통계 시뮬레이션

위 3개는 별표 아이콘과 함께 상단에 배치한다.

## Recent Changes

- `FashionCLIP` 표기를 `OpenCLIP`으로 변경했다.
- OpenCLIP 로고는 `assets/img/image.png`를 사용한다.
- 기술 스택에서 `C++`, `GitHub Pages` 항목을 제거했다.
- 프로젝트 카드 제목 위 회색 분류 텍스트를 제거하고 프로젝트별 기술 태그로 교체했다.
- 좌측 헤더 브랜드 hover는 테두리/배경 없이 아이콘과 텍스트 그림자만 강화되도록 변경했다.
- 다크 모드 기술 스택 아이콘의 흰 배경을 줄이고 어두운 톤에 맞게 조정했다.

## Deployment

- GitHub Pages 저장소: `https://github.com/cora1022/cora1022.github.io`
- 배포 브랜치: `main`
- 배포 URL: `https://cora1022.github.io/`

## Next Work Ideas

- YouTube 링크가 생기면 `assets/js/main.js`의 `action.url`을 실제 영상 URL로 교체한다.
- 개발기록 글이 늘어나면 `index.html`의 개발기록 리스트를 최신 글 위주로 갱신한다.
- 프로젝트 이미지가 마음에 들지 않으면 `assets/img/`의 썸네일을 교체한다.
