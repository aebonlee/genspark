const research = {
  id: 'research',
  title: '리서치 & 분석',
  titleEn: 'Research & Analysis',
  icon: 'fa-magnifying-glass-chart',
  sections: [
    {
      title: '리서치 기능 활용',
      titleEn: 'Using Research Features',
      content: `Super Agent는 실시간 웹 검색과 데이터 분석을 결합하여 강력한 리서치 도구로 활용할 수 있습니다. 단순 검색을 넘어 정보를 종합하고 분석하여 인사이트를 제공합니다.

### 리서치 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| 시장 조사 | 산업 트렌드, 경쟁사 분석 | "한국 SaaS 시장 규모와 성장률" |
| 기술 리서치 | 기술 비교, 아키텍처 분석 | "React vs Vue vs Svelte 비교" |
| 학술 조사 | 논문 검색, 연구 동향 | "양자 컴퓨팅 최신 연구 동향" |
| 제품 비교 | 기능, 가격, 리뷰 비교 | "MacBook Pro vs Dell XPS 비교" |
| 트렌드 분석 | 소셜 미디어, 뉴스 트렌드 | "2024 AI 기술 트렌드" |

### 효과적인 리서치 프롬프트

\`\`\`
# 좋은 리서치 프롬프트 예시

"2024년 글로벌 생성형 AI 시장에 대해 다음을 조사해줘:
1. 시장 규모와 성장률
2. 주요 플레이어와 시장 점유율
3. 핵심 기술 트렌드
4. 한국 시장의 특수성
결과를 표와 차트로 정리해줘."

# 피해야 할 모호한 프롬프트

"AI 시장에 대해 알려줘"  (너무 광범위)
\`\`\`

### 리서치 결과 활용

Super Agent의 리서치 결과는 다양한 형태로 활용할 수 있습니다.

- **보고서 변환**: 리서치 결과를 Sparkpage 보고서로 자동 변환
- **프레젠테이션**: AI Slides로 바로 프레젠테이션 슬라이드 생성
- **데이터 시각화**: Python 코드 실행으로 차트 및 그래프 자동 생성
- **추가 분석**: 후속 질문을 통해 특정 영역을 더 깊이 파고들기`,
      contentEn: `Super Agent can be used as a powerful research tool by combining real-time web search with data analysis. It goes beyond simple search to synthesize and analyze information, providing insights.

### Research Types

| Type | Description | Example |
|------|-------------|---------|
| Market Research | Industry trends, competitor analysis | "Korean SaaS market size and growth rate" |
| Tech Research | Technology comparison, architecture analysis | "React vs Vue vs Svelte comparison" |
| Academic Research | Paper search, research trends | "Latest quantum computing research trends" |
| Product Comparison | Features, pricing, reviews | "MacBook Pro vs Dell XPS comparison" |
| Trend Analysis | Social media, news trends | "2024 AI technology trends" |

### Effective Research Prompts

\`\`\`
# Good research prompt example

"Research the following about the 2024 global generative AI market:
1. Market size and growth rate
2. Major players and market share
3. Key technology trends
4. Specifics of the Korean market
Organize results in tables and charts."

# Vague prompt to avoid

"Tell me about the AI market"  (too broad)
\`\`\`

### Utilizing Research Results

Super Agent's research results can be used in various formats:

- **Report Conversion**: Automatically convert research results to Sparkpage reports
- **Presentations**: Generate presentation slides directly with AI Slides
- **Data Visualization**: Auto-generate charts and graphs by executing Python code
- **Further Analysis**: Dive deeper into specific areas through follow-up questions`
    },
    {
      title: '데이터 분석',
      titleEn: 'Data Analysis',
      content: `### 데이터 분석 워크플로우

Super Agent는 파일을 업로드하면 자동으로 데이터를 분석하고 인사이트를 제공합니다.

**지원 파일 형식:**

- CSV, Excel (.xlsx, .xls)
- JSON, XML
- PDF (텍스트 추출 및 분석)
- 이미지 (OCR, 차트 해석)

### 분석 요청 예시

\`\`\`
# 매출 데이터 분석
"첨부한 CSV 파일의 월별 매출 데이터를 분석해줘.
- 전월 대비 성장률 계산
- 상위 5개 제품의 매출 추이 차트 생성
- 계절적 패턴 분석
- 다음 분기 매출 예측"

# 설문 결과 분석
"이 설문 결과 스프레드시트를 분석해서:
- 주요 응답 패턴 요약
- 연령대별 차이점 분석
- 상관관계 분석
- 핵심 인사이트 3가지 도출"
\`\`\`

### Python 코드 실행

Super Agent는 분석 과정에서 Python 코드를 직접 실행할 수 있습니다. pandas, matplotlib, seaborn 등의 라이브러리를 활용하여 전문적인 데이터 분석과 시각화를 수행합니다.

- **데이터 전처리**: 결측값 처리, 데이터 변환, 필터링
- **통계 분석**: 기술통계, 상관분석, 회귀분석
- **시각화**: 막대 차트, 선 그래프, 히트맵, 산점도 등
- **예측 모델링**: 시계열 분석, 트렌드 예측

> 데이터 분석 시 민감한 개인정보가 포함된 파일은 업로드하지 않도록 주의하세요. Genspark는 업로드된 파일을 분석 목적으로만 사용합니다.`,
      contentEn: `### Data Analysis Workflow

When you upload a file, Super Agent automatically analyzes the data and provides insights.

**Supported File Formats:**

- CSV, Excel (.xlsx, .xls)
- JSON, XML
- PDF (text extraction and analysis)
- Images (OCR, chart interpretation)

### Analysis Request Examples

\`\`\`
# Sales data analysis
"Analyze the monthly sales data in the attached CSV file:
- Calculate month-over-month growth rate
- Create a chart of sales trends for the top 5 products
- Analyze seasonal patterns
- Forecast next quarter's sales"

# Survey results analysis
"Analyze this survey results spreadsheet:
- Summarize key response patterns
- Analyze differences by age group
- Perform correlation analysis
- Derive 3 key insights"
\`\`\`

### Python Code Execution

Super Agent can directly execute Python code during analysis. It uses libraries like pandas, matplotlib, and seaborn to perform professional data analysis and visualization.

- **Data Preprocessing**: Handle missing values, data transformation, filtering
- **Statistical Analysis**: Descriptive statistics, correlation analysis, regression analysis
- **Visualization**: Bar charts, line graphs, heatmaps, scatter plots, etc.
- **Predictive Modeling**: Time series analysis, trend forecasting

> Be careful not to upload files containing sensitive personal information during data analysis. Genspark uses uploaded files only for analysis purposes.`
    }
  ]
};

export default research;
