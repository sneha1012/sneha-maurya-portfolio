export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  {
    year: "2024—2025",
    institution: "Columbia University",
    degree: "M.S. in Data Science",
    thesis: "Relevant: Statistical Inference, Applied ML, Deep Learning, NLP. GTA: Data Analysis, Databases for Business Analytics, Python.",
  },
  {
    year: "2020—2024",
    institution: "SRM University",
    degree: "B.Tech. in Computer Science and Engineering (Merit-based Scholarship)",
    thesis: "Relevant: Data Structures, Operating Systems, Cloud Computing, AI, Databases.",
  },
];
