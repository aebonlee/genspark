const overview = {
  id: 'overview',
  title: 'Deep Research 개요',
  titleEn: 'Deep Research Overview',
  icon: 'fa-microscope',
  sections: [
    {
      title: 'Deep Research란?',
      titleEn: 'What is Deep Research?',
      content: `Deep Research는 Genspark의 심층 리서치 엔진으로, 복잡한 주제에 대해 여러 AI 모델과 도구를 동시에 활용하여 포괄적이고 정확한 리서치 보고서를 생성합니다. 일반적인 AI 검색과 달리, 여러 소스를 교차 검증하고 깊이 있는 분석을 제공합니다.

### 핵심 특징

- **멀티 모델 분석**: GPT-4, Claude, Gemini 등 여러 모델이 동시에 리서치를 수행
- **실시간 웹 크롤링**: 수십 개의 웹 페이지를 동시에 탐색하고 정보 수집
- **교차 검증**: 여러 소스의 정보를 비교하여 정확성 향상
- **구조화된 보고서**: 리서치 결과를 체계적인 보고서 형태로 자동 구성
- **출처 추적**: 모든 정보에 대한 출처 링크 제공

### Deep Research vs 일반 검색

| 항목 | 일반 검색/AI 챗봇 | Deep Research |
|------|-------------------|---------------|
| 소스 수 | 1-3개 참조 | 20-50개 이상 참조 |
| 분석 깊이 | 표면적 | 심층 분석 |
| 시간 | 즉시 | 2-10분 |
| 출처 표시 | 제한적 | 모든 출처 링크 |
| 교차 검증 | 없음 | 자동 교차 검증 |
| 보고서 형식 | 단순 텍스트 | 구조화된 보고서 |
| AI 모델 | 단일 | 멀티 모델 |

### 사용 방법

1. Genspark 대화창에서 질문을 입력합니다
2. Deep Research 모드가 자동으로 활성화되거나, 명시적으로 "깊이 조사해줘"라고 요청합니다
3. Super Agent가 리서치 계획을 수립하고 실행합니다
4. 진행 상황을 실시간으로 확인할 수 있습니다
5. 완료 후 구조화된 리서치 보고서를 받습니다`,
      contentEn: `Deep Research is Genspark's in-depth research engine that simultaneously utilizes multiple AI models and tools to generate comprehensive and accurate research reports on complex topics. Unlike regular AI search, it cross-verifies multiple sources and provides deep analysis.

### Key Features

- **Multi-model Analysis**: Multiple models (GPT-4, Claude, Gemini, etc.) conduct research simultaneously
- **Real-time Web Crawling**: Explores and collects information from dozens of web pages simultaneously
- **Cross-verification**: Compares information from multiple sources to improve accuracy
- **Structured Reports**: Automatically organizes research results into systematic reports
- **Source Tracking**: Provides source links for all information

### Deep Research vs Regular Search

| Item | Regular Search/AI Chatbot | Deep Research |
|------|--------------------------|---------------|
| Source Count | 1-3 references | 20-50+ references |
| Analysis Depth | Surface level | Deep analysis |
| Time | Instant | 2-10 minutes |
| Source Citation | Limited | All source links |
| Cross-verification | None | Automatic cross-verification |
| Report Format | Simple text | Structured report |
| AI Models | Single | Multi-model |

### How to Use

1. Enter your question in the Genspark chat window
2. Deep Research mode activates automatically, or explicitly request "research this in depth"
3. Super Agent creates and executes a research plan
4. You can track progress in real-time
5. Receive a structured research report upon completion`
    }
  ]
};

export default overview;
