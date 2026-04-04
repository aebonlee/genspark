const basics = {
  id: 'basics',
  title: 'Genspark 프롬프트 기초',
  titleEn: 'Genspark Prompt Basics',
  icon: 'fa-graduation-cap',
  sections: [
    {
      title: '프롬프트 작성 원칙',
      titleEn: 'Prompt Writing Principles',
      content: `Genspark에서 효과적인 결과를 얻기 위한 프롬프트 작성의 기본 원칙을 소개합니다.

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

> 프롬프트는 길어도 괜찮습니다. 구체적일수록 AI가 더 정확한 결과를 제공합니다. 한 번에 완벽한 프롬프트를 작성하기보다, 대화를 통해 점진적으로 개선하는 것도 효과적입니다.`,
      contentEn: `Here are the basic principles of prompt writing for effective results with Genspark.

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

> Prompts can be long. The more specific, the more accurate results AI provides. Rather than writing the perfect prompt at once, improving gradually through conversation is also effective.`
    }
  ]
};

export default basics;
