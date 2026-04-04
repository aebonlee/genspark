# OG 이미지 생성 (카카오/SNS 미리보기)

## 개요
카카오톡, 슬랙, 디스코드 등에서 URL 공유 시 미리보기 이미지가 표시되도록 Open Graph 이미지를 생성.

## 구현

### 생성 스크립트
- **파일**: `scripts/generate-og-image.mjs`
- **도구**: sharp (Node.js 이미지 처리 라이브러리)
- **방식**: SVG → PNG 변환

### 생성된 이미지
- **경로**: `public/og/default.png`
- **크기**: 1200 x 630px (OG 표준)
- **용량**: ~85KB

### 디자인 요소
- 다크 블루 그라데이션 배경 (#050a18 → #1B3A6B → #244e8a)
- 보라-파랑-초록 그라데이션 액센트 바
- "G" 로고 아이콘 (그라데이션 박스)
- "GENSPARK MASTER" 브랜드 라벨
- "Genspark AI 학습 플랫폼" 메인 타이틀
- 6개 학습 경로 태그 (각각 고유 색상)
- 하단 URL + "Powered by Genspark AI"

### OG 메타 태그 (index.html)
```html
<meta property="og:url" content="https://genspark.dreamitbiz.com" />
<meta property="og:title" content="Genspark Master - Genspark AI 학습 플랫폼" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://genspark.dreamitbiz.com/og/default.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Genspark Master" />
<meta property="og:locale" content="ko_KR" />
```

### 검증 방법
- 카카오 디버거: https://developers.kakao.com/tool/debugger/sharing
- Facebook 디버거: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
