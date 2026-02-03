export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Sep 2025 — Jan 2026",
    title: "Data Scientist",
    company: "IBM",
    description:
      "Built supervised code-edit dataset from 12K+ Git commits (850 Java edit pairs); fine-tuned Qwen3-Coder (30B) with graph-augmented representations (12% edit accuracy gain). Designed evaluation pipeline with AST edit distance, semantic similarity, and LLM-based judgments.",
    companyUrl: "https://www.ibm.com",
  },
  {
    date: "May 2025 — Dec 2025",
    title: "Data Science Intern",
    company: "NXP Semiconductors",
    description:
      "ML-based defect triage for Failure Analysis ($10,385 labor cost avoidance per CQC). BERTopic clustering of 10K+ EMS logs; Power BI dashboards (6 hrs/week saved). R Shiny & SQL ETL for 200+ lessons-learned into Teradata.",
    companyUrl: "https://www.nxp.com",
  },
  {
    date: "Jan 2025 — May 2025",
    title: "Graduate Research Assistant",
    company: "Columbia Business School",
    description:
      "Multimodal RAG for ESG/CSRD compliance; Qwen2.5-VL, RolmOCR, BGE-M3. QLoRA on Qwen2.5-VL-7B (85% retrieval precision). Streamlit interface for report interpretation.",
  },
  {
    date: "May 2024 — Aug 2024",
    title: "Data Science Intern",
    company: "Metropolis Healthcare",
    description:
      "GPT-3.5 clinical NLP + RAG; patient-friendly summaries (10K+ reports, 20% engagement lift). AWS pipeline (S3, Lambda, Bedrock) 200+ reports/day, HIPAA. SQL/Tableau on 2M+ records.",
    companyUrl: "https://www.metropolisindia.com",
  },
];
