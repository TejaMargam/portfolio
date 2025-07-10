import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Margam_Vishwateja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in MERN stack development and desktop applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-indigo-400">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:tejamargam.vi@gmail.com" className="flex items-center text-slate-300 hover:text-indigo-400 transition-colors">
                    <i className="fas fa-envelope text-indigo-400 mr-4 text-lg"></i>
                    <span>tejamargam.vi@gmail.com</span>
                  </a>
                  <a href="tel:+918328401939" className="flex items-center text-slate-300 hover:text-violet-400 transition-colors">
                    <i className="fas fa-phone text-violet-400 mr-4 text-lg"></i>
                    <span>+91 8328401939</span>
                  </a>
                  <a href="https://www.linkedin.com/in/vishwa-margam-1b0479213" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                    <i className="fab fa-linkedin text-cyan-400 mr-4 text-lg"></i>
                    <span>LinkedIn Profile</span>
                  </a>
                  <div className="flex items-center text-slate-300">
                    <i className="fas fa-map-marker-alt text-emerald-400 mr-4 text-lg"></i>
                    <span>Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-violet-400">Quick Actions</h3>
                <div className="space-y-3">
                  <Button 
                    onClick={downloadResume}
                    className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 font-medium"
                  >
                    <i className="fas fa-download mr-2"></i>Download Resume
                  </Button>
                  <a 
                    href="https://www.linkedin.com/in/vishwa-margam-1b0479213" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center border border-cyan-400 px-6 py-3 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 font-medium text-slate-100 hover:text-cyan-400"
                  >
                    <i className="fab fa-linkedin mr-2"></i>Connect on LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-slate-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-indigo-400"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-indigo-400"
                  required
                />
                <Input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-indigo-400"
                  required
                />
                <Textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-700 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-indigo-400 resize-none"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 font-medium"
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
