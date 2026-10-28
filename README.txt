블록 월드 — 웹앱(PWA) 패키지
================================
이 폴더 안의 파일을 웹에 올리면 폰 홈 화면에 설치할 수 있는 앱이 됩니다.

[ GitHub Pages에 올리기 ]
1. github.com → 오른쪽 위 + → New repository
   이름: blockworld / Public → Create repository
2. "uploading an existing file" 클릭
3. 이 폴더 "안의" 항목(index.html, sw.js, manifest.webmanifest, three.module.min.js,
   fonts 폴더, icons 폴더 등)을 모두 선택해 브라우저 창에 끌어다 놓기 → Commit changes
   ※ index.html 이 저장소 맨 위에 보여야 합니다.
4. Settings → Pages → Branch: main, 폴더: / (root) → Save
5. 1~2분 뒤 https://<아이디>.github.io/blockworld/ 로 접속

[ 폰에 설치 ]
- 안드로이드(크롬): 메뉴 ⋮ → 앱 설치
- 아이폰(사파리): 공유 → 홈 화면에 추가

[ 알아두기 ]
- https 주소로 열어야 설치·오프라인 기능이 켜집니다.
- 월드는 기기마다 따로 저장됩니다.
- 포함된 오픈소스: three.js (MIT), 글꼴 Do Hyeon · Black Han Sans (SIL OFL) — 라이선스 파일 동봉
