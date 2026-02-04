import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';
import QuickAccess from '@/components/QuickAccess';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Gallery />
      <Contact />
      <QuickAccess />
    </div>
  );
}
