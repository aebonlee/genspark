const videoGen = {
  id: 'video-gen',
  title: '영상 생성',
  titleEn: 'Video Generation',
  icon: 'fa-video',
  sections: [
    {
      title: 'AI 영상 생성',
      titleEn: 'AI Video Generation',
      content: `Genspark는 Sora 2를 포함한 최신 AI 영상 생성 모델을 통해 텍스트 프롬프트만으로 고품질 영상을 만들 수 있습니다.

### 지원 모델

| 모델 | 특징 | 최대 길이 |
|------|------|-----------|
| Sora 2 | OpenAI의 영상 생성, 사실적 | 최대 60초 |
| 기타 모델 | 다양한 스타일 | 모델별 상이 |

### 영상 생성 방법

\`\`\`
# 기본 영상 생성
"파도가 치는 해변의 일몰 영상을 만들어줘.
10초 길이, 시네마틱 스타일."

# 상세 프롬프트
"도시의 타임랩스 영상:
- 낮에서 밤으로 전환되는 장면
- 고층 빌딩들의 실루엣
- 차량의 라이트 트레일
- 별이 보이는 밤하늘로 마무리
15초 길이, 4K 품질"

# 제품 홍보 영상
"스마트폰 제품 홍보 영상:
- 어두운 배경에서 제품이 회전하며 등장
- 주요 기능 하이라이트
- 밝고 세련된 분위기
10초, 깔끔한 모션 그래픽 스타일"
\`\`\`

### 영상 유형별 가이드

| 유형 | 권장 길이 | 프롬프트 포인트 |
|------|-----------|----------------|
| 소셜 미디어 | 5-15초 | 임팩트 있는 첫 장면 |
| 제품 데모 | 10-30초 | 기능 하이라이트 |
| 배경 영상 | 10-60초 | 반복 가능한 루프 |
| 분위기 영상 | 15-30초 | 색감, 분위기 명시 |

### 요금제별 영상 생성

| 요금제 | 월 생성 가능 | 최대 길이 |
|--------|-------------|-----------|
| Free | 불가 | - |
| Plus | 10개/월 | 30초 |
| Pro | 무제한 | 60초 |

> AI 영상 생성은 아직 발전 중인 기술입니다. 복잡한 장면이나 특정 인물의 정확한 묘사는 한계가 있을 수 있으며, 여러 번 생성하여 최적의 결과를 선택하는 것이 좋습니다.`,
      contentEn: `Genspark allows creating high-quality videos from text prompts alone through the latest AI video generation models including Sora 2.

### Supported Models

| Model | Features | Max Length |
|-------|----------|-----------|
| Sora 2 | OpenAI's video generation, realistic | Up to 60 seconds |
| Other Models | Various styles | Varies by model |

### Video Generation Methods

\`\`\`
# Basic video generation
"Create a sunset video at a beach with waves.
10 seconds, cinematic style."

# Detailed prompt
"City timelapse video:
- Day to night transition scene
- Silhouettes of tall buildings
- Vehicle light trails
- Ending with a starry night sky
15 seconds, 4K quality"

# Product promotion video
"Smartphone product promotion video:
- Product rotating and appearing against dark background
- Key feature highlights
- Bright and sophisticated atmosphere
10 seconds, clean motion graphics style"
\`\`\`

### Guide by Video Type

| Type | Recommended Length | Prompt Points |
|------|-------------------|---------------|
| Social Media | 5-15 sec | Impactful opening |
| Product Demo | 10-30 sec | Feature highlights |
| Background Video | 10-60 sec | Loopable repetition |
| Mood Video | 15-30 sec | Specify colors, mood |

### Video Generation by Plan

| Plan | Monthly Limit | Max Length |
|------|--------------|-----------|
| Free | Not available | - |
| Plus | 10/month | 30 seconds |
| Pro | Unlimited | 60 seconds |

> AI video generation is still an evolving technology. Complex scenes or accurate depictions of specific people may have limitations. It is best to generate multiple times and select the optimal result.`
    }
  ]
};

export default videoGen;
