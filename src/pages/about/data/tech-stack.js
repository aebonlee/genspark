const techStack = {
  id: 'tech-stack',
  title: '기술 스택',
  titleEn: 'Tech Stack',
  icon: 'fa-layer-group',
  sections: [
    {
      title: '프론트엔드 기술',
      titleEn: 'Frontend Technology',
      content: `Genspark Master는 최신 웹 기술을 활용하여 빠르고 안정적인 사용자 경험을 제공합니다.

### 핵심 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19 | UI 프레임워크, 컴포넌트 기반 아키텍처 |
| Vite | 6 | 빌드 도구, HMR(Hot Module Replacement) |
| React Router | 7 | 클라이언트 사이드 라우팅 |
| React Markdown | - | 마크다운 콘텐츠 렌더링 |
| remark-gfm | - | GitHub Flavored Markdown 지원 |

### React 19 선택 이유

React 19는 여러 혁신적인 기능을 제공합니다.

- **자동 최적화**: 컴파일러가 불필요한 리렌더링을 자동으로 방지
- **서버 컴포넌트**: 서버에서 렌더링하여 초기 로딩 속도 향상
- **향상된 Hooks**: useOptimistic, useFormStatus 등 새로운 Hook 지원
- **개선된 에러 처리**: 더 명확한 에러 메시지와 디버깅 경험

### Vite 6 선택 이유

Vite 6는 개발 생산성과 빌드 성능 모두에서 뛰어납니다.

- **초고속 HMR**: 파일 변경 시 밀리초 단위의 즉각 반영
- **ESM 기반**: 네이티브 ES 모듈을 활용한 빠른 개발 서버
- **최적화된 빌드**: Rollup 기반의 효율적인 프로덕션 빌드
- **풍부한 플러그인**: 다양한 플러그인 생태계 지원`,
      contentEn: `Genspark Master uses the latest web technologies to provide a fast and stable user experience.

### Core Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI framework, component-based architecture |
| Vite | 6 | Build tool, HMR (Hot Module Replacement) |
| React Router | 7 | Client-side routing |
| React Markdown | - | Markdown content rendering |
| remark-gfm | - | GitHub Flavored Markdown support |

### Why React 19

React 19 provides several innovative features:

- **Automatic Optimization**: The compiler automatically prevents unnecessary re-renders
- **Server Components**: Render on the server to improve initial loading speed
- **Enhanced Hooks**: New hooks like useOptimistic, useFormStatus
- **Improved Error Handling**: Clearer error messages and debugging experience

### Why Vite 6

Vite 6 excels in both development productivity and build performance:

- **Ultra-fast HMR**: Millisecond-level instant reflection of file changes
- **ESM-based**: Fast development server using native ES modules
- **Optimized Build**: Efficient production builds based on Rollup
- **Rich Plugins**: Support for a diverse plugin ecosystem`
    },
    {
      title: '배포 및 인프라',
      titleEn: 'Deployment and Infrastructure',
      content: `### GitHub Pages 배포

Genspark Master는 GitHub Pages를 통해 정적 사이트로 배포됩니다.

- **무료 호스팅**: GitHub Pages의 무료 정적 사이트 호스팅 활용
- **자동 배포**: GitHub Actions를 통한 CI/CD 파이프라인 구축
- **CDN 제공**: GitHub의 글로벌 CDN을 통한 빠른 콘텐츠 전달
- **HTTPS 기본 제공**: SSL/TLS 인증서 자동 적용

### 프로젝트 구조

\`\`\`
genspark/
  src/
    components/       # 공통 컴포넌트
    contexts/         # React Context (언어 설정 등)
    pages/            # 페이지 컴포넌트
      about/          # About 페이지
      super-agent/    # Super Agent 가이드
      deep-research/  # Deep Research 가이드
      sparkpages/     # Sparkpages 가이드
      ai-slides/      # AI Slides 가이드
      ai-developer/   # AI Developer 가이드
      ai-tools/       # AI Tools 가이드
      prompt-guide/   # 프롬프트 가이드
    styles/           # CSS 스타일
  public/             # 정적 파일
  index.html          # 진입점
  vite.config.js      # Vite 설정
\`\`\`

### 성능 최적화

- **코드 분할**: React.lazy와 동적 import를 활용한 페이지별 코드 분할
- **이미지 최적화**: WebP 포맷과 lazy loading 적용
- **번들 최적화**: Tree-shaking과 minification으로 번들 크기 최소화
- **캐싱 전략**: 정적 자산에 대한 효율적인 캐싱 정책 적용`,
      contentEn: `### GitHub Pages Deployment

Genspark Master is deployed as a static site through GitHub Pages.

- **Free Hosting**: Utilizing GitHub Pages' free static site hosting
- **Automated Deployment**: CI/CD pipeline through GitHub Actions
- **CDN Provided**: Fast content delivery through GitHub's global CDN
- **HTTPS Included**: Automatic SSL/TLS certificate application

### Project Structure

\`\`\`
genspark/
  src/
    components/       # Shared components
    contexts/         # React Context (language settings, etc.)
    pages/            # Page components
      about/          # About page
      super-agent/    # Super Agent guide
      deep-research/  # Deep Research guide
      sparkpages/     # Sparkpages guide
      ai-slides/      # AI Slides guide
      ai-developer/   # AI Developer guide
      ai-tools/       # AI Tools guide
      prompt-guide/   # Prompt guide
    styles/           # CSS styles
  public/             # Static files
  index.html          # Entry point
  vite.config.js      # Vite configuration
\`\`\`

### Performance Optimization

- **Code Splitting**: Page-level code splitting using React.lazy and dynamic imports
- **Image Optimization**: WebP format and lazy loading
- **Bundle Optimization**: Minimized bundle size with tree-shaking and minification
- **Caching Strategy**: Efficient caching policies for static assets`
    }
  ]
};

export default techStack;
