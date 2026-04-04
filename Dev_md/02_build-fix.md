# 빌드 오류 수정 - 미사용 청크 제거

## 문제
`npm run build` 실행 시 다음 오류 발생:
```
Could not resolve entry module "@supabase/supabase-js"
```

## 원인
`vite.config.js`의 `manualChunks`에 실제로 설치되지 않은 패키지가 포함:
- `@supabase/supabase-js` — 미설치 (genspark은 Supabase 미사용)
- `jspdf` — 미설치

## 수정

### 변경 전 (`vite.config.js`)
```js
manualChunks: {
  vendor: ['react', 'react-dom', 'react-router-dom'],
  supabase: ['@supabase/supabase-js'],  // 미사용
  markdown: ['react-markdown', 'remark-gfm'],
  pdf: ['jspdf'],                        // 미사용
},
```

### 변경 후
```js
manualChunks: {
  vendor: ['react', 'react-dom', 'react-router-dom'],
  markdown: ['react-markdown', 'remark-gfm'],
},
```

## 결과
- 빌드 성공: 360 modules, 2.57s
- 배포 완료: gh-pages → genspark.dreamitbiz.com
