import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, User } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ahmad Elyan',
    role: 'CEO & Founder',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Jane Smith',
    role: 'Chief Technology Officer',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Peter Jones',
    role: 'Lead Engineer',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Shadi Salameh',
    role: 'Developer',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const Team = () => {
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
      id="team"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-bg overflow-hidden"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-turquoise rounded-full" />
            <span className="text-turquoise text-sm font-medium">Our Team</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Experts
          </h2>
          <p className="text-gray-600 text-lg">
            We have a dedicated team of professionals who are passionate about technology and committed to delivering the best results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                  <User className="w-20 h-20 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-turquoise text-sm">{member.role}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={member.social.linkedin} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-turquoise hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={member.social.twitter} className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-turquoise hover:text-white transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
