const phoneCalling = {
  id: 'phone-calling',
  title: 'AI 전화 기능',
  titleEn: 'AI Phone Calling',
  icon: 'fa-phone',
  sections: [
    {
      title: 'AI 전화란?',
      titleEn: 'What is AI Phone Calling?',
      content: `Genspark의 AI 전화 기능은 AI가 사용자를 대신하여 실제 전화를 걸어주는 혁신적인 기능입니다. 레스토랑 예약, 정보 문의, 일정 확인 등 전화가 필요한 상황에서 AI가 대신 통화합니다.

### 주요 기능

- **대리 전화**: AI가 사용자 대신 전화를 걸어 정보를 확인
- **자연스러운 대화**: 자연어 처리 기반의 자연스러운 음성 대화
- **실시간 기록**: 통화 내용을 실시간으로 텍스트로 기록
- **결과 요약**: 통화 종료 후 핵심 내용 자동 요약
- **다국어 지원**: 한국어, 영어 등 다양한 언어 지원

### 활용 시나리오

\`\`\`
# 레스토랑 예약
"이 레스토랑에 전화해서 이번 토요일 저녁 7시에
4명 예약이 가능한지 확인해줘.
전화번호: 02-1234-5678"

# 정보 문의
"이 병원에 전화해서 토요일 진료 시간을 확인해줘.
전화번호: 02-9876-5432"

# 서비스 문의
"이 인터넷 서비스 센터에 전화해서
요금제 변경 방법을 문의해줘."
\`\`\`

### 통화 설정 옵션

| 설정 | 설명 |
|------|------|
| 언어 | 통화에 사용할 언어 선택 |
| 톤 | 공식적/비공식적 대화 톤 |
| 목적 | 예약, 문의, 확인 등 |
| 추가 정보 | AI에게 전달할 배경 정보 |

### 요금제별 사용 한도

| 요금제 | 월 통화 시간 |
|--------|-------------|
| Free | 불가 |
| Plus | 30분/월 |
| Pro | 300분/월 |

> AI 전화 기능은 정보 확인, 예약 등 단순한 목적에 가장 적합합니다. 복잡한 협상이나 민감한 개인 정보가 필요한 통화에는 직접 전화하는 것을 권장합니다.`,
      contentEn: `Genspark's AI Phone Calling is an innovative feature where AI makes real phone calls on behalf of users. AI handles calls in situations requiring phone communication, such as restaurant reservations, information inquiries, and schedule confirmations.

### Key Features

- **Proxy Calling**: AI calls on behalf of the user to check information
- **Natural Conversation**: Natural voice conversation based on NLP
- **Real-time Recording**: Call content recorded as text in real-time
- **Result Summary**: Automatic summary of key content after call ends
- **Multilingual Support**: Supports various languages including Korean and English

### Usage Scenarios

\`\`\`
# Restaurant reservation
"Call this restaurant and check if a reservation for 4 people
is available this Saturday at 7 PM.
Phone: 02-1234-5678"

# Information inquiry
"Call this hospital and check Saturday consultation hours.
Phone: 02-9876-5432"

# Service inquiry
"Call this internet service center and ask about
how to change the plan."
\`\`\`

### Call Setting Options

| Setting | Description |
|---------|-------------|
| Language | Select language for the call |
| Tone | Formal/informal conversation tone |
| Purpose | Reservation, inquiry, confirmation, etc. |
| Additional Info | Background information to provide to AI |

### Usage Limits by Plan

| Plan | Monthly Call Time |
|------|-----------------|
| Free | Not available |
| Plus | 30 min/month |
| Pro | 300 min/month |

> AI Phone Calling is best suited for simple purposes like information checks and reservations. For complex negotiations or calls requiring sensitive personal information, it is recommended to call directly.`
    }
  ]
};

export default phoneCalling;
