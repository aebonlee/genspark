import{j as e,M as h,r as g}from"./markdown-DnsyFQ3Z.js";import{b as y}from"./vendor-C7SgezlP.js";import{u as f}from"./index-Dq0AHLiD.js";import{S as v}from"./SEOHead-BW8dftyZ.js";import{T as k,C as m}from"./TipBox-BiJxeQEl.js";import"./pdf-ckwbz45p.js";const b={id:"basics",title:"Genspark 프롬프트 기초",titleEn:"Genspark Prompt Basics",icon:"fa-graduation-cap",sections:[{title:"프롬프트 작성 원칙",titleEn:"Prompt Writing Principles",content:`Genspark에서 효과적인 결과를 얻기 위한 프롬프트 작성의 기본 원칙을 소개합니다.

### 5가지 핵심 원칙

1. **구체성**: 원하는 결과의 형식, 길이, 스타일을 명확하게 지정
2. **맥락 제공**: 배경 정보, 목적, 대상 독자를 설명
3. **구조화**: 복잡한 요청은 번호나 단계로 나누어 전달
4. **출력 지정**: 표, 리스트, 보고서 등 원하는 출력 형식 명시
5. **제약 설정**: 길이, 언어, 톤, 포함/제외할 내용 설정

### 기본 프롬프트 구조

\`\`\`
[역할/맥락] + [작업 지시] + [세부 요구사항] + [출력 형식]

# 예시
"너는 마케팅 전문가야. (역할)
우리 SaaS 제품의 이메일 마케팅 캠페인을 기획해줘. (작업)
타겟: 중소기업 대표, 3개월 플랜, 주 1회 발송. (세부)
각 이메일의 제목, 본문 요약, CTA를 표로 정리해줘. (출력)"
\`\`\`

### 좋은 프롬프트 vs 나쁜 프롬프트

| 나쁜 프롬프트 | 좋은 프롬프트 |
|-------------|------------|
| "마케팅 해줘" | "B2B SaaS 제품의 Q1 이메일 마케팅 플랜을 작성해줘. 타겟: IT 관리자, 월 예산: 500만원" |
| "코드 짜줘" | "React로 할 일 목록 앱을 만들어줘. 추가/삭제/완료 체크 기능 포함, Tailwind CSS 사용" |
| "조사해줘" | "2024년 한국 AI 스타트업 투자 현황을 조사해줘. 투자 금액, 주요 기업, 분야별 비중 포함" |

> 프롬프트는 길어도 괜찮습니다. 구체적일수록 AI가 더 정확한 결과를 제공합니다. 한 번에 완벽한 프롬프트를 작성하기보다, 대화를 통해 점진적으로 개선하는 것도 효과적입니다.`,contentEn:`Here are the basic principles of prompt writing for effective results with Genspark.

### 5 Core Principles

1. **Specificity**: Clearly specify the desired format, length, and style of the result
2. **Context**: Explain background information, purpose, and target audience
3. **Structure**: Break complex requests into numbered steps
4. **Output Specification**: Specify desired output format such as tables, lists, or reports
5. **Constraints**: Set length, language, tone, and what to include/exclude

### Basic Prompt Structure

\`\`\`
[Role/Context] + [Task Instruction] + [Details] + [Output Format]

# Example
"You are a marketing expert. (role)
Plan an email marketing campaign for our SaaS product. (task)
Target: SMB executives, 3-month plan, weekly sends. (details)
Organize each email's subject, body summary, and CTA in a table. (output)"
\`\`\`

### Good Prompts vs Bad Prompts

| Bad Prompt | Good Prompt |
|-----------|------------|
| "Do marketing" | "Write a Q1 email marketing plan for a B2B SaaS product. Target: IT managers, monthly budget: $5,000" |
| "Write code" | "Build a to-do list app with React. Include add/delete/complete check features, use Tailwind CSS" |
| "Research it" | "Research 2024 Korean AI startup investment status. Include investment amounts, major companies, sector breakdown" |

> Prompts can be long. The more specific, the more accurate results AI provides. Rather than writing the perfect prompt at once, improving gradually through conversation is also effective.`}]},S={id:"super-agent-prompts",title:"Super Agent 프롬프트",titleEn:"Super Agent Prompts",icon:"fa-robot",sections:[{title:"업무 자동화 프롬프트",titleEn:"Task Automation Prompts",content:`### 이메일 관리

\`\`\`
# 이메일 요약
"오늘 받은 읽지 않은 이메일을 중요도 순으로 요약해줘.
각 이메일에 대해:
- 발신자
- 제목
- 핵심 내용 (1-2줄)
- 긴급도 (상/중/하)
- 필요한 조치"

# 이메일 작성
"다음 내용으로 비즈니스 이메일을 작성해줘:
수신자: 마케팅 팀 전체
목적: Q2 마케팅 전략 미팅 안내
일시: 4월 15일 오후 2시
장소: 온라인 (Zoom)
어젠다 포함, 공식적이지만 친근한 톤으로"
\`\`\`

### 일정 관리

\`\`\`
# 주간 일정 분석
"이번 주 내 일정을 분석하고:
1. 총 미팅 시간 계산
2. 집중 작업 가능한 시간대 찾기
3. 일정 충돌 확인
4. 가장 바쁜 날과 여유 있는 날 알려줘
5. 효율적인 일정 재배치 제안"

# 미팅 준비
"내일 오전 10시 클라이언트 미팅 준비:
1. 클라이언트 관련 이메일 이력 요약
2. 미팅 안건 초안 작성
3. 관련 자료 Drive에서 찾아 요약
4. 예상 질문과 답변 준비"
\`\`\`

### 데이터 분석

\`\`\`
# CSV 데이터 분석
"첨부한 매출 데이터를 분석해줘:
1. 월별 매출 추이 차트 생성
2. 상위 10개 제품의 매출 비중
3. 전월 대비 성장률 계산
4. 계절적 패턴 분석
5. 다음 달 매출 예측
6. 핵심 인사이트 3가지 도출"
\`\`\``,contentEn:`### Email Management

\`\`\`
# Email summary
"Summarize today's unread emails by importance.
For each email:
- Sender
- Subject
- Key content (1-2 lines)
- Urgency (high/medium/low)
- Required action"

# Email composition
"Write a business email with the following:
Recipient: Entire marketing team
Purpose: Q2 marketing strategy meeting notice
Date: April 15th, 2 PM
Location: Online (Zoom)
Include agenda, formal but friendly tone"
\`\`\`

### Schedule Management

\`\`\`
# Weekly schedule analysis
"Analyze my schedule this week and:
1. Calculate total meeting time
2. Find time slots available for focused work
3. Check for schedule conflicts
4. Tell me the busiest and most free days
5. Suggest efficient schedule rearrangement"

# Meeting preparation
"Prepare for tomorrow's 10 AM client meeting:
1. Summarize client-related email history
2. Draft meeting agenda
3. Find and summarize related materials from Drive
4. Prepare expected questions and answers"
\`\`\`

### Data Analysis

\`\`\`
# CSV data analysis
"Analyze the attached sales data:
1. Create monthly sales trend chart
2. Revenue share of top 10 products
3. Calculate month-over-month growth rate
4. Analyze seasonal patterns
5. Forecast next month's sales
6. Derive 3 key insights"
\`\`\``}]},C={id:"research-prompts",title:"Deep Research 프롬프트",titleEn:"Deep Research Prompts",icon:"fa-microscope",sections:[{title:"리서치 프롬프트 템플릿",titleEn:"Research Prompt Templates",content:`### 시장 조사 프롬프트

\`\`\`
# 기본 시장 조사
"[산업명] 시장에 대해 심층 조사해줘:
1. 글로벌 시장 규모 (2023-2025)
2. 한국 시장 규모와 성장률
3. 주요 플레이어 Top 5와 시장 점유율
4. 핵심 기술 트렌드 3가지
5. 규제 및 정책 동향
6. SWOT 분석
7. 2026-2028 시장 전망
각 항목에 출처를 명시하고, 데이터는 표로 정리해줘."

# 경쟁사 분석
"[경쟁사 A], [경쟁사 B], [경쟁사 C]를 비교 분석해줘:
비교 항목:
- 제품/서비스 기능
- 가격 정책
- 타겟 시장
- 기술 스택
- 최근 투자/인수 현황
- 사용자 리뷰 평가
- 장단점
비교 표와 레이더 차트 형식으로 정리해줘."
\`\`\`

### 기술 리서치 프롬프트

\`\`\`
# 기술 비교
"다음 기술들을 심층 비교해줘: [기술 A] vs [기술 B]
1. 아키텍처 차이
2. 성능 벤치마크 (최신 데이터)
3. 개발자 생태계 (커뮤니티 크기, 패키지 수)
4. 기업 채택 사례
5. 학습 곡선
6. 장단점 요약
7. 어떤 상황에서 어떤 것을 선택해야 하는지 가이드"

# 학술 리서치
"[연구 주제]에 대한 최근 2년간 주요 연구를 조사해줘:
1. 핵심 논문 10편의 제목, 저자, 기관, 핵심 기여
2. 연구 방향별 분류
3. 아직 해결되지 않은 과제
4. 향후 연구 방향 전망
5. 한국 연구진의 기여도
가능하면 논문 링크도 포함해줘."
\`\`\`

### 투자/비즈니스 리서치

\`\`\`
# 산업 투자 동향
"[산업]의 2024년 투자 동향을 분석해줘:
1. 총 투자 금액 (글로벌/한국)
2. 주요 투자 라운드 (시리즈별)
3. 활발한 투자자 (VC, CVC)
4. 핫한 서브 카테고리
5. 성공/실패 사례
6. 2025년 투자 전망
데이터와 차트를 풍부하게 포함해줘."
\`\`\`

> Deep Research 프롬프트는 구체적일수록 좋습니다. 원하는 분석의 깊이, 데이터 형식, 시간 범위를 명확하게 지정하면 더 높은 품질의 결과를 얻을 수 있습니다.`,contentEn:`### Market Research Prompts

\`\`\`
# Basic market research
"Conduct in-depth research on the [industry] market:
1. Global market size (2023-2025)
2. Korean market size and growth rate
3. Top 5 major players and market share
4. 3 key technology trends
5. Regulatory and policy trends
6. SWOT analysis
7. 2026-2028 market outlook
Cite sources for each item and organize data in tables."

# Competitor analysis
"Compare and analyze [Competitor A], [Competitor B], [Competitor C]:
Comparison items:
- Product/service features
- Pricing strategy
- Target market
- Tech stack
- Recent investment/acquisition status
- User review ratings
- Pros and cons
Organize in comparison tables and radar chart format."
\`\`\`

### Technical Research Prompts

\`\`\`
# Technology comparison
"Compare these technologies in depth: [Tech A] vs [Tech B]
1. Architecture differences
2. Performance benchmarks (latest data)
3. Developer ecosystem (community size, package count)
4. Enterprise adoption cases
5. Learning curve
6. Pros and cons summary
7. Guide on when to choose which"

# Academic research
"Research major studies on [research topic] from the past 2 years:
1. Title, authors, institution, key contribution of 10 key papers
2. Classification by research direction
3. Unsolved challenges
4. Future research direction outlook
5. Korean researchers' contributions
Include paper links where possible."
\`\`\`

### Investment/Business Research

\`\`\`
# Industry investment trends
"Analyze 2024 investment trends in [industry]:
1. Total investment amount (global/Korean)
2. Major investment rounds (by series)
3. Active investors (VC, CVC)
4. Hot sub-categories
5. Success/failure cases
6. 2025 investment outlook
Include rich data and charts."
\`\`\`

> Deep Research prompts work better when specific. Clearly specifying the desired analysis depth, data format, and time range yields higher quality results.`}]},x={id:"advanced",title:"고급 프롬프트 기법",titleEn:"Advanced Prompt Techniques",icon:"fa-wand-magic-sparkles",sections:[{title:"고급 프롬프트 패턴",titleEn:"Advanced Prompt Patterns",content:`### 1. 역할 부여 (Persona Pattern)

AI에게 특정 역할을 부여하면 해당 분야에 특화된 응답을 받을 수 있습니다.

\`\`\`
"너는 20년 경력의 데이터 사이언티스트이자 비즈니스 컨설턴트야.
고객의 이탈률을 줄이기 위한 데이터 기반 전략을 제시해줘.
기술적 분석과 비즈니스 액션 플랜을 모두 포함해줘."
\`\`\`

### 2. 단계별 추론 (Chain of Thought)

복잡한 문제는 AI에게 단계별로 생각하도록 요청하세요.

\`\`\`
"단계별로 분석해줘:
1단계: 현재 상황 파악
2단계: 문제점 도출
3단계: 원인 분석
4단계: 해결 방안 제시
5단계: 실행 계획 수립
각 단계의 추론 과정을 설명해줘."
\`\`\`

### 3. 멀티 관점 분석 (Multi-Perspective)

하나의 주제를 여러 관점에서 분석하도록 요청합니다.

\`\`\`
"AI 규제에 대해 다음 관점에서 각각 분석해줘:
1. 기술 기업의 관점
2. 정부/규제 기관의 관점
3. 소비자/시민의 관점
4. 학계/연구자의 관점
5. 투자자의 관점
각 관점의 핵심 논점과 우려사항을 정리하고,
종합적인 균형 잡힌 결론을 도출해줘."
\`\`\`

### 4. 제약 기반 생성 (Constraint-based)

구체적인 제약 조건을 설정하여 원하는 형태의 결과물을 얻습니다.

\`\`\`
"다음 제약 조건으로 마케팅 카피를 작성해줘:
- 글자 수: 100자 이내
- 톤: 젊고 활기찬
- 포함 키워드: AI, 미래, 혁신
- 타겟: 20-30대 스타트업 관계자
- 형식: 헤드라인 + 서브 카피
- 5가지 버전을 만들어줘"
\`\`\`

### 5. 반복 개선 (Iterative Refinement)

첫 결과물을 기반으로 점진적으로 개선합니다.

\`\`\`
# 1차 요청
"회사 소개 페이지 문구를 작성해줘."

# 2차 개선
"좀 더 간결하게, 핵심 가치를 강조해줘."

# 3차 개선
"데이터와 수치를 추가해서 신뢰감을 높여줘."

# 4차 개선
"CTA를 더 강력하게, 긴급감을 주는 톤으로 수정해줘."
\`\`\``,contentEn:`### 1. Role Assignment (Persona Pattern)

Assigning a specific role to AI yields domain-specialized responses.

\`\`\`
"You are a data scientist and business consultant with 20 years of experience.
Present a data-driven strategy to reduce customer churn rate.
Include both technical analysis and business action plan."
\`\`\`

### 2. Step-by-Step Reasoning (Chain of Thought)

For complex problems, ask AI to think step by step.

\`\`\`
"Analyze step by step:
Step 1: Assess current situation
Step 2: Identify problems
Step 3: Analyze causes
Step 4: Propose solutions
Step 5: Develop execution plan
Explain the reasoning process at each step."
\`\`\`

### 3. Multi-Perspective Analysis

Request analysis of a single topic from multiple perspectives.

\`\`\`
"Analyze AI regulation from each of these perspectives:
1. Technology companies' perspective
2. Government/regulatory agencies' perspective
3. Consumer/citizen perspective
4. Academic/researcher perspective
5. Investor perspective
Summarize key arguments and concerns for each perspective,
and draw a comprehensive balanced conclusion."
\`\`\`

### 4. Constraint-based Generation

Set specific constraints to get results in the desired form.

\`\`\`
"Write marketing copy with these constraints:
- Character count: under 100
- Tone: Young and energetic
- Include keywords: AI, future, innovation
- Target: Startup professionals in their 20s-30s
- Format: Headline + sub copy
- Create 5 versions"
\`\`\`

### 5. Iterative Refinement

Progressively improve based on initial results.

\`\`\`
# 1st request
"Write copy for a company introduction page."

# 2nd refinement
"Make it more concise, emphasize core values."

# 3rd refinement
"Add data and numbers to build credibility."

# 4th refinement
"Make the CTA stronger, with a tone of urgency."
\`\`\``},{title:"도구 조합 프롬프트",titleEn:"Tool Combination Prompts",content:`### 멀티 도구 워크플로우

Genspark의 강점은 하나의 프롬프트로 여러 도구를 연계할 수 있다는 점입니다.

\`\`\`
# 완전한 마케팅 캠페인
"신제품 런칭 마케팅 캠페인을 준비해줘:

1단계 - 리서치 (Deep Research):
- 경쟁 제품 분석
- 타겟 시장 조사
- 트렌드 분석

2단계 - 전략 수립:
- 포지셔닝 전략
- 메시징 프레임워크
- 채널 전략

3단계 - 콘텐츠 생성:
- 소셜 미디어 이미지 5장 (이미지 생성)
- 30초 홍보 영상 (영상 생성)
- 랜딩 페이지 (AI Developer)
- 프레젠테이션 (AI Slides)

4단계 - 보고서:
- 전체 캠페인 계획 Sparkpage 생성"
\`\`\`

### 일일 업무 자동화

\`\`\`
"매일 아침 업무 시작 루틴을 실행해줘:
1. Gmail에서 중요 이메일 5개 요약
2. 오늘 일정 확인 및 미팅 준비 사항 정리
3. 어제 마무리하지 못한 작업 확인
4. 오늘의 우선순위 작업 3가지 제안
5. 관련 업계 뉴스 3개 요약
결과를 깔끔한 브리핑 형식으로 정리해줘."
\`\`\`

### 콘텐츠 제작 파이프라인

\`\`\`
"블로그 콘텐츠 제작 파이프라인을 실행해줘:
주제: 'AI가 바꾸는 교육의 미래'

1. Deep Research로 주제 리서치
2. 리서치 기반으로 블로그 포스트 작성 (2000자)
3. 포스트용 대표 이미지 1장 생성
4. 소셜 미디어 공유용 이미지 3장 생성
5. 핵심 내용 요약 카드 이미지 생성
6. 결과를 Sparkpage로 정리"
\`\`\`

> 복잡한 멀티 도구 프롬프트는 Pro 요금제에서 가장 효과적입니다. 무료 사용자는 크레딧 소모가 클 수 있으므로 단계를 나누어 실행하는 것이 좋습니다.`,contentEn:`### Multi-Tool Workflows

Genspark's strength is the ability to chain multiple tools with a single prompt.

\`\`\`
# Complete marketing campaign
"Prepare a new product launch marketing campaign:

Step 1 - Research (Deep Research):
- Competitive product analysis
- Target market research
- Trend analysis

Step 2 - Strategy development:
- Positioning strategy
- Messaging framework
- Channel strategy

Step 3 - Content creation:
- 5 social media images (Image generation)
- 30-second promo video (Video generation)
- Landing page (AI Developer)
- Presentation (AI Slides)

Step 4 - Report:
- Create full campaign plan Sparkpage"
\`\`\`

### Daily Work Automation

\`\`\`
"Run my daily morning work routine:
1. Summarize 5 important emails from Gmail
2. Check today's schedule and organize meeting prep items
3. Check unfinished tasks from yesterday
4. Suggest 3 priority tasks for today
5. Summarize 3 relevant industry news items
Organize results in a clean briefing format."
\`\`\`

### Content Production Pipeline

\`\`\`
"Execute the blog content production pipeline:
Topic: 'The Future of Education Changed by AI'

1. Research the topic with Deep Research
2. Write a blog post based on research (2000 words)
3. Generate 1 featured image for the post
4. Generate 3 social media sharing images
5. Generate key content summary card images
6. Organize results into a Sparkpage"
\`\`\`

> Complex multi-tool prompts are most effective with the Pro plan. Free users may consume significant credits, so it is better to execute steps separately.`}]},l=[b,S,C,x];function R(){const{language:p}=f(),a=p==="ko",[n,r]=y.useState(0),o=l[n],d={code({inline:t,className:s,children:i,...u}){const c=/language-(\w+)/.exec(s||"");return!t&&c?e.jsx(m,{code:String(i).replace(/\n$/,""),language:c[1]}):!t&&!c&&String(i).includes(`
`)?e.jsx(m,{code:String(i).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...u,children:i})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(k,{type:"tip",children:t})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(v,{title:a?"프롬프트 가이드":"Prompt Guide",path:"/prompt-guide"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:a?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:l.map((t,s)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${s===n?"active":""}`,onClick:()=>r(s),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),a?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:a?o.title:o.titleEn})}),o.sections.map((t,s)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:a?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(h,{remarkPlugins:[g],components:d,children:a?t.content:t.contentEn})})]},s)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:n===0,onClick:()=>r(n-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",a?"이전":"Previous"]}),e.jsxs("button",{disabled:n===l.length-1,onClick:()=>r(n+1),children:[a?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{R as default};
