
import React, { useEffect, useRef, useState } from 'react';

interface CaseStudyItemProps {
  title: string;
  description: string;
  stats: { value: string; label: string; sub: string }[];
  image?: string;
  video?: string;
  reverse?: boolean;
}

const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ title, description, stats, image, video, reverse }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const textInitialClass = reverse ? 'translate-x-[200px] opacity-0' : '-translate-x-[200px] opacity-0';
  const imageInitialClass = reverse ? '-translate-x-[200px] opacity-0' : 'translate-x-[200px] opacity-0';

  return (
    <div 
      ref={itemRef}
      className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center py-24 lg:py-32"
    >
      {/* Text Content */}
      <div 
        className={`transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1) transform ${
          reverse ? 'lg:order-2' : 'lg:order-1'
        } ${isVisible ? 'translate-x-0 opacity-100' : textInitialClass}`}
      >
        <div className="max-w-xl">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Client Results</span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-6 mb-8 tracking-tight">{title}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-14 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-12 md:gap-20">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <span className="text-5xl lg:text-6xl font-bold block mb-2">{stat.value}</span>
                <span className="text-sm text-gray-500 uppercase font-semibold tracking-wider">{stat.label}</span>
                <p className="text-xs text-gray-400 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Media Content Container ("The Frame") */}
      <div 
        className={`relative rounded-[3.5rem] p-6 lg:p-8 overflow-hidden aspect-square shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-[#f3f1eb] dark:bg-zinc-800 transition-all duration-1000 cubic-bezier(0.2, 1, 0.3, 1) transform ${
          reverse ? 'lg:order-1' : 'lg:order-2'
        } ${isVisible ? 'translate-x-0 opacity-100 scale-100' : `${imageInitialClass} scale-95`}`}
      >
        <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-inner bg-white dark:bg-zinc-900">
            {video ? (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                preload="none"
                aria-label={`Video demonstration for ${title}`}
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              <img 
                alt={`${title} campaign result`} 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                src={image}
                loading="lazy"
                decoding="async"
              />
            )}
        </div>
        <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-[3.5rem] pointer-events-none"></div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-12 lg:py-20 overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1: Glowhaus */}
        <CaseStudyItem 
          title="Glowhaus"
          description="Beauty brand Glowhaus came to us with great products but low engagement. We developed a UGC-driven content strategy focused on short-form video, optimized for Reels."
          video="https://res.cloudinary.com/dkxe8h4cs/video/upload/v1770238434/lafann-3rfyw8r3w_v0qc3HZz_glxces.mp4"
          stats={[
            { value: "43K", label: "Reel Views", sub: "In the first 30 days" },
            { value: "64%", label: "Engagement", sub: "Compared to previous month" }
          ]}
        />

        {/* Row 2: Theo */}
        <CaseStudyItem 
          reverse
          title="Theo"
          description="Theo came to us ahead of a new collection launch, looking to grow their reach and build anticipation. We combined UGC with light influencer seeding and short-form video."
          video="https://res.cloudinary.com/dkxe8h4cs/video/upload/v1770237395/hhduiwas7f8rqc9l_VmcUaXP4_ks5rnc.mp4"
          stats={[
            { value: "18K", label: "Followers", sub: "In six weeks" },
            { value: "156%", label: "Engagement", sub: "Compared to previous month" }
          ]}
        />
      </div>
    </section>
  );
};

export default CaseStudies;
