import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const skillCategories = [
  {
    title: "Frontend",
    icon: "fas fa-layer-group",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/8",
    skills: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "Redux", "Material UI", "Tailwind CSS", "Recharts", "D3.js", "Canvas.js"],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    color: "text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/8",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "FastAPI", "Cron Jobs", "Child Processes", "JWT Auth"],
  },
  {
    title: "Desktop & Mobile",
    icon: "fas fa-mobile-alt",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/8",
    skills: ["Electron.js", "React Native", "FlutterFlow", "Webpack", "Module Federation", "Electron Builder"],
  },
  {
    title: "IoT & Real-Time",
    icon: "fas fa-wifi",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/8",
    skills: ["MQTT", "WebSockets", "PySerial", "Serial Communication", "ESP32 OTA", "Real-Time Pipelines"],
  },
  {
    title: "Signal Processing",
    icon: "fas fa-wave-square",
    color: "text-rose-400",
    border: "border-rose-500/20",
    bg: "bg-rose-500/8",
    skills: ["Python", "NumPy", "SciPy", "Gaussian Smoothing", "FWHM", "Spectral Calibration", "ROI Analysis"],
  },
  {
    title: "Databases",
    icon: "fas fa-database",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/8",
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
    color: "text-neutral-400",
    border: "border-neutral-600/30",
    bg: "bg-neutral-700/20",
    skills: ["Git", "CI/CD Pipelines", "Docker (Basic)", "Linux", "Webpack", "PDF/Excel Reports", "WordPress"],
  },
];

function SkillCard({ cat, i, gridVisible }: { cat: (typeof skillCategories)[number]; i: number; gridVisible: boolean }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);

  return (
    <div className="perspective-container">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`tilt-card p-5 rounded-2xl border ${cat.border} ${cat.bg} backdrop-blur-sm cursor-default reveal-item ${gridVisible ? "revealed" : ""}`}
        style={{ transitionDelay: gridVisible ? `${i * 50}ms` : "0ms" }}
      >
        <div className="tilt-card-content">
          <div className="flex items-center gap-3 mb-4">
            <div className={`icon-3d w-9 h-9 rounded-lg border ${cat.border} flex items-center justify-center`}>
              <i className={`${cat.icon} ${cat.color} text-sm`} />
            </div>
            <h3 className={`font-semibold text-sm ${cat.color}`}>{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cat.skills.map((skill, j) => (
              <span
                key={j}
                className="px-2.5 py-1 rounded-md bg-neutral-800/60 border border-neutral-700/50 text-neutral-300 text-xs font-medium hover:text-neutral-100 hover:border-neutral-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="mesh-gradient" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={headerRef as any} className={`mb-16 reveal-item ${headerVisible ? "revealed" : ""}`}>
          <p className="section-label mb-3">What I use</p>
          <h2 className="text-3d text-4xl md:text-5xl font-bold text-neutral-100 mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-rose-400 rounded-full" />
        </div>

        <div ref={gridRef as any} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} cat={cat} i={i} gridVisible={gridVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
