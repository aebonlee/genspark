const templates = {
  id: 'templates',
  title: '템플릿 & 디자인',
  titleEn: 'Templates & Design',
  icon: 'fa-swatchbook',
  sections: [
    {
      title: '디자인 원칙',
      titleEn: 'Design Principles',
      content: `AI Slides는 전문적인 디자인 원칙에 따라 슬라이드를 생성합니다. 사용자가 디자인 전문가가 아니더라도 높은 품질의 프레젠테이션을 만들 수 있습니다.

### 자동 적용되는 디자인 원칙

- **시각적 계층**: 제목, 부제목, 본문의 크기와 굵기를 적절하게 구분
- **여백 활용**: 충분한 여백으로 콘텐츠의 가독성 보장
- **색상 조화**: 주제에 맞는 색상 팔레트 자동 선택
- **이미지 배치**: 텍스트와 이미지의 균형 잡힌 레이아웃
- **일관성**: 전체 프레젠테이션에서 일관된 디자인 언어 유지

### 스타일 지정 방법

프레젠테이션의 디자인 스타일을 직접 지정할 수 있습니다.

\`\`\`
# 컬러 테마 지정
"파란색 계열의 깔끔한 디자인으로 만들어줘"
"다크 테마로 고급스러운 느낌의 슬라이드"
"밝고 활기찬 색상의 프레젠테이션"

# 레이아웃 스타일
"미니멀한 디자인, 텍스트 위주"
"이미지가 많은 시각적 프레젠테이션"
"데이터 중심의 차트와 그래프 위주"

# 브랜드 스타일
"Apple 스타일의 깔끔한 프레젠테이션"
"TED Talk 스타일의 임팩트 있는 슬라이드"
\`\`\`

### 슬라이드 레이아웃 유형

| 레이아웃 | 설명 | 적합한 용도 |
|----------|------|------------|
| 타이틀 | 큰 제목 + 배경 이미지 | 표지, 섹션 구분 |
| 텍스트 + 이미지 | 좌우 분할 레이아웃 | 일반 설명 |
| 불릿 포인트 | 목록 형태 | 핵심 포인트 나열 |
| 차트/그래프 | 데이터 시각화 | 통계, 비교 |
| 비교 | 좌우 대비 | A vs B 비교 |
| 타임라인 | 시간 순서 | 로드맵, 일정 |
| 인용 | 큰 텍스트 중앙 | 명언, 핵심 메시지 |`,
      contentEn: `AI Slides generates slides following professional design principles. Even if users are not design experts, they can create high-quality presentations.

### Automatically Applied Design Principles

- **Visual Hierarchy**: Appropriate differentiation of title, subtitle, and body size and weight
- **White Space**: Sufficient margins to ensure content readability
- **Color Harmony**: Automatic color palette selection matching the topic
- **Image Placement**: Balanced layout of text and images
- **Consistency**: Maintaining consistent design language throughout the presentation

### How to Specify Styles

You can directly specify the design style of your presentation.

\`\`\`
# Color theme specification
"Create with a clean blue-toned design"
"Dark theme slides with a premium feel"
"Bright and vibrant colored presentation"

# Layout style
"Minimal design, text-focused"
"Visual presentation with lots of images"
"Data-centric with charts and graphs"

# Brand style
"Apple-style clean presentation"
"TED Talk-style impactful slides"
\`\`\`

### Slide Layout Types

| Layout | Description | Suitable For |
|--------|-------------|-------------|
| Title | Large title + background image | Cover, section dividers |
| Text + Image | Left-right split layout | General explanations |
| Bullet Points | List format | Listing key points |
| Chart/Graph | Data visualization | Statistics, comparisons |
| Comparison | Left-right contrast | A vs B comparison |
| Timeline | Chronological order | Roadmaps, schedules |
| Quote | Large centered text | Quotes, key messages |`
    }
  ]
};

export default templates;
