export type Project = {
  id: string;
  title: string;
  tagline: string;
  tech: string[];
  period: string;
  description: string;
  achievements: string[];
  link: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "chronos",
    title: "Chronos: Autonomous Email Agent",
    tagline: "Production AI email assistant with DPO-tuned Llama & FastAPI",
    tech: ["Llama 3", "DPO", "FastAPI", "Gmail API", "Chrome Extension"],
    period: "Nov. 2025 – Dec. 2025",
    description:
      "Agentic email system that drafts personalized responses, schedules meetings via Calendly, and manages follow-ups. Fine-tuned with Direct Preference Optimization; deploys via FastAPI and Chrome extension.",
    achievements: [
      "Fine-tuned Llama 3 email drafting model with DPO on 2.4K preference pairs; improved draft acceptance from 61% to 87%",
      "Designed production-safe inference pipeline and deployed via FastAPI with Chrome extension",
      "Reduced average response time by 70% across concurrent conversations"
    ],
    link: "https://github.com/sneha1012/Chronos-Autonomous-Scheduling-Agent",
    featured: true
  },
  {
    id: "neural-code-search",
    title: "Neural Code Search Engine",
    tagline: "Scalable semantic code search with hybrid retrieval and re-ranking",
    tech: ["Information Retrieval", "Ranking", "SPLADE", "LightGCN", "Elasticsearch", "FAISS"],
    period: "Sep. 2025 – Oct. 2025",
    description:
      "Scalable semantic code search across 50+ repositories and 2M+ indexed code snippets using hybrid retrieval and learned re-ranking.",
    achievements: [
      "Improved top-3 retrieval accuracy by 28% through bias-aware ranking",
      "Offline and user-driven evaluation on 500+ queries",
      "Reduced code discovery time from 15 minutes to 30 seconds"
    ],
    link: "#",
    featured: true
  },
  {
    id: "innovation-screener",
    title: "Innovation Screener",
    tagline: "Master's Capstone — AI-powered idea evaluation with Gemini",
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Google Gemini API", "MongoDB", "Vercel"],
    period: "Capstone • Language Models for Business Applications",
    description:
      "Comprehensive AI-powered platform for evaluating and screening innovative ideas using advanced language models and multi-dimensional evaluation metrics. Built as Master's in Data Science capstone.",
    achievements: [
      "AI-powered analysis with Google Gemini API; innovation potential, feasibility, market readiness, scalability, risk assessment",
      "Modern responsive UI; real-time results, export capabilities, performance testing tools",
      "Deployed on Vercel with optional MongoDB persistence"
    ],
    link: "https://github.com/sneha1012/LLM-Based-Innovation-screener",
    demo: "https://innovation-screener.vercel.app",
    featured: true
  },
  {
    id: "doc-query",
    title: "Doc-Query",
    tagline: "Local RAG platform for document Q&A with LLMs",
    tech: ["Python", "Ollama", "RAG", "Streamlit", "Vector Embeddings"],
    period: "Earlier project",
    description:
      "Experimental platform for running locally hosted AI models for question-answering based on document embeddings. Supports RAG with PDF/Markdown ingestion and a Streamlit web UI.",
    achievements: [
      "Local model hosting with Ollama for secure, fast processing",
      "Document embedding pipeline for PDFs and Markdown via Ollama",
      "Customizable LLMs and embedding frameworks; extensible testing ground for document-based AI"
    ],
    link: "https://github.com/sneha1012/Doc-Query",
    featured: false
  }
];
