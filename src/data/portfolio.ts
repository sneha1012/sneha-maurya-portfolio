import { getProjectImageUrl } from "./project-images";

export type ProjectIllustrationKey =
  | "whb"
  | "prospector"
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
    title: "Women's Health Benchmark (WHB)",
    description:
      "End-to-end evaluation framework for clinical AI: 47 expert scenarios, 23 models, 23-criterion ordinal rubric, parallelized scoring with ThreadPoolExecutor, and Cohen's kappa IRR across three independent LLM judges. Ships with interactive leaderboard dashboard and 7 publication figures.",
    technologies: ["Python", "OpenRouter API", "Claude Sonnet 4", "LLM-as-Judge", "ThreadPoolExecutor"],
    imageUrl: getProjectImageUrl("whb"),
    codeUrl: "https://github.com/sneha1012/womens-health-benchmark",
    illustration: "whb",
  },
  {
    title: "ProspectorAI",
    description:
      "AI-powered B2B sales intelligence platform. Scrapes contractor directories via Playwright API interception, stores in SQLite with idempotent UPSERT, generates LLM-enriched lead scoring, and serves via FastAPI with interactive dashboard.",
    technologies: ["Python", "FastAPI", "Playwright", "SQLite", "OpenAI", "Docker"],
    imageUrl: getProjectImageUrl("prospector"),
    codeUrl: "https://github.com/sneha1012/prospector-ai",
    illustration: "prospector",
  },
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
