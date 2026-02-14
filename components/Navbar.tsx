
import React, { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
            <span className="material-icons-outlined text-white dark:text-black text-sm" aria-hidden="true">phishing</span>
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">hook</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a className="hover:opacity-60 transition-opacity" href="#home">Home</a>
          <a className="hover:opacity-60 transition-opacity" href="#about">About</a>
          <a className="hover:opacity-60 transition-opacity" href="#cases">Case Studies</a>
          <a className="hover:opacity-60 transition-opacity" href="#blog">Blog</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onToggleTheme}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors" 
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-icons-outlined text-xl" aria-hidden="true">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a className="bg-primary dark:bg-white dark:text-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all" href="#contact">
            Book a call
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={onToggleTheme}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors" 
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className="material-icons-outlined text-xl" aria-hidden="true">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button 
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="material-icons-outlined text-2xl" aria-hidden="true">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-6 text-lg font-medium">
            <a onClick={() => setIsMenuOpen(false)} className="hover:opacity-60 transition-opacity" href="#home">Home</a>
            <a onClick={() => setIsMenuOpen(false)} className="hover:opacity-60 transition-opacity" href="#about">About</a>
            <a onClick={() => setIsMenuOpen(false)} className="hover:opacity-60 transition-opacity" href="#cases">Case Studies</a>
            <a onClick={() => setIsMenuOpen(false)} className="hover:opacity-60 transition-opacity" href="#blog">Blog</a>
            <a 
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary dark:bg-white dark:text-black text-white px-6 py-4 rounded-xl text-center font-bold shadow-lg" 
              href="#contact"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
