import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Settings, HeadphonesIcon, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin by understanding your business needs, challenges, and goals. Our experts analyze your current infrastructure and recommend the best solutions tailored to your requirements.',
    points: ['Free initial assessment', 'Requirements analysis', 'Solution recommendations', 'Budget planning'],
  },
  {
    number: '02',
    icon: Settings,
    title: 'Implementation',
    description: 'Our certified technicians execute the planned solution with minimal disruption to your operations. We ensure quality installation and configuration of all systems.',
    points: ['Professional installation', 'System configuration', 'Quality testing', 'Staff training'],
  },
  {
    number: '03',
    icon: HeadphonesIcon,
    title: 'Support',
    description: 'We provide ongoing maintenance and support to ensure your systems run smoothly. Our 24/7 support team is always ready to assist you with any issues.',
    points: ['24/7 technical support', 'Regular maintenance', 'System updates', 'Performance monitoring'],
  },
];

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-deep-blue overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(23, 210, 189, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-turquoise rounded-full animate-pulse" />
            <span className="text-turquoise text-sm font-medium">Our Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-white/70 text-lg">
            Our streamlined process ensures efficient delivery of IT solutions 
            with maximum value for your investment.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-white/10">
            <div
              className="h-full bg-turquoise transition-all duration-1000"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                    activeStep === index
                      ? 'border-turquoise bg-white/10 shadow-glow'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 bg-turquoise rounded-lg">
                    <span className="text-white font-display font-bold text-sm">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      activeStep === index
                        ? 'bg-turquoise scale-110'
                        : 'bg-white/10'
                    }`}
                  >
                    <step.icon
                      className={`w-8 h-8 transition-colors duration-500 ${
                        activeStep === index ? 'text-white' : 'text-turquoise'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-3">
                    {step.points.map((point, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-3 transition-all duration-500 ${
                          activeStep === index
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-50 translate-x-2'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            activeStep === index ? 'bg-turquoise' : 'bg-white/20'
                          }`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white/80 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Dot - Desktop */}
                <div className="hidden lg:flex absolute top-20 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                      activeStep >= index
                        ? 'bg-turquoise border-turquoise scale-125'
                        : 'bg-deep-blue border-white/30'
                    }`}
                  >
                    {activeStep === index && (
                      <div className="absolute inset-0 bg-turquoise rounded-full animate-ping opacity-50" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '48h', label: 'Average Response Time' },
            { value: '99%', label: 'Project Success Rate' },
            { value: '24/7', label: 'Support Available' },
            { value: '100%', label: 'Client Focused' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-display font-bold text-turquoise mb-2">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
