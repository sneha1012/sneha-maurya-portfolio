"use client";

import { Experience } from "@/data/experience";
import { withBasePath } from "@/lib/base-path";
import { useState } from "react";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  const [logoError, setLogoError] = useState(false);
  const showLogo = experience.logoUrl && !logoError;

  return (
    <div className="flex gap-4 items-start">
      {showLogo && (
        <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white/80 border border-[var(--foreground)]/15 flex items-center justify-center p-1.5">
          <img
            src={withBasePath(experience.logoUrl!)}
            alt=""
            className="w-full h-full object-contain"
            onError={() => setLogoError(true)}
          />
        </div>
      )}
      <div className="flex-1 min-w-0 grid grid-cols-4 gap-x-2">
        <span className="text-xs text-[var(--foreground)]/75 mt-1">{experience.date}</span>
        <div className="col-span-3 flex flex-col">
          <h3 className="text-base font-serif">
            {experience.companyUrl ? (
              <a
                href={experience.companyUrl}
                className="text-[var(--pastel-blue-dark)] hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.company}
              </a>
            ) : (
              <span className="text-[var(--pastel-blue-dark)]">{experience.company}</span>
            )}
            <span className="text-[var(--foreground)]"> - {experience.title}</span>
          </h3>
          {experience.advisor && (
            <p className="text-sm text-[var(--foreground)]/75 leading-relaxed italic mt-2">
              Advisor: {experience.advisor}
            </p>
          )}
          {experience.manager && (
            <p className="text-sm text-[var(--foreground)]/75 leading-relaxed italic mt-2">
              Manager: {experience.manager}
            </p>
          )}
          {experience.description && (
            <p className="text-sm text-[var(--foreground)]/80 leading-relaxed mt-2">
              {experience.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
