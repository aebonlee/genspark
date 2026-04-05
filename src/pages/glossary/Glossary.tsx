import { useState, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const glossaryTerms = [
  { term: 'Super Agent', termEn: 'Super Agent', def: 'Genspark의 핵심 AI 에이전트. 멀티 모델 엔진으로 복잡한 작업을 자율적으로 수행합니다.', defEn: 'Genspark\'s core AI agent. Autonomously performs complex tasks with a multi-model engine.' },
  { term: 'Deep Research', termEn: 'Deep Research', def: 'Genspark의 심층 리서치 엔진. 여러 AI 모델과 소스를 활용하여 포괄적인 리서치 보고서를 생성합니다.', defEn: 'Genspark\'s deep research engine. Generates comprehensive research reports using multiple AI models and sources.' },
  { term: 'Sparkpages', termEn: 'Sparkpages', def: 'AI가 검색 결과나 리서치 내용을 구조화된 웹 페이지로 자동 생성하는 Genspark의 콘텐츠 생성 도구입니다.', defEn: 'Genspark\'s content creation tool where AI automatically generates structured web pages from search results or research content.' },
  { term: 'AI Slides', termEn: 'AI Slides', def: '주제를 입력하면 AI가 자동으로 프레젠테이션을 생성하는 Genspark의 슬라이드 제작 도구입니다.', defEn: 'Genspark\'s slide creation tool where AI automatically generates presentations from a given topic.' },
  { term: 'AI Developer', termEn: 'AI Developer', def: '자연어로 웹사이트와 웹 애플리케이션을 생성할 수 있는 Genspark의 코드 생성 도구입니다.', defEn: 'Genspark\'s code generation tool that creates websites and web applications from natural language.' },
  { term: 'LLM', termEn: 'Large Language Model', def: '대규모 텍스트 데이터로 학습된 인공지능 모델. 자연어를 이해하고 생성할 수 있습니다.', defEn: 'An AI model trained on massive text data. Capable of understanding and generating natural language.' },
  { term: '멀티 모델', termEn: 'Multi-Model', def: '여러 AI 모델을 동시에 활용하는 접근 방식. Genspark는 GPT-4, Claude, Gemini 등을 상황에 맞게 자동 선택합니다.', defEn: 'An approach that utilizes multiple AI models simultaneously. Genspark auto-selects from GPT-4, Claude, Gemini, etc. based on context.' },
  { term: '크레딧', termEn: 'Credits', def: 'Genspark의 사용량 단위. 무료 사용자는 하루 100 크레딧, 유료 사용자는 무제한으로 사용할 수 있습니다.', defEn: 'Genspark\'s usage unit. Free users get 100 daily credits, paid users get unlimited usage.' },
  { term: '토큰 (Token)', termEn: 'Token', def: 'LLM이 텍스트를 처리하는 기본 단위. 단어, 부분 단어, 또는 문자일 수 있습니다.', defEn: 'The basic unit LLMs use to process text. Can be a word, subword, or character.' },
  { term: '프롬프트 (Prompt)', termEn: 'Prompt', def: 'AI에게 전달하는 입력 텍스트. 질문, 지시, 맥락 정보를 포함합니다.', defEn: 'Input text sent to AI. Includes questions, instructions, and contextual information.' },
  { term: '프롬프트 엔지니어링', termEn: 'Prompt Engineering', def: 'AI에서 원하는 결과를 얻기 위해 입력 프롬프트를 설계하고 최적화하는 기술입니다.', defEn: 'The art and science of designing and optimizing input prompts to get desired results from AI.' },
  { term: '환각 (Hallucination)', termEn: 'Hallucination', def: 'AI 모델이 사실이 아닌 정보를 자신 있게 생성하는 현상입니다.', defEn: 'A phenomenon where AI models confidently generate information that is not factual.' },
  { term: 'RAG', termEn: 'Retrieval-Augmented Generation', def: '외부 데이터베이스에서 관련 정보를 검색하여 응답 생성에 활용하는 기법입니다.', defEn: 'A technique that retrieves relevant information from external databases to enhance response generation.' },
  { term: 'FLUX', termEn: 'FLUX', def: 'Genspark에서 지원하는 AI 이미지 생성 모델. 빠른 생성 속도와 높은 품질이 특징입니다.', defEn: 'An AI image generation model supported by Genspark. Features fast generation speed and high quality.' },
  { term: 'Gemini Imagen 3', termEn: 'Gemini Imagen 3', def: 'Google의 이미지 생성 모델. 사실적인 이미지와 텍스트 포함 이미지 생성에 강합니다.', defEn: 'Google\'s image generation model. Strong in generating realistic images and images with text.' },
  { term: 'Sora 2', termEn: 'Sora 2', def: 'OpenAI의 AI 영상 생성 모델. 텍스트 프롬프트로 최대 60초의 고품질 영상을 생성합니다.', defEn: 'OpenAI\'s AI video generation model. Creates up to 60-second high-quality videos from text prompts.' },
  { term: 'AI 전화', termEn: 'AI Phone Calling', def: 'Genspark의 AI 전화 기능. AI가 사용자를 대신하여 실제 전화를 걸어줍니다.', defEn: 'Genspark\'s AI phone calling feature. AI makes real phone calls on behalf of users.' },
  { term: '에이전트 (Agent)', termEn: 'Agent', def: '목표를 달성하기 위해 자율적으로 계획하고, 도구를 사용하며, 행동하는 AI 시스템입니다.', defEn: 'An AI system that autonomously plans, uses tools, and takes actions to achieve goals.' },
  { term: 'Agentic AI', termEn: 'Agentic AI', def: '자율적으로 복잡한 작업을 수행하는 에이전트 기반 AI 시스템을 총칭합니다.', defEn: 'A general term for agent-based AI systems that autonomously perform complex tasks.' },
  { term: 'Transformer', termEn: 'Transformer', def: 'Self-Attention 메커니즘을 사용하는 딥러닝 아키텍처. 대부분의 현대 LLM의 기반입니다.', defEn: 'A deep learning architecture using self-attention mechanisms. The foundation of most modern LLMs.' },
  { term: 'Chain of Thought', termEn: 'Chain of Thought', def: '모델이 단계별로 추론 과정을 보여주도록 유도하는 프롬프팅 기법입니다.', defEn: 'A prompting technique that guides the model to show its reasoning process step by step.' },
  { term: 'Few-shot Learning', termEn: 'Few-shot Learning', def: '프롬프트에 몇 가지 예시를 포함하여 모델이 패턴을 학습하도록 하는 기법입니다.', defEn: 'A technique where a few examples are included in the prompt to help the model learn the pattern.' },
  { term: '온도 (Temperature)', termEn: 'Temperature', def: '출력의 무작위성을 제어하는 매개변수. 0에 가까울수록 결정적, 1에 가까울수록 창의적입니다.', defEn: 'A parameter controlling output randomness. Closer to 0 is deterministic, closer to 1 is creative.' },
  { term: 'OAuth 2.0', termEn: 'OAuth 2.0', def: '외부 서비스에 안전하게 접근하기 위한 인증 프로토콜. Genspark가 Google 서비스에 접근할 때 사용합니다.', defEn: 'An authentication protocol for securely accessing external services. Used when Genspark accesses Google services.' },
  { term: '임베딩 (Embedding)', termEn: 'Embedding', def: '텍스트를 고차원 벡터 공간의 숫자 배열로 변환하는 것. 의미적 유사도 비교에 사용됩니다.', defEn: 'Converting text into numerical arrays in high-dimensional vector space. Used for semantic similarity comparison.' },
];

export default function Glossary() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return glossaryTerms;
    const q = search.toLowerCase();
    return glossaryTerms.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.termEn.toLowerCase().includes(q) ||
        item.def.toLowerCase().includes(q) ||
        item.defEn.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="content-page">
      <SEOHead
        title={isKo ? 'AI 용어 사전' : 'AI Glossary'}
        description={isKo ? 'Genspark 및 AI 관련 핵심 용어를 정리한 용어 사전입니다.' : 'A glossary of key Genspark and AI-related terms.'}
        path="/glossary"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? 'AI 용어 사전' : 'AI Glossary'}</h1>
          <p className="page-desc">
            {isKo
              ? 'Genspark과 AI 관련 핵심 용어를 검색하고 학습하세요.'
              : 'Search and learn key terms related to Genspark and AI.'}
          </p>
        </div>

        <div className="glossary-search">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <input
            type="text"
            placeholder={isKo ? '용어 검색...' : 'Search terms...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="glossary-list">
          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>
              {isKo ? '검색 결과가 없습니다.' : 'No results found.'}
            </p>
          )}
          {filtered.map((item, idx) => (
            <div key={idx} className="glossary-item">
              <div className="glossary-term">
                {isKo ? item.term : item.termEn}
                {isKo && item.termEn !== item.term && (
                  <span style={{ fontWeight: 400, fontSize: '14px', color: 'var(--text-light)', marginLeft: '8px' }}>
                    {item.termEn}
                  </span>
                )}
                {!isKo && item.term !== item.termEn && (
                  <span style={{ fontWeight: 400, fontSize: '14px', color: 'var(--text-light)', marginLeft: '8px' }}>
                    {item.term}
                  </span>
                )}
              </div>
              <div className="glossary-definition">
                {isKo ? item.def : item.defEn}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: 'var(--text-light)' }}>
          {isKo
            ? `총 ${filtered.length}개의 용어`
            : `${filtered.length} terms total`}
        </p>
      </div>
    </div>
  );
}
