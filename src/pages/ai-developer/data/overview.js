const overview = {
  id: 'overview',
  title: 'AI Developer 개요',
  titleEn: 'AI Developer Overview',
  icon: 'fa-code',
  sections: [
    {
      title: 'AI Developer란?',
      titleEn: 'What is AI Developer?',
      content: `AI Developer는 Genspark의 코드 생성 및 웹 애플리케이션 빌드 도구입니다. 프로그래밍 경험이 없는 사용자도 자연어로 설명하면 AI가 완전한 웹사이트나 애플리케이션을 생성해줍니다. 간단한 랜딩 페이지부터 복잡한 웹 애플리케이션까지 다양한 프로젝트를 만들 수 있습니다.

### 핵심 기능

- **자연어 코딩**: 프로그래밍 언어를 몰라도 자연어로 앱을 만들 수 있음
- **풀스택 생성**: HTML, CSS, JavaScript 등 프론트엔드와 백엔드 코드 동시 생성
- **실시간 미리보기**: 코드 생성과 동시에 결과물을 실시간으로 확인
- **반복 수정**: 대화를 통해 기능을 추가하거나 디자인을 수정
- **GitHub 연동**: 생성한 프로젝트를 GitHub 리포지토리에 바로 저장
- **배포 지원**: 생성한 앱을 바로 웹에 배포 가능

### 지원 기술

| 영역 | 기술 |
|------|------|
| 프론트엔드 | HTML, CSS, JavaScript, React, Vue |
| 스타일링 | Tailwind CSS, CSS Modules |
| 백엔드 | Node.js, Python |
| 데이터베이스 | SQLite, Firebase |
| 배포 | Vercel, Netlify, GitHub Pages |

### 사용 예시

\`\`\`
# 간단한 웹사이트
"개인 포트폴리오 웹사이트를 만들어줘.
이름, 소개, 프로젝트 갤러리, 연락처 섹션 포함."

# 웹 애플리케이션
"할 일 관리 앱을 만들어줘.
할 일 추가/삭제/완료 체크, 카테고리 분류 기능 포함."

# 데이터 도구
"CSV 파일을 업로드하면 차트로 시각화해주는
데이터 대시보드를 만들어줘."
\`\`\``,
      contentEn: `AI Developer is Genspark's code generation and web application building tool. Even users without programming experience can create complete websites or applications by describing them in natural language. You can build everything from simple landing pages to complex web applications.

### Key Features

- **Natural Language Coding**: Build apps in natural language without knowing programming languages
- **Full-stack Generation**: Simultaneously generate frontend and backend code (HTML, CSS, JavaScript, etc.)
- **Real-time Preview**: View results in real-time as code is generated
- **Iterative Modification**: Add features or modify design through conversation
- **GitHub Integration**: Save created projects directly to GitHub repositories
- **Deployment Support**: Deploy created apps directly to the web

### Supported Technologies

| Area | Technologies |
|------|-------------|
| Frontend | HTML, CSS, JavaScript, React, Vue |
| Styling | Tailwind CSS, CSS Modules |
| Backend | Node.js, Python |
| Database | SQLite, Firebase |
| Deployment | Vercel, Netlify, GitHub Pages |

### Usage Examples

\`\`\`
# Simple website
"Create a personal portfolio website.
Include name, introduction, project gallery, and contact sections."

# Web application
"Create a to-do management app.
Include add/delete/complete check, and category classification features."

# Data tool
"Create a data dashboard that visualizes
uploaded CSV files as charts."
\`\`\``
    }
  ]
};

export default overview;
