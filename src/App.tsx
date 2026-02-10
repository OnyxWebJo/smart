import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Process from './sections/Process';
import Team from './sections/Team';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  return (
    <div className="relative min-h-screen bg-light-bg">
      <Helmet>
        <title>{t('meta_title')}</title>
        <meta name="description" content={t('meta_description')} />
        <meta name="keywords" content={t('meta_keywords')} />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
