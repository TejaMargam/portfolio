import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building innovative solutions with focus on real-time systems, desktop applications, and hardware integration.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-violet-500 hidden md:block"></div>

          {/* Experience Item */}
          <div className="relative md:ml-12 mb-12 timeline-item">
            <Card className="glass-effect border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-indigo-400 mb-2">MERN Stack Developer</h3>
                    <h4 className="text-lg text-slate-300 mb-2">Noki Technologies Pvt Ltd</h4>
                    <p className="text-slate-400 flex items-center">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Hyderabad, India
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-indigo-500/20 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium">
                      February 2024 - Present
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-violet-400 mb-3">Key Responsibilities & Achievements:</h5>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Developed full-stack web and desktop applications using MERN stack and Electron</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Implemented real-time communication using WebSocket and MQTT for telemetry systems</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Built secure licensing system using RSA encryption, device-bound keys, and expiry validation</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Designed modular Redux architecture for multi-plugin dashboards with isolated state management</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Created interactive charts using D3.js and Chart.js with zoom, tooltip, and log scaling capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Developed UI/UX interfaces aligned with medical device (AERB) standards for compliance</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-emerald-400 mr-3 mt-1"></i>
                      <span>Interfaced with hardware over USB/Serial for nuclear safety and industrial monitoring tools</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Item */}
          <div className="relative md:ml-12 timeline-item">
            <Card className="glass-effect border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">Bachelor of Technology</h3>
                    <h4 className="text-lg text-slate-300 mb-2">Computer Science and Engineering</h4>
                    <p className="text-slate-400">University College of Engineering, Kakatiya University</p>
                    <p className="text-slate-400 flex items-center mt-1">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Kothagudem, Telangana
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                      August 2019 - June 2023
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
