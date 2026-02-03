export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Chronos: Autonomous Email Agent",
    description:
      "AI email assistant that drafts replies, schedules meetings, and manages follow-ups. DPO-tuned Llama 3; FastAPI + Chrome extension.",
    technologies: ["Llama 3", "DPO", "FastAPI", "Gmail API", "Chrome Extension"],
    codeUrl: "https://github.com/sneha1012/Chronos-Autonomous-Scheduling-Agent",
  },
  {
    title: "Innovation Screener",
    description:
      "AI-powered idea evaluation: innovation potential, feasibility, market readiness, risk. Master's capstone; live demo.",
    technologies: ["Next.js 14", "TypeScript", "Google Gemini API", "Vercel"],
    projectUrl: "https://innovation-screener.vercel.app",
    codeUrl: "https://github.com/sneha1012/LLM-Based-Innovation-screener",
  },
  {
    title: "Migration & Refugee Populations Analysis",
    description:
      "Exploratory data analysis and visualizations (scatter, choropleth, ridgeline, heatmaps). R & Quarto.",
    technologies: ["R", "Quarto", "ggplot2", "Data visualization"],
    projectUrl: "https://sneha1012.github.io/EDAV-FINAL-PROJECT/results.html",
  },
  {
    title: "Neural Code Search Engine",
    description:
      "Semantic code search across 50+ repos, 2M+ snippets. Hybrid retrieval and re-ranking; discovery time 15 min → ~30 sec.",
    technologies: ["SPLADE", "LightGCN", "Elasticsearch", "FAISS"],
  },
  {
    title: "Doc-Query",
    description:
      "Local RAG platform for document Q&A with Ollama-hosted LLMs. Streamlit UI, PDF/Markdown ingestion.",
    technologies: ["Python", "Ollama", "RAG", "Streamlit"],
    codeUrl: "https://github.com/sneha1012/Doc-Query",
  },
];
