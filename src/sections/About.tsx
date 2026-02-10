import { useEffect, useRef, useState } from 'react';
import { Check, Award, Users, Target, Clock } from 'lucide-react';

const features = [
  'Certified IT professionals with 10+ years experience',
  '24/7 technical support and monitoring',
  'Customized solutions tailored to your needs',
  'Affordable pricing with transparent quotes',
];

const stats = [
  { icon: Award, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Target, value: '1000+', label: 'Projects Done' },
  { icon: Clock, value: '30 Minutes', label: 'Average Response Time' },
];

const About = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-bg overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-robots.jpg"
                  alt="Robots handling IT infrastructure"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/30 to-transparent" />
              </div>

              {/* Floating Card */}
              <div
                className={`absolute -bottom-6 -right-6 lg:-right-12 bg-white rounded-xl shadow-xl p-6 transition-all duration-1000 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-turquoise/10 rounded-full flex items-center justify-center">
                    <Award className="w-7 h-7 text-turquoise" />
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-turquoise/30 rounded-xl -z-10" />
              <div className="absolute -bottom-4 left-1/4 w-16 h-16 bg-turquoise/20 rounded-lg -z-10" />
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-turquoise rounded-full" />
              <span className="text-turquoise text-sm font-medium">About Us</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Trusted IT Partner in{' '}
              <span className="text-turquoise">Amman, Jordan</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sources for Smart Systems is a leading IT solutions provider based in Amman, Jordan. We specialize 
              in delivering comprehensive technology services that help businesses thrive in the 
              digital age. From network infrastructure to security systems, our expert team ensures 
              your technology works seamlessly.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Founded with a vision to transform how businesses approach technology, we have 
              successfully served over 500 clients across Jordan. Our commitment to excellence, 
              innovation, and customer satisfaction has made us the preferred IT partner for 
              companies of all sizes.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-5 h-5 bg-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-turquoise" />
                  </div>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 text-turquoise mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;