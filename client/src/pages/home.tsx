import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Home() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="bg-[#0a0a0a] text-neutral-100 min-h-screen overflow-x-hidden">
      {/* Scroll progress bar */}
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
      <footer className="py-10 border-t border-neutral-800/60 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-neutral-100 font-bold gradient-text">&lt;Vishwateja /&gt;</p>
            <p className="text-neutral-500 text-sm mt-1">Full Stack Developer · Hyderabad, India</p>
          </div>
          <p className="text-neutral-600 text-sm">© 2026 Margam Vishwateja. All rights reserved.</p>
          <div className="flex gap-4">
            {[
              { icon: "fas fa-envelope", href: "mailto:vishwamargam@gmail.com" },
              { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/vishwa-margam-1b0479213" },
              { icon: "fas fa-phone", href: "tel:+918328401939" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-400 hover:border-neutral-600 hover:text-red-400 transition-all"
              >
                <i className={`${item.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
