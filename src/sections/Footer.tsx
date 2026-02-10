import { Trans, useTranslation } from 'react-i18next';
import { Facebook, Instagram, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('about'), href: '#about' },
    { name: t('services'), href: '#services' },
    { name: t('process'), href: '#process' },
    { name: t('contact'), href: '#contact' },
  ];

  const services = [
    { name: t('service_1_title'), href: '#services' },
    { name: t('service_2_title'), href: '#services' },
    { name: t('service_3_title'), href: '#services' },
    { name: t('service_4_title'), href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Sources-for-smart-systems-61555609971074/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sources__systems/', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer dir={i18n.dir()} className="relative w-full bg-deep-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(23, 210, 189, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img src="/images/logo.png" alt={t('meta_title')} className="h-10 w-auto" />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer_description')}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target='_blank'
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-turquoise hover:text-white hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">{t('footer_quick_links_heading')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`text-white/70 text-sm transition-all duration-300 hover:text-turquoise inline-block ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">{t('footer_services_heading')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(service.href);
                    }}
                    className={`text-white/70 text-sm transition-all duration-300 hover:text-turquoise inline-block ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">{t('footer_contact_heading')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  {t('contact_info_visit_details_1')}, {t('contact_info_visit_details_2')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-turquoise flex-shrink-0" />
                <a
                  href={`tel:${t('contact_info_call_details_1')}`}
                  className="text-white/70 text-sm transition-colors duration-300 hover:text-turquoise"
                >
                  {t('contact_info_call_details_1')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-turquoise flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.905 6.316l-1.211 4.42z" />
                </svg>
                <a
                  href={`https://wa.me/${t('contact_info_call_details_2')}`}
                  className="text-white/70 text-sm transition-colors duration-300 hover:text-turquoise"
                >
                  {t('contact_info_call_details_2')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-turquoise flex-shrink-0" />
                <a
                  href={`mailto:${t('contact_info_email_details_1')}`}
                  className="text-white/70 text-sm transition-colors duration-300 hover:text-turquoise"
                >
                  {t('contact_info_email_details_1')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className={`text-white/50 text-sm text-center ${isRTL ? 'sm:text-right' : ''}`}>
              <Trans i18nKey="footer_copyright" values={{ year: new Date().getFullYear() }} />
            </p>
            <div className="flex items-center gap-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 ${isRTL ? 'left-8' : 'right-8'} w-12 h-12 bg-turquoise text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-turquoise-600 hover:shadow-glow hover:scale-110 z-50`}
        aria-label={t('footer_back_to_top')}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
