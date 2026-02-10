import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const clients = [
    { src: '/images/clients/client-1.png', alt: t('client_1_alt') },
    { src: '/images/clients/client-2.png', alt: t('client_2_alt') },
    { src: '/images/clients/client-3.png', alt: t('client_3_alt') },
    { src: '/images/clients/client-4.png', alt: t('client_4_alt') },
    { src: '/images/clients/client-5.png', alt: t('client_5_alt') },
    { src: '/images/clients/client-6.png', alt: t('client_6_alt') },
    { src: '/images/clients/client-7.png', alt: t('client_7_alt') },
    { src: '/images/clients/client-8.png', alt: t('client_8_alt') },
    { src: '/images/clients/client-9.png', alt: t('client_9_alt') },
    { src: '/images/clients/client-10.png', alt: t('client_10_alt') },
    { src: '/images/clients/client-11.png', alt: t('client_11_alt') },
    { src: '/images/clients/client-12.png', alt: t('client_12_alt') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-white overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-turquoise rounded-full" />
            <span className="text-turquoise text-sm font-medium">{t('clients_label')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('clients_heading')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('clients_desc')}
          </p>
        </div>

        {/* Clients Marquee */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="overflow-hidden bg-[#f2f2f2] py-8">
            <div className="flex animate-marquee">
              {clients.concat(clients).map((client, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
