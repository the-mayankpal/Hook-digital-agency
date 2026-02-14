
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="py-40 bg-gray-100 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto px-6 text-center scroll-reveal reveal-hidden">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">Our mission</span>
        <h2 className="text-5xl md:text-6xl font-bold mt-6 mb-12">
          Turning content chaos into <span className="serif-italic font-normal">consistent</span> growth
        </h2>
        <div className="space-y-6 text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          <p>We work with brands who are ready to take their social media presence seriously.</p>
          <p>Not just to fill a feed or chase trends, but to show up with intention. Our approach combines strategy, execution, and consistency.</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
