import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import SEOHead from '../../components/SEOHead';
import { getPosts } from '../../utils/posts';

const CATEGORIES = [
  { key: 'all', ko: '전체', en: 'All' },
  { key: 'notice', ko: '공지', en: 'Notice' },
  { key: 'tip', ko: '팁', en: 'Tips' },
  { key: 'question', ko: '질문', en: 'Question' },
  { key: 'free', ko: '자유', en: 'Free' },
];

export default function Board() {
  const { language } = useLanguage();
  const { isAuthenticated } = useAuth();
  const isKo = language === 'ko';
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getPosts({ category: activeCategory, search });
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [activeCategory, search]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);

  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    });
  };

  return (
    <div className="community-page">
      <SEOHead title={isKo ? '커뮤니티' : 'Community'} path="/community" />
      <div className="container">
        <div className="community-header">
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: 800 }}>{isKo ? '커뮤니티' : 'Community'}</h1>
            <p className="page-desc" style={{ marginTop: '8px' }}>
              {isKo
                ? 'Genspark AI 사용 경험을 공유하고 함께 성장하는 공간입니다.'
                : 'A space to share your Genspark AI experience and grow together.'}
            </p>
          </div>
          {isAuthenticated && (
            <Link to="/community/write" className="btn btn-primary btn-sm">
              <i className="fa-solid fa-pen" /> {isKo ? '글쓰기' : 'Write'}
            </Link>
          )}
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
            placeholder={isKo ? '제목, 작성자 검색...' : 'Search title, author...'}
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </div>

        <div className="post-list">
          {loading && <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>{isKo ? '로딩 중...' : 'Loading...'}</p>}
          {error && <p style={{ textAlign: 'center', color: '#EF4444', padding: '40px 0' }}>{error}</p>}
          {!loading && !error && posts.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>
              {isKo ? '게시글이 없습니다.' : 'No posts found.'}
              {!isAuthenticated && (
                <><br /><Link to="/login" style={{ color: 'var(--primary-blue)' }}>{isKo ? '로그인하고 첫 글을 작성해보세요!' : 'Login and write the first post!'}</Link></>
              )}
            </p>
          )}
          {!loading && posts.map(post => (
            <Link key={post.id} to={`/community/${post.id}`} className="post-item">
              <span className={`post-category ${post.category}`}>
                {isKo ? CATEGORIES.find(c => c.key === post.category)?.ko : CATEGORIES.find(c => c.key === post.category)?.en}
              </span>
              <span className="post-title">{post.title}</span>
              <div className="post-meta">
                <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
                <span>{formatDate(post.created_at)}</span>
                <span><i className="fa-solid fa-eye" /> {post.view_count || 0}</span>
                <span><i className="fa-solid fa-comment" /> {post.comment_count || 0}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
