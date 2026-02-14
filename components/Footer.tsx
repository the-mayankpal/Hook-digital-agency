
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black py-20 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center">
                <span className="material-icons-outlined text-white dark:text-black text-sm" aria-hidden="true">phishing</span>
              </div>
              <span className="font-bold text-xl tracking-tight dark:text-white uppercase">hook</span>
            </div>
            <h3 className="text-2xl font-bold mb-8 dark:text-white leading-tight">
              Social media that drives <span className="serif-italic font-normal">real</span> results
            </h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a href="#" className="w-11 h-11 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group" aria-label="Follow HOOK on Instagram" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-11 h-11 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group" aria-label="Follow HOOK on X" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="group-hover:scale-110 transition-transform" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-11 h-11 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group" aria-label="Connect with HOOK on LinkedIn" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="group-hover:scale-110 transition-transform" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-gray-400">Navigate</h4>
            <ul className="space-y-4 font-medium dark:text-gray-300">
              <li><a className="hover:opacity-60 transition-opacity" href="#home">Home</a></li>
              <li><a className="hover:opacity-60 transition-opacity" href="#about">About</a></li>
              <li><a className="hover:opacity-60 transition-opacity" href="#cases">Case Studies</a></li>
              <li><a className="hover:opacity-60 transition-opacity" href="#blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-8 text-sm uppercase tracking-widest text-gray-400">Legal</h4>
            <ul className="space-y-4 font-medium text-gray-500">
              <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-black dark:hover:text-white transition-colors" href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-100 dark:border-gray-900 text-sm text-gray-500">
          <p>© 2026 HOOK Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
