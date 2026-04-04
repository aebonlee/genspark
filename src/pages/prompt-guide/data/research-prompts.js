const researchPrompts = {
  id: 'research-prompts',
  title: 'Deep Research 프롬프트',
  titleEn: 'Deep Research Prompts',
  icon: 'fa-microscope',
  sections: [
    {
      title: '리서치 프롬프트 템플릿',
      titleEn: 'Research Prompt Templates',
      content: `### 시장 조사 프롬프트

\`\`\`
# 기본 시장 조사
"[산업명] 시장에 대해 심층 조사해줘:
1. 글로벌 시장 규모 (2023-2025)
2. 한국 시장 규모와 성장률
3. 주요 플레이어 Top 5와 시장 점유율
4. 핵심 기술 트렌드 3가지
5. 규제 및 정책 동향
6. SWOT 분석
7. 2026-2028 시장 전망
각 항목에 출처를 명시하고, 데이터는 표로 정리해줘."

# 경쟁사 분석
"[경쟁사 A], [경쟁사 B], [경쟁사 C]를 비교 분석해줘:
비교 항목:
- 제품/서비스 기능
- 가격 정책
- 타겟 시장
- 기술 스택
- 최근 투자/인수 현황
- 사용자 리뷰 평가
- 장단점
비교 표와 레이더 차트 형식으로 정리해줘."
\`\`\`

### 기술 리서치 프롬프트

\`\`\`
# 기술 비교
"다음 기술들을 심층 비교해줘: [기술 A] vs [기술 B]
1. 아키텍처 차이
2. 성능 벤치마크 (최신 데이터)
3. 개발자 생태계 (커뮤니티 크기, 패키지 수)
4. 기업 채택 사례
5. 학습 곡선
6. 장단점 요약
7. 어떤 상황에서 어떤 것을 선택해야 하는지 가이드"

# 학술 리서치
"[연구 주제]에 대한 최근 2년간 주요 연구를 조사해줘:
1. 핵심 논문 10편의 제목, 저자, 기관, 핵심 기여
2. 연구 방향별 분류
3. 아직 해결되지 않은 과제
4. 향후 연구 방향 전망
5. 한국 연구진의 기여도
가능하면 논문 링크도 포함해줘."
\`\`\`

### 투자/비즈니스 리서치

\`\`\`
# 산업 투자 동향
"[산업]의 2024년 투자 동향을 분석해줘:
1. 총 투자 금액 (글로벌/한국)
2. 주요 투자 라운드 (시리즈별)
3. 활발한 투자자 (VC, CVC)
4. 핫한 서브 카테고리
5. 성공/실패 사례
6. 2025년 투자 전망
데이터와 차트를 풍부하게 포함해줘."
\`\`\`

> Deep Research 프롬프트는 구체적일수록 좋습니다. 원하는 분석의 깊이, 데이터 형식, 시간 범위를 명확하게 지정하면 더 높은 품질의 결과를 얻을 수 있습니다.`,
      contentEn: `### Market Research Prompts

\`\`\`
# Basic market research
"Conduct in-depth research on the [industry] market:
1. Global market size (2023-2025)
2. Korean market size and growth rate
3. Top 5 major players and market share
4. 3 key technology trends
5. Regulatory and policy trends
6. SWOT analysis
7. 2026-2028 market outlook
Cite sources for each item and organize data in tables."

# Competitor analysis
"Compare and analyze [Competitor A], [Competitor B], [Competitor C]:
Comparison items:
- Product/service features
- Pricing strategy
- Target market
- Tech stack
- Recent investment/acquisition status
- User review ratings
- Pros and cons
Organize in comparison tables and radar chart format."
\`\`\`

### Technical Research Prompts

\`\`\`
# Technology comparison
"Compare these technologies in depth: [Tech A] vs [Tech B]
1. Architecture differences
2. Performance benchmarks (latest data)
3. Developer ecosystem (community size, package count)
4. Enterprise adoption cases
5. Learning curve
6. Pros and cons summary
7. Guide on when to choose which"

# Academic research
"Research major studies on [research topic] from the past 2 years:
1. Title, authors, institution, key contribution of 10 key papers
2. Classification by research direction
3. Unsolved challenges
4. Future research direction outlook
5. Korean researchers' contributions
Include paper links where possible."
\`\`\`

### Investment/Business Research

\`\`\`
# Industry investment trends
"Analyze 2024 investment trends in [industry]:
1. Total investment amount (global/Korean)
2. Major investment rounds (by series)
3. Active investors (VC, CVC)
4. Hot sub-categories
5. Success/failure cases
6. 2025 investment outlook
Include rich data and charts."
\`\`\`

> Deep Research prompts work better when specific. Clearly specifying the desired analysis depth, data format, and time range yields higher quality results.`
    }
  ]
};

export default researchPrompts;
