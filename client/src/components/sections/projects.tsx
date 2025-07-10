import { Card, CardContent } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "HFCM Desktop App",
      icon: "fas fa-radiation-alt",
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
      description: "Advanced radiation monitoring tool with real-time sensor input, zone-based UI, and automatic calibration features. Integrated serial communication and MQTT for hardware telemetry.",
      technologies: [
        { name: "Electron", color: "bg-indigo-500/20 text-indigo-400" },
        { name: "React.js", color: "bg-violet-500/20 text-violet-400" },
        { name: "MQTT", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Serial Communication", color: "bg-emerald-500/20 text-emerald-400" }
      ],
      highlights: "Real-time monitoring • Hardware integration • Medical device standards"
    },
    {
      title: "Dynamic Chart Dashboard",
      icon: "fas fa-chart-line",
      iconColor: "text-violet-400",
      bgColor: "bg-violet-500/20",
      description: "Plugin-based dashboard with isolated Redux states per chart instance. Features dynamic D3 visualizations with mode switching and performance optimization.",
      technologies: [
        { name: "D3.js", color: "bg-indigo-500/20 text-indigo-400" },
        { name: "Redux Toolkit", color: "bg-violet-500/20 text-violet-400" },
        { name: "Chart.js", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "React.js", color: "bg-emerald-500/20 text-emerald-400" }
      ],
      highlights: "Modular architecture • Interactive visualizations • Performance tuned"
    },
    {
      title: "Secure Licensing System",
      icon: "fas fa-shield-alt",
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      description: "Machine-specific licensing implementation with RSA encryption and expiry validation. Features tamper-proof file storage in Electron-packaged resources.",
      technologies: [
        { name: "RSA Encryption", color: "bg-indigo-500/20 text-indigo-400" },
        { name: "Electron", color: "bg-violet-500/20 text-violet-400" },
        { name: "Node.js", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Security", color: "bg-emerald-500/20 text-emerald-400" }
      ],
      highlights: "Device-bound keys • Tamper-proof • Expiry validation"
    },
    {
      title: "MQTT & Serial Integration",
      icon: "fas fa-network-wired",
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      description: "Modular MQTT topic handlers for scalable device networks with multi-threaded logic for real-time serial communication and error recovery mechanisms.",
      technologies: [
        { name: "MQTT", color: "bg-indigo-500/20 text-indigo-400" },
        { name: "Serial Communication", color: "bg-violet-500/20 text-violet-400" },
        { name: "WebSocket", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Multithreading", color: "bg-emerald-500/20 text-emerald-400" }
      ],
      highlights: "Scalable networks • Error recovery • Real-time communication"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Showcase of key projects demonstrating expertise in real-time systems, desktop applications, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect border-slate-700 project-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${project.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <i className={`${project.icon} ${project.iconColor} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${tech.color} px-3 py-1 rounded-full text-sm`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="text-slate-400 text-sm">
                  <i className="fas fa-star text-amber-400 mr-2"></i>
                  {project.highlights}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Alarm Control & Messaging App - Full Width */}
          <Card className="glass-effect border-slate-700 project-card md:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-bell text-amber-400 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold">Alarm Control & Messaging App</h3>
              </div>
              <p className="text-slate-300 mb-6">
                Interactive UI for alarm control with dynamic icon updates and counter logic. Comprehensive alarm lifecycle management with backend state synchronization through MQTT/WebSocket events.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm">React.js</span>
                <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full text-sm">MQTT</span>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">WebSocket</span>
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">Real-time Events</span>
                <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">State Management</span>
              </div>
              <div className="text-slate-400 text-sm">
                <i className="fas fa-star text-amber-400 mr-2"></i>
                Interactive UI • Lifecycle management • Real-time synchronization • Dynamic updates
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
