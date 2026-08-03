import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { useParams, useNavigate } from 'react-router-dom';
import { getServices } from '../Services';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  ShieldCheck,
  PhoneCall,
  Clock,
  MapPin
} from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Reset animation state then trigger it
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [slug]);

  const services = getServices(t);
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full bg-light-bg min-h-screen flex items-center justify-center py-20 px-4">
        <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-lg border border-gray-100">
          <HelpCircle className="w-16 h-16 text-turquoise mx-auto mb-6 animate-bounce" />
          <h1 className="font-display text-2xl font-bold text-deep-blue mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you are looking for does not exist or has been moved.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-turquoise text-white font-semibold rounded-full hover:bg-turquoise-600 transition-all duration-300"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            <span>{t('cn_back_home')}</span>
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  const prefix = slug === 'computer-networks' ? 'cn' : slug;

  // Build dynamic solutions list from translations if they exist
  const solutions = [];
  for (let i = 1; i <= 5; i++) {
    const titleKey = `${prefix}_solution_${i}_title`;
    const descKey = `${prefix}_solution_${i}_desc`;
    const tagsKey = `${prefix}_solution_${i}_tags`;
    
    if (i18n.exists(titleKey)) {
      const tagsString = t(tagsKey, { defaultValue: '' });
      const tags = tagsString ? tagsString.split(',').map(tag => tag.trim()) : [];
      solutions.push({
        title: t(titleKey),
        desc: t(descKey),
        tags: tags
      });
    }
  }

  // Fallback translation helper for custom elements
  const getTranslationWithFallback = (key: string, fallback: string) => {
    return i18n.exists(key) ? t(key) : fallback;
  };

  const heroSubtitle = getTranslationWithFallback(`${prefix}_hero_subtitle`, service.description);
  const overviewTitle = getTranslationWithFallback(`${prefix}_overview_title`, t('cn_overview_title'));
  const overviewDesc = getTranslationWithFallback(`${prefix}_overview_desc`, service.description);
  const solutionsTitle = getTranslationWithFallback(`${prefix}_solution_title`, t('cn_solution_title'));
  const whyChooseTitle = getTranslationWithFallback(`${prefix}_why_title`, t('cn_why_title'));
  const whyChooseDesc = getTranslationWithFallback(`${prefix}_why_desc`, t('cn_why_desc'));
  const whyPoint1 = getTranslationWithFallback(`${prefix}_why_points_1`, t('cn_why_points_1'));
  const whyPoint2 = getTranslationWithFallback(`${prefix}_why_points_2`, t('cn_why_points_2'));
  const whyPoint3 = getTranslationWithFallback(`${prefix}_why_points_3`, t('cn_why_points_3'));
  const certTitle = getTranslationWithFallback(`${prefix}_cert_title`, t('cn_cert_title'));
  const certDesc = getTranslationWithFallback(`${prefix}_cert_desc`, t('cn_cert_desc'));
  const ctaTitle = getTranslationWithFallback(`${prefix}_cta_title`, t('cn_cta_title'));
  const ctaDesc = getTranslationWithFallback(`${prefix}_cta_desc`, t('cn_cta_desc'));

  // Custom SEO Tags
  const metaTitle = getTranslationWithFallback(`${prefix}_meta_title`, `${service.title} | Sources for Smart Systems`);
  const metaDesc = getTranslationWithFallback(`${prefix}_meta_desc`, `${service.description}`);
  const metaKeywords = getTranslationWithFallback(`${prefix}_meta_keywords`, `${service.title.toLowerCase()}, smart systems jordan`);

  return (
    <div className="w-full bg-light-bg min-h-screen text-gray-900 pb-32 overflow-x-hidden">
      {/* Helmet SEO */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="keywords" content={metaKeywords} />
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-deep-blue text-white py-24 md:py-36 overflow-hidden">
        {/* Network Nodes Grid Graphic */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[radial-gradient(#17d2bd_1.5px,transparent_1.5px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        </div>
        
        {/* Diagonal Wave & Blur Orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-turquoise/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-turquoise/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          {/* Breadcrumbs / Back button */}
          <div className={`mb-8 md:mb-12 transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <button 
              onClick={() => navigate('/#services')}
              className="inline-flex items-center gap-2 text-white/80 hover:text-turquoise transition-colors duration-300 font-medium group"
            >
              {isRtl ? (
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              ) : (
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              )}
              <span>{t('cn_back_home')}</span>
            </button>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-turquoise/15 border border-turquoise/35 rounded-full mb-6 transition-all duration-700 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <IconComponent className="w-4 h-4 text-turquoise animate-pulse" />
              <span className="text-turquoise text-sm font-semibold tracking-wide uppercase">{service.title}</span>
            </div>

            {/* Heading */}
            <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {service.title}
            </h1>

            {/* Subtitle */}
            <p className={`text-white/80 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 xl:px-20 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Overview Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Dynamic Content Card */}
            <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 transition-all duration-1000 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Dynamic Image */}
              <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 border border-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent" />
              </div>

              <h2 className="font-display text-3xl font-bold text-deep-blue mb-6">
                {overviewTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {overviewDesc}
              </p>

              {/* Core Features Tags */}
              <div className="border-t border-gray-100 pt-8 mb-8">
                <h3 className="font-display text-xl font-bold text-deep-blue mb-6">
                  {t('services_label')}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-light-bg rounded-xl border border-gray-200/20 hover:border-turquoise/30 hover:bg-white transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-turquoise mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Detailed Solutions Component (if solutions are found) */}
            {solutions.length > 0 && (
              <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h2 className="font-display text-3xl font-bold text-deep-blue mb-4">
                  {solutionsTitle}
                </h2>
                <div className="h-1 w-20 bg-turquoise rounded-full mb-10" />

                <div className="space-y-10">
                  {solutions.map((sol, index) => (
                    <div key={index} className="group relative flex gap-6 pb-10 border-b border-gray-100 last:border-0 last:pb-0">
                      {/* Solution Number Ring */}
                      <div className="w-12 h-12 rounded-2xl bg-light-bg text-turquoise font-bold flex items-center justify-center border border-gray-100 shrink-0 group-hover:bg-turquoise group-hover:text-white transition-all duration-300 shadow-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-display text-xl font-bold text-deep-blue group-hover:text-turquoise transition-colors duration-300">
                          {sol.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-md">
                          {sol.desc}
                        </p>
                        
                        {/* Interactive Tags */}
                        {sol.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {sol.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="px-3 py-1 bg-turquoise/5 border border-turquoise/15 text-turquoise text-xs font-semibold rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us Grid */}
            <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 transition-all duration-1000 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="font-display text-3xl font-bold text-deep-blue mb-4">
                {whyChooseTitle}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {whyChooseDesc}
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                {[whyPoint1, whyPoint2, whyPoint3].map((pt, i) => (
                  <div key={i} className="p-6 bg-light-bg rounded-2xl border border-gray-100 text-center space-y-3 hover:shadow-md transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-turquoise/10 text-turquoise flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <p className="text-deep-blue font-bold text-sm leading-snug">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar Actions */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Certified Quality Standard Badge */}
            <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center relative overflow-hidden transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="w-16 h-16 bg-turquoise/10 text-turquoise rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-deep-blue mb-2">
                {certTitle}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {certDesc}
              </p>
            </div>

            {/* Quick Consultation Call-To-Action Card */}
            <div className={`bg-gradient-to-br from-deep-blue to-blue-950 rounded-3xl p-8 text-white shadow-xl hover:shadow-glow relative overflow-hidden transition-all duration-1000 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="absolute top-[-30px] right-[-30px] w-36 h-36 bg-turquoise/10 rounded-full" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-turquoise/20 text-turquoise rounded-2xl flex items-center justify-center">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">
                  {ctaTitle}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {ctaDesc}
                </p>

                <div className="pt-4">
                  <a 
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 bg-turquoise text-white font-semibold rounded-xl hover:bg-turquoise-600 hover:shadow-glow hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center"
                  >
                    <span>{t('services_cta_button')}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-5 h-5" />
                    ) : (
                      <ArrowRight className="w-5 h-5" />
                    )}
                  </a>
                </div>
              </div>
            </div>

            {/* Support Working Hours Card */}
            <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 space-y-6 transition-all duration-1000 delay-600 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-turquoise/10 text-turquoise rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-deep-blue">{t('about_feature_4')}</h4>
                  <p className="text-xs text-gray-500">{t('contact_info_hours_details_2')}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-turquoise/10 text-turquoise rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-deep-blue">{t('contact_info_address')}</h4>
                  <p className="text-xs text-gray-500">{t('contact_info_address_details')}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-1">{t('contact_info_phone')}</p>
                <a 
                  href="tel:+962781211444" 
                  className="text-turquoise font-bold text-lg hover:underline"
                >
                  +962 781 211 444
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
