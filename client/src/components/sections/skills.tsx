import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillCategories = [
  {
    title: "Frontend",
    icon: "fas fa-layer-group",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/8",
    skills: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "Redux", "Material UI", "Tailwind CSS", "Recharts", "D3.js", "Canvas.js"],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/8",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "FastAPI", "Cron Jobs", "Child Processes", "JWT Auth"],
  },
  {
    title: "Desktop & Mobile",
    icon: "fas fa-mobile-alt",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/8",
    skills: ["Electron.js", "React Native", "FlutterFlow", "Webpack", "Module Federation", "Electron Builder"],
  },
  {
    title: "IoT & Real-Time",
    icon: "fas fa-wifi",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/8",
    skills: ["MQTT", "WebSockets", "PySerial", "Serial Communication", "ESP32 OTA", "Real-Time Pipelines"],
  },
  {
    title: "Signal Processing",
    icon: "fas fa-wave-square",
    color: "text-pink-400",
    border: "border-pink-500/20",
    bg: "bg-pink-500/8",
    skills: ["Python", "NumPy", "SciPy", "Gaussian Smoothing", "FWHM", "Spectral Calibration", "ROI Analysis"],
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/8",
    skills: ["MySQL", "MongoDB", "Redis", "SQLite", "Firebase", "Supabase"],
  },
  {
    title: "Security & Auth",
    icon: "fas fa-shield-alt",
    color: "text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/8",
    skills: ["RSA Licensing", "JWT Authentication", "RBAC", "Middleware Auth"],
  },
  {
    title: "DevOps & Tools",
    icon: "fas fa-tools",
    color: "text-slate-400",
    border: "border-slate-600/30",
    bg: "bg-slate-700/20",
    skills: ["Git", "CI/CD Pipelines", "Docker (Basic)", "Linux", "Webpack", "PDF/Excel Reports", "WordPress"],
  },
];

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-[#050d1a] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef as any} className={`mb-16 reveal-item ${headerVisible ? "revealed" : ""}`}>
          <p className="section-label mb-3">What I use</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
        </div>

        <div ref={gridRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`p-5 rounded-2xl border ${cat.border} ${cat.bg} backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 cursor-default reveal-item ${gridVisible ? "revealed" : ""}`}
              style={{ transitionDelay: gridVisible ? `${i * 50}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-9 h-9 rounded-lg border ${cat.border} flex items-center justify-center`}>
                  <i className={`${cat.icon} ${cat.color} text-sm`} />
                </div>
                <h3 className={`font-semibold text-sm ${cat.color}`}>{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs font-medium hover:text-slate-100 hover:border-slate-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
