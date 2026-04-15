import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LicenseProvider } from '../components/LicenseGuard';
import LockOverlay from '../components/LockOverlay';
import AdminGuard from '../components/AdminGuard';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const SuperAgentGuide = lazy(() => import('../pages/super-agent/SuperAgentGuide'));
const DeepResearchGuide = lazy(() => import('../pages/deep-research/DeepResearchGuide'));
const SparkpagesGuide = lazy(() => import('../pages/sparkpages/SparkpagesGuide'));
const AISlidesGuide = lazy(() => import('../pages/ai-slides/AISlidesGuide'));
const AIDeveloperGuide = lazy(() => import('../pages/ai-developer/AIDeveloperGuide'));
const AIToolsGuide = lazy(() => import('../pages/ai-tools/AIToolsGuide'));
const PromptGuide = lazy(() => import('../pages/prompt-guide/PromptGuide'));
const AINews = lazy(() => import('../pages/ai-news/AINews'));
const Resources = lazy(() => import('../pages/resources/Resources'));
const Glossary = lazy(() => import('../pages/glossary/Glossary'));
const Roadmap = lazy(() => import('../pages/roadmap/Roadmap'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <LicenseProvider>
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/super-agent" element={<SuperAgentGuide />} />
            <Route path="/deep-research" element={<DeepResearchGuide />} />
            <Route path="/sparkpages" element={<SparkpagesGuide />} />
            <Route path="/ai-slides" element={<AISlidesGuide />} />
            <Route path="/ai-developer" element={<AIDeveloperGuide />} />
            <Route path="/ai-tools" element={<AIToolsGuide />} />
            <Route path="/prompt-guide" element={<PromptGuide />} />
            <Route path="/ai-news" element={<AINews />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/community" element={<Board />} />
            <Route path="/community/write" element={<BoardWrite />} />
            <Route path="/community/:id" element={<BoardDetail />} />
            <Route path="/admin" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <LockOverlay />
    </div>
    </LicenseProvider>
  );
}
