
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How quickly will we see results?",
      answer: "Most clients start seeing a significant uptick in engagement and reach within the first 14-30 days as our content strategy takes hold and the algorithm begins to recognize your consistent high-quality output."
    },
    {
      question: "What platforms do you manage?",
      answer: "We specialize in high-growth vertical video platforms: Instagram Reels, TikTok, and YouTube Shorts. We also handle cross-platform strategy and community management to ensure your brand voice is consistent everywhere."
    },
    {
      question: "Do you work with our industry?",
      answer: "We've successfully scaled brands across e-commerce, SaaS, fashion, and local services. Our research-heavy approach means we dive deep into your specific niche to understand what resonates with your unique audience."
    },
    {
      question: "What if we want to cancel?",
      answer: "We offer flexible month-to-month options because we believe in the value we provide. While we recommend at least 3 months to see the full compounding effect of our strategy, you aren't locked into long-term restrictive contracts."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-gray-50 dark:bg-black/20">
      <div className="max-w-3xl mx-auto px-6 scroll-reveal reveal-hidden">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Asked <span className="serif-italic font-normal">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`bg-white dark:bg-card-dark rounded-2xl overflow-hidden transition-all duration-300 border ${
                openIndex === i 
                  ? 'border-primary dark:border-white ring-1 ring-primary dark:ring-white' 
                  : 'border-gray-100 dark:border-gray-800'
              }`}
            >
              <button 
                onClick={() => toggleFAQ(i)}
                className="w-full text-left p-6 flex justify-between items-center group"
              >
                <h4 className={`text-lg font-semibold transition-colors ${openIndex === i ? 'text-primary dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {faq.question}
                </h4>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-black text-white dark:bg-white dark:text-black rotate-45' : 'bg-gray-100 dark:bg-zinc-800 text-gray-500'}`}>
                  <span className="material-icons-outlined text-xl">add</span>
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-gray-500 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
