const customizing = {
  id: 'customizing',
  title: '커스터마이징 & 공유',
  titleEn: 'Customizing & Sharing',
  icon: 'fa-palette',
  sections: [
    {
      title: '페이지 편집',
      titleEn: 'Page Editing',
      content: `생성된 Sparkpage는 다양한 방식으로 커스터마이징할 수 있습니다.

### 편집 가능한 요소

- **텍스트 내용**: 각 섹션의 텍스트를 직접 수정할 수 있습니다
- **섹션 순서**: 드래그 앤 드롭으로 섹션 순서를 변경할 수 있습니다
- **이미지 교체**: AI가 생성한 이미지를 다른 이미지로 교체 가능합니다
- **섹션 추가/삭제**: 새로운 섹션을 추가하거나 불필요한 섹션을 삭제할 수 있습니다
- **표 편집**: 표의 데이터를 직접 수정할 수 있습니다

### AI 기반 편집

직접 수정하는 것 외에도 AI에게 편집을 요청할 수 있습니다.

\`\`\`
"이 Sparkpage에서 다음을 수정해줘:
1. 서론 부분을 더 간결하게
2. '시장 현황' 섹션에 2024년 데이터 추가
3. 비교 표를 추가해줘
4. 결론 부분을 더 강화해줘"
\`\`\`

### 디자인 커스터마이징

Sparkpage의 시각적 디자인도 조정할 수 있습니다.

- **레이아웃**: 단일 컬럼, 그리드, 카드 형태 등
- **색상 테마**: 다양한 색상 테마 중 선택
- **폰트**: 본문과 제목의 글꼴 변경
- **이미지 스타일**: 이미지 크기, 배치, 테두리 조정`,
      contentEn: `Generated Sparkpages can be customized in various ways.

### Editable Elements

- **Text Content**: Directly modify text in each section
- **Section Order**: Change section order with drag and drop
- **Image Replacement**: Replace AI-generated images with other images
- **Add/Remove Sections**: Add new sections or delete unnecessary ones
- **Table Editing**: Directly modify table data

### AI-based Editing

In addition to manual editing, you can ask AI to edit.

\`\`\`
"Modify the following in this Sparkpage:
1. Make the introduction more concise
2. Add 2024 data to the 'Market Status' section
3. Add a comparison table
4. Strengthen the conclusion section"
\`\`\`

### Design Customization

The visual design of Sparkpages can also be adjusted.

- **Layout**: Single column, grid, card format, etc.
- **Color Theme**: Choose from various color themes
- **Fonts**: Change body and heading fonts
- **Image Style**: Adjust image size, placement, and borders`
    },
    {
      title: '공유 및 관리',
      titleEn: 'Sharing & Management',
      content: `### 공유 방법

Sparkpage는 고유 URL이 생성되어 누구와든 쉽게 공유할 수 있습니다.

- **URL 공유**: 생성된 고유 링크를 복사하여 공유
- **소셜 미디어**: Twitter, Facebook, LinkedIn 등에 직접 공유
- **이메일**: 이메일에 링크를 포함하여 전송
- **임베드**: 블로그나 웹사이트에 임베드 코드로 삽입

### 공유 설정

| 설정 | 설명 |
|------|------|
| 공개 | 누구나 URL로 접근 가능 |
| 비공개 | 작성자만 접근 가능 |
| 링크 공유 | 링크를 가진 사람만 접근 가능 |

### Sparkpage 관리

생성한 Sparkpage는 개인 라이브러리에서 관리할 수 있습니다.

- **목록 보기**: 생성한 모든 Sparkpage를 한눈에 확인
- **검색**: 키워드로 특정 Sparkpage 검색
- **정렬**: 생성일, 수정일, 제목 등으로 정렬
- **폴더 분류**: 폴더를 만들어 주제별로 분류
- **삭제**: 불필요한 Sparkpage 삭제

### 활용 예시

\`\`\`
# 업무 공유
"이번 분기 시장 분석 Sparkpage를 팀에 공유하고,
코멘트를 받을 수 있도록 공개 설정해줘"

# 클라이언트 보고서
"클라이언트에게 전달할 프로젝트 현황 Sparkpage를 만들고,
링크를 이메일로 보낼 수 있도록 준비해줘"

# 교육 자료
"신입사원 온보딩 가이드를 Sparkpage로 만들어서
사내 위키에 임베드할 수 있도록 해줘"
\`\`\`

> Sparkpage는 한 번 생성하면 지속적으로 업데이트할 수 있습니다. 새로운 정보가 나올 때마다 AI에게 업데이트를 요청하면 최신 상태를 유지할 수 있습니다.`,
      contentEn: `### Sharing Methods

Sparkpages have unique URLs generated, making them easy to share with anyone.

- **URL Sharing**: Copy and share the generated unique link
- **Social Media**: Share directly on Twitter, Facebook, LinkedIn, etc.
- **Email**: Send with the link included in an email
- **Embed**: Insert into blogs or websites with embed code

### Sharing Settings

| Setting | Description |
|---------|-------------|
| Public | Anyone can access via URL |
| Private | Only the creator can access |
| Link Sharing | Only people with the link can access |

### Sparkpage Management

Created Sparkpages can be managed in your personal library.

- **List View**: View all created Sparkpages at a glance
- **Search**: Search for specific Sparkpages by keyword
- **Sort**: Sort by creation date, modification date, title, etc.
- **Folder Organization**: Create folders to categorize by topic
- **Delete**: Remove unnecessary Sparkpages

### Usage Examples

\`\`\`
# Work sharing
"Share this quarter's market analysis Sparkpage with the team,
and set it to public so they can add comments"

# Client report
"Create a project status Sparkpage for the client,
and prepare the link to send via email"

# Training materials
"Create a new employee onboarding guide as a Sparkpage
that can be embedded in the company wiki"
\`\`\`

> Sparkpages can be continuously updated once created. Request updates from AI whenever new information becomes available to keep it current.`
    }
  ]
};

export default customizing;
