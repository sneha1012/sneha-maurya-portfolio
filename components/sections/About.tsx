export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 font-playfair">
            About Me
          </h2>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a Data Scientist and ML Engineer passionate about building intelligent systems that make a real impact.
              I completed my MS in Data Science at Columbia University and have worked on cutting-edge projects at IBM,
              NXP Semiconductors, Columbia Business School, and Metropolis Healthcare.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My work spans fine-tuning large language models (DPO, QLoRA), building production ML systems that save
              thousands in operational costs, and designing evaluation pipelines that combine AST metrics, semantic
              similarity, and LLM judgments. I believe in combining rigorous research with practical engineering.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring New York City, attending tech conferences, or spending time
              with my dog. I'm always excited to connect with fellow researchers, engineers, and anyone passionate about AI and ML.
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 font-playfair">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900">Columbia University</h4>
                  <p className="text-gray-600">Master of Science in Data Science (Aug. 2024 – Dec. 2025)</p>
                  <p className="text-sm text-gray-500 mt-1">New York, NY</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Relevant coursework: Statistical Inference, Applied Machine Learning, Deep Learning, Natural Language Processing
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Graduate Teaching Assistant: Data Analysis, Databases for Business Analytics, Python (graduate-level courses)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">SRM University</h4>
                  <p className="text-gray-600">Bachelor of Technology in Computer Science and Engineering (Merit-based Scholarship)</p>
                  <p className="text-sm text-gray-500 mt-1">Chennai, IN • Aug. 2020 – May 2024</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Relevant coursework: Data Structures, Operating Systems, Cloud Computing, Artificial Intelligence, Databases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
