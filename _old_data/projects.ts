export type Project = {
  id: string;
  title: string;
  /** Short 1–2 line description for anyone. */
  description: string;
  tech: string[];
  period: string;
  /** Path under public/ (e.g. /projects/chronos.jpg) or full URL. Optional — shows placeholder if missing. */
  image?: string;
  /** GitHub or code link. Only shown if provided. */
  link?: string;
  /** Live demo / project site. Only shown if provided. */
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "chronos",
    title: "Chronos: Autonomous Email Agent",
    description: "AI email assistant that drafts replies, schedules meetings, and manages follow-ups. DPO-tuned Llama 3; deploys with FastAPI + Chrome extension.",
    tech: ["Llama 3", "DPO", "FastAPI", "Gmail API", "Chrome Extension"],
    period: "Nov. 2025 – Dec. 2025",
    image: "/projects/chronos.jpg",
    link: "https://github.com/sneha1012/Chronos-Autonomous-Scheduling-Agent",
  },
  {
    id: "innovation-screener",
    title: "Innovation Screener",
    description: "AI-powered platform to evaluate ideas: innovation potential, feasibility, market readiness, and risk. Master's capstone; live demo.",
    tech: ["Next.js 14", "TypeScript", "Google Gemini API", "Vercel"],
    period: "Capstone • Language Models for Business",
    image: "/projects/innovation-screener.jpg",
    link: "https://github.com/sneha1012/LLM-Based-Innovation-screener",
    demo: "https://innovation-screener.vercel.app",
  },
  {
    id: "edav-migration",
    title: "Migration & Refugee Populations Analysis",
    description: "Exploratory data analysis and visualizations of migration and refugee data over time: scatter plots, choropleth, ridgeline, heatmaps. Built with R & Quarto.",
    tech: ["R", "Quarto", "ggplot2", "Data visualization"],
    period: "EDAV Final Project",
    image: "/projects/edav.jpg",
    demo: "https://sneha1012.github.io/EDAV-FINAL-PROJECT/results.html",
  },
  {
    id: "neural-code-search",
    title: "Neural Code Search Engine",
    description: "Semantic code search across 50+ repos and 2M+ snippets. Hybrid retrieval and learned re-ranking; cut discovery time from 15 min to ~30 sec.",
    tech: ["SPLADE", "LightGCN", "Elasticsearch", "FAISS"],
    period: "Sep. 2025 – Oct. 2025",
    image: "/projects/code-search.jpg",
  },
  {
    id: "doc-query",
    title: "Doc-Query",
    description: "Local RAG platform: ask questions over your PDFs and Markdown using Ollama-hosted LLMs. Streamlit UI, customizable models.",
    tech: ["Python", "Ollama", "RAG", "Streamlit"],
    period: "Earlier project",
    image: "/projects/doc-query.jpg",
    link: "https://github.com/sneha1012/Doc-Query",
  },
];
