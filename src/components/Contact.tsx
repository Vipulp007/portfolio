import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:vipulp25703@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
  };

  const socials = [
    { icon: Mail, label: "vipulp25703@gmail.com", href: "mailto:vipulp25703@gmail.com" },
    { icon: Phone, label: "+1 (737) 301-7727", href: "tel:+17373017727" },
    { icon: Github, label: "github.com/Vipulp007", href: "https://github.com/Vipulp007" },
    { icon: Linkedin, label: "linkedin.com/in/vipul25703", href: "https://linkedin.com/in/vipul25703" },
  ];

  return (
    <section id="contact" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-primary text-sm mb-2">07. Contact</p>
          <h2 className="section-title">
            Let's build something <span className="text-gradient">great</span> together
          </h2>
          <p className="section-subtitle">
            I'm currently open to new opportunities. Whether you have a project or just want to chat, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 hover-lift block"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <s.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground hover:text-foreground transition-colors truncate">
                  {s.label}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
