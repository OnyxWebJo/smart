import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Network, Wrench, Video, Shield, ArrowRight, Speaker, Printer, Users, Rss, Code, Smartphone } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: Network,
      title: t('service_1_title'),
      description: t('service_1_desc'),
      image: '/images/service-networks.jpg',
      features: [t('service_1_f_1'), t('service_1_f_2'), t('service_1_f_3'), t('service_1_f_4')],
    },
    {
      id: 2,
      icon: Wrench,
      title: t('service_2_title'),
      description: t('service_2_desc'),
      image: '/images/service-maintenance.jpg',
      features: [t('service_2_f_1'), t('service_2_f_2'), t('service_2_f_3'), t('service_2_f_4')],
    },
    {
      id: 3,
      icon: Video,
      title: t('service_3_title'),
      description: t('service_3_desc'),
      image: '/images/service-cctv.jpg',
      features: [t('service_3_f_1'), t('service_3_f_2'), t('service_3_f_3'), t('service_3_f_4')],
    },
    {
      id: 4,
      icon: Shield,
      title: t('service_4_title'),
      description: t('service_4_desc'),
      image: '/images/service-alarms.jpg',
      features: [t('service_4_f_1'), t('service_4_f_2'), t('service_4_f_3'), t('service_4_f_4')],
    },
    {
      id: 5,
      icon: Rss,
      title: t('service_5_title'),
      description: t('service_5_desc'),
      image: '/images/_low-current systems.png',
      features: [t('service_5_f_1'), t('service_5_f_2'), t('service_5_f_3')],
    },
    {
      id: 6,
      icon: Users,
      title: t('service_6_title'),
      description: t('service_6_desc'),
      image: '/images/attendance.png',
      features: [t('service_6_f_1'), t('service_6_f_2'), t('service_6_f_3')],
    },
    {
      id: 7,
      icon: Speaker,
      title: t('service_7_title'),
      description: t('service_7_desc'),
      image: '/images/service-sound-systems.jpg',
      features: [t('service_7_f_1'), t('service_7_f_2'), t('service_7_f_3'), t('service_7_f_4')],
    },
    {
      id: 8,
      icon: Shield,
      title: t('service_8_title'),
      description: t('service_8_desc'),
      image: '/images/service-access-control.jpg',
      features: [t('service_8_f_1'), t('service_8_f_2'), t('service_8_f_3'), t('service_8_f_4')],
    },
    {
      id: 9,
      icon: Printer,
      title: t('service_9_title'),
      description: t('service_9_desc'),
      image: '/images/service-printers.jpg',
      features: [t('service_9_f_1'), t('service_9_f_2'), t('service_9_f_3')],
    },
    {
      id: 10,
      icon: Wrench,
      title: t('service_10_title'),
      description: t('service_10_desc'),
      image: '/images/service-contracts.jpg',
      features: [t('service_10_f_1'), t('service_10_f_2'), t('service_10_f_3'), t('service_10_f_4')],
    },
    {
      id: 11,
      icon: Code,
      title: t('service_11_title'),
      description: t('service_11_desc'),
      image: '/images/service-website-design.jpg',
      features: [t('service_11_f_1'), t('service_11_f_2'), t('service_11_f_3'), t('service_11_f_4')],
    },
    {
      id: 12,
      icon: Smartphone,
      title: t('service_12_title'),
      description: t('service_12_desc'),
      image: '/images/service-mobile-app.jpg',
      features: [t('service_12_f_1'), t('service_12_f_2'), t('service_12_f_3'), t('service_12_f_4')],
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="services"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-bg overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-turquoise/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-turquoise rounded-full" />
            <span className="text-turquoise text-sm font-medium">{t('services_label')}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services_heading')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('services_desc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:scale-105 hover:shadow-xl`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-deep-blue/40 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-turquoise rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-turquoise transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 2).map((feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-turquoise/10 text-turquoise text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-turquoise font-medium text-sm group/link"
                >
                  {t('learn_more')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 shadow-glow rounded-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-4">{t('services_cta_text')}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-turquoise text-white font-semibold rounded-full transition-all duration-300 hover:bg-turquoise-600 hover:shadow-glow-lg hover:scale-105"
          >
            {t('services_cta_button')}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
