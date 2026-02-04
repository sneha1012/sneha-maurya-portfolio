"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";
import { useState } from "react";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  const [photoError, setPhotoError] = useState(false);
  const showPhoto = aboutMe.imageUrl && !photoError;
  const initials = aboutMe.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      <div className="w-1/3 md:w-full flex-shrink-0">
        <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-[var(--foreground)]/15">
          {showPhoto ? (
            <Image
              src={aboutMe.imageUrl!}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover object-center"
              onError={() => setPhotoError(true)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-[var(--foreground)]/50 font-serif text-4xl font-light bg-[var(--foreground)]/5"
              aria-hidden
            >
              {initials}
            </div>
          )}
        </div>
      </div>
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-3xl font-light tracking-wide mb-3 text-[var(--pastel-blue-dark)]">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-[var(--foreground)]/80 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-[var(--pastel-blue-dark)] text-xs leading-relaxed tracking-wide uppercase mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex gap-6 mb-6 flex-wrap">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-[var(--pastel-blue-dark)] hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-[var(--pastel-blue-dark)] hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
          {aboutMe.creativesUrl && (
            <a
              href={aboutMe.creativesUrl}
              className="group inline-flex items-center gap-2 text-xs text-[var(--pastel-blue-dark)] hover:underline transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Creatives</span>
            </a>
          )}
        </div>
        <div className="space-y-2 text-[var(--pastel-blue-dark)]">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-sm hover:underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} />
            {aboutMe.email}
          </a>
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-sm hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-sm hover:underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
