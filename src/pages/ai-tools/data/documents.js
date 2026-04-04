const documents = {
  id: 'documents',
  title: '문서/스프레드시트',
  titleEn: 'Documents & Spreadsheets',
  icon: 'fa-file-word',
  sections: [
    {
      title: 'AI 문서 생성',
      titleEn: 'AI Document Creation',
      content: `Genspark는 다양한 형식의 문서를 AI로 자동 생성할 수 있습니다. 보고서, 기획서, 이력서 등 전문적인 문서를 자연어 지시만으로 작성합니다.

### 지원 문서 유형

| 문서 유형 | 설명 | 활용 예시 |
|-----------|------|-----------|
| 보고서 | 비즈니스/연구 보고서 | 분기 실적, 시장 분석 |
| 기획서 | 프로젝트/사업 기획 | 마케팅 기획, 이벤트 기획 |
| 이력서 | 취업용 이력서/자기소개서 | 직무별 맞춤 이력서 |
| 계약서 | 계약/합의 문서 초안 | NDA, 서비스 계약 |
| 매뉴얼 | 사용자/운영 매뉴얼 | 제품 매뉴얼, SOP |
| 이메일 | 비즈니스 이메일 | 제안서, 공지, 팔로업 |

### 문서 생성 예시

\`\`\`
# 사업 기획서
"AI 기반 고객 서비스 챗봇 사업 기획서를 작성해줘:
1. 요약 (Executive Summary)
2. 사업 배경 및 기회
3. 제품/서비스 설명
4. 시장 분석
5. 마케팅 전략
6. 재무 계획 (3년)
7. 팀 구성
8. 리스크 및 대응 방안
전문적인 비즈니스 문서 형식으로 작성해줘."

# 이력서 작성
"백엔드 개발자 이력서를 작성해줘:
- 경력: 3년차 (Node.js, Python)
- 학력: 컴퓨터공학 학사
- 주요 프로젝트 경험 포함
- ATS 친화적 형식"
\`\`\`

### AI 스프레드시트

Super Agent는 데이터를 스프레드시트 형태로 생성하고 분석할 수 있습니다.

\`\`\`
# 스프레드시트 생성
"월별 마케팅 예산 계획 스프레드시트를 만들어줘:
- 카테고리: 디지털 광고, SNS, 콘텐츠, 이벤트, PR
- 기간: 1월-12월
- 총 예산: 1억원
- 분기별 비중 자동 배분
- 합계와 비율 포함"

# 데이터 분석
"이 스프레드시트 데이터를 분석해줘:
- 월별 추이 분석
- 카테고리별 비중
- 전년 대비 증감
- 핵심 인사이트 3가지"
\`\`\`

> AI가 작성한 문서는 초안으로 활용하고, 최종 제출 전에 반드시 내용을 검토하세요. 특히 계약서나 법률 문서는 반드시 전문가의 검토를 받으시기 바랍니다.`,
      contentEn: `Genspark can automatically generate various types of documents with AI. Create professional documents like reports, proposals, and resumes with just natural language instructions.

### Supported Document Types

| Document Type | Description | Usage Examples |
|--------------|-------------|----------------|
| Reports | Business/research reports | Quarterly results, market analysis |
| Proposals | Project/business proposals | Marketing plans, event planning |
| Resumes | Job application resumes/cover letters | Role-specific customized resumes |
| Contracts | Contract/agreement drafts | NDA, service agreements |
| Manuals | User/operations manuals | Product manuals, SOP |
| Emails | Business emails | Proposals, notices, follow-ups |

### Document Generation Examples

\`\`\`
# Business proposal
"Write an AI-based customer service chatbot business proposal:
1. Executive Summary
2. Business background and opportunities
3. Product/service description
4. Market analysis
5. Marketing strategy
6. Financial plan (3 years)
7. Team composition
8. Risks and mitigation plans
Write in professional business document format."

# Resume writing
"Write a backend developer resume:
- Experience: 3 years (Node.js, Python)
- Education: BS in Computer Science
- Include major project experience
- ATS-friendly format"
\`\`\`

### AI Spreadsheets

Super Agent can generate and analyze data in spreadsheet format.

\`\`\`
# Spreadsheet creation
"Create a monthly marketing budget plan spreadsheet:
- Categories: Digital ads, SNS, content, events, PR
- Period: January-December
- Total budget: 100 million KRW
- Automatic quarterly allocation
- Include totals and percentages"

# Data analysis
"Analyze this spreadsheet data:
- Monthly trend analysis
- Category proportions
- Year-over-year changes
- 3 key insights"
\`\`\`

> Use AI-written documents as drafts and always review content before final submission. Contracts and legal documents in particular should always be reviewed by professionals.`
    }
  ]
};

export default documents;
