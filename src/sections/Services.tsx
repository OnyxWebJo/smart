import { useEffect, useRef, useState } from 'react';
import { Network, Wrench, Video, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Network,
    title: 'Computer Networks',
    description: 'Design, installation, and maintenance of robust network infrastructure. From LAN setup to enterprise-wide solutions, we ensure seamless connectivity.',
    image: '/images/service-networks.jpg',
    features: ['Network Design & Setup', 'WiFi Solutions', 'Network Security', 'Troubleshooting'],
  },
  {
    id: 2,
    icon: Wrench,
    title: 'Computer Maintenance',
    description: 'Comprehensive hardware and software maintenance services to keep your systems running at peak performance.',
    image: '/images/service-maintenance.jpg',
    features: ['Hardware Repairs', 'Software Updates', 'Virus Removal', 'Data Recovery'],
  },
  {
    id: 3,
    icon: Video,
    title: 'CCTV Installation',
    description: 'State-of-the-art surveillance systems to protect your business premises with 24/7 monitoring capabilities.',
    image: '/images/service-cctv.jpg',
    features: ['HD Cameras', 'Remote Monitoring', 'Cloud Storage', 'Motion Detection'],
  },
  {
    id: 4,
    icon: Shield,
    title: 'Alarm Systems',
    description: 'Advanced security alarm solutions including intrusion detection, fire alarms, and access control systems.',
    image: '/images/service-alarms.jpg',
    features: ['Intrusion Detection', 'Fire Alarms', 'Access Control', '24/7 Monitoring'],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

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
            <span className="text-turquoise text-sm font-medium">Our Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-gray-600 text-lg">
            From network infrastructure to security systems, we provide end-to-end technology 
            services tailored to meet your unique business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeService === service.id ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
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
                  Learn More
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
          <p className="text-gray-600 mb-4">Need a customized solution for your business?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-turquoise text-white font-semibold rounded-full transition-all duration-300 hover:bg-turquoise-600 hover:shadow-glow-lg hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
