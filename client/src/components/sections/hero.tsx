import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "IoT Platform Engineer",
  "Electron Desktop Developer",
  "React Native Builder",
  "Real-Time Systems Expert",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Margam_Vishwateja_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const stats = [
    { value: "2+", label: "Years Experience", color: "text-blue-400" },
    { value: "10+", label: "Desktop Apps", color: "text-emerald-400" },
    { value: "6+", label: "Mobile Apps", color: "text-violet-400" },
    { value: "20+", label: "Technologies", color: "text-amber-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050d1a] dot-grid">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[80px]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-28 left-12 w-14 h-14 border border-blue-500/20 rounded-xl float-shape" style={{ animationDuration: "8s" }} />
      <div className="absolute top-40 right-16 w-10 h-10 border border-emerald-500/20 rounded-full float-shape" style={{ animationDuration: "6s", animationDelay: "1s" }} />
      <div className="absolute bottom-36 left-24 w-6 h-6 bg-violet-500/20 rounded-full float-shape" style={{ animationDuration: "10s", animationDelay: "2s" }} />
      <div className="absolute bottom-48 right-20 w-12 h-12 border border-blue-400/15 rotate-45 float-shape" style={{ animationDuration: "9s", animationDelay: "0.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 reveal-item ${mounted ? "revealed" : ""}`} style={{ transitionDelay: "100ms" }}>
          <span className="w-2 h-2 bg-emerald-400 rounded-full pulse-glow" />
          <span className="section-label">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-slate-100 reveal-item ${mounted ? "revealed" : ""}`} style={{ transitionDelay: "200ms" }}>
          Margam <span className="gradient-text">Vishwateja</span>
        </h1>

        {/* Typewriter */}
        <div className={`text-xl md:text-2xl font-mono text-blue-400 mb-6 h-8 flex items-center justify-center gap-1 reveal-item ${mounted ? "revealed" : ""}`} style={{ transitionDelay: "300ms" }}>
          <span>{displayed}</span>
          <span className="cursor-blink text-blue-300">|</span>
        </div>

        {/* Tagline */}
        <p className={`text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10 reveal-item ${mounted ? "revealed" : ""}`} style={{ transitionDelay: "400ms" }}>
          Building production-grade IoT platforms, desktop applications, and real-time data pipelines
          across the MERN stack — from embedded hardware to user-facing dashboards.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 reveal-item ${mounted ? "revealed" : ""}`} style={{ transitionDelay: "500ms" }}>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 text-base"
          >
            Get In Touch
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3.5 bg-transparent border border-slate-600 hover:border-blue-500 hover:bg-blue-500/8 text-slate-100 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
          >
            View Projects
          </button>
          <button
            onClick={downloadResume}
            className="px-8 py-3.5 bg-transparent border border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/8 text-emerald-400 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base flex items-center gap-2"
          >
            <i className="fas fa-download text-sm" />
            Resume
          </button>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto reveal-item ${mounted ? "revealed" : ""}`} style={{ transitionDelay: "600ms" }}>
          {stats.map((s, i) => (
            <div key={i} className="text-center p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-700 hover:-translate-y-1 transition-all duration-200 cursor-default">
              <div className={`text-3xl font-bold mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center pt-2 scroll-wheel">
          <div className="w-1 h-2 bg-blue-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
