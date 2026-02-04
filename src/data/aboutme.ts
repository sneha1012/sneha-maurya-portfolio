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
    "Hi! I'm Sneha, a recent grad from Columbia's MS in Data Science. I've worked on AI for code at IBM, manufacturing analytics at NXP, and multimodal RAG and healthcare NLP at Columbia. I'm involved in pre- and post-training, eval, and vertical agents. I studied high-performance ML, deep learning for NLP, and agentic systems. I'm interested in AI embedded in existing systems as reasoning engineers trust, not as a replacement layer. I care about observability over agent behavior, organizational memory, and tools that augment rather than just automate.",
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
