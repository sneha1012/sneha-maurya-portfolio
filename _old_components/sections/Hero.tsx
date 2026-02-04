'use client';

import { useEffect, useState } from 'react';
import BinaryBackground from '@/components/BinaryBackground';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BinaryBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            Data Scientist & ML Engineer
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-playfair">
          <span className="text-gray-900">Hello, I'm</span>
          <br />
          <span className="gradient-text">Sneha Maurya</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Building intelligent systems with LLMs, neural networks, and production ML.
          <br />
          <span className="text-lg text-gray-500 mt-2 block">
            Currently at <span className="font-semibold">Columbia University</span> | MS in Data Science
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:sm5755@columbia.edu"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all hover-lift font-medium"
          >
            Get in Touch
          </a>
          <a
            href="/Maurya_Sneha_DS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transition-all hover-lift font-medium"
          >
            Download CV
          </a>
        </div>

        <div className="code-box max-w-2xl mx-auto text-left">
          <div className="text-gray-500 text-xs mb-2">// About me</div>
          <div className="text-gray-800">
            <span className="text-purple-600">const</span> sneha = {'{'}
            <br />
            <span className="ml-4">passion: <span className="text-green-600">"ML & AI"</span>,</span>
            <br />
            <span className="ml-4">location: <span className="text-green-600">"New York, NY"</span>,</span>
            <br />
            <span className="ml-4">education: <span className="text-green-600">"Columbia University"</span>,</span>
            <br />
            <span className="ml-4">status: <span className="text-green-600">"Building cool things"</span></span>
            <br />
            {'}'};
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
