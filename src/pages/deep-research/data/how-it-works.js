const howItWorks = {
  id: 'how-it-works',
  title: '작동 원리',
  titleEn: 'How It Works',
  icon: 'fa-diagram-project',
  sections: [
    {
      title: '멀티 모델 아키텍처',
      titleEn: 'Multi-Model Architecture',
      content: `Deep Research의 핵심은 여러 AI 모델을 동시에 활용하는 멀티 모델 아키텍처입니다. 각 모델의 강점을 활용하여 더 정확하고 포괄적인 결과를 생성합니다.

### 모델별 역할

| 모델 | 강점 | Deep Research에서의 역할 |
|------|------|-------------------------|
| GPT-4 | 논리적 추론, 코드 | 데이터 분석, 구조화 |
| Claude | 장문 처리, 정확성 | 문서 분석, 보고서 작성 |
| Gemini | 멀티모달, 검색 | 웹 검색, 이미지 분석 |
| 기타 모델 | 특화 영역 | 도메인별 전문 분석 |

### 처리 파이프라인

\`\`\`
사용자 쿼리 입력
    |
    v
[1단계] 쿼리 분석 및 리서치 계획 수립
    - 핵심 키워드 추출
    - 서브 토픽 분해
    - 검색 전략 수립
    |
    v
[2단계] 병렬 정보 수집
    - 웹 검색 (여러 검색 엔진)
    - 학술 데이터베이스 조회
    - 뉴스 아카이브 검색
    - 전문 데이터베이스 참조
    |
    v
[3단계] 정보 분석 및 검증
    - 소스 신뢰도 평가
    - 교차 검증
    - 상충 정보 해결
    - 팩트 체크
    |
    v
[4단계] 보고서 생성
    - 구조화된 보고서 작성
    - 차트 및 시각화 생성
    - 출처 정리
    - 최종 검토
\`\`\`

### 정보 소스

Deep Research는 다양한 유형의 소스에서 정보를 수집합니다.

- **웹 페이지**: 뉴스 사이트, 블로그, 공식 웹사이트
- **학술 자료**: 논문, 연구 보고서, 학회 발표
- **정부/기관 자료**: 통계청, 정부 보고서, 국제기구 자료
- **산업 보고서**: 시장 조사 기관, 컨설팅 회사 보고서
- **커뮤니티**: 포럼, Q&A 사이트, 전문가 의견`,
      contentEn: `The core of Deep Research is its multi-model architecture that utilizes multiple AI models simultaneously. It leverages each model's strengths to generate more accurate and comprehensive results.

### Model Roles

| Model | Strengths | Role in Deep Research |
|-------|-----------|----------------------|
| GPT-4 | Logical reasoning, code | Data analysis, structuring |
| Claude | Long-form processing, accuracy | Document analysis, report writing |
| Gemini | Multimodal, search | Web search, image analysis |
| Other Models | Specialized domains | Domain-specific expert analysis |

### Processing Pipeline

\`\`\`
User Query Input
    |
    v
[Step 1] Query Analysis & Research Plan
    - Extract key keywords
    - Decompose sub-topics
    - Establish search strategy
    |
    v
[Step 2] Parallel Information Gathering
    - Web search (multiple search engines)
    - Academic database queries
    - News archive search
    - Specialized database references
    |
    v
[Step 3] Information Analysis & Verification
    - Source reliability assessment
    - Cross-verification
    - Conflicting information resolution
    - Fact checking
    |
    v
[Step 4] Report Generation
    - Write structured report
    - Create charts and visualizations
    - Organize citations
    - Final review
\`\`\`

### Information Sources

Deep Research collects information from various types of sources:

- **Web Pages**: News sites, blogs, official websites
- **Academic Materials**: Papers, research reports, conference presentations
- **Government/Institution Data**: Statistics bureaus, government reports, international organization data
- **Industry Reports**: Market research firms, consulting company reports
- **Communities**: Forums, Q&A sites, expert opinions`
    }
  ]
};

export default howItWorks;
