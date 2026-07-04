import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const projects = [
  {
    title: "Unified Host Application",
    subtitle: "Multi-Device Dashboard",
    icon: "fas fa-th-large",
    color: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/8",
    tags: ["Electron.js", "Webpack Module Federation", "React.js", "Redux"],
    description: "Plugin-based host desktop app that consolidates multiple standalone device monitoring applications into one interface without merging codebases. Each app is a self-contained Webpack plugin with configurable live chart slots for simultaneous multi-device monitoring.",
    highlights: ["Plugin architecture", "Module Federation", "Configurable slots", "Multi-device monitoring"],
  },
  {
    title: "Radioactivity Spectrum Analyzer",
    subtitle: "Scientific Signal Processing",
    icon: "fas fa-radiation-alt",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/8",
    tags: ["Python", "NumPy", "SciPy", "Node.js", "Electron.js", "MQTT"],
    description: "Desktop applications for gamma spectrum analysis — converting raw detector channel counts to energy values via user-defined calibration. Implements Python-based Gaussian smoothing, FWHM computation, peak energy identification, and PySerial data acquisition over USB.",
    highlights: ["Gaussian smoothing", "FWHM computation", "Peak identification", "USB serial acquisition"],
  },
  {
    title: "Modular IoT Framework",
    subtitle: "Skeleton Platform Architecture",
    icon: "fas fa-cubes",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/8",
    tags: ["Node.js", "React.js", "Redux", "MQTT", "WebSockets", "MySQL"],
    description: "Reusable skeleton framework separating shared platform infrastructure from application-specific business logic. Pre-built modules for API routing, WebSocket server, MQTT handling, Redux store, and database query layers — enabling 10+ apps on one maintainable foundation.",
    highlights: ["Reusable template", "Pre-built modules", "Separation of concerns", "10+ apps built"],
  },
  {
    title: "React Native Mobile Suite",
    subtitle: "IoT Field Monitoring Apps",
    icon: "fas fa-mobile-alt",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/8",
    tags: ["React Native", "Redux", "MQTT", "SQLite", "MySQL", "ESP32 OTA"],
    description: "6+ mobile applications for field use mirroring desktop capabilities: live charts, MQTT ingestion, local SQLite storage, PDF/Excel reports, RSA licensing, and ESP32 OTA firmware updates with role-based access control.",
    highlights: ["6+ mobile apps", "OTA firmware updates", "RBAC", "Offline storage"],
  },
];

function ProjectCard({
  p,
  i,
  isActive,
  gridVisible,
  onToggle,
}: {
  p: (typeof projects)[number];
  i: number;
  isActive: boolean;
  gridVisible: boolean;
  onToggle: () => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8);

  return (
    <div className="perspective-container">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onToggle}
        className={`group tilt-card relative p-7 rounded-3xl border ${p.border} ${p.bg} cursor-pointer transition-[box-shadow] duration-300 reveal-item ${gridVisible ? "revealed" : ""}`}
        style={{ transitionDelay: gridVisible ? `${i * 80}ms` : "0ms" }}
      >
        <div className="tilt-card-content">
          {/* Top row */}
          <div className="flex items-start justify-between mb-4">
            <div className={`icon-3d w-12 h-12 rounded-2xl border ${p.border} flex items-center justify-center`}>
              <i className={`${p.icon} ${p.color} text-lg`} />
            </div>
            <div
              className="w-8 h-8 rounded-full border border-slate-700/60 flex items-center justify-center transition-transform duration-300"
              style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              <i className="fas fa-plus text-slate-500 text-xs" />
            </div>
          </div>

          <h3 className="text-lg font-bold text-slate-100 mb-0.5">{p.title}</h3>
          <p className={`text-sm font-medium ${p.color} mb-3`}>{p.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">{p.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {p.tags.map((t, j) => (
              <span key={j} className="px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/50 text-slate-400 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* Expandable highlights */}
          <div
            className="overflow-hidden transition-all duration-300"
            style={{ maxHeight: isActive ? "200px" : "0px", opacity: isActive ? 1 : 0 }}
          >
            <div className={`pt-4 border-t ${p.border}`}>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Highlights</p>
              <div className="grid grid-cols-2 gap-2">
                {p.highlights.map((h, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-slate-300">
                    <i className="fas fa-check-circle text-emerald-400 text-xs" />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#050d1a] relative overflow-hidden">
      <div className="mesh-gradient" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div ref={headerRef as any} className={`mb-16 reveal-item ${headerVisible ? "revealed" : ""}`}>
          <p className="section-label mb-3">What I've built</p>
          <h2 className="text-3d text-4xl md:text-5xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
        </div>

        <div ref={gridRef as any} className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              p={p}
              i={i}
              isActive={activeIdx === i}
              gridVisible={gridVisible}
              onToggle={() => setActiveIdx(activeIdx === i ? null : i)}
            />
          ))}
        </div>

        <div className={`mt-10 text-center reveal-item ${gridVisible ? "revealed" : ""}`} style={{ transitionDelay: "400ms" }}>
          <p className="text-slate-500 text-sm">Click any card to see highlights</p>
        </div>
      </div>
    </section>
  );
}
