import { motion } from "framer-motion";
import { Mail, Youtube, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "nirdipsijapati@gmail.com",
      href: "mailto:nirdipsijapati@gmail.com",
      color: "primary",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
      value: "@nirdipspeaks",
      href: "https://youtube.com/@nirdipspeaks",
      color: "destructive",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Nirdip Sijapati",
      href: "https://linkedin.com/in/nirdip-sijapati-043a15391",
      color: "primary",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "@sijapatisankalp-ship-it",
      href: "https://github.com/sijapatisankalp-ship-it",
      color: "foreground",
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/10 to-background" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-cyan" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's collaborate on your next engineering or tech project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-display mb-2">
                  Your Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-display mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-display mb-2">
                  Your Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-display"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-display font-bold mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/50 transition-all group"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-${link.color}/10 flex items-center justify-center text-${link.color} group-hover:bg-${link.color}/20 transition-colors`}
                    >
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        {link.label}
                      </p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-display font-bold mb-4">
                📍 Location
              </h3>
              <p className="text-foreground/90">NPJ, Banke, Nepal</p>
              <p className="text-muted-foreground text-sm mt-2">
                IOE Purwanchal Campus
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
