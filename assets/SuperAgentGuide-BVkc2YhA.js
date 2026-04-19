import{j as e,M as g,r as h}from"./markdown-nDXzyGI7.js";import{b as y}from"./vendor-C9mfkM5v.js";import{u as f}from"./index-CBH-WSZ1.js";import{S as v}from"./SEOHead--YPcRRQn.js";import{T as S,C as u}from"./TipBox-CtPpxSpa.js";const k={id:"overview",title:"Super Agent 개요",titleEn:"Super Agent Overview",icon:"fa-robot",sections:[{title:"Super Agent란?",titleEn:"What is Super Agent?",content:`Super Agent는 Genspark의 핵심 AI 에이전트로, 단순한 질문-답변을 넘어 복잡한 멀티 스텝 작업을 자율적으로 수행할 수 있는 지능형 비서입니다. 여러 AI 모델과 도구를 결합하여 사용자의 요청을 완벽하게 처리합니다.

### 핵심 기능

- **멀티 모델 엔진**: GPT-4, Claude, Gemini 등 여러 AI 모델을 상황에 맞게 자동 선택
- **실시간 웹 검색**: 최신 정보를 실시간으로 검색하고 종합
- **파일 분석**: PDF, 이미지, 스프레드시트 등 다양한 파일 형식 처리
- **코드 실행**: Python 코드를 직접 실행하여 데이터 분석 및 시각화
- **자동화 워크플로우**: Gmail, Google Drive, Calendar 등과 연동하여 업무 자동화
- **콘텐츠 생성**: 이미지, 문서, 프레젠테이션 등 다양한 콘텐츠 자동 생성

### 일반 챗봇과의 차이점

| 기능 | 일반 챗봇 | Super Agent |
|------|-----------|-------------|
| 작업 방식 | 단일 응답 생성 | 멀티 스텝 자율 실행 |
| 도구 사용 | 제한적 | 웹 검색, 코드, 파일, API 등 |
| 모델 | 단일 모델 | 멀티 모델 자동 선택 |
| 자동화 | 불가 | Gmail, Drive, Calendar 연동 |
| 결과물 | 텍스트 | 텍스트, 이미지, 코드, 문서 등 |

### 시작하기

1. [genspark.ai](https://www.genspark.ai)에 접속하여 로그인합니다
2. 메인 채팅 인터페이스에서 Super Agent가 기본으로 활성화되어 있습니다
3. 자연어로 원하는 작업을 설명하면 Super Agent가 자동으로 최적의 도구를 선택하여 수행합니다
4. 결과를 확인하고 필요시 추가 지시를 통해 개선할 수 있습니다`,contentEn:`Super Agent is Genspark's core AI agent, an intelligent assistant that goes beyond simple Q&A to autonomously perform complex multi-step tasks. It combines multiple AI models and tools to completely handle user requests.

### Key Features

- **Multi-model Engine**: Automatically selects the appropriate AI model (GPT-4, Claude, Gemini, etc.) for each situation
- **Real-time Web Search**: Searches and synthesizes the latest information in real-time
- **File Analysis**: Processes various file formats including PDFs, images, and spreadsheets
- **Code Execution**: Directly executes Python code for data analysis and visualization
- **Automation Workflows**: Integrates with Gmail, Google Drive, Calendar for task automation
- **Content Generation**: Automatically generates various content including images, documents, and presentations

### Differences from Regular Chatbots

| Feature | Regular Chatbot | Super Agent |
|---------|----------------|-------------|
| Work Method | Single response | Multi-step autonomous execution |
| Tool Usage | Limited | Web search, code, files, APIs, etc. |
| Models | Single model | Multi-model auto-selection |
| Automation | Not available | Gmail, Drive, Calendar integration |
| Output | Text | Text, images, code, documents, etc. |

### Getting Started

1. Visit [genspark.ai](https://www.genspark.ai) and log in
2. Super Agent is enabled by default in the main chat interface
3. Describe the desired task in natural language, and Super Agent will automatically select and use the optimal tools
4. Review the results and provide additional instructions to refine if needed`},{title:"작업 흐름 이해하기",titleEn:"Understanding the Workflow",content:`### Super Agent의 작업 처리 과정

Super Agent는 사용자의 요청을 받으면 다음과 같은 단계로 처리합니다.

1. **요청 분석**: 사용자의 의도를 파악하고 필요한 작업을 분해
2. **계획 수립**: 작업을 수행하기 위한 최적의 단계와 도구를 결정
3. **도구 선택**: 웹 검색, 코드 실행, 파일 처리 등 적합한 도구 선택
4. **실행**: 각 단계를 순차적 또는 병렬로 실행
5. **결과 종합**: 모든 단계의 결과를 종합하여 최종 답변 생성

### 예시: 시장 분석 요청

\`\`\`
사용자: "한국 전기차 시장의 2024년 현황을 분석하고 보고서를 만들어줘"

Super Agent 처리 과정:
1. 웹 검색으로 최신 한국 전기차 시장 데이터 수집
2. 학술 논문 및 업계 보고서 참조
3. 수집된 데이터를 Python으로 분석 및 차트 생성
4. Sparkpage 형태의 종합 보고서 작성
5. 최종 결과물 제시
\`\`\`

### 실시간 진행 상황 확인

Super Agent가 작업을 수행하는 동안 각 단계의 진행 상황을 실시간으로 확인할 수 있습니다. 어떤 도구를 사용하고 있는지, 어떤 정보를 검색하고 있는지 투명하게 보여줍니다. 이를 통해 사용자는 AI의 작업 과정을 이해하고 필요시 방향을 수정할 수 있습니다.

> Super Agent는 작업의 복잡도에 따라 처리 시간이 달라집니다. 간단한 질문은 몇 초, 복잡한 리서치는 수 분이 소요될 수 있습니다.`,contentEn:`### How Super Agent Processes Tasks

When Super Agent receives a user request, it processes it through the following stages:

1. **Request Analysis**: Understands the user's intent and breaks down required tasks
2. **Plan Creation**: Determines optimal steps and tools to perform the task
3. **Tool Selection**: Selects appropriate tools such as web search, code execution, and file processing
4. **Execution**: Executes each step sequentially or in parallel
5. **Result Synthesis**: Combines results from all steps to generate the final answer

### Example: Market Analysis Request

\`\`\`
User: "Analyze the 2024 Korean EV market status and create a report"

Super Agent Process:
1. Collect latest Korean EV market data via web search
2. Reference academic papers and industry reports
3. Analyze collected data and create charts with Python
4. Write a comprehensive report in Sparkpage format
5. Present final deliverable
\`\`\`

### Real-time Progress Tracking

You can track the progress of each step in real-time while Super Agent works. It transparently shows which tools are being used and what information is being searched. This allows users to understand the AI's work process and redirect it if necessary.

> Processing time varies based on task complexity. Simple questions take seconds, while complex research may take several minutes.`}]},A={id:"research",title:"리서치 & 분석",titleEn:"Research & Analysis",icon:"fa-magnifying-glass-chart",sections:[{title:"리서치 기능 활용",titleEn:"Using Research Features",content:`Super Agent는 실시간 웹 검색과 데이터 분석을 결합하여 강력한 리서치 도구로 활용할 수 있습니다. 단순 검색을 넘어 정보를 종합하고 분석하여 인사이트를 제공합니다.

### 리서치 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| 시장 조사 | 산업 트렌드, 경쟁사 분석 | "한국 SaaS 시장 규모와 성장률" |
| 기술 리서치 | 기술 비교, 아키텍처 분석 | "React vs Vue vs Svelte 비교" |
| 학술 조사 | 논문 검색, 연구 동향 | "양자 컴퓨팅 최신 연구 동향" |
| 제품 비교 | 기능, 가격, 리뷰 비교 | "MacBook Pro vs Dell XPS 비교" |
| 트렌드 분석 | 소셜 미디어, 뉴스 트렌드 | "2024 AI 기술 트렌드" |

### 효과적인 리서치 프롬프트

\`\`\`
# 좋은 리서치 프롬프트 예시

"2024년 글로벌 생성형 AI 시장에 대해 다음을 조사해줘:
1. 시장 규모와 성장률
2. 주요 플레이어와 시장 점유율
3. 핵심 기술 트렌드
4. 한국 시장의 특수성
결과를 표와 차트로 정리해줘."

# 피해야 할 모호한 프롬프트

"AI 시장에 대해 알려줘"  (너무 광범위)
\`\`\`

### 리서치 결과 활용

Super Agent의 리서치 결과는 다양한 형태로 활용할 수 있습니다.

- **보고서 변환**: 리서치 결과를 Sparkpage 보고서로 자동 변환
- **프레젠테이션**: AI Slides로 바로 프레젠테이션 슬라이드 생성
- **데이터 시각화**: Python 코드 실행으로 차트 및 그래프 자동 생성
- **추가 분석**: 후속 질문을 통해 특정 영역을 더 깊이 파고들기`,contentEn:`Super Agent can be used as a powerful research tool by combining real-time web search with data analysis. It goes beyond simple search to synthesize and analyze information, providing insights.

### Research Types

| Type | Description | Example |
|------|-------------|---------|
| Market Research | Industry trends, competitor analysis | "Korean SaaS market size and growth rate" |
| Tech Research | Technology comparison, architecture analysis | "React vs Vue vs Svelte comparison" |
| Academic Research | Paper search, research trends | "Latest quantum computing research trends" |
| Product Comparison | Features, pricing, reviews | "MacBook Pro vs Dell XPS comparison" |
| Trend Analysis | Social media, news trends | "2024 AI technology trends" |

### Effective Research Prompts

\`\`\`
# Good research prompt example

"Research the following about the 2024 global generative AI market:
1. Market size and growth rate
2. Major players and market share
3. Key technology trends
4. Specifics of the Korean market
Organize results in tables and charts."

# Vague prompt to avoid

"Tell me about the AI market"  (too broad)
\`\`\`

### Utilizing Research Results

Super Agent's research results can be used in various formats:

- **Report Conversion**: Automatically convert research results to Sparkpage reports
- **Presentations**: Generate presentation slides directly with AI Slides
- **Data Visualization**: Auto-generate charts and graphs by executing Python code
- **Further Analysis**: Dive deeper into specific areas through follow-up questions`},{title:"데이터 분석",titleEn:"Data Analysis",content:`### 데이터 분석 워크플로우

Super Agent는 파일을 업로드하면 자동으로 데이터를 분석하고 인사이트를 제공합니다.

**지원 파일 형식:**

- CSV, Excel (.xlsx, .xls)
- JSON, XML
- PDF (텍스트 추출 및 분석)
- 이미지 (OCR, 차트 해석)

### 분석 요청 예시

\`\`\`
# 매출 데이터 분석
"첨부한 CSV 파일의 월별 매출 데이터를 분석해줘.
- 전월 대비 성장률 계산
- 상위 5개 제품의 매출 추이 차트 생성
- 계절적 패턴 분석
- 다음 분기 매출 예측"

# 설문 결과 분석
"이 설문 결과 스프레드시트를 분석해서:
- 주요 응답 패턴 요약
- 연령대별 차이점 분석
- 상관관계 분석
- 핵심 인사이트 3가지 도출"
\`\`\`

### Python 코드 실행

Super Agent는 분석 과정에서 Python 코드를 직접 실행할 수 있습니다. pandas, matplotlib, seaborn 등의 라이브러리를 활용하여 전문적인 데이터 분석과 시각화를 수행합니다.

- **데이터 전처리**: 결측값 처리, 데이터 변환, 필터링
- **통계 분석**: 기술통계, 상관분석, 회귀분석
- **시각화**: 막대 차트, 선 그래프, 히트맵, 산점도 등
- **예측 모델링**: 시계열 분석, 트렌드 예측

> 데이터 분석 시 민감한 개인정보가 포함된 파일은 업로드하지 않도록 주의하세요. Genspark는 업로드된 파일을 분석 목적으로만 사용합니다.`,contentEn:`### Data Analysis Workflow

When you upload a file, Super Agent automatically analyzes the data and provides insights.

**Supported File Formats:**

- CSV, Excel (.xlsx, .xls)
- JSON, XML
- PDF (text extraction and analysis)
- Images (OCR, chart interpretation)

### Analysis Request Examples

\`\`\`
# Sales data analysis
"Analyze the monthly sales data in the attached CSV file:
- Calculate month-over-month growth rate
- Create a chart of sales trends for the top 5 products
- Analyze seasonal patterns
- Forecast next quarter's sales"

# Survey results analysis
"Analyze this survey results spreadsheet:
- Summarize key response patterns
- Analyze differences by age group
- Perform correlation analysis
- Derive 3 key insights"
\`\`\`

### Python Code Execution

Super Agent can directly execute Python code during analysis. It uses libraries like pandas, matplotlib, and seaborn to perform professional data analysis and visualization.

- **Data Preprocessing**: Handle missing values, data transformation, filtering
- **Statistical Analysis**: Descriptive statistics, correlation analysis, regression analysis
- **Visualization**: Bar charts, line graphs, heatmaps, scatter plots, etc.
- **Predictive Modeling**: Time series analysis, trend forecasting

> Be careful not to upload files containing sensitive personal information during data analysis. Genspark uses uploaded files only for analysis purposes.`}]},w={id:"automation",title:"자동화 워크플로우",titleEn:"Automation Workflows",icon:"fa-gears",sections:[{title:"업무 자동화 개요",titleEn:"Task Automation Overview",content:`Super Agent는 다양한 생산성 도구와 연동하여 반복적인 업무를 자동화할 수 있습니다. Gmail, Google Drive, Google Calendar 등과의 통합을 통해 일상적인 업무 프로세스를 효율화합니다.

### 자동화 가능한 작업

| 카테고리 | 자동화 작업 | 연동 도구 |
|----------|------------|-----------|
| 이메일 | 이메일 작성, 요약, 분류, 자동 응답 | Gmail |
| 일정 관리 | 일정 생성, 충돌 확인, 일정 요약 | Google Calendar |
| 문서 관리 | 문서 생성, 편집, 정리 | Google Drive |
| 리서치 | 정기 리서치, 모니터링 | 웹 검색 |
| 데이터 처리 | 스프레드시트 분석, 보고서 생성 | Sheets |

### 자동화 설정 방법

1. **도구 연결**: Genspark 설정에서 Google 계정을 연결합니다
2. **권한 부여**: 필요한 서비스(Gmail, Drive, Calendar)에 대한 접근 권한을 허용합니다
3. **자동화 요청**: 자연어로 자동화하고 싶은 작업을 설명합니다
4. **확인 및 실행**: Super Agent가 제안한 작업을 확인한 후 실행합니다

### 이메일 자동화 예시

\`\`\`
# 이메일 작성
"김 대리님에게 다음 주 화요일 미팅 일정 확인 이메일을 작성해줘.
공손하고 전문적인 톤으로 부탁해."

# 이메일 요약
"오늘 받은 읽지 않은 이메일을 요약해줘.
중요도 순으로 정리하고, 즉시 응답이 필요한 것을 표시해줘."

# 자동 응답 초안
"이 미팅 요청 이메일에 대한 수락 응답을 작성해줘.
다음 주 수요일 오후 2시에 가능하다고 알려줘."
\`\`\``,contentEn:`Super Agent can automate repetitive tasks through integration with various productivity tools. It streamlines daily work processes through integrations with Gmail, Google Drive, Google Calendar, and more.

### Automatable Tasks

| Category | Automated Tasks | Integrated Tools |
|----------|----------------|-----------------|
| Email | Compose, summarize, classify, auto-reply | Gmail |
| Scheduling | Create events, check conflicts, summarize schedule | Google Calendar |
| Documents | Create, edit, organize documents | Google Drive |
| Research | Regular research, monitoring | Web Search |
| Data Processing | Spreadsheet analysis, report generation | Sheets |

### How to Set Up Automation

1. **Connect Tools**: Connect your Google account in Genspark settings
2. **Grant Permissions**: Allow access permissions for required services (Gmail, Drive, Calendar)
3. **Request Automation**: Describe the task you want to automate in natural language
4. **Confirm and Execute**: Review the actions proposed by Super Agent, then execute

### Email Automation Examples

\`\`\`
# Compose email
"Write an email to Deputy Kim to confirm next Tuesday's meeting schedule.
Please use a polite and professional tone."

# Email summary
"Summarize today's unread emails.
Organize by importance and mark those requiring immediate response."

# Auto-reply draft
"Write an acceptance response to this meeting request email.
Let them know I'm available next Wednesday at 2 PM."
\`\`\``},{title:"일정 및 문서 자동화",titleEn:"Calendar & Document Automation",content:`### Google Calendar 연동

Super Agent는 Google Calendar와 연동하여 일정 관리를 자동화합니다.

\`\`\`
# 일정 생성
"다음 주 목요일 오전 10시에 '프로젝트 킥오프 미팅'을 생성해줘.
참석자: team@company.com
장소: 3층 대회의실
1시간 예정, 30분 전 알림 설정"

# 일정 분석
"이번 주 내 일정을 분석해줘.
- 총 미팅 시간
- 집중 작업 가능한 빈 시간대
- 일정 충돌 여부 확인"

# 미팅 준비
"내일 오후 2시 클라이언트 미팅을 위해:
- 미팅 안건 정리
- 관련 자료 요약
- 논의 포인트 리스트 작성"
\`\`\`

### Google Drive 자동화

Google Drive와 연동하여 문서 관리를 효율화할 수 있습니다.

- **문서 생성**: 회의록, 보고서, 기획서 등을 자동 생성
- **문서 요약**: 긴 문서의 핵심 내용 자동 요약
- **파일 정리**: 폴더 구조 제안 및 파일 분류
- **템플릿 활용**: 반복되는 문서 유형에 대한 템플릿 생성

### 워크플로우 조합

여러 도구를 조합하여 복잡한 워크플로우를 구성할 수 있습니다.

\`\`\`
# 주간 보고 자동화
"매주 금요일 업무 자동화를 설정해줘:
1. 이번 주 Gmail에서 주요 업무 이메일 요약
2. Google Calendar에서 이번 주 미팅 내역 정리
3. 종합하여 주간 보고서 작성
4. 팀 Drive 폴더에 저장"
\`\`\`

> 자동화 워크플로우를 설정할 때는 개인정보 보호에 주의하세요. 민감한 정보가 포함된 이메일이나 문서는 자동화 범위에서 제외하는 것이 좋습니다.`,contentEn:`### Google Calendar Integration

Super Agent integrates with Google Calendar to automate schedule management.

\`\`\`
# Create event
"Create a 'Project Kickoff Meeting' next Thursday at 10 AM.
Attendees: team@company.com
Location: 3rd floor main conference room
Duration: 1 hour, set reminder 30 minutes before"

# Schedule analysis
"Analyze my schedule for this week:
- Total meeting time
- Available time slots for focused work
- Check for schedule conflicts"

# Meeting preparation
"For tomorrow's 2 PM client meeting:
- Organize meeting agenda
- Summarize relevant materials
- Create discussion points list"
\`\`\`

### Google Drive Automation

Integrate with Google Drive to streamline document management.

- **Document Creation**: Auto-generate meeting notes, reports, proposals, etc.
- **Document Summary**: Automatically summarize key content from long documents
- **File Organization**: Suggest folder structures and classify files
- **Template Usage**: Create templates for recurring document types

### Workflow Combinations

Combine multiple tools to create complex workflows.

\`\`\`
# Weekly report automation
"Set up a weekly Friday automation:
1. Summarize key work emails from Gmail this week
2. Organize this week's meeting details from Google Calendar
3. Compile into a weekly report
4. Save to team Drive folder"
\`\`\`

> Be mindful of privacy when setting up automation workflows. It is recommended to exclude emails and documents containing sensitive information from the automation scope.`}]},x={id:"productivity",title:"생산성 도구 연동",titleEn:"Productivity Integrations",icon:"fa-plug",sections:[{title:"Google Workspace 연동",titleEn:"Google Workspace Integration",content:`Super Agent는 Google Workspace의 주요 서비스와 긴밀하게 연동됩니다. 이를 통해 기존 업무 환경을 유지하면서 AI의 도움을 받을 수 있습니다.

### 연동 가능한 서비스

| 서비스 | 주요 기능 | 활용 예시 |
|--------|----------|-----------|
| Gmail | 읽기, 작성, 검색, 분류 | 이메일 요약, 자동 응답 초안 |
| Google Drive | 파일 접근, 생성, 편집 | 문서 분석, 보고서 자동 생성 |
| Google Calendar | 일정 조회, 생성, 수정 | 미팅 스케줄링, 일정 최적화 |
| Google Sheets | 데이터 읽기, 분석 | 스프레드시트 분석, 차트 생성 |
| Google Docs | 문서 생성, 편집 | 회의록, 기획서 자동 작성 |

### 연동 설정 방법

1. Genspark 웹사이트에서 **Settings** 메뉴로 이동합니다
2. **Integrations** 탭을 선택합니다
3. **Connect Google Account**를 클릭합니다
4. Google 계정으로 로그인하고 필요한 권한을 허용합니다
5. 연동이 완료되면 Super Agent가 자동으로 해당 서비스를 사용할 수 있습니다

### 보안 및 개인정보

- Genspark는 OAuth 2.0을 사용하여 안전하게 Google 서비스에 접근합니다
- 비밀번호를 저장하지 않으며, 토큰 기반의 인증을 사용합니다
- 언제든지 연동을 해제할 수 있습니다
- 접근 권한은 필요한 최소한의 범위로 제한됩니다`,contentEn:`Super Agent integrates closely with key Google Workspace services. This allows you to receive AI assistance while maintaining your existing work environment.

### Available Integrations

| Service | Key Functions | Usage Examples |
|---------|--------------|----------------|
| Gmail | Read, compose, search, classify | Email summaries, auto-reply drafts |
| Google Drive | File access, create, edit | Document analysis, auto-generated reports |
| Google Calendar | View, create, modify events | Meeting scheduling, schedule optimization |
| Google Sheets | Read data, analyze | Spreadsheet analysis, chart creation |
| Google Docs | Create, edit documents | Meeting notes, proposals auto-writing |

### Integration Setup

1. Navigate to the **Settings** menu on the Genspark website
2. Select the **Integrations** tab
3. Click **Connect Google Account**
4. Log in with your Google account and allow the required permissions
5. Once connected, Super Agent can automatically use these services

### Security & Privacy

- Genspark uses OAuth 2.0 to securely access Google services
- Passwords are not stored; token-based authentication is used
- You can disconnect integrations at any time
- Access permissions are limited to the minimum required scope`},{title:"실전 활용 시나리오",titleEn:"Real-World Usage Scenarios",content:`### 시나리오 1: 아침 업무 브리핑

매일 아침 Super Agent에게 업무 브리핑을 요청하세요.

\`\`\`
"오늘의 업무 브리핑을 해줘:
1. 읽지 않은 중요 이메일 요약 (5개)
2. 오늘 일정 정리
3. 어제 마무리하지 못한 업무 확인
4. 오늘의 우선순위 작업 제안"
\`\`\`

### 시나리오 2: 미팅 준비 자동화

\`\`\`
"오후 3시 마케팅팀 미팅 준비를 도와줘:
1. 지난 미팅 회의록에서 액션 아이템 확인
2. 이번 주 마케팅 관련 이메일 내용 정리
3. 미팅 안건 초안 작성
4. 관련 데이터 Drive에서 찾아서 요약"
\`\`\`

### 시나리오 3: 주간 보고서 작성

\`\`\`
"이번 주 주간 보고서를 작성해줘:
- 이번 주 완료된 미팅과 주요 결정사항
- 처리한 이메일 통계 (발신/수신/중요)
- 다음 주 예정 일정 미리보기
- KPI 진행 현황 (Drive의 KPI 트래커 참조)"
\`\`\`

### 시나리오 4: 고객 대응

\`\`\`
"고객 문의 이메일에 대한 응답을 준비해줘:
1. 고객의 이전 이메일 이력 확인
2. 관련 제품 정보 검색
3. 전문적이고 친절한 톤의 응답 이메일 초안 작성
4. 필요한 첨부 자료 Drive에서 찾기"
\`\`\`

> 생산성 도구 연동의 핵심은 반복적인 작업을 줄이고 의사결정에 집중하는 것입니다. AI가 정보를 수집하고 정리해주면, 사용자는 판단과 행동에 집중할 수 있습니다.`,contentEn:`### Scenario 1: Morning Work Briefing

Ask Super Agent for a work briefing every morning.

\`\`\`
"Give me today's work briefing:
1. Summary of important unread emails (top 5)
2. Today's schedule overview
3. Check unfinished tasks from yesterday
4. Suggest today's priority tasks"
\`\`\`

### Scenario 2: Meeting Preparation Automation

\`\`\`
"Help me prepare for the 3 PM marketing team meeting:
1. Check action items from the last meeting notes
2. Organize this week's marketing-related email content
3. Draft the meeting agenda
4. Find and summarize relevant data from Drive"
\`\`\`

### Scenario 3: Weekly Report Writing

\`\`\`
"Write this week's weekly report:
- Completed meetings and key decisions this week
- Email statistics processed (sent/received/important)
- Preview of next week's scheduled events
- KPI progress status (reference KPI tracker in Drive)"
\`\`\`

### Scenario 4: Customer Response

\`\`\`
"Prepare a response to this customer inquiry email:
1. Check the customer's previous email history
2. Search for relevant product information
3. Draft a professional and friendly response email
4. Find necessary attachments from Drive"
\`\`\`

> The key to productivity tool integration is reducing repetitive tasks and focusing on decision-making. When AI collects and organizes information, users can focus on judgment and action.`}]},C={id:"best-practices",title:"베스트 프랙티스",titleEn:"Best Practices",icon:"fa-star",sections:[{title:"효과적인 프롬프트 작성",titleEn:"Writing Effective Prompts",content:`Super Agent를 최대한 활용하려면 명확하고 구체적인 프롬프트를 작성하는 것이 중요합니다.

### 좋은 프롬프트의 5가지 원칙

1. **구체적으로 작성**: 원하는 결과물의 형식, 길이, 톤을 명시하세요
2. **맥락 제공**: 배경 정보와 목적을 설명하면 더 정확한 결과를 얻을 수 있습니다
3. **단계별 지시**: 복잡한 작업은 단계를 나누어 지시하세요
4. **출력 형식 지정**: 표, 리스트, 보고서 등 원하는 형식을 명시하세요
5. **제약 조건 설정**: 길이 제한, 언어, 스타일 등 제약 조건을 설정하세요

### 프롬프트 비교 예시

\`\`\`
# 나쁜 예시
"AI에 대해 알려줘"

# 좋은 예시
"생성형 AI 시장의 2024년 현황을 분석해줘.
다음 구조로 작성해:
1. 시장 규모 (글로벌/한국)
2. 주요 기업 Top 5 비교 표
3. 핵심 기술 트렌드 3가지
4. 2025년 전망
- 분량: 각 섹션 3-4단락
- 출처: 가능하면 출처 링크 포함
- 형식: 마크다운 보고서"
\`\`\`

### 반복 개선 전략

첫 번째 결과가 완벽하지 않을 수 있습니다. 다음과 같은 후속 프롬프트로 개선하세요.

- "좀 더 자세히 설명해줘" - 특정 부분 확장
- "표로 정리해줘" - 형식 변경
- "한국 시장에 초점을 맞춰줘" - 범위 조정
- "전문가가 아닌 사람도 이해할 수 있게" - 난이도 조정
- "수치와 통계를 더 추가해줘" - 콘텐츠 보강`,contentEn:`To get the most out of Super Agent, it is important to write clear and specific prompts.

### 5 Principles of Good Prompts

1. **Be Specific**: Specify the format, length, and tone of the desired output
2. **Provide Context**: Explaining background information and purpose leads to more accurate results
3. **Step-by-step Instructions**: Break complex tasks into steps
4. **Specify Output Format**: Specify desired format such as tables, lists, or reports
5. **Set Constraints**: Set constraints like length limits, language, and style

### Prompt Comparison Examples

\`\`\`
# Bad example
"Tell me about AI"

# Good example
"Analyze the 2024 status of the generative AI market.
Structure as follows:
1. Market size (global/Korean)
2. Comparison table of top 5 major companies
3. 3 key technology trends
4. 2025 outlook
- Length: 3-4 paragraphs per section
- Sources: Include source links where possible
- Format: Markdown report"
\`\`\`

### Iterative Improvement Strategy

The first result may not be perfect. Improve with follow-up prompts like these:

- "Explain in more detail" - expand specific parts
- "Organize into a table" - change format
- "Focus on the Korean market" - adjust scope
- "Make it understandable for non-experts" - adjust difficulty
- "Add more numbers and statistics" - enhance content`},{title:"활용 팁 모음",titleEn:"Tips Collection",content:`### 고급 활용 팁

**1. 멀티 태스크 요청**

하나의 프롬프트에서 여러 관련 작업을 동시에 요청할 수 있습니다.

\`\`\`
"다음 3가지를 동시에 해줘:
1. 'AI 마케팅' 키워드로 최신 트렌드 리서치
2. 리서치 결과를 바탕으로 블로그 포스트 초안 작성
3. 블로그 포스트에 사용할 이미지 3장 생성"
\`\`\`

**2. 역할 부여**

Super Agent에게 특정 역할을 부여하면 해당 분야에 특화된 응답을 받을 수 있습니다.

\`\`\`
"너는 10년 경력의 마케팅 전문가야.
우리 회사(B2B SaaS)의 Q1 마케팅 전략을 수립해줘."
\`\`\`

**3. 이전 대화 활용**

같은 대화 내에서 이전 결과를 참조하여 작업을 확장할 수 있습니다.

\`\`\`
"방금 작성한 보고서를:
1. 임원용 1페이지 요약본으로 만들어줘
2. 영어로 번역해줘
3. 프레젠테이션 슬라이드로 변환해줘"
\`\`\`

**4. 파일과 대화 결합**

파일을 업로드하면서 관련 지시를 함께 제공하세요.

\`\`\`
[파일 업로드: sales_2024.csv]
"이 매출 데이터에서:
1. 분기별 매출 추이 분석
2. 상위 고객 10명의 매출 비중
3. 전년 동기 대비 성장률
결과를 차트와 함께 보여줘"
\`\`\`

### 주의사항

- **개인정보 보호**: 민감한 개인정보(주민등록번호, 카드번호 등)를 포함하지 마세요
- **결과 검증**: AI의 수치 데이터와 팩트는 반드시 교차 검증하세요
- **크레딧 관리**: 무료 사용자는 일일 100 크레딧 한도를 고려하여 효율적으로 사용하세요
- **저작권 주의**: AI가 생성한 콘텐츠의 저작권 이슈를 인지하고 적절히 활용하세요`,contentEn:`### Advanced Usage Tips

**1. Multi-task Requests**

You can request multiple related tasks simultaneously in a single prompt.

\`\`\`
"Do these 3 things at once:
1. Research latest trends with the keyword 'AI Marketing'
2. Draft a blog post based on the research results
3. Generate 3 images for the blog post"
\`\`\`

**2. Role Assignment**

Assigning a specific role to Super Agent yields domain-specialized responses.

\`\`\`
"You are a marketing expert with 10 years of experience.
Develop a Q1 marketing strategy for our company (B2B SaaS)."
\`\`\`

**3. Leveraging Previous Conversation**

Within the same conversation, you can reference previous results to extend tasks.

\`\`\`
"Take the report you just wrote and:
1. Create a 1-page executive summary
2. Translate it to Korean
3. Convert it into presentation slides"
\`\`\`

**4. Combining Files and Conversation**

Upload files while providing related instructions.

\`\`\`
[File upload: sales_2024.csv]
"From this sales data:
1. Analyze quarterly sales trends
2. Revenue share of top 10 customers
3. Year-over-year growth rate
Show results with charts"
\`\`\`

### Precautions

- **Privacy Protection**: Do not include sensitive personal information (SSN, card numbers, etc.)
- **Result Verification**: Always cross-verify AI's numerical data and facts
- **Credit Management**: Free users should use efficiently considering the daily 100-credit limit
- **Copyright Awareness**: Be aware of copyright issues with AI-generated content and use appropriately`}]},c=[k,A,w,x,C];function E(){const{language:d}=f(),a=d==="ko",[s,i]=y.useState(0),r=c[s],m={code({inline:t,className:n,children:o,...p}){const l=/language-(\w+)/.exec(n||"");return!t&&l?e.jsx(u,{code:String(o).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(o).includes(`
`)?e.jsx(u,{code:String(o).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...p,children:o})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(S,{type:"tip",children:t})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(v,{title:a?"Super Agent 가이드":"Super Agent Guide",path:"/super-agent"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:a?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((t,n)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${n===s?"active":""}`,onClick:()=>i(n),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),a?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:a?r.title:r.titleEn})}),r.sections.map((t,n)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:a?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(g,{remarkPlugins:[h],components:m,children:a?t.content:t.contentEn})})]},n)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:s===0,onClick:()=>i(s-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",a?"이전":"Previous"]}),e.jsxs("button",{disabled:s===c.length-1,onClick:()=>i(s+1),children:[a?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{E as default};
