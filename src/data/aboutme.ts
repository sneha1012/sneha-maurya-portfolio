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
    "I'm a Data Scientist and ML Engineer building intelligent systems with LLMs and neural networks. MS in Data Science from Columbia; experience at IBM, NXP Semiconductors, Columbia Business School, and Metropolis Healthcare. I work on everything from DPO-tuned email agents to production ML pipelines and exploratory data viz.",
  email: "sm5755@columbia.edu",
  // Add your photo: drop in public/photo.jpg and set imageUrl: "/photo.jpg"
  imageUrl: undefined as string | undefined,
  blogUrl: "https://", // Add your blog when you publish
  cvUrl: "/Maurya_Sneha_DS.pdf",
  githubUsername: "sneha1012",
  linkedinUsername: "snehamaurya10",
  institutionUrl: "https://www.columbia.edu",
  creativesUrl: "#creatives",
  secretDescription: "Building cool things. 🐕",
};
