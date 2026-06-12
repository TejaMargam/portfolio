import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = ["about", "skills", "experience", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "experience", label: "Experience" },
    { href: "projects", label: "Projects" },
    { href: "contact", label: "Contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050d1a]/90 backdrop-blur-xl border-b border-blue-500/10"
            : "bg-transparent"
        }`}
        style={{ animation: "slideDown 0.6s ease forwards" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-lg font-bold gradient-text cursor-pointer tracking-tight hover:opacity-80 transition-opacity"
            >
              &lt;Vishwateja /&gt;
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeSection === link.href
                      ? "text-blue-400 bg-blue-500/10 border border-blue-500/20"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
              >
                Hire Me
              </button>
            </div>

            <button
              className="md:hidden text-slate-300 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-5 space-y-1.5">
                <span
                  className="block h-0.5 bg-current rounded transition-all duration-300"
                  style={{ transform: isMenuOpen ? "rotate(45deg) translate(4px, 8px)" : "none" }}
                />
                <span
                  className="block h-0.5 bg-current rounded transition-all duration-300"
                  style={{ opacity: isMenuOpen ? 0 : 1 }}
                />
                <span
                  className="block h-0.5 bg-current rounded transition-all duration-300"
                  style={{ transform: isMenuOpen ? "rotate(-45deg) translate(4px, -8px)" : "none" }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050d1a]/97 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="text-2xl font-semibold text-slate-300 hover:text-blue-400 transition-colors"
            style={{
              transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms",
              transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
              opacity: isMenuOpen ? 1 : 0,
              transition: "all 0.3s ease",
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => scrollTo("contact")}
          className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl"
        >
          Hire Me
        </button>
      </div>
    </>
  );
}
