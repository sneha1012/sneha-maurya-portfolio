export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4 font-playfair">Sneha Maurya</h3>
            <p className="text-gray-400 text-sm">
              Data Scientist & ML Engineer building intelligent systems with LLMs and neural networks.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:sm5755@columbia.edu" className="hover:text-white transition-colors">
                  sm5755@columbia.edu
                </a>
              </li>
              <li>
                <a href="tel:+16465780650" className="hover:text-white transition-colors">
                  +1 (646) 578-0650
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/snehamaurya10" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/sneha1012" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sneha Maurya. Built with Next.js and Tailwind CSS.</p>
          <p className="mt-2 text-xs">
            {/* Subtle Office reference */}
            <span className="opacity-50">"That's what she said" - Michael Scott</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
