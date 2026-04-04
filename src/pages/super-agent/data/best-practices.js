const bestPractices = {
  id: 'best-practices',
  title: '베스트 프랙티스',
  titleEn: 'Best Practices',
  icon: 'fa-star',
  sections: [
    {
      title: '효과적인 프롬프트 작성',
      titleEn: 'Writing Effective Prompts',
      content: `Super Agent를 최대한 활용하려면 명확하고 구체적인 프롬프트를 작성하는 것이 중요합니다.

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
- "수치와 통계를 더 추가해줘" - 콘텐츠 보강`,
      contentEn: `To get the most out of Super Agent, it is important to write clear and specific prompts.

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
- "Add more numbers and statistics" - enhance content`
    },
    {
      title: '활용 팁 모음',
      titleEn: 'Tips Collection',
      content: `### 고급 활용 팁

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
- **저작권 주의**: AI가 생성한 콘텐츠의 저작권 이슈를 인지하고 적절히 활용하세요`,
      contentEn: `### Advanced Usage Tips

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
- **Copyright Awareness**: Be aware of copyright issues with AI-generated content and use appropriately`
    }
  ]
};

export default bestPractices;
