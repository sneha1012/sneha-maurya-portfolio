'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold font-playfair"
          >
            <span className="text-gray-900">sneha</span>
            <span className="text-indigo-600">.dev</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#experience"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              href="#blog"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="#gallery"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Gallery
            </Link>
            <a
              href="/Maurya_Sneha_DS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium"
            >
              CV
            </a>
            <a
              href="mailto:sm5755@columbia.edu"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Email
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
