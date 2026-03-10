"use client";

const tools = [
  "Python", "PyTorch", "TensorFlow", "FastAPI", "LangChain",
  "RAG", "FAISS", "Elasticsearch", "Docker", "AWS",
  "Grafana", "Prometheus", "PostgreSQL", "SQLite", "Redis",
  "Next.js", "TypeScript", "React", "Playwright", "Git",
  "Claude API", "OpenAI API", "Hugging Face", "CUDA", "Spark",
  "Pandas", "scikit-learn", "Weights & Biases", "MLflow", "Airflow",
];

export function TechMarquee() {
  const doubled = [...tools, ...tools];

  return (
    <div className="w-full overflow-hidden py-4 opacity-60 hover:opacity-90 transition-opacity">
      <div className="marquee-track">
        {doubled.map((tool, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap">
            <span className="text-xs tracking-widest uppercase text-[var(--pastel-blue-dark)] font-medium">
              {tool}
            </span>
            {i < doubled.length - 1 && (
              <span className="marquee-separator">&#9670;</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
