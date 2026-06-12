import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const achievements = [
  { icon: "fas fa-desktop", text: "Designed and delivered 10+ Electron.js desktop apps for scientific radioactivity measurement instruments, each shipped as standalone executables." },
  { icon: "fas fa-mobile-alt", text: "Built 6+ React Native mobile apps for field instruments with live charts, MQTT ingestion, local storage, and PDF/Excel report generation." },
  { icon: "fas fa-bolt", text: "Built real-time IoT data pipelines using MQTT and WebSockets to stream live sensor telemetry to React dashboards with Recharts, Canvas.js, and D3.js." },
  { icon: "fas fa-flask", text: "Implemented spectral energy calibration in Python (NumPy, SciPy) — FWHM, peak energy, area under curve — invoked as Node.js child process." },
  { icon: "fas fa-puzzle-piece", text: "Architected a modular skeleton framework separating shared platform code from app-specific modules, enabling 10+ apps to launch from a ready-to-use template." },
  { icon: "fas fa-cubes", text: "Built a host application using Webpack Module Federation unifying multiple standalone device apps into one dashboard with configurable monitoring slots." },
  { icon: "fas fa-shield-alt", text: "Implemented RSA-based software licensing binding each app to the installation machine with configurable time limits and per-instrument entitlements." },
  { icon: "fas fa-users-cog", text: "Built role-based access control (RBAC) across all desktop and mobile apps, restricting module access based on user privilege levels." },
  { icon: "fas fa-usb", text: "Integrated serial communication via PySerial to receive raw sensor data over USB/serial, process it, and forward it to Node.js for dashboard delivery." },
  { icon: "fas fa-file-alt", text: "Implemented automated background activity recording with event-driven history saves and individual or batch Excel/PDF report generation." },
  { icon: "fas fa-key", text: "Built JWT-based authentication with Express.js middleware for API-level authorization, and used Redis for fast session storage across all platform apps." },
  { icon: "fas fa-satellite-dish", text: "Developed ESP32 OTA firmware update functionality within mobile applications, allowing remote firmware deployment to field devices." },
  { icon: "fas fa-clock", text: "Implemented cron jobs for scheduled background tasks including automated data aggregation, history logging, and report generation pipelines." },
  { icon: "fas fa-infinity", text: "Implemented CI/CD pipelines to automate builds and deployments, reducing manual release effort and deployment errors." },
];

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal();
  const { ref: freelanceRef, isVisible: freelanceVisible } = useScrollReveal();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? achievements : achievements.slice(0, 6);

  return (
    <section id="experience" className="py-24 bg-[#060e1e] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef as any} className={`mb-16 reveal-item ${headerVisible ? "revealed" : ""}`}>
          <p className="section-label mb-3">Where I've worked</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
        </div>

        {/* Main Card */}
        <div ref={cardRef as any} className={`rounded-3xl border border-slate-800/80 bg-slate-900/40 overflow-hidden mb-6 reveal-item ${cardVisible ? "revealed" : ""}`}>
          <div className="p-8 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <i className="fas fa-building text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">Full Stack Developer</h3>
                <p className="text-blue-400 font-medium">Noki Technologies</p>
                <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
                  <i className="fas fa-map-marker-alt text-slate-600" />
                  Hyderabad, India
                </p>
              </div>
            </div>
            <span className="px-5 py-2 rounded-full text-sm font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 whitespace-nowrap">
              Feb 2024 – Mar 2026
            </span>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {visible.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-800/50 hover:border-slate-700/60 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <i className={`${item.icon} text-blue-400 text-xs`} />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {achievements.length > 6 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-6 w-full py-3 rounded-xl border border-slate-700/50 text-slate-400 hover:text-slate-100 hover:border-slate-600 text-sm font-medium transition-all flex items-center justify-center gap-2"
              >
                <i className={`fas fa-chevron-${expanded ? "up" : "down"} text-xs`} />
                {expanded ? "Show less" : `Show ${achievements.length - 6} more achievements`}
              </button>
            )}
          </div>
        </div>

        {/* Freelance */}
        <div ref={freelanceRef as any} className={`grid md:grid-cols-2 gap-5 reveal-item ${freelanceVisible ? "revealed" : ""}`}>
          {[
            {
              title: "Travel Agency Web App",
              tags: ["React.js", "Vite", "Tailwind CSS", "CRM API"],
              desc: "Full travel agency website with React.js and Vite; integrated backend APIs connecting with CRM systems for lead and booking management.",
              color: "text-emerald-400",
              border: "border-emerald-500/20",
              bg: "bg-emerald-500/8",
              icon: "fas fa-plane",
            },
            {
              title: "Full Stack Web Development",
              tags: ["Next.js", "Python", "FastAPI"],
              desc: "Developed full-stack web features using Next.js for frontend and FastAPI (Python) for backend REST API services.",
              color: "text-violet-400",
              border: "border-violet-500/20",
              bg: "bg-violet-500/8",
              icon: "fas fa-code",
            },
          ].map((proj, i) => (
            <div key={i} className={`p-6 rounded-2xl border ${proj.border} ${proj.bg}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-xl border ${proj.border} flex items-center justify-center`}>
                  <i className={`${proj.icon} ${proj.color} text-sm`} />
                </div>
                <div>
                  <h4 className="text-slate-100 font-semibold text-sm">{proj.title}</h4>
                  <p className="text-slate-500 text-xs">Freelance</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-3">{proj.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
