import { Button } from "@/components/ui/button";

export default function Hero() {
  const downloadResume = () => {
    // Create a link to the resume PDF and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Margam_Vishwateja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-violet-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Margam Vishwateja
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            MERN Stack Developer & Desktop Application Specialist
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Building real-time web and desktop applications with expertise in React.js, Node.js, Electron, and hardware-software integration for innovative technology solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('#contact')}
            className="bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 px-8 py-3 font-medium"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('#projects')}
            className="border-slate-600 hover:border-indigo-400 hover:bg-indigo-400/10 px-8 py-3 font-medium"
          >
            View Projects
          </Button>
          <Button 
            variant="outline"
            onClick={downloadResume}
            className="border-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 px-8 py-3 font-medium"
          >
            <i className="fas fa-download mr-2"></i>Resume
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400">2+</div>
            <div className="text-sm text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-400">5+</div>
            <div className="text-sm text-slate-400">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">15+</div>
            <div className="text-sm text-slate-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-sm text-slate-400">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-slate-400 text-xl"></i>
      </div>
    </section>
  );
}
