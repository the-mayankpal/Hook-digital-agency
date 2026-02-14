
import React, { useEffect, useRef, useState } from 'react';

interface ServiceCardProps {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, iconColor, bgColor, title, description, index, isVisible }) => {
  const isImageUrl = icon.startsWith('http');

  const getInitialTransform = () => {
    if (index === 0) return '-translate-x-20 opacity-0';
    if (index === 1) return 'translate-y-20 opacity-0';
    return 'translate-x-20 opacity-0';
  };

  return (
    <div 
      className={`bg-white dark:bg-card-dark p-12 md:p-14 rounded-[4rem] shadow-sm hover:shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center group transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'translate-x-0 translate-y-0 opacity-100' : getInitialTransform()
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      {/* 
          Icon Container: 
          - Large size (w-52) to give the 3D assets room to breathe.
          - Frameless design: Background matches the card (white) to blend perfectly.
          - No border or shadow on the inner container to avoid a "boxed-in" look.
      */}
      <div 
        className={`w-40 h-40 md:w-52 md:h-52 mb-10 flex items-center justify-center ${bgColor} rounded-[3rem] group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
      >
        <div className="w-full h-full p-2 flex items-center justify-center">
          {isImageUrl ? (
            <img 
              src={icon} 
              alt={title} 
              className="w-full h-full object-contain" 
              style={{ 
                imageRendering: 'auto',
                mixBlendMode: 'normal'
              }}
            />
          ) : (
            <span className={`material-icons-outlined text-8xl md:text-9xl ${iconColor}`}>{icon}</span>
          )}
        </div>
      </div>
      
      <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#0a1f33] dark:text-white leading-tight">{title}</h3>
      <p className="text-gray-400 dark:text-gray-500 leading-relaxed text-lg max-w-[280px] font-medium opacity-90">
        {description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1770235093/ChatGPT_Image_Feb_4__2026__11_25_29_AM-removebg-preview_wps9z2.png',
      iconColor: 'text-orange-600',
      bgColor: 'bg-white dark:bg-zinc-800',
      title: 'Content Creation',
      description: 'Short-form video, UGC, reels, and visuals designed to stop the scroll and spark engagement.'
    },
    {
      icon: 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1770235773/ChatGPT_Image_Feb_4__2026__12_07_23_PM-removebg-preview_gycokx.png',
      iconColor: 'text-blue-600',
      bgColor: 'bg-white dark:bg-zinc-800',
      title: 'Social Management',
      description: 'We handle your content calendar, posting, and day-to-day management of your socials.'
    },
    {
      // Updated with the new 3D megaphone image and white background
      icon: 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1770236599/ChatGPT_Image_Feb_4__2026__12_21_48_PM-removebg-preview_iosjbw.png',
      iconColor: 'text-yellow-600',
      bgColor: 'bg-white dark:bg-zinc-800',
      title: 'Paid Media',
      description: 'We build and manage targeted ad campaigns that turn attention into results and help you scale.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-40 md:py-60 bg-[#fbfbf9] dark:bg-black/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative text-center mb-32 md:mb-48 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[80%] md:-translate-y-[100%] whitespace-nowrap text-[16vw] font-bold text-gray-200/60 dark:text-zinc-800/20 select-none pointer-events-none uppercase tracking-tighter z-0 leading-none">
            How we can
          </div>
          <h2 className="relative z-10 text-6xl md:text-[9rem] font-bold tracking-tight leading-tight">
            help you <span className="serif-italic font-normal">grow</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {services.map((s, i) => (
            <ServiceCard 
              key={i} 
              {...s} 
              index={i} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
