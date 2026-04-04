const overview = {
  id: 'overview',
  title: 'AI Tools 통합 개요',
  titleEn: 'AI Tools Overview',
  icon: 'fa-toolbox',
  sections: [
    {
      title: 'Genspark AI 도구 모음',
      titleEn: 'Genspark AI Tool Suite',
      content: `Genspark는 다양한 AI 도구를 하나의 플랫폼에서 통합 제공합니다. 이미지 생성, 영상 생성, AI 전화, 문서 작성 등 다양한 도구를 별도의 앱 설치 없이 사용할 수 있습니다.

### 통합 도구 목록

| 도구 | 설명 | 주요 모델/기술 |
|------|------|----------------|
| 이미지 생성 | AI로 이미지 생성 | FLUX, Gemini Imagen 3 |
| 영상 생성 | AI로 영상 제작 | Sora 2, Runway 등 |
| AI 전화 | AI 음성 통화 | 자체 음성 모델 |
| 문서 생성 | AI 문서 작성 | 멀티 모델 |
| 스프레드시트 | AI 데이터 분석 | Python + AI |
| 번역 | 실시간 다국어 번역 | 멀티 모델 |

### 도구 접근 방법

모든 AI 도구는 Super Agent 대화창에서 자연어로 접근할 수 있습니다.

\`\`\`
# 이미지 생성
"귀여운 고양이가 노트북으로 코딩하는 이미지를 만들어줘"

# 영상 생성
"해변의 일몰 영상을 10초로 만들어줘"

# AI 전화
"피자 가게에 전화해서 배달 가능한지 확인해줘"

# 문서 생성
"프로젝트 기획서를 Word 형식으로 작성해줘"
\`\`\`

### 도구 간 연계

Genspark의 강점은 각 도구가 서로 연계된다는 점입니다. 하나의 대화 내에서 여러 도구를 조합하여 사용할 수 있습니다.

\`\`\`
"마케팅 캠페인을 위해:
1. 시장 조사 (Deep Research)
2. 캠페인 기획서 (문서 생성)
3. 소셜 미디어용 이미지 5장 (이미지 생성)
4. 30초 홍보 영상 (영상 생성)
5. 프레젠테이션 (AI Slides)
한 번에 준비해줘."
\`\`\``,
      contentEn: `Genspark integrates various AI tools within a single platform. You can use image generation, video creation, AI phone calling, document writing, and more without installing separate apps.

### Integrated Tools List

| Tool | Description | Key Models/Technology |
|------|-------------|----------------------|
| Image Generation | AI image creation | FLUX, Gemini Imagen 3 |
| Video Generation | AI video production | Sora 2, Runway, etc. |
| AI Phone Calling | AI voice calls | Proprietary voice model |
| Document Creation | AI document writing | Multi-model |
| Spreadsheets | AI data analysis | Python + AI |
| Translation | Real-time multilingual translation | Multi-model |

### How to Access Tools

All AI tools can be accessed through natural language in the Super Agent chat window.

\`\`\`
# Image generation
"Create an image of a cute cat coding on a laptop"

# Video generation
"Create a 10-second video of a beach sunset"

# AI phone calling
"Call the pizza place and check if delivery is available"

# Document creation
"Write a project proposal in Word format"
\`\`\`

### Cross-Tool Integration

Genspark's strength is that each tool integrates with others. You can combine multiple tools within a single conversation.

\`\`\`
"For a marketing campaign:
1. Market research (Deep Research)
2. Campaign proposal (Document creation)
3. 5 social media images (Image generation)
4. 30-second promotional video (Video generation)
5. Presentation (AI Slides)
Prepare everything at once."
\`\`\``
    }
  ]
};

export default overview;
