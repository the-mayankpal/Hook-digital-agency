
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Mission from './components/Mission';
import CaseStudies from './components/CaseStudies';
import Comparison from './components/Comparison';
import Team from './components/Team';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Fallback UI in case of a critical initialization error
  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark p-10 text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
          <p className="text-gray-500 mb-8">We're experiencing technical difficulties. Please refresh or try again later.</p>
          <button onClick={() => window.location.reload()} className="bg-black text-white px-8 py-3 rounded-full font-bold">Refresh Page</button>
        </div>
      </div>
    );
  }

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      console.error("Theme toggle failed", e);
    }
  }, [isDarkMode]);

  useEffect(() => {
    try {
      const observerOptions = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-visible');
          }
        });
      }, observerOptions);

      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    } catch (e) {
      console.warn("IntersectionObserver failed, animations disabled", e);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className="pt-20">
        <Hero />
        <Brands />
        <Services />
        <Mission />
        <CaseStudies />
        <Comparison />
        <Team />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
