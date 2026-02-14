
import React from 'react';

const Brands: React.FC = () => {
  const brands = ["MILANO", "venice.", "Theo", "Amsterdam", "GLOWHAUS"];
  
  // Duplicate brands for a seamless infinite loop in the marquee
  const marqueeItems = [...brands, ...brands];
  
  return (
    <section className="border-y border-gray-200/50 dark:border-gray-800/50 py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 scroll-reveal reveal-hidden">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-10 text-center font-bold">
          Brands we've helped grow on social
        </p>
        
        <div className="relative">
          {/* Premium Gradient Fades for seamless marquee appearance */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
          
          <div className="overflow-hidden">
            {/* 
                The 'animate-marquee' keyframe is defined in index.html.
                We use 'w-max' and duplicate items to ensure the 50% translation 
                results in a perfect seamless loop.
                Gap is implemented using mx- (half of the total gap per side).
            */}
            <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] w-max py-2">
              {marqueeItems.map((name, idx) => (
                <span 
                  key={idx} 
                  className="text-2xl md:text-3xl font-extrabold font-display italic text-black dark:text-white mx-[clamp(24px,3vw,36px)] transition-transform hover:scale-105 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
