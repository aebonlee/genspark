const examples = {
  id: 'examples',
  title: '실전 예제',
  titleEn: 'Practical Examples',
  icon: 'fa-flask',
  sections: [
    {
      title: '프로젝트 예제',
      titleEn: 'Project Examples',
      content: `### 1. 인터랙티브 퀴즈 앱

\`\`\`
"JavaScript 기초 퀴즈 앱을 만들어줘:
- 10개의 객관식 문제 (4지선다)
- 문제별 타이머 (30초)
- 정답/오답 즉시 피드백
- 최종 점수와 등급 표시
- 오답 해설 제공
- 다시 풀기 버튼
게이미피케이션 요소 (점수, 진행률 바)를 포함하고
밝고 즐거운 디자인으로 만들어줘."
\`\`\`

### 2. 날씨 대시보드

\`\`\`
"날씨 정보 대시보드를 만들어줘:
- 도시 검색 기능
- 현재 날씨 (온도, 습도, 풍속, 체감온도)
- 5일간 예보
- 시간대별 온도 변화 차트
- 날씨에 따른 배경 변화
- 반응형 디자인
OpenWeatherMap API 사용."
\`\`\`

### 3. 마크다운 에디터

\`\`\`
"실시간 마크다운 에디터를 만들어줘:
- 좌우 분할 뷰 (에디터 / 미리보기)
- 문법 하이라이팅
- 마크다운 도구 모음 (굵게, 기울임, 링크 등)
- 로컬 스토리지 자동 저장
- 파일 내보내기 (HTML, .md)
- 다크/라이트 모드
개발자들이 좋아할 깔끔한 UI로."
\`\`\`

### 4. 포모도로 타이머

\`\`\`
"포모도로 타이머 앱을 만들어줘:
- 25분 작업 / 5분 휴식 사이클
- 타이머 커스터마이징 가능
- 세션 카운터
- 소리 알림
- 오늘의 완료 세션 통계
- 미니멀한 디자인
원형 프로그레스 바로 시간을 시각화해줘."
\`\`\``,
      contentEn: `### 1. Interactive Quiz App

\`\`\`
"Create a JavaScript basics quiz app:
- 10 multiple choice questions (4 options)
- Timer per question (30 seconds)
- Instant correct/incorrect feedback
- Final score and grade display
- Wrong answer explanations
- Retry button
Include gamification elements (score, progress bar)
with a bright and fun design."
\`\`\`

### 2. Weather Dashboard

\`\`\`
"Create a weather information dashboard:
- City search feature
- Current weather (temp, humidity, wind, feels like)
- 5-day forecast
- Hourly temperature change chart
- Background changes based on weather
- Responsive design
Use OpenWeatherMap API."
\`\`\`

### 3. Markdown Editor

\`\`\`
"Create a real-time markdown editor:
- Split view (editor / preview)
- Syntax highlighting
- Markdown toolbar (bold, italic, link, etc.)
- Auto-save to local storage
- File export (HTML, .md)
- Dark/light mode
Clean UI that developers will love."
\`\`\`

### 4. Pomodoro Timer

\`\`\`
"Create a Pomodoro timer app:
- 25min work / 5min break cycle
- Customizable timer settings
- Session counter
- Sound notifications
- Today's completed session stats
- Minimal design
Visualize time with a circular progress bar."
\`\`\``
    },
    {
      title: '개발 팁',
      titleEn: 'Development Tips',
      content: `### 효과적인 AI 개발 전략

**1. 점진적으로 구축하기**

한 번에 모든 기능을 요청하지 마세요. 기본 구조를 먼저 만들고, 기능을 하나씩 추가하는 것이 더 좋은 결과를 만듭니다.

\`\`\`
# 1단계: 기본 구조
"TodoList 앱의 기본 구조를 만들어줘.
할 일 추가와 목록 표시만 먼저."

# 2단계: 기능 추가
"완료 체크 기능과 삭제 기능을 추가해줘."

# 3단계: 고급 기능
"카테고리 필터와 드래그 앤 드롭 정렬을 추가해줘."

# 4단계: 디자인 개선
"디자인을 개선해줘. 애니메이션과 다크 모드 추가."
\`\`\`

**2. 참고 자료 제공하기**

원하는 디자인이나 기능이 있다면 참고 자료를 제공하세요.

\`\`\`
"Notion 스타일의 사이드바 네비게이션을 만들어줘"
"Stripe.com 같은 그라데이션 배경의 히어로 섹션"
\`\`\`

**3. 에러 대응**

코드에 에러가 있을 때는 에러 메시지를 그대로 전달하세요.

\`\`\`
"이런 에러가 발생해:
TypeError: Cannot read property 'map' of undefined
at App.jsx:15
이 에러를 수정해줘."
\`\`\`

### 코드 학습에 활용하기

AI Developer는 코딩 학습 도구로도 활용할 수 있습니다.

\`\`\`
"이 코드를 한 줄씩 설명해줘"
"이 React 컴포넌트가 어떻게 동작하는지 설명해줘"
"이 코드를 더 효율적으로 리팩토링해줘"
"이 CSS를 Tailwind CSS로 변환해줘"
\`\`\`

> AI Developer로 만든 코드는 학습 목적으로 분석하면 프로그래밍 실력 향상에 큰 도움이 됩니다. 생성된 코드를 읽고 이해하는 습관을 기르세요.`,
      contentEn: `### Effective AI Development Strategies

**1. Build Incrementally**

Do not request all features at once. Creating the basic structure first and adding features one by one produces better results.

\`\`\`
# Step 1: Basic structure
"Create the basic structure for a TodoList app.
Just add task and list display first."

# Step 2: Add features
"Add complete check and delete features."

# Step 3: Advanced features
"Add category filters and drag-and-drop sorting."

# Step 4: Design improvement
"Improve the design. Add animations and dark mode."
\`\`\`

**2. Provide References**

If you have a desired design or feature, provide reference materials.

\`\`\`
"Create a Notion-style sidebar navigation"
"Stripe.com-like gradient background hero section"
\`\`\`

**3. Error Handling**

When there are code errors, pass the error message as-is.

\`\`\`
"I'm getting this error:
TypeError: Cannot read property 'map' of undefined
at App.jsx:15
Please fix this error."
\`\`\`

### Using for Learning Code

AI Developer can also be used as a coding learning tool.

\`\`\`
"Explain this code line by line"
"Explain how this React component works"
"Refactor this code to be more efficient"
"Convert this CSS to Tailwind CSS"
\`\`\`

> Analyzing code created with AI Developer for learning purposes greatly helps improve programming skills. Develop the habit of reading and understanding generated code.`
    }
  ]
};

export default examples;
