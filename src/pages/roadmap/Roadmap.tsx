import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const phases = [
  {
    phase: 'Phase 1',
    title: '입문',
    titleEn: 'Beginner',
    description: 'Genspark AI의 기본 개념과 사용법을 익힙니다. 플���폼 인터페이스, 기본 대화, Super Agent의 핵심 기능을 이해하는 것이 목표입니다.',
    descriptionEn: 'Learn the basics of Genspark AI. Goals include understanding the platform interface, basic conversations, and Super Agent\'s core features.',
    topics: ['Genspark 계정 생성 및 설정', 'Super Agent 기본 사용법', '크레딧 시스템 이해', '기본 프롬프트 작성법', '요금제 비교'],
    topicsEn: ['Creating a Genspark Account', 'Super Agent Basics', 'Understanding the Credit System', 'Basic Prompt Writing', 'Plan Comparison'],
  },
  {
    phase: 'Phase 2',
    title: '프롬프트 엔지니어링',
    titleEn: 'Prompt Engineering',
    description: 'Genspark에서 효과적인 결과를 얻기 위한 프롬프트 작성 기법을 마스터합니다. 역할 부여, 구조화된 프롬프트, 반복 개선 등 고급 기법을 학습합니다.',
    descriptionEn: 'Master prompt writing techniques for effective results with Genspark. Learn advanced techniques like role assignment, structured prompts, and iterative refinement.',
    topics: ['구조화된 프롬프트 작성', '역할 부여 (Persona Pattern)', 'Chain of Thought 기법', '멀티 도구 프롬프트', '반복 개선 전략'],
    topicsEn: ['Structured Prompt Writing', 'Role Assignment (Persona Pattern)', 'Chain of Thought Technique', 'Multi-Tool Prompts', 'Iterative Refinement Strategy'],
  },
  {
    phase: 'Phase 3',
    title: '도구 활용',
    titleEn: 'Tool Mastery',
    description: 'Genspark의 다양한 AI 도구를 깊이 있게 학습합니다. Deep Research, Sparkpages, AI Slides, AI Developer 등 각 도구의 전문적 활용법을 익힙니다.',
    descriptionEn: 'Learn Genspark\'s various AI tools in depth. Master professional usage of Deep Research, Sparkpages, AI Slides, AI Developer, and more.',
    topics: ['Deep Research 심층 활용', 'Sparkpages 제작 및 커스터마이징', 'AI Slides 프레젠테이션', 'AI Developer 웹 앱 빌드', '이미지/영상 생성'],
    topicsEn: ['Advanced Deep Research', 'Sparkpages Creation & Customization', 'AI Slides Presentations', 'AI Developer Web App Building', 'Image/Video Generation'],
  },
  {
    phase: 'Phase 4',
    title: '생산성 통합',
    titleEn: 'Productivity Integration',
    description: 'Google Workspace 연동, 자동화 워크플로우, AI 전화 등 생산성 도구와의 통합을 학습합니다. 일상 업무에 Genspark를 통합하여 효율을 극대화합니다.',
    descriptionEn: 'Learn productivity tool integrations including Google Workspace, automation workflows, and AI phone calling. Maximize efficiency by integrating Genspark into daily work.',
    topics: ['Gmail 연동 및 이메일 자동화', 'Google Calendar 일정 관리', 'Google Drive 문서 관리', 'AI 전화 활용', '멀티 도구 워크플로우'],
    topicsEn: ['Gmail Integration & Email Automation', 'Google Calendar Management', 'Google Drive Document Management', 'AI Phone Calling', 'Multi-Tool Workflows'],
  },
  {
    phase: 'Phase 5',
    title: '전문가 활용',
    titleEn: 'Expert Level',
    description: '실제 비즈니스 시나리오에서 Genspark를 전문적으로 활용합니다. 복잡한 프로젝트, 팀 협업, 고급 자동화 등을 수행합니다.',
    descriptionEn: 'Use Genspark professionally in real business scenarios. Execute complex projects, team collaboration, and advanced automation.',
    topics: ['복합 리서치 프로젝트', '콘텐츠 제작 파이프라인', '비즈니스 보고서 자동화', 'AI Developer 실전 프로젝트', '팀 내 Genspark 활용 전략'],
    topicsEn: ['Complex Research Projects', 'Content Production Pipeline', 'Business Report Automation', 'AI Developer Real Projects', 'Team Genspark Usage Strategy'],
  },
];

export default function Roadmap() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="content-page">
      <SEOHead
        title={isKo ? '학습 로드맵' : 'Learning Roadmap'}
        description={isKo ? 'Genspark 마스터가 되기 위한 단계별 학습 로드맵입니다.' : 'A step-by-step learning roadmap to become a Genspark master.'}
        path="/roadmap"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? '학습 로드맵' : 'Learning Roadmap'}</h1>
          <p className="page-desc">
            {isKo
              ? '입문부터 전문가까지, 체계적으로 Genspark를 마스터하세요.'
              : 'Master Genspark systematically, from beginner to expert level.'}
          </p>
        </div>

        <div className="roadmap-timeline">
          {phases.map((phase, idx) => (
            <div key={idx} className="roadmap-item">
              <div className="roadmap-phase">{phase.phase}</div>
              <h3 className="roadmap-title">
                {isKo ? phase.title : phase.titleEn}
              </h3>
              <p className="roadmap-desc">
                {isKo ? phase.description : phase.descriptionEn}
              </p>
              <div style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {(isKo ? phase.topics : phase.topicsEn).map((topic, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 12px',
                      fontSize: '12px',
                      fontWeight: 500,
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--bg-light-gray)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
