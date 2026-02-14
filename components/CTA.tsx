import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 scroll-reveal reveal-hidden">
        <div className="bg-black dark:bg-white text-white dark:text-black rounded-[3rem] py-16 px-8 md:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <span className="text-xs md:text-sm font-medium uppercase tracking-widest opacity-60">Get started</span>
            <h2 className="text-4xl md:text-7xl font-bold mt-6 mb-8 leading-tight">
              Your HOOK journey <br /> starts <span className="serif-italic font-normal">right here.</span>
            </h2>
            <p className="text-lg md:text-xl opacity-60 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
              Book a free 30 min strategy call and we'll show you how to turn followers into customers.
            </p>
            <button className="bg-white dark:bg-black text-black dark:text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl">
              Book your call
            </button>
          </div>
          {/* Decorative icons */}
          <div className="absolute -top-10 -right-10 md:top-0 md:right-0 p-10 opacity-10 pointer-events-none">
            <span className="material-icons-outlined text-8xl md:text-9xl">phishing</span>
          </div>
          <div className="absolute -bottom-10 -left-10 md:bottom-0 md:left-0 p-10 opacity-10 pointer-events-none">
            <span className="material-icons-outlined text-8xl md:text-9xl">phishing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;