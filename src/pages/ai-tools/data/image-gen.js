const imageGen = {
  id: 'image-gen',
  title: '이미지 생성',
  titleEn: 'Image Generation',
  icon: 'fa-image',
  sections: [
    {
      title: 'AI 이미지 생성',
      titleEn: 'AI Image Generation',
      content: `Genspark는 FLUX, Gemini Imagen 3 등 최신 AI 이미지 생성 모델을 지원합니다. 텍스트 설명만으로 고품질 이미지를 생성할 수 있습니다.

### 지원 모델

| 모델 | 특징 | 적합한 용도 |
|------|------|------------|
| FLUX | 빠른 생성, 높은 품질 | 일반 이미지, 아트 |
| Gemini Imagen 3 | Google의 이미지 생성 | 사실적 이미지, 텍스트 포함 |

### 이미지 생성 프롬프트 작성법

효과적인 이미지 프롬프트의 구조는 다음과 같습니다.

\`\`\`
[주제] + [스타일] + [세부 사항] + [분위기/톤] + [기술적 설정]

# 예시
"도시의 밤 풍경, 네온 사이버펑크 스타일,
빗물에 반사되는 네온 간판들, 미래적이고 몽환적인 분위기,
고해상도, 시네마틱 조명"
\`\`\`

### 카테고리별 프롬프트 예시

**사실적 이미지**

\`\`\`
"전문적인 비즈니스 미팅 장면,
현대적인 회의실에서 다양한 인종의 팀원들이 논의 중,
자연광이 들어오는 큰 창문, 사실적인 사진 스타일"
\`\`\`

**아트/일러스트**

\`\`\`
"수채화 스타일의 봄 벚꽃 풍경,
작은 개울가에 벚꽃잎이 흩날리는 장면,
파스텔 톤, 부드럽고 따뜻한 색감"
\`\`\`

**소셜 미디어용**

\`\`\`
"인스타그램 포스트용 미니멀 디자인,
'AI의 미래'라는 텍스트가 포함된 그래디언트 배경,
파란색에서 보라색 그래디언트, 깔끔한 타이포그래피"
\`\`\`

### 요금제별 이미지 생성 한도

| 요금제 | 일일 생성 한도 | 해상도 |
|--------|---------------|--------|
| Free | 10장/일 | 표준 |
| Plus | 100장/일 | 고해상도 |
| Pro | 무제한 | 최고 해상도 |

> 이미지 생성 시 저작권에 주의하세요. 특정 브랜드 로고, 유명인 초상, 저작권이 있는 캐릭터 등을 포함한 이미지는 생성이 제한될 수 있습니다.`,
      contentEn: `Genspark supports the latest AI image generation models including FLUX and Gemini Imagen 3. You can generate high-quality images with just text descriptions.

### Supported Models

| Model | Features | Suitable For |
|-------|----------|-------------|
| FLUX | Fast generation, high quality | General images, art |
| Gemini Imagen 3 | Google's image generation | Realistic images, text inclusion |

### Image Generation Prompt Writing

The structure of an effective image prompt is:

\`\`\`
[Subject] + [Style] + [Details] + [Mood/Tone] + [Technical Settings]

# Example
"Night cityscape, neon cyberpunk style,
neon signs reflected in rainwater, futuristic and dreamlike atmosphere,
high resolution, cinematic lighting"
\`\`\`

### Prompt Examples by Category

**Realistic Images**

\`\`\`
"Professional business meeting scene,
diverse team members discussing in a modern conference room,
natural light from large windows, realistic photo style"
\`\`\`

**Art/Illustration**

\`\`\`
"Watercolor style spring cherry blossom landscape,
cherry blossom petals scattering by a small stream,
pastel tones, soft and warm colors"
\`\`\`

**Social Media**

\`\`\`
"Minimal design for Instagram post,
gradient background with text 'The Future of AI',
blue to purple gradient, clean typography"
\`\`\`

### Image Generation Limits by Plan

| Plan | Daily Limit | Resolution |
|------|------------|------------|
| Free | 10/day | Standard |
| Plus | 100/day | High resolution |
| Pro | Unlimited | Maximum resolution |

> Be mindful of copyright when generating images. Images including specific brand logos, celebrity likenesses, or copyrighted characters may be restricted.`
    }
  ]
};

export default imageGen;
