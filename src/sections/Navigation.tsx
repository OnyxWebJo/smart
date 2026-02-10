import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('process'), href: '#process' },
    { name: t('contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 group"
            >
              <img src="/images/logo.png" alt="Sources for Smart Systems" className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`font-medium text-sm transition-all duration-300 hover:text-turquoise relative group ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button and Language Switcher */}
            <div className="hidden lg:flex items-center gap-4">
               <div className="flex items-center gap-2">
                <button onClick={() => changeLanguage('en')} className={`text-sm font-medium ${i18n.language === 'en' ? 'text-turquoise' : isScrolled ? 'text-gray-700' : 'text-white/90'}`}>EN</button>
                <span className={isScrolled ? 'text-gray-700' : 'text-white/90'}>|</span>
                <button onClick={() => changeLanguage('ar')} className={`text-sm font-medium ${i18n.language === 'ar' ? 'text-turquoise' : isScrolled ? 'text-gray-700' : 'text-white/90'}`}>AR</button>
              </div>
              <a
                href="tel:+962777048833"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+962 777 048 833</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-5 py-2.5 bg-turquoise text-white font-medium text-sm rounded-full transition-all duration-300 hover:bg-turquoise-600 hover:shadow-glow hover:scale-105"
              >
                {t('get_quote')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-800 font-medium text-lg py-3 border-b border-gray-100 hover:text-turquoise transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-8">
               <div className="flex items-center justify-center gap-4 mb-4">
                <button onClick={() => changeLanguage('en')} className={`text-lg font-medium ${i18n.language === 'en' ? 'text-turquoise' : 'text-gray-700'}`}>EN</button>
                <span className="text-gray-700">|</span>
                <button onClick={() => changeLanguage('ar')} className={`text-lg font-medium ${i18n.language === 'ar' ? 'text-turquoise' : 'text-gray-700'}`}>AR</button>
              </div>
              <a
                href="tel:+962777048833"
                className="flex items-center justify-center gap-3 text-gray-700 mb-4"
              >
                <Phone className="w-5 h-5 text-turquoise" />
                <span>+962 777 048 833</span>
              </a>
              <button
                onClick={() => scrollToSection('#contact')}
                className="w-full py-3 bg-turquoise text-white font-medium rounded-full hover:bg-turquoise-600 transition-colors duration-300"
              >
                {t('get_quote')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
