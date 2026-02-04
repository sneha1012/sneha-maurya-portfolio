import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 rounded-xl border border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-colors">
      {portfolio.imageUrl && (
        <div className="w-full sm:w-2/5 min-w-[200px] h-24 sm:h-28 relative rounded-xl overflow-hidden shadow-sm border border-[var(--foreground)]/15 flex-shrink-0">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 280px"
          />
        </div>
      )}
      {!portfolio.imageUrl && (
        <div className="w-full sm:w-2/5 min-w-[160px] h-24 sm:h-28 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/15 flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-[var(--foreground)]/50">Project image</span>
        </div>
      )}
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="font-serif text-base mb-2 text-[var(--pastel-blue-dark)]">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-1.5 hover:underline transition-colors duration-300 break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="min-w-0">{portfolio.title}</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 flex-shrink-0"
              />
            </a>
          ) : (
            <span className="break-words">{portfolio.title}</span>
          )}
        </h3>

        {portfolio.technologies && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-[var(--pastel-blue-dark)] px-2.5 py-1 bg-[var(--pastel-blue)]/15 rounded-full border border-[var(--pastel-blue)]/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-[var(--foreground)]/80 mb-4 leading-relaxed">
          {portfolio.description}
        </p>

        <div className="flex gap-6 mt-auto">
          {portfolio.projectUrl && (
            <a
              href={portfolio.projectUrl}
              className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--foreground)]/85 hover:text-[var(--foreground)] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">View live</span>
            </a>
          )}
          {portfolio.codeUrl && (
            <a
              href={portfolio.codeUrl}
              className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--foreground)]/85 hover:text-[var(--foreground)] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
