export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  creativesUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string;
  secretDescription?: string;
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sneha Maurya",
  title: "Data Scientist & ML Engineer",
  institution: "Columbia University",
  description:
    'Hi! I\'m Sneha, a recent grad from Columbia\'s <strong>MS in Data Science</strong>. I\'ve worked on <strong>AI for code generation</strong> at IBM, <strong>manufacturing ML</strong> at NXP, and <strong>multimodal RAG</strong> at Columbia. I built and published a <strong>clinical LLM evaluation benchmark</strong> with Rubric (YC W26); 23 models, expert-in-the-loop validation, arXiv preprint. I work across <strong>pre- and post-training</strong>, <strong>eval pipelines</strong>, and <strong>vertical agents</strong>. I care about <strong>observability</strong> over agent behavior, <strong>structured reasoning</strong>, and tools that augment rather than just automate.',
  email: "sm5755@columbia.edu",
  imageUrl: "/logos/WhatsApp%20Image%202026-02-03%20at%2020.28.16.jpeg",
  blogUrl: "https://",
  cvUrl: "/projects/Maurya%20Sneha.pdf",
  githubUsername: "sneha1012",
  linkedinUsername: "snehamaurya10",
  institutionUrl: "https://www.columbia.edu",
  creativesUrl: "#creatives",
  secretDescription: "Building cool things. 🐕",
};
