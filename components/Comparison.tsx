import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-black/20">
      <div className="max-w-5xl mx-auto px-6 scroll-reveal reveal-hidden">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">The difference</span>
          <h2 className="text-5xl font-bold mt-4">
            Why choose HOOK <br /> over <span className="serif-italic font-normal">everyone else?</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-card-dark rounded-3xl p-10 shadow-sm border border-gray-100 dark:border-gray-800">
            <h4 className="text-xl font-bold mb-8 text-gray-400">Other Agencies</h4>
            <ul className="space-y-6">
              {[
                "Generic content templates",
                "Monthly reporting only",
                "Separate teams for different platforms",
                "Long-term contracts required",
                "One-size-fits-all approach"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-500">
                  <span className="material-icons-outlined text-red-400">close</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-card-dark rounded-3xl p-10 shadow-xl border-2 border-primary dark:border-white/50 ring-4 ring-black/5 dark:ring-white/5">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="material-icons-outlined text-white dark:text-black text-[14px]">phishing</span>
              </div>
              <h4 className="text-xl font-bold">HOOK</h4>
            </div>
            <ul className="space-y-6">
              {[
                "Custom content for your brand",
                "Real-time performance tracking",
                "Integrated cross-platform strategy",
                "Flexible month-to-month options",
                "Tailored to your specific goals"
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-4 font-medium">
                  <span className="material-icons-outlined text-green-500">check_circle</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;