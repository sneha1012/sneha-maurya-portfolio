export default function Experience() {
  const experiences = [
    {
      company: "IBM",
      role: "Data Scientist",
      location: "New York, NY",
      period: "Sep. 2025 – Jan. 2026",
      highlights: [
        "Built a supervised code-edit dataset by mining 12K+ Git commits and curating 850 Java edit pairs; fine-tuned Qwen3-Coder (30B) with graph-augmented, structure-aware representations, improving edit accuracy by 12%",
        "Designed an evaluation pipeline combining AST edit distance, semantic similarity, and LLM-based judgments; validated behavior on 60K+ multi-file edits using syntax parsing and compile checks"
      ]
    },
    {
      company: "NXP Semiconductors",
      role: "Data Science Intern",
      location: "Austin, TX",
      period: "May 2025 – Dec. 2025",
      highlights: [
        "Reduced unnecessary Failure Analysis for customer quality complaints by enabling rule-base & XGBoost defect triage across dies, integrating iPAT inline defect screening, layout-instance proximity, and ATE test coverage, yielding $10,385 labor cost avoidance per CQC",
        "Built an Equipment Management root-cause analytics system by clustering 10K+ unstructured EMS logs across 400+ manufacturing tools using BERTopic, saving engineers 6 hrs/week via Power BI dashboards",
        "Standardized R Shiny & SQL ETL pipelines by converting 200+ lessons-learned records into Teradata JSON tables, improving cross-site traceability"
      ]
    },
    {
      company: "Columbia Business School",
      role: "Graduate Research Assistant",
      location: "New York, NY",
      period: "Jan. 2025 – May 2025",
      highlights: [
        "Developed a multimodal RAG system for ESG compliance analysis under the CSRD, integrating Qwen2.5-VL for visual reasoning, RolmOCR for structured extraction, and BGE-M3 embeddings with hierarchical retrieval",
        "Applied a QLoRA adapter on Qwen2.5-VL-7B to enhance reasoning over table captions, achieving 85% retrieval precision and enabling accurate report interpretation through a Streamlit interface"
      ]
    },
    {
      company: "Metropolis Healthcare",
      role: "Data Science Intern",
      location: "Mumbai, IN",
      period: "May 2024 – Aug. 2024",
      highlights: [
        "Engineered GPT-3.5-based clinical NLP system integrating RAG for retrieval of similar historical cases, generating patient-friendly summaries across 10K+ medical reports and improving patient engagement by 20%",
        "Deployed AWS pipeline (S3, Lambda, Bedrock) processing 200+ reports/day with HIPAA compliance",
        "Collaborated cross-functionally to build SQL & Tableau dashboards on 2M+ records to define product metrics, analyze acquisition and usage patterns, and support product decisions, reducing manual reporting by 12+ hours weekly"
      ]
    }
  ];

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-playfair">
            Experience
          </h2>
          <p className="text-xl text-gray-600">
            Building intelligent systems across research and industry
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm hover-lift border-l-4 border-indigo-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-indigo-600 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-600">
                    {exp.location} • {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mt-6">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-indigo-600 mr-3 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
