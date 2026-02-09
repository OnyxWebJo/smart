import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Wasfi Atal Str., Amman', 'Jordan'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+962 777 048 833', '+962 781 211 444'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@sources-systems.net', 'support@sources-systems.net'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Sat - Thu: 9AM - 6PM', '24/7 Emergency Support'],
  },
];

// EmailJS configuration - Replace with your actual credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_sources_systems', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_contact', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key_here', // Replace with your EmailJS public key
};

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if EmailJS is configured
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key_here') {
        // Demo mode - simulate successful submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form Data (Demo Mode):', formData);
        
        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setErrors({});
      } else {
        // Real EmailJS submission
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
          to_email: 'info@sources-systems.net',
        };

        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAILJS_CONFIG.PUBLIC_KEY
        );

        setSubmitStatus('success');
        setStatusMessage('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setErrors({});
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, something went wrong. Please try again or contact us directly at info@sources-systems.net');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneClick = (phone: string) => {
    if (phone.includes('777')) {
      window.open('https://wa.me/962777048833', '_blank');
    } else {
      window.location.href = `tel:${phone.replace(/\s/g, '')}`;
    }
  };

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-light-bg overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turquoise/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-turquoise rounded-full" />
            <span className="text-turquoise text-sm font-medium">Contact Us</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to transform your business with cutting-edge IT solutions? 
            Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-turquoise/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-turquoise" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 mb-1">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p 
                        key={i} 
                        className={`text-gray-600 text-sm ${
                          info.icon === Phone ? 'cursor-pointer hover:text-turquoise transition-colors' : ''
                        } ${
                          info.icon === Mail ? 'cursor-pointer hover:text-turquoise transition-colors' : ''
                        }`}
                        onClick={() => {
                          if (info.icon === Phone) handlePhoneClick(detail);
                          if (info.icon === Mail) handleEmailClick(detail);
                        }}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              className={`mt-6 rounded-xl overflow-hidden shadow-lg transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.999502816801!2d35.87856681516598!3d31.96185198122393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca16933575a61%3A0x7c390a7470b85298!2sWasfi%20At-Tall%20St.%2C%20Amman%2C%20Jordan!5e0!3m2!1sen!2s!4v1678204515177!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sources for Smart Systems Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">Message Sent Successfully!</h4>
                    <p className="text-green-700 text-sm">{statusMessage}</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-1">Something Went Wrong</h4>
                    <p className="text-red-700 text-sm">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-all duration-300 outline-none ${
                        errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-all duration-300 outline-none ${
                        errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-all duration-300 outline-none ${
                        errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                      }`}
                      placeholder="+962 777 048 833"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-all duration-300 outline-none bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Computer Networks">Computer Networks</option>
                      <option value="Computer Maintenance">Computer Maintenance</option>
                      <option value="CCTV Installation">CCTV Installation</option>
                      <option value="Alarm Systems">Alarm Systems</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-turquoise/20 focus:border-turquoise transition-all duration-300 outline-none resize-none ${
                      errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200'
                    }`}
                    placeholder="Tell us about your project or requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-turquoise text-white font-semibold rounded-lg transition-all duration-300 hover:bg-turquoise-600 hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-turquoise hover:underline">Privacy Policy</a>
                  {' '}
                  and{' '}
                  <a href="#" className="text-turquoise hover:underline">Terms of Service</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;