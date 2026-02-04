"use client";

import Image from "next/image";
import { Creative } from "@/data/creatives";
import { withBasePath } from "@/lib/base-path";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function CreativesSection({ creatives }: { creatives: Creative[] }) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    if (lightboxImage) {
      document.addEventListener("keydown", onEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  if (creatives.length === 0) {
    return (
      <section id="creatives" className="border-t border-[var(--foreground)]/15 pt-12 mt-12">
        <h2 className="font-serif text-lg mb-8 tracking-wide uppercase text-[var(--foreground)]/90">
          Creatives
        </h2>
        <p className="text-sm text-[var(--foreground)]/90 italic">
          Favourite moments — NYC, Columbia, and beyond. Photos coming soon.
        </p>
      </section>
    );
  }

  return (
    <>
      <section id="creatives" className="border-t border-[var(--foreground)]/15 pt-12 mt-12">
        <h2 className="font-serif text-lg mb-8 tracking-wide uppercase text-[var(--foreground)]/90">
          Creatives
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {creatives.map((item, index) => (
            <button
              key={index}
              type="button"
              className="relative aspect-square rounded-xl overflow-hidden border border-[var(--foreground)]/15 hover:border-[var(--pastel-blue)]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--pastel-blue)]/50"
              onClick={() => setLightboxImage(withBasePath(item.imageUrl))}
            >
              <Image
                src={withBasePath(item.imageUrl)}
                alt={item.caption ?? `Photo ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <button
          type="button"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 focus:outline-none"
          onClick={() => setLightboxImage(null)}
          aria-label="Close"
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
          <span className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <X size={24} />
          </span>
        </button>
      )}
    </>
  );
}
