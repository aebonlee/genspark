const tips = {
  id: 'tips',
  title: '효과적 사용 팁',
  titleEn: 'Effective Usage Tips',
  icon: 'fa-lightbulb',
  sections: [
    {
      title: '리서치 품질 높이기',
      titleEn: 'Improving Research Quality',
      content: `Deep Research의 결과 품질을 높이기 위한 전략을 소개합니다.

### 프롬프트 최적화

**1. 범위를 구체적으로 설정**

\`\`\`
# 나쁜 예시 (너무 광범위)
"AI에 대해 조사해줘"

# 좋은 예시 (구체적)
"2024년 생성형 AI 스타트업의 투자 유치 현황을
미국, 한국, 일본 시장별로 비교 분석해줘"
\`\`\`

**2. 원하는 분석 깊이 명시**

\`\`\`
# 깊이를 명시한 예시
"한국 이커머스 시장을 심층 분석해줘.
각 섹션은 최소 500자 이상으로 상세하게 작성하고,
데이터와 통계를 최대한 포함해줘."
\`\`\`

**3. 출력 형식 지정**

\`\`\`
"결과를 다음 형식으로 작성해줘:
1. 요약 (Executive Summary) - 10줄 이내
2. 본문 - 각 주제별 상세 분석
3. 데이터 표 - 핵심 수치 비교
4. 결론 및 시사점
5. 참고 자료 목록"
\`\`\`

### 후속 분석 활용

Deep Research 결과를 받은 후 추가적인 분석을 요청할 수 있습니다.

- "이 중에서 한국 시장 부분을 더 자세히 분석해줘"
- "이 데이터를 차트로 시각화해줘"
- "경쟁사 A와 B의 차이점을 더 깊이 비교해줘"
- "이 결과를 영어로 번역해줘"
- "이 내용을 프레젠테이션 형식으로 변환해줘"`,
      contentEn: `Here are strategies to improve the quality of Deep Research results.

### Prompt Optimization

**1. Set Specific Scope**

\`\`\`
# Bad example (too broad)
"Research AI for me"

# Good example (specific)
"Compare and analyze the funding status of generative AI startups
in 2024, by US, Korean, and Japanese markets"
\`\`\`

**2. Specify Desired Analysis Depth**

\`\`\`
# Example specifying depth
"Conduct an in-depth analysis of the Korean e-commerce market.
Write each section in at least 500 characters with detail,
and include as much data and statistics as possible."
\`\`\`

**3. Specify Output Format**

\`\`\`
"Write results in the following format:
1. Executive Summary - within 10 lines
2. Body - detailed analysis by topic
3. Data tables - key metrics comparison
4. Conclusions and implications
5. References list"
\`\`\`

### Leveraging Follow-up Analysis

After receiving Deep Research results, you can request additional analysis:

- "Analyze the Korean market section in more detail"
- "Visualize this data in charts"
- "Compare differences between Competitor A and B more deeply"
- "Translate these results to Korean"
- "Convert this content to presentation format"`
    },
    {
      title: '크레딧 효율적 사용',
      titleEn: 'Efficient Credit Usage',
      content: `### 크레딧 소모 이해

Deep Research는 일반 대화보다 더 많은 크레딧을 소모합니다. 무료 사용자는 효율적인 크레딧 관리가 중요합니다.

| 작업 유형 | 예상 크레딧 소모 |
|-----------|-----------------|
| 간단한 질문 | 1 크레딧 |
| 일반 대화 | 1-2 크레딧 |
| Deep Research (기본) | 5-10 크레딧 |
| Deep Research (심층) | 10-20 크레딧 |
| Deep Research + 시각화 | 15-25 크레딧 |

### 효율적 사용 전략

**1. 질문을 한 번에 잘 구성하기**

여러 번 질문하는 것보다 한 번에 포괄적으로 질문하는 것이 크레딧을 절약합니다.

**2. 단계적 접근**

먼저 간단한 검색으로 방향을 잡은 후, 필요한 부분만 Deep Research로 심층 분석하세요.

\`\`\`
# 1단계: 간단한 검색 (1 크레딧)
"한국 전기차 시장의 주요 트렌드가 뭐야?"

# 2단계: 관심 영역만 Deep Research (5-10 크레딧)
"한국 전기차 배터리 기술 트렌드를 심층 조사해줘.
특히 전고체 배터리와 LFP 배터리 시장 비교에 초점."
\`\`\`

**3. 결과 재활용**

한 번 받은 Deep Research 결과를 다양한 형태로 변환하여 활용하세요. 변환 작업은 새로운 리서치보다 크레딧이 적게 듭니다.

\`\`\`
"방금 리서치 결과를 바탕으로:
1. 10줄 요약 작성
2. 핵심 포인트 5개 추출
3. 프레젠테이션 슬라이드 개요 작성"
\`\`\`

> Plus($19.99/월) 또는 Pro($199.99/월) 요금제로 업그레이드하면 크레딧 제한 없이 Deep Research를 무제한으로 사용할 수 있습니다.`,
      contentEn: `### Understanding Credit Consumption

Deep Research consumes more credits than regular conversations. Efficient credit management is important for free users.

| Task Type | Estimated Credit Usage |
|-----------|----------------------|
| Simple question | 1 credit |
| General conversation | 1-2 credits |
| Deep Research (basic) | 5-10 credits |
| Deep Research (in-depth) | 10-20 credits |
| Deep Research + visualization | 15-25 credits |

### Efficient Usage Strategies

**1. Compose Questions Well in One Go**

Asking comprehensively in one prompt saves more credits than asking multiple times.

**2. Staged Approach**

First set direction with a simple search, then use Deep Research only for in-depth analysis of needed areas.

\`\`\`
# Step 1: Simple search (1 credit)
"What are the major trends in the Korean EV market?"

# Step 2: Deep Research only on area of interest (5-10 credits)
"Research Korean EV battery technology trends in depth.
Focus particularly on solid-state vs LFP battery market comparison."
\`\`\`

**3. Reuse Results**

Convert a single Deep Research result into various formats. Conversion tasks cost fewer credits than new research.

\`\`\`
"Based on the research results just received:
1. Write a 10-line summary
2. Extract 5 key points
3. Write a presentation slide outline"
\`\`\`

> Upgrade to Plus ($19.99/mo) or Pro ($199.99/mo) to use Deep Research unlimited without credit restrictions.`
    }
  ]
};

export default tips;
