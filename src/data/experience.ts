export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  /** Path to logo image in public/, e.g. /logos/ibm.png */
  logoUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2025 — Jan 2026",
    title: "Data Scientist",
    company: "IBM",
    description:
      "Built code generation system using graph-based representations for structural understanding. Designed evaluation framework with AST analysis and semantic verification.",
    companyUrl: "https://www.ibm.com",
    logoUrl: "/logos/ibm-logo.jpg",
  },
  {
    date: "May 2025 — Dec 2025",
    title: "Data Science Intern",
    company: "NXP Semiconductors",
    description:
      "Built ML defect triage integrating screening and test data. Automated root-cause analytics clustering manufacturing logs for failure pattern detection.",
    companyUrl: "https://www.nxp.com",
    logoUrl: "/logos/nxp%20logo.avif",
  },
  {
    date: "Jan 2025 — May 2025",
    title: "Graduate Research Assistant",
    company: "Columbia Business School",
    description:
      "Built multimodal ESG compliance system combining vision models, OCR, and semantic retrieval. Enhanced table reasoning for analyst workflows through adaptation.",
    logoUrl: "/logos/CBS-Mini-Logo.png",
  },
  {
    date: "May 2024 — Aug 2024",
    title: "Data Science Intern",
    company: "Metropolis Healthcare",
    description:
      "Engineered clinical NLP transforming diagnostic reports into patient language. Deployed HIPAA-compliant AWS infrastructure processing reports and enabling product analytics.",
    companyUrl: "https://www.metropolisindia.com",
    logoUrl: "/logos/Metropolis_Healthcare_Logo_Green_Background.png",
  },
];
