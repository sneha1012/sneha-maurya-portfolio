export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Direct Preference Optimization (DPO)",
      excerpt: "A deep dive into DPO and how it simplifies preference alignment for LLMs without needing a reward model.",
      date: "Dec 2025",
      category: "LLM",
      readTime: "8 min read",
      link: "#"
    },
    {
      title: "Building Production ML Systems: Lessons from vLLM",
      excerpt: "How vLLM achieves 3-5x faster inference through continuous batching and PagedAttention.",
      date: "Nov 2025",
      category: "ML Engineering",
      readTime: "6 min read",
      link: "#"
    },
    {
      title: "Neural Code Search: Beyond Keyword Matching",
      excerpt: "Exploring SPLADE, graph neural networks, and hybrid retrieval for semantic code search.",
      date: "Aug 2025",
      category: "Information Retrieval",
      readTime: "10 min read",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="section bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 font-playfair">
            Blog
          </h2>
          <p className="text-xl text-gray-600">
            Thoughts on ML, AI, and building intelligent systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-6 hover-lift border border-gray-200 cursor-pointer"
              onClick={() => post.link !== "#" && window.open(post.link, '_blank')}
            >
              <div className="mb-4">
                <span className="text-xs text-indigo-600 font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 mx-2">•</span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.readTime}</span>
                <span className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
