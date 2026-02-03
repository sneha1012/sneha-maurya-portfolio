'use client';

import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-playfair">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building production ML systems with real impact — from LLM agents to neural search.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-indigo-200 hover-lift shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <span className="text-sm text-gray-500 font-medium">
                  {project.period}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2 font-playfair group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-600 font-medium mb-4">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <span className="text-indigo-600 mr-2 mt-1 shrink-0">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/sneha1012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 font-medium transition-colors"
          >
            See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
