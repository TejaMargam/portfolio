import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw4U6GCo-uCY9sFEUEQmxpEWCxIftnCJkcKazF_N4DBbXIRUy3ZaAdfpbfpT_GIGbln/exec";

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",

        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const downloadResume = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Margam_Vishwateja_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500/60 focus:bg-slate-800 transition-all text-sm";

  const contactItems = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "vishwamargam@gmail.com",
      href: "mailto:vishwamargam@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: "+91 8328401939",
      href: "tel:+918328401939",
      color: "text-emerald-400",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      value: "vishwa-margam-1b0479213",
      href: "https://www.linkedin.com/in/vishwa-margam-1b0479213",
      color: "text-blue-300",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Location",
      value: "Hyderabad, India",
      href: undefined,
      color: "text-violet-400",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#060e1e] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef as any}
          className={`mb-16 reveal-item ${headerVisible ? "revealed" : ""}`}
        >
          <p className="section-label mb-3">Let's connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl">
            Ready to collaborate on innovative projects or discuss opportunities
            in full-stack development, IoT platforms, and desktop applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <div
            ref={leftRef as any}
            className={`lg:col-span-2 space-y-4 reveal-item ${leftVisible ? "revealed" : ""}`}
          >
            {contactItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-slate-700/60 hover:translate-x-1 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center shrink-0">
                  <i className={`${item.icon} ${item.color} text-sm`} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-medium mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="text-slate-200 text-sm hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-2 space-y-3">
              <button
                onClick={downloadResume}
                className="w-full py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors hover:-translate-y-0.5 duration-200"
              >
                <i className="fas fa-download" />
                Download Resume
              </button>
              <a
                href="https://www.linkedin.com/in/vishwa-margam-1b0479213"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl border border-blue-500/30 bg-blue-500/8 text-blue-400 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-blue-500/15 transition-colors"
              >
                <i className="fab fa-linkedin" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right form */}
          <div
            ref={rightRef as any}
            className={`lg:col-span-3 reveal-item ${rightVisible ? "revealed" : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="p-8 rounded-3xl border border-slate-800/80 bg-slate-900/40">
              <h3 className="text-xl font-bold text-slate-100 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className={inputClass}
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className={inputClass}
                    required
                  />
                </div>
                <input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, subject: e.target.value }))
                  }
                  className={inputClass}
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  className={`${inputClass} resize-none`}
                  required
                />
                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
