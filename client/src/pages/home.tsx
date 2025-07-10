import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function Home() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="bg-slate-900 text-slate-50 min-h-screen overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2024 Margam Vishwateja. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="mailto:tejamargam.vi@gmail.com" className="text-slate-400 hover:text-indigo-400 transition-colors">
                <i className="fas fa-envelope text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/vishwa-margam-1b0479213" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
              <a href="tel:+918328401939" className="text-slate-400 hover:text-violet-400 transition-colors">
                <i className="fas fa-phone text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
