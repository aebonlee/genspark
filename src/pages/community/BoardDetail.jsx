import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const POSTS_DATA = {
  1: {
    category: 'notice', author: 'Admin', date: '2026-04-04', views: 128,
    title: 'Genspark Master 커뮤니티 오픈!',
    titleEn: 'Genspark Master Community Open!',
    content: `안녕하세요! Genspark Master 커뮤니티가 오픈되었습니다.\n\nGenspark AI와 관련된 팁, 질문, 사용 후기 등을 자유롭게 공유해주세요.\n\n### 커뮤니티 이용 안내\n- **팁**: Genspark 활용 노하우 공유\n- **질문**: 사용 중 궁금한 점 질문\n- **자유**: 자유롭게 소통\n\n많은 참여 부탁드립니다!`,
    contentEn: `Hello! The Genspark Master community is now open.\n\nFeel free to share tips, questions, and reviews about Genspark AI.\n\n### Community Guidelines\n- **Tips**: Share Genspark usage know-how\n- **Questions**: Ask anything about usage\n- **Free**: Open discussion\n\nWe look forward to your participation!`,
  },
  2: {
    category: 'tip', author: 'GenUser01', date: '2026-04-04', views: 87,
    title: 'Super Agent로 이메일 자동 정리하는 방법',
    titleEn: 'How to Auto-organize Emails with Super Agent',
    content: `Super Agent에 Gmail을 연동하면 이메일을 자동으로 정리할 수 있습니다.\n\n### 설정 방법\n1. Genspark에서 Gmail 계정 연결\n2. Super Agent에게 "매일 아침 읽지 않은 이메일을 요약해줘" 요청\n3. 자동으로 카테고리별 정리 + 액션 아이템 추출\n\n### 활용 팁\n- 뉴스레터와 중요 메일을 자동 분류\n- 답장이 필요한 메일만 하이라이트\n- 주간 이메일 리포트 자동 생성`,
    contentEn: `You can auto-organize emails by connecting Gmail to Super Agent.\n\n### Setup\n1. Connect your Gmail account in Genspark\n2. Ask Super Agent: "Summarize my unread emails every morning"\n3. Auto-categorize + extract action items\n\n### Tips\n- Auto-classify newsletters vs important emails\n- Highlight only emails needing replies\n- Auto-generate weekly email reports`,
  },
};

export default function BoardDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const post = POSTS_DATA[id];

  if (!post) {
    return (
      <div className="community-page">
        <div className="container">
          <div className="page-header">
            <h1>{isKo ? '게시글을 찾을 수 없습니다' : 'Post not found'}</h1>
          </div>
          <Link to="/community" className="btn btn-secondary btn-sm">
            {isKo ? '목록으로' : 'Back to list'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="community-page">
      <SEOHead title={isKo ? post.title : post.titleEn} path={`/community/${id}`} />
      <div className="container">
        <div className="post-detail">
          <div className="post-detail-header">
            <h1 className="post-detail-title">{isKo ? post.title : post.titleEn}</h1>
            <div className="post-detail-info">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span><i className="fa-solid fa-eye" /> {post.views}</span>
            </div>
          </div>
          <div className="post-detail-body" style={{ whiteSpace: 'pre-line' }}>
            {isKo ? post.content : post.contentEn}
          </div>
          <Link to="/community" className="btn btn-secondary btn-sm">
            <i className="fa-solid fa-arrow-left" /> {isKo ? '목록으로' : 'Back to list'}
          </Link>
        </div>
      </div>
    </div>
  );
}
