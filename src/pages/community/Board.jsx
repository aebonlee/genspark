import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const CATEGORIES = [
  { key: 'all', ko: '전체', en: 'All' },
  { key: 'notice', ko: '공지', en: 'Notice' },
  { key: 'tip', ko: '팁', en: 'Tips' },
  { key: 'question', ko: '질문', en: 'Question' },
  { key: 'free', ko: '자유', en: 'Free' },
];

const DUMMY_POSTS = [
  { id: 1, category: 'notice', title: 'Genspark Master 커뮤니티 오픈!', titleEn: 'Genspark Master Community Open!', author: 'Admin', date: '2026-04-04', views: 128 },
  { id: 2, category: 'tip', title: 'Super Agent로 이메일 자동 정리하는 방법', titleEn: 'How to Auto-organize Emails with Super Agent', author: 'GenUser01', date: '2026-04-04', views: 87 },
  { id: 3, category: 'tip', title: 'Deep Research 활용 - 시장조사 보고서 만들기', titleEn: 'Deep Research - Creating Market Research Reports', author: 'Researcher', date: '2026-04-03', views: 65 },
  { id: 4, category: 'question', title: 'AI Developer로 React 앱 만들 수 있나요?', titleEn: 'Can I build React apps with AI Developer?', author: 'DevBeginner', date: '2026-04-03', views: 42 },
  { id: 5, category: 'free', title: 'Genspark vs ChatGPT 비교 사용기', titleEn: 'Genspark vs ChatGPT Comparison Review', author: 'AIFan', date: '2026-04-02', views: 156 },
  { id: 6, category: 'tip', title: 'Sparkpages로 기술 블로그 자동 생성하기', titleEn: 'Auto-generate Tech Blog with Sparkpages', author: 'Blogger', date: '2026-04-02', views: 73 },
  { id: 7, category: 'question', title: 'AI Phone Calling 한국에서도 되나요?', titleEn: 'Does AI Phone Calling work in Korea?', author: 'Curious', date: '2026-04-01', views: 38 },
  { id: 8, category: 'free', title: 'AI Slides로 발표 준비 시간 90% 단축한 후기', titleEn: 'How AI Slides Cut My Presentation Prep by 90%', author: 'Speaker', date: '2026-04-01', views: 201 },
  { id: 9, category: 'tip', title: 'Genspark 무료 플랜 크레딧 절약 팁', titleEn: 'Tips to Save Credits on Genspark Free Plan', author: 'SaverPro', date: '2026-03-31', views: 94 },
  { id: 10, category: 'notice', title: '프롬프트 가이드 v2 업데이트 안내', titleEn: 'Prompt Guide v2 Update Notice', author: 'Admin', date: '2026-03-30', views: 67 },
];

export default function Board() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = DUMMY_POSTS.filter(post => {
    const matchCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchSearch = searchQuery === '' ||
      (isKo ? post.title : post.titleEn).toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="community-page">
      <SEOHead title={isKo ? '커뮤니티' : 'Community'} path="/community" />
      <div className="container">
        <div className="page-header">
          <h1>{isKo ? '커뮤니티' : 'Community'}</h1>
          <p className="page-desc">
            {isKo
              ? 'Genspark AI 사용 경험을 공유하고 함께 성장하는 공간입니다.'
              : 'A space to share your Genspark AI experience and grow together.'}
          </p>
        </div>

        <div className="community-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`chip ${activeCategory === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {isKo ? cat.ko : cat.en}
            </button>
          ))}
        </div>

        <div className="community-search">
          <input
            type="text"
            placeholder={isKo ? '게시글 검색...' : 'Search posts...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="post-list">
          {filtered.length === 0 ? (
            <div className="text-center" style={{ padding: '48px 0', color: 'var(--text-light)' }}>
              {isKo ? '게시글이 없습니다.' : 'No posts found.'}
            </div>
          ) : (
            filtered.map(post => (
              <Link key={post.id} to={`/community/${post.id}`} className="post-item">
                <span className={`post-category ${post.category}`}>
                  {CATEGORIES.find(c => c.key === post.category)?.[isKo ? 'ko' : 'en']}
                </span>
                <span className="post-title">{isKo ? post.title : post.titleEn}</span>
                <span className="post-meta">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                  <span><i className="fa-solid fa-eye" /> {post.views}</span>
                </span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
