const tips = {
  id: 'tips',
  title: '프레젠테이션 팁',
  titleEn: 'Presentation Tips',
  icon: 'fa-lightbulb',
  sections: [
    {
      title: '효과적인 슬라이드 제작 팁',
      titleEn: 'Effective Slide Creation Tips',
      content: `### 프롬프트 최적화

좋은 프레젠테이션을 만들기 위한 프롬프트 작성 팁입니다.

**1. 대상 청중을 명시하세요**

\`\`\`
"C-level 임원진을 대상으로 한 간결한 보고서"
"대학생을 위한 쉽고 흥미로운 강의 자료"
"기술팀을 위한 상세한 기술 발표"
\`\`\`

**2. 슬라이드 수와 발표 시간을 지정하세요**

\`\`\`
"10분 발표용, 12장 이내"
"30분 강의용, 25-30장"
"5분 피치, 핵심만 7장"
\`\`\`

**3. 포함할 요소를 구체적으로 요청하세요**

\`\`\`
"차트 3개 이상 포함"
"각 섹션의 핵심 포인트는 3개 이하로"
"스피커 노트도 함께 작성해줘"
"각 슬라이드에 관련 이미지 포함"
\`\`\`

### 슬라이드 품질 향상

- **하나의 슬라이드, 하나의 메시지**: 각 슬라이드에는 하나의 핵심 메시지만 담으세요
- **텍스트 최소화**: 긴 문장 대신 핵심 키워드와 짧은 구문 사용
- **시각적 증거**: 주장을 뒷받침하는 차트, 그래프, 이미지 활용
- **스토리라인**: 전체 프레젠테이션이 하나의 이야기처럼 흘러가도록 구성

> 발표 자료는 "읽는 것"이 아니라 "보는 것"입니다. 텍스트는 최소한으로 하고, 발표자가 구두로 설명을 보충하는 형태가 가장 효과적입니다.`,
      contentEn: `### Prompt Optimization

Tips for writing prompts to create great presentations.

**1. Specify the target audience**

\`\`\`
"Concise report targeting C-level executives"
"Easy and interesting lecture material for college students"
"Detailed technical presentation for the engineering team"
\`\`\`

**2. Specify slide count and presentation time**

\`\`\`
"For a 10-minute presentation, within 12 slides"
"For a 30-minute lecture, 25-30 slides"
"5-minute pitch, essentials only in 7 slides"
\`\`\`

**3. Specifically request elements to include**

\`\`\`
"Include at least 3 charts"
"Keep key points to 3 or fewer per section"
"Write speaker notes as well"
"Include relevant images on each slide"
\`\`\`

### Improving Slide Quality

- **One Slide, One Message**: Each slide should contain only one key message
- **Minimize Text**: Use key words and short phrases instead of long sentences
- **Visual Evidence**: Use charts, graphs, and images to support claims
- **Storyline**: Structure the entire presentation to flow like a single story

> Presentation materials are meant to be "seen," not "read." Keep text to a minimum and supplement with the presenter's verbal explanation for the most effective result.`
    },
    {
      title: '발표 준비 & 내보내기',
      titleEn: 'Presentation Prep & Export',
      content: `### 스피커 노트 활용

AI Slides는 각 슬라이드에 대한 스피커 노트도 함께 생성할 수 있습니다.

\`\`\`
"각 슬라이드에 2-3문장의 스피커 노트를 추가해줘.
발표할 때 참고할 수 있도록 핵심 포인트를 요약해줘."
\`\`\`

### 리허설 지원

\`\`\`
"이 프레젠테이션의 발표 스크립트를 작성해줘.
각 슬라이드당 약 1분씩, 총 15분 발표 기준.
자연스러운 전환 문구도 포함해줘."
\`\`\`

### 내보내기 옵션

생성된 슬라이드는 다양한 형식으로 내보낼 수 있습니다.

| 형식 | 용도 |
|------|------|
| PDF | 인쇄, 이메일 첨부, 아카이브 |
| 온라인 링크 | 웹에서 직접 프레젠테이션 |
| 이미지 | 개별 슬라이드를 이미지로 저장 |

### 발표 전 체크리스트

AI에게 프레젠테이션 검토를 요청할 수도 있습니다.

\`\`\`
"이 프레젠테이션을 검토해줘:
1. 논리적 흐름이 자연스러운지
2. 데이터와 수치가 정확한지
3. 디자인 일관성
4. 오탈자 확인
5. 발표 시간 적절성 (슬라이드당 1-2분)
6. 청중 관점에서 이해하기 쉬운지"
\`\`\`

### 질의응답 준비

\`\`\`
"이 프레젠테이션에서 예상되는 질문 10개와
각 질문에 대한 답변을 준비해줘.
특히 재무 데이터와 시장 전망에 대한
날카로운 질문도 포함해줘."
\`\`\`

> AI Slides로 생성한 프레젠테이션은 초안으로 활용하고, 실제 발표 전에 자신의 스타일과 메시지에 맞게 커스터마이징하는 것을 권장합니다.`,
      contentEn: `### Using Speaker Notes

AI Slides can also generate speaker notes for each slide.

\`\`\`
"Add 2-3 sentence speaker notes to each slide.
Summarize key points for reference during the presentation."
\`\`\`

### Rehearsal Support

\`\`\`
"Write a presentation script for these slides.
About 1 minute per slide, for a 15-minute total presentation.
Include natural transition phrases."
\`\`\`

### Export Options

Generated slides can be exported in various formats.

| Format | Use |
|--------|-----|
| PDF | Print, email attachment, archive |
| Online Link | Present directly on the web |
| Images | Save individual slides as images |

### Pre-presentation Checklist

You can also ask AI to review the presentation.

\`\`\`
"Review this presentation:
1. Is the logical flow natural?
2. Are data and figures accurate?
3. Design consistency
4. Typo check
5. Presentation time appropriateness (1-2 min per slide)
6. Is it easy to understand from the audience's perspective?"
\`\`\`

### Q&A Preparation

\`\`\`
"Prepare 10 expected questions from this presentation
and answers for each.
Include sharp questions especially about
financial data and market outlook."
\`\`\`

> We recommend using AI Slides-generated presentations as drafts and customizing them to match your style and message before the actual presentation.`
    }
  ]
};

export default tips;
