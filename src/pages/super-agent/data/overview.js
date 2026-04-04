const overview = {
  id: 'overview',
  title: 'Super Agent 개요',
  titleEn: 'Super Agent Overview',
  icon: 'fa-robot',
  sections: [
    {
      title: 'Super Agent란?',
      titleEn: 'What is Super Agent?',
      content: `Super Agent는 Genspark의 핵심 AI 에이전트로, 단순한 질문-답변을 넘어 복잡한 멀티 스텝 작업을 자율적으로 수행할 수 있는 지능형 비서입니다. 여러 AI 모델과 도구를 결합하여 사용자의 요청을 완벽하게 처리합니다.

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
4. 결과를 확인하고 필요시 추가 지시를 통해 개선할 수 있습니다`,
      contentEn: `Super Agent is Genspark's core AI agent, an intelligent assistant that goes beyond simple Q&A to autonomously perform complex multi-step tasks. It combines multiple AI models and tools to completely handle user requests.

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
4. Review the results and provide additional instructions to refine if needed`
    },
    {
      title: '작업 흐름 이해하기',
      titleEn: 'Understanding the Workflow',
      content: `### Super Agent의 작업 처리 과정

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

> Super Agent는 작업의 복잡도에 따라 처리 시간이 달라집니다. 간단한 질문은 몇 초, 복잡한 리서치는 수 분이 소요될 수 있습니다.`,
      contentEn: `### How Super Agent Processes Tasks

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

> Processing time varies based on task complexity. Simple questions take seconds, while complex research may take several minutes.`
    }
  ]
};

export default overview;
