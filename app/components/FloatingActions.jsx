'use client';

import React, { useEffect, useState } from 'react';

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Back to top — only visible after scrolling */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#3B1D12] text-[#F6F3EC] shadow-lg transition-all duration-300 hover:bg-[#2B140C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DC63F] sm:h-12 sm:w-12 ${
          showTop
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/9779802834012"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DC63F] sm:h-14 sm:w-14"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 sm:h-7 sm:w-7"
          aria-hidden="true"
        >
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4 0-.1-.2-.2-.4-.3z" />
          <path d="M20.5 3.5A11 11 0 0 0 3.1 17l-1.6 5.8 5.9-1.6A11 11 0 1 0 20.5 3.5zM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3A9 9 0 1 1 12 21z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingActions;