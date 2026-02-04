/**
 * Small, cute SVG illustrations for each project—research-paper vibe but friendlier.
 * Pastel fills, rounded shapes, used as accents on project cards.
 */

const stroke = "#8FBDD9";
const fill = "#B8D4E8";
const fillLight = "#FFF4CC";

export function IlloChronos({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <ellipse cx="40" cy="42" rx="28" ry="24" fill={fillLight} stroke={stroke} strokeWidth="1.5" />
      <path d="M24 38 L40 28 L56 38 L40 48 Z" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <circle cx="40" cy="36" r="4" fill="white" opacity="0.9" />
      <path d="M32 52 L36 56 L48 44" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function IlloInnovation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <path d="M40 18 L48 38 L40 34 L32 38 Z" fill={fillLight} stroke={stroke} strokeWidth="1.2" />
      <ellipse cx="40" cy="50" rx="22" ry="18" fill={fill} stroke={stroke} strokeWidth="1.2" opacity="0.8" />
      <path d="M28 46 Q40 42 52 46" stroke={stroke} strokeWidth="1" fill="none" />
      <circle cx="40" cy="54" r="3" fill={fillLight} />
    </svg>
  );
}

export function IlloMigration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <circle cx="40" cy="38" r="26" fill={fill} stroke={stroke} strokeWidth="1.2" opacity="0.6" />
      <path d="M20 38 Q40 20 60 38 Q40 56 20 38" fill={fillLight} stroke={stroke} strokeWidth="1.2" />
      <circle cx="40" cy="36" r="5" fill="white" opacity="0.9" />
      <path d="M30 50 L40 44 L50 50" stroke={stroke} strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function IlloCodeSearch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <circle cx="40" cy="40" r="24" fill={fillLight} stroke={stroke} strokeWidth="1.2" />
      <path d="M28 32 L24 40 L28 48" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 32 L56 40 L52 48" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 28 L46 52" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="58" cy="28" r="8" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <circle cx="58" cy="28" r="3" fill="white" />
    </svg>
  );
}

export function IlloDocQuery({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <path d="M26 20 L26 60 L54 60 L54 28 L40 20 Z" fill={fillLight} stroke={stroke} strokeWidth="1.2" />
      <path d="M40 20 L40 28 L54 28" fill={fill} stroke={stroke} strokeWidth="1" opacity="0.6" />
      <circle cx="40" cy="42" r="10" fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M36 42 L39 45 L44 39" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

import type { ProjectIllustrationKey } from "@/data/portfolio";

const illustrations: Record<ProjectIllustrationKey, React.ComponentType<{ className?: string }>> = {
  chronos: IlloChronos,
  "innovation-screener": IlloInnovation,
  "edav-migration": IlloMigration,
  "code-search": IlloCodeSearch,
  "doc-query": IlloDocQuery,
};

export function ProjectIllustration({
  type,
  className = "w-16 h-16 sm:w-20 sm:h-20",
}: {
  type: ProjectIllustrationKey;
  className?: string;
}) {
  const Illo = illustrations[type];
  if (!Illo) return null;
  return <Illo className={className} />;
}
