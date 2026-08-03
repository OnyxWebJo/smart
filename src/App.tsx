import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Team from './sections/Team';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Preloader from './components/Preloader';
import ServiceDetail from './sections/services/ServiceDetail';
import './App.css';

// Scroll to top and scroll to hash handler
function ScrollAndHashHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    } else {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const { i18n, t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second preload
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  if (loading) {
    return <Preloader />;
  }

  const isServicePage = location.pathname.startsWith('/services/');

  return (
    <div className="relative min-h-screen bg-light-bg">
      <ScrollAndHashHandler />
      {!isServicePage && (
        <Helmet>
          <title>{t('meta_title')}</title>
          <meta name="description" content={t('meta_description')} />
          <meta name="keywords" content={t('meta_keywords')} />
        </Helmet>
      )}
      <Navigation />
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Process />
                <Team />
                <Clients />
                <Contact />
              </>
            } 
          />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
