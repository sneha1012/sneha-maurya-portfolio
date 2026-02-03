"use client";

export function SnoopyCorner() {
  return (
    <div
      className="fixed bottom-6 left-6 z-30 opacity-70 hover:opacity-100 transition-opacity pointer-events-none select-none"
      aria-hidden
    >
      {/* Simple Snoopy-style dog silhouette (minimal SVG) */}
      <svg
        width="64"
        height="48"
        viewBox="0 0 64 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <ellipse cx="32" cy="28" rx="18" ry="14" fill="#2d2d2d" />
        <circle cx="44" cy="18" r="10" fill="#2d2d2d" />
        <ellipse cx="48" cy="16" rx="3" ry="2.5" fill="#fff" opacity="0.9" />
        <path
          d="M22 28 Q14 24 10 28 Q8 32 14 34 Q20 36 24 32"
          fill="#2d2d2d"
        />
        <path
          d="M42 28 Q50 24 54 28 Q56 32 50 34 Q44 36 40 32"
          fill="#2d2d2d"
        />
        <ellipse cx="28" cy="30" rx="2" ry="1.5" fill="#fff" opacity="0.8" />
      </svg>
    </div>
  );
}
