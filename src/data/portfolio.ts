import { getProjectImageUrl } from "./project-images";

export type ProjectIllustrationKey =
  | "chronos"
  | "innovation-screener"
  | "edav-migration"
  | "code-search"
  | "doc-query";

export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  /** Cute illustration key for this project */
  illustration?: ProjectIllustrationKey;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Chronos: Autonomous Email Agent",
    description:
      "AI email assistant that adapts to individual writing styles through direct preference optimization. Production system handling drafting, scheduling, and follow-ups via FastAPI and Chrome extension.",
    technologies: ["Llama 3", "DPO", "FastAPI", "Gmail API", "Chrome Extension"],
    imageUrl: getProjectImageUrl("chronos"),
    codeUrl: "https://github.com/sneha1012/Chronos-Autonomous-Scheduling-Agent",
    illustration: "chronos",
  },
  {
    title: "Innovation Screener",
    description:
      "AI-powered validation framework for startup concepts. Evaluates innovation potential, technical feasibility, market readiness, and risk through structured multi-factor analysis. Built as Columbia capstone.",
    technologies: ["Next.js 14", "TypeScript", "Google Gemini API", "Vercel"],
    imageUrl: getProjectImageUrl("innovation-screener"),
    projectUrl: "https://innovation-screener.vercel.app",
    codeUrl: "https://github.com/sneha1012/LLM-Based-Innovation-screener",
    illustration: "innovation-screener",
  },
  {
    title: "Migration & Refugee Populations Analysis",
    description:
      "Statistical visualization exploring global migration and refugee patterns across time and geography. Advanced plotting techniques: choropleths, ridgeline distributions, temporal heatmaps, built with R, ggplot2, and Quarto.",
    technologies: ["R", "Quarto", "ggplot2", "Data visualization"],
    imageUrl: getProjectImageUrl("edav-migration"),
    projectUrl: "https://sneha1012.github.io/EDAV-FINAL-PROJECT/results.html",
    illustration: "edav-migration",
  },
  {
    title: "Neural Code Search Engine",
    description:
      "Semantic code retrieval system using neural sparse embeddings and graph-based re-ranking. Processes 2M code snippets across 50 repositories with sub-second query latency, transforming code discovery workflows.",
    technologies: ["SPLADE", "LightGCN", "Elasticsearch", "FAISS"],
    imageUrl: getProjectImageUrl("code-search"),
    illustration: "code-search",
  },
  {
    title: "Doc-Query",
    description:
      "Privacy-preserving document intelligence system using retrieval-augmented generation. Runs entirely on local infrastructure with open-source models, enabling secure question-answering over sensitive documents without external API dependencies.",
    technologies: ["Python", "Ollama", "RAG", "Streamlit"],
    imageUrl: getProjectImageUrl("doc-query"),
    codeUrl: "https://github.com/sneha1012/Doc-Query",
    illustration: "doc-query",
  },
];
