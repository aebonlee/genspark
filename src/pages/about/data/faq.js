const faq = {
  id: 'faq',
  title: 'FAQ & 연락처',
  titleEn: 'FAQ & Contact',
  icon: 'fa-circle-question',
  sections: [
    {
      title: '자주 묻는 질문',
      titleEn: 'Frequently Asked Questions',
      content: `### 일반 질문

**Q: Genspark Master는 Genspark 공식 사이트인가요?**

A: 아닙니다. Genspark Master는 Genspark AI 플랫폼의 비공식 한국어 학습 가이드입니다. DreamIT Biz가 독립적으로 제작한 교육 플랫폼으로, Genspark Inc.와는 별개의 프로젝트입니다.

**Q: Genspark Master의 콘텐츠는 무료인가요?**

A: 네, 모든 학습 콘텐츠는 완전히 무료로 제공됩니다. GitHub Pages를 통해 호스팅되며 별도의 가입이나 결제가 필요하지 않습니다.

**Q: 콘텐츠는 얼마나 자주 업데이트되나요?**

A: Genspark 플랫폼의 주요 업데이트가 있을 때마다 관련 가이드를 업데이트합니다. 일반적으로 월 1-2회 콘텐츠를 갱신하며, 중요한 변경사항은 즉시 반영합니다.

**Q: 영어로도 볼 수 있나요?**

A: 네, 모든 페이지는 한국어와 영어 두 가지 언어를 지원합니다. 상단 네비게이션 바에서 언어를 전환할 수 있습니다.

### 기술 관련 질문

**Q: Genspark 계정은 어떻게 만드나요?**

A: [genspark.ai](https://www.genspark.ai)에 접속하여 Google 계정 또는 이메일로 가입할 수 있습니다. 무료 요금제로 바로 시작할 수 있습니다.

**Q: Super Agent와 일반 챗봇의 차이는 무엇인가요?**

A: Super Agent는 단순한 질문-답변을 넘어 웹 검색, 파일 분석, 코드 실행, 이메일 작성 등 복잡한 멀티 스텝 작업을 자율적으로 수행할 수 있는 AI 에이전트입니다. 일반 챗봇은 단일 응답만 생성하지만, Super Agent는 여러 도구를 조합하여 작업을 완료합니다.

**Q: Deep Research는 어떤 소스를 사용하나요?**

A: Deep Research는 실시간 웹 검색, 학술 데이터베이스, 뉴스 아카이브 등 다양한 소스를 활용합니다. 여러 AI 모델을 동시에 사용하여 정보의 정확성과 포괄성을 높입니다.

**Q: Genspark의 크레딧 시스템은 어떻게 작동하나요?**

A: 무료 사용자는 하루 100 크레딧을 받으며, 각 기능마다 소모되는 크레딧이 다릅니다. 일반 대화는 1 크레딧, Deep Research는 5-10 크레딧, 이미지 생성은 2-5 크레딧이 소모됩니다. Plus와 Pro 요금제는 크레딧 제한이 없습니다.`,
      contentEn: `### General Questions

**Q: Is Genspark Master an official Genspark site?**

A: No. Genspark Master is an unofficial Korean learning guide for the Genspark AI platform. It is an educational platform independently created by DreamIT Biz, separate from Genspark Inc.

**Q: Is Genspark Master content free?**

A: Yes, all learning content is completely free. It is hosted via GitHub Pages and requires no registration or payment.

**Q: How often is the content updated?**

A: Related guides are updated whenever there are major Genspark platform updates. Content is generally refreshed 1-2 times per month, and important changes are reflected immediately.

**Q: Is it available in English?**

A: Yes, all pages support both Korean and English. You can switch languages in the top navigation bar.

### Technical Questions

**Q: How do I create a Genspark account?**

A: Visit [genspark.ai](https://www.genspark.ai) and sign up with a Google account or email. You can start immediately with the free plan.

**Q: What is the difference between Super Agent and a regular chatbot?**

A: Super Agent is an AI agent that can autonomously perform complex multi-step tasks beyond simple Q&A, including web search, file analysis, code execution, and email composition. While regular chatbots generate single responses, Super Agent combines multiple tools to complete tasks.

**Q: What sources does Deep Research use?**

A: Deep Research utilizes various sources including real-time web search, academic databases, and news archives. It uses multiple AI models simultaneously to enhance information accuracy and comprehensiveness.

**Q: How does Genspark's credit system work?**

A: Free users receive 100 credits per day, and each feature consumes different amounts of credits. General conversation costs 1 credit, Deep Research costs 5-10 credits, and image generation costs 2-5 credits. Plus and Pro plans have no credit limits.`
    },
    {
      title: '연락처 및 기여',
      titleEn: 'Contact & Contributing',
      content: `### 연락처

Genspark Master에 대한 문의, 제안, 오류 보고는 다음 채널을 통해 연락해주세요.

- **GitHub Issues**: 버그 보고, 기능 요청, 콘텐츠 오류 신고
- **GitHub Discussions**: 일반적인 질문, 아이디어 공유, 커뮤니티 토론
- **이메일**: DreamIT Biz 팀에 직접 문의

### 기여 방법

Genspark Master는 오픈 소스 프로젝트로, 커뮤니티의 기여를 환영합니다.

1. **콘텐츠 개선**: 오탈자 수정, 내용 보충, 번역 개선
2. **새 콘텐츠 추가**: 새로운 가이드, 팁, 예제 추가
3. **버그 수정**: UI 버그, 링크 오류 등 수정
4. **기능 추가**: 새로운 기능이나 개선 사항 제안 및 구현

### 기여 절차

\`\`\`bash
# 1. 리포지토리 포크
# GitHub에서 Fork 버튼 클릭

# 2. 로컬에 클론
git clone https://github.com/your-username/genspark.git

# 3. 브랜치 생성
git checkout -b feature/your-feature-name

# 4. 변경 사항 커밋
git add .
git commit -m "Add: 새로운 기능 설명"

# 5. 푸시 및 PR 생성
git push origin feature/your-feature-name
\`\`\`

### Genspark 공식 리소스

- **Genspark 공식 사이트**: [genspark.ai](https://www.genspark.ai)
- **Genspark 블로그**: [genspark.ai/blog](https://www.genspark.ai/blog)
- **Genspark Twitter/X**: [@gaborcselle](https://twitter.com/gaborcselle)`,
      contentEn: `### Contact

For inquiries, suggestions, or error reports about Genspark Master, please reach out through the following channels:

- **GitHub Issues**: Bug reports, feature requests, content error reports
- **GitHub Discussions**: General questions, idea sharing, community discussions
- **Email**: Direct contact with the DreamIT Biz team

### How to Contribute

Genspark Master is an open-source project and welcomes community contributions.

1. **Content Improvement**: Fix typos, supplement content, improve translations
2. **New Content**: Add new guides, tips, and examples
3. **Bug Fixes**: Fix UI bugs, broken links, etc.
4. **Feature Additions**: Suggest and implement new features or improvements

### Contribution Process

\`\`\`bash
# 1. Fork the repository
# Click the Fork button on GitHub

# 2. Clone locally
git clone https://github.com/your-username/genspark.git

# 3. Create a branch
git checkout -b feature/your-feature-name

# 4. Commit changes
git add .
git commit -m "Add: description of new feature"

# 5. Push and create PR
git push origin feature/your-feature-name
\`\`\`

### Official Genspark Resources

- **Genspark Official Site**: [genspark.ai](https://www.genspark.ai)
- **Genspark Blog**: [genspark.ai/blog](https://www.genspark.ai/blog)
- **Genspark Twitter/X**: [@gaborcselle](https://twitter.com/gaborcselle)`
    }
  ]
};

export default faq;
