'use client';

import { useEffect, useRef } from 'react';

export default function BinaryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const digits = ['0', '1'];
    const numDigits = 50;

    // Create binary digits
    for (let i = 0; i < numDigits; i++) {
      const digit = document.createElement('div');
      digit.className = 'binary-digit';
      digit.textContent = digits[Math.floor(Math.random() * digits.length)];
      digit.style.left = `${Math.random() * 100}%`;
      digit.style.animationDelay = `${Math.random() * 20}s`;
      digit.style.animationDuration = `${15 + Math.random() * 10}s`;
      container.appendChild(digit);
    }

    return () => {
      // Cleanup
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return <div ref={containerRef} className="binary-bg" />;
}
