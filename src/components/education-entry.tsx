"use client";

import { Education } from "@/data/education";
import { withBasePath } from "@/lib/base-path";
import { useState } from "react";

export function EducationEntry({ education }: { education: Education }) {
  const [logoError, setLogoError] = useState(false);
  const showLogo = education.logoUrl && !logoError;

  return (
    <div className="flex gap-4 items-start">
      {showLogo && (
        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white/80 border border-[var(--foreground)]/15 flex items-center justify-center p-1.5">
          <img
            src={withBasePath(education.logoUrl!)}
            alt=""
            className="w-full h-full object-contain"
            onError={() => setLogoError(true)}
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="grid grid-cols-4 gap-x-2 mb-2">
          <span className="text-xs text-[var(--foreground)]/75 mt-1">{education.year}</span>
          <div className="col-span-3">
            <h3 className="text-base mb-1 font-serif text-[var(--pastel-blue-dark)]">{education.institution}</h3>
            <p className="text-sm text-[var(--foreground)]/80">{education.degree}</p>
            {education.advisor && (
              <p className="text-sm text-[var(--foreground)]/75 mt-2 italic">
                Advisor: {education.advisor}
              </p>
            )}
            {education.thesis && (() => {
                const lines = education.thesis!.split("\n");
                const black = "text-[var(--foreground)]";
                const blue = "text-[var(--pastel-blue-dark)]";
                return (
                  <p className="text-sm mt-2 italic whitespace-pre-line">
                    {lines.map((line, i) => (
                      <span key={i}>
                        {line.startsWith("Relevant:") ? (
                          <>
                            <span className={black}>Relevant:</span>
                            <span className={blue}>{line.slice("Relevant:".length)}</span>
                          </>
                        ) : line.startsWith("Graduate TA:") ? (
                          <>
                            <span className={black}>Graduate TA:</span>
                            <span className={blue}>{line.slice("Graduate TA:".length)}</span>
                          </>
                        ) : (
                          <span className={blue}>{line}</span>
                        )}
                        {i < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                );
              })()}
          </div>
        </div>
      </div>
    </div>
  );
}
