import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Play } from 'lucide-react';

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Empowering Your Business with Cutting-Edge Technology',
    subtitle: 'Reliable IT Support & Solutions for Seamless Operations',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Expert Network Infrastructure Solutions',
    subtitle: 'Build a robust, secure, and scalable network for your business',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Advanced Security Systems & CCTV',
    subtitle: 'Protect your assets with state-of-the-art surveillance technology',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goToSlide = useCallback((index: number, dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next, 'next');
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev, 'prev');
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[800ms] ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : direction === 'next'
              ? 'opacity-0 scale-110'
              : 'opacity-0 scale-90'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 via-deep-blue/70 to-transparent" />
        </div>
      ))}

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-turquoise/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              <span className="w-2 h-2 bg-turquoise rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Trusted IT Partner in Jordan</span>
            </div>

            {/* Title */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-3">
                  {word === 'Technology' || word === 'Solutions' || word === 'CCTV' ? (
                    <span className="text-turquoise">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg sm:text-xl text-white/80 mb-8 max-w-xl transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="group px-8 py-4 bg-turquoise text-white font-semibold rounded-full transition-all duration-300 hover:bg-turquoise-600 hover:shadow-glow-lg hover:scale-105 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-turquoise">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 right-4 z-20 flex justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-turquoise hover:border-turquoise hover:scale-110 disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-turquoise hover:border-turquoise hover:scale-110 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index, index > currentSlide ? 'next' : 'prev')}
            className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
              index === currentSlide ? 'w-12 bg-turquoise' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
          >
            {index === currentSlide && (
              <div
                className="absolute inset-0 bg-white/30 rounded-full animate-[progress_6s_linear]"
                style={{
                  animation: 'progress 6s linear',
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs font-medium tracking-wider">SCROLL</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-turquoise rounded-full animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
