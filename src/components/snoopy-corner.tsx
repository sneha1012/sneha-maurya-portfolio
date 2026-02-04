"use client";

import { useEffect, useState } from "react";

export function SnoopyCorner() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Move character up/down with scroll (runs along the left edge as you scroll)
  const maxScroll = typeof document !== "undefined" ? Math.max(document.documentElement.scrollHeight - window.innerHeight, 1) : 2000;
  const scrollFraction = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
  const topPercent = 12 + scrollFraction * 70; // from ~12% to ~82% of viewport

  return (
    <div
      className="fixed left-4 z-30 pointer-events-none select-none transition-all duration-300"
      style={{
        top: `${topPercent}vh`,
        transform: "translateY(-50%)",
      }}
      aria-hidden
    >
      <div
        className={`${mounted ? "snoopy-enter" : "opacity-0"} snoopy-bounce`}
      >
        {/* Minimal abstract character — no flower; clean for a professional portfolio */}
        <svg
          width="56"
          height="64"
          viewBox="0 0 56 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-md"
        >
          <ellipse cx="28" cy="38" rx="16" ry="14" fill="var(--pastel-blue)" stroke="var(--pastel-blue-dark)" strokeWidth="1.2" />
          <circle cx="40" cy="20" r="12" fill="var(--pastel-blue)" stroke="var(--pastel-blue-dark)" strokeWidth="1.2" />
          <ellipse cx="44" cy="18" rx="3" ry="2.5" fill="#fff" opacity="0.95" />
          <path d="M16 36 Q8 32 6 36 Q4 40 10 42 Q16 44 20 40" fill="var(--pastel-blue)" stroke="var(--pastel-blue-dark)" strokeWidth="1" />
          <path d="M40 36 Q48 32 50 36 Q52 40 46 42 Q40 44 36 40" fill="var(--pastel-blue)" stroke="var(--pastel-blue-dark)" strokeWidth="1" />
          <ellipse cx="26" cy="40" rx="2" ry="1.5" fill="#fff" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
