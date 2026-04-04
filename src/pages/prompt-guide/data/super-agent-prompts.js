const superAgentPrompts = {
  id: 'super-agent-prompts',
  title: 'Super Agent 프롬프트',
  titleEn: 'Super Agent Prompts',
  icon: 'fa-robot',
  sections: [
    {
      title: '업무 자동화 프롬프트',
      titleEn: 'Task Automation Prompts',
      content: `### 이메일 관리

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
\`\`\``,
      contentEn: `### Email Management

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
\`\`\``
    }
  ]
};

export default superAgentPrompts;
