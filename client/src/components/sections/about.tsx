import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

const highlights = [
  { icon: "fas fa-microchip", color: "text-blue-400", border: "border-blue-500/20", bg: "bg-blue-500/8", label: "IoT Platforms", desc: "MQTT, WebSockets, ESP32 OTA, real-time sensor pipelines" },
  { icon: "fas fa-desktop", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/8", label: "Desktop Apps", desc: "10+ Electron.js apps packaged as standalone executables" },
  { icon: "fas fa-mobile-alt", color: "text-violet-400", border: "border-violet-500/20", bg: "bg-violet-500/8", label: "Mobile Apps", desc: "6+ React Native apps for field instruments" },
  { icon: "fas fa-shield-alt", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/8", label: "Security", desc: "RSA licensing, JWT auth, RBAC across all platforms" },
];

function HighlightCard({ h, i }: { h: (typeof highlights)[number]; i: number }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(10);

  return (
    <div className="perspective-container">
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`tilt-card p-5 rounded-2xl border ${h.border} ${h.bg} cursor-default`}
        style={{ transitionDelay: `${i * 60}ms` }}
      >
        <div className="tilt-card-content">
          <div className={`icon-3d w-10 h-10 rounded-xl border ${h.border} flex items-center justify-center mb-3`}>
            <i className={`${h.icon} ${h.color} text-lg`} />
          </div>
          <h4 className="text-slate-100 font-semibold mb-1">{h.label}</h4>
          <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: bioRef, isVisible: bioVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { ref: eduRef, isVisible: eduVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-[#060e1e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef as any} className={`mb-16 reveal-item ${headerVisible ? "revealed" : ""}`}>
          <p className="section-label mb-3">Who I am</p>
          <h2 className="text-3d text-4xl md:text-5xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – bio */}
          <div ref={bioRef as any} className={`space-y-6 reveal-item ${bioVisible ? "revealed" : ""}`}>
            <p className="text-slate-300 text-lg leading-relaxed">
              Full Stack Developer with <span className="text-blue-400 font-semibold">2+ years</span> of experience building
              production-grade IoT monitoring platforms, desktop applications, and mobile apps across the MERN stack.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Delivered <span className="text-emerald-400 font-semibold">10+ cross-platform desktop apps</span> and <span className="text-violet-400 font-semibold">6+ mobile apps</span> for
              radioactivity measurement and sensor data visualization. Deep expertise in real-time data pipelines
              (MQTT, WebSockets), signal processing with Python, and RSA-based software licensing.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Experienced across the full development lifecycle — from embedded hardware integration
              to user-facing dashboards — with a strong focus on modular, maintainable architecture.
            </p>

            {/* Contact chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: "fas fa-envelope", label: "vishwamargam@gmail.com", href: "mailto:vishwamargam@gmail.com" },
                { icon: "fas fa-phone", label: "+91 8328401939", href: "tel:+918328401939" },
                { icon: "fas fa-map-marker-alt", label: "Hyderabad, India", href: undefined },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-all text-sm"
                >
                  <i className={`${c.icon} text-blue-400 text-xs`} />
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right – highlight cards */}
          <div ref={cardsRef as any} className={`grid grid-cols-1 sm:grid-cols-2 gap-4 reveal-item ${cardsVisible ? "revealed" : ""}`}>
            {highlights.map((h, i) => (
              <HighlightCard key={i} h={h} i={i} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div ref={eduRef as any} className={`mt-14 reveal-item ${eduVisible ? "revealed" : ""}`}>
          <div className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="icon-3d w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0">
              <i className="fas fa-graduation-cap text-violet-400 text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-slate-100 font-semibold">Bachelor of Technology – Computer Science & Engineering</p>
              <p className="text-slate-400 text-sm">Kakatiya University · Telangana, India</p>
            </div>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 border border-violet-500/20 text-violet-400 whitespace-nowrap">
              2019 – 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
