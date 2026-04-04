const advanced = {
  id: 'advanced',
  title: '고급 프롬프트 기법',
  titleEn: 'Advanced Prompt Techniques',
  icon: 'fa-wand-magic-sparkles',
  sections: [
    {
      title: '고급 프롬프트 패턴',
      titleEn: 'Advanced Prompt Patterns',
      content: `### 1. 역할 부여 (Persona Pattern)

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
\`\`\``,
      contentEn: `### 1. Role Assignment (Persona Pattern)

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
\`\`\``
    },
    {
      title: '도구 조합 프롬프트',
      titleEn: 'Tool Combination Prompts',
      content: `### 멀티 도구 워크플로우

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

> 복잡한 멀티 도구 프롬프트는 Pro 요금제에서 가장 효과적입니다. 무료 사용자는 크레딧 소모가 클 수 있으므로 단계를 나누어 실행하는 것이 좋습니다.`,
      contentEn: `### Multi-Tool Workflows

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

> Complex multi-tool prompts are most effective with the Pro plan. Free users may consume significant credits, so it is better to execute steps separately.`
    }
  ]
};

export default advanced;
