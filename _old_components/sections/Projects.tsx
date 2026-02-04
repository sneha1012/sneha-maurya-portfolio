'use client';

import { projects } from '@/data/projects';
import { useMemo, useState } from 'react';

function ProjectImage({ project }: { project: (typeof projects)[0] }) {
  const [failed, setFailed] = useState(false);
  const initial = project.title.charAt(0);
  const placeholderGradient = useMemo(() => {
    const gradients = [
      'from-indigo-500/20 to-purple-600/20',
      'from-emerald-500/20 to-teal-600/20',
      'from-amber-500/20 to-orange-600/20',
      'from-rose-500/20 to-pink-600/20',
      'from-sky-500/20 to-blue-600/20',
    ];
    const i = project.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    return gradients[i % gradients.length];
  }, [project.id]);

  const showPlaceholder = !project.image || failed;

  if (project.image && !showPlaceholder) {
    return (
      <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-t-xl overflow-hidden">
        <img
          src={project.image}
          alt=""
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full aspect-[16/10] rounded-t-xl flex items-center justify-center bg-gradient-to-br ${placeholderGradient}`}
    >
      <span className="text-4xl font-bold text-white/80 font-playfair">{initial}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-playfair">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A mix of ML systems, data viz, and tools — with links where available.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-indigo-200 hover-lift shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <ProjectImage project={project} />
              <div className="p-6">
                <span className="text-xs text-gray-500 font-medium">{project.period}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2 font-playfair group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1.5"
                    >
                      View live
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 hover:text-gray-900 inline-flex items-center gap-1.5"
                    >
                      GitHub
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/sneha1012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 font-medium transition-colors text-sm"
          >
            More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
