const automation = {
  id: 'automation',
  title: '자동화 워크플로우',
  titleEn: 'Automation Workflows',
  icon: 'fa-gears',
  sections: [
    {
      title: '업무 자동화 개요',
      titleEn: 'Task Automation Overview',
      content: `Super Agent는 다양한 생산성 도구와 연동하여 반복적인 업무를 자동화할 수 있습니다. Gmail, Google Drive, Google Calendar 등과의 통합을 통해 일상적인 업무 프로세스를 효율화합니다.

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
\`\`\``,
      contentEn: `Super Agent can automate repetitive tasks through integration with various productivity tools. It streamlines daily work processes through integrations with Gmail, Google Drive, Google Calendar, and more.

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
\`\`\``
    },
    {
      title: '일정 및 문서 자동화',
      titleEn: 'Calendar & Document Automation',
      content: `### Google Calendar 연동

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

> 자동화 워크플로우를 설정할 때는 개인정보 보호에 주의하세요. 민감한 정보가 포함된 이메일이나 문서는 자동화 범위에서 제외하는 것이 좋습니다.`,
      contentEn: `### Google Calendar Integration

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

> Be mindful of privacy when setting up automation workflows. It is recommended to exclude emails and documents containing sensitive information from the automation scope.`
    }
  ]
};

export default automation;
