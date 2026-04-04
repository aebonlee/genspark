const productivity = {
  id: 'productivity',
  title: '생산성 도구 연동',
  titleEn: 'Productivity Integrations',
  icon: 'fa-plug',
  sections: [
    {
      title: 'Google Workspace 연동',
      titleEn: 'Google Workspace Integration',
      content: `Super Agent는 Google Workspace의 주요 서비스와 긴밀하게 연동됩니다. 이를 통해 기존 업무 환경을 유지하면서 AI의 도움을 받을 수 있습니다.

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
- 접근 권한은 필요한 최소한의 범위로 제한됩니다`,
      contentEn: `Super Agent integrates closely with key Google Workspace services. This allows you to receive AI assistance while maintaining your existing work environment.

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
- Access permissions are limited to the minimum required scope`
    },
    {
      title: '실전 활용 시나리오',
      titleEn: 'Real-World Usage Scenarios',
      content: `### 시나리오 1: 아침 업무 브리핑

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

> 생산성 도구 연동의 핵심은 반복적인 작업을 줄이고 의사결정에 집중하는 것입니다. AI가 정보를 수집하고 정리해주면, 사용자는 판단과 행동에 집중할 수 있습니다.`,
      contentEn: `### Scenario 1: Morning Work Briefing

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

> The key to productivity tool integration is reducing repetitive tasks and focusing on decision-making. When AI collects and organizes information, users can focus on judgment and action.`
    }
  ]
};

export default productivity;
