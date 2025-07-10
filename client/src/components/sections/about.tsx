import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate developer with expertise in full-stack development and specialized experience in medical device standards and industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-indigo-400">Professional Summary</h3>
                <p className="text-slate-300 leading-relaxed">
                  MERN Stack Developer with proven expertise in building real-time web and desktop applications using React.js, Node.js, Electron, and MySQL. Specialized in end-to-end architecture, hardware-software integration, and secure licensing systems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-violet-400">Specializations</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center">
                    <i className="fas fa-check text-emerald-400 mr-3"></i>
                    Real-time systems with WebSocket & MQTT
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-emerald-400 mr-3"></i>
                    Desktop applications with Electron
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-emerald-400 mr-3"></i>
                    Medical device (AERB) standards compliance
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-emerald-400 mr-3"></i>
                    Hardware-software integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Telugu (Native)</span>
                  <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">English (Fluent)</span>
                  <span className="bg-slate-700 px-3 py-1 rounded-full text-sm">Hindi (Intermediate)</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-amber-400">Current Position</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-slate-300">
                    <i className="fas fa-building text-indigo-400 mr-3"></i>
                    <span>Noki Technologies Pvt Ltd</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <i className="fas fa-map-marker-alt text-violet-400 mr-3"></i>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <i className="fas fa-calendar text-cyan-400 mr-3"></i>
                    <span>February 2024 - Present</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Key Achievements</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <i className="fas fa-star text-amber-400 mr-3 mt-1"></i>
                    <span>Developed radiation monitoring tools with real-time sensor integration</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-amber-400 mr-3 mt-1"></i>
                    <span>Built secure licensing systems with RSA encryption</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-star text-amber-400 mr-3 mt-1"></i>
                    <span>Created plugin-based dashboards with isolated Redux states</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
