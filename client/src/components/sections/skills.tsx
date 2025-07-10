import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fas fa-code",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
      skills: ["JavaScript", "TypeScript", "Python", "SQL", "Java"]
    },
    {
      title: "Frontend",
      icon: "fas fa-palette",
      color: "text-violet-400",
      bgColor: "bg-violet-500/20",
      skills: ["React.js", "Redux Toolkit", "Material-UI", "D3.js", "Chart.js", "HTML/CSS"]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSocket", "MQTT"]
    },
    {
      title: "Desktop Apps",
      icon: "fas fa-desktop",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      skills: ["Electron", "Electron Builder", "Electron Packager", "Asar"]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      color: "text-amber-400",
      bgColor: "bg-amber-500/20",
      skills: ["MySQL", "MongoDB", "SQLite"]
    },
    {
      title: "Tools & Utilities",
      icon: "fas fa-tools",
      color: "text-slate-400",
      bgColor: "bg-slate-600/20",
      skills: ["Webpack", "Git", "Postman", "Dotenv"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack with specialization in real-time systems and desktop applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-slate-700 skill-badge">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <i className={`${category.icon} ${category.color} text-2xl mr-3`}></i>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`${category.bgColor} ${category.color} px-3 py-1 rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
