import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const resources = [
  {
    icon: 'fa-globe',
    title: 'Genspark Official',
    titleKo: 'Genspark 공식 사이트',
    desc: 'The official Genspark AI platform. Access Super Agent, Deep Research, and all tools.',
    descKo: 'Genspark AI 플랫폼 공식 사이트. Super Agent, Deep Research 등 모든 도구에 접근하세요.',
    url: 'https://www.genspark.ai',
  },
  {
    icon: 'fa-blog',
    title: 'Genspark Blog',
    titleKo: 'Genspark 블로그',
    desc: 'Official blog with product updates, feature announcements, and AI insights.',
    descKo: '제품 업데이트, 기능 발표, AI 인사이트를 담은 공식 블로그입니다.',
    url: 'https://www.genspark.ai/blog',
  },
  {
    icon: 'fa-robot',
    title: 'Super Agent',
    titleKo: 'Super Agent',
    desc: 'Genspark\'s core AI agent for complex multi-step tasks and automation.',
    descKo: '복잡한 멀티 스텝 작업과 자동화를 위한 Genspark의 핵심 AI 에이전트입니다.',
    url: 'https://www.genspark.ai',
  },
  {
    icon: 'fa-microscope',
    title: 'Deep Research',
    titleKo: 'Deep Research',
    desc: 'Multi-model deep research engine for comprehensive analysis and reports.',
    descKo: '종합적인 분석과 보고서를 위한 멀티 모델 심층 리서치 엔진입니다.',
    url: 'https://www.genspark.ai',
  },
  {
    icon: 'fa-code',
    title: 'AI Developer',
    titleKo: 'AI Developer',
    desc: 'Build websites and web applications with natural language instructions.',
    descKo: '자연어 지시만으로 웹사이트와 웹 애플리케이션을 빌드하세요.',
    url: 'https://www.genspark.ai',
  },
  {
    icon: 'fa-book',
    title: 'Anthropic Docs',
    titleKo: 'Anthropic 문서',
    desc: 'Official documentation for Claude API, used by Genspark\'s AI backbone.',
    descKo: 'Genspark의 AI 백본으로 사용되는 Claude API의 공식 문서입니다.',
    url: 'https://docs.anthropic.com',
  },
  {
    icon: 'fa-newspaper',
    title: 'AI News & Trends',
    titleKo: 'AI 뉴스 & 트렌드',
    desc: 'Stay updated with the latest AI industry news and technology trends.',
    descKo: '최신 AI 산업 뉴스와 기술 트렌드를 확인하세요.',
    url: 'https://www.theverge.com/ai-artificial-intelligence',
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Prompt Engineering Guide',
    titleKo: '프롬프트 엔지니어링 가이드',
    desc: 'Learn prompt engineering techniques to get the best results from AI.',
    descKo: 'AI에서 최상의 결과를 얻기 위한 프롬프트 엔지니어링 기법을 학습하세요.',
    url: 'https://www.promptingguide.ai',
  },
];

export default function Resources() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const handleOpen = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="content-page">
      <SEOHead
        title={isKo ? '학습 리소스' : 'Learning Resources'}
        description={isKo ? 'Genspark AI 학습에 유용한 리소스 모음입니다.' : 'A collection of resources for learning Genspark AI.'}
        path="/resources"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? '학습 리소스' : 'Learning Resources'}</h1>
          <p className="page-desc">
            {isKo
              ? 'Genspark AI 학습에 필요한 핵심 리소스를 모았습니다.'
              : 'Essential resources for learning Genspark AI.'}
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="resource-card"
              onClick={() => handleOpen(res.url)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpen(res.url)}
            >
              <div className="resource-card-header">
                <div className="resource-icon">
                  <i className={`fa-solid ${res.icon}`} />
                </div>
                <span className="resource-title">{isKo ? res.titleKo : res.title}</span>
              </div>
              <p className="resource-desc">{isKo ? res.descKo : res.desc}</p>
              <span className="resource-link">
                {isKo ? '바로가기' : 'Visit'}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
