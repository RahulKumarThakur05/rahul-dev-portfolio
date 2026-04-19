import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { config } from "@/config";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-mono text-primary text-sm mb-2">08. Contact</p>
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          I'm open to new opportunities, collaborations, or just a friendly conversation about backend systems, microservices architecture, and DevOps engineering.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors">
            <Mail className="text-primary shrink-0" size={22} />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a href={config.social.email} className="text-foreground font-medium text-sm hover:text-primary transition-colors">
                {config.email}
              </a>
            </div>
          </div>
                   <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors block">
            <Linkedin className="text-primary shrink-0" size={22} />
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="text-foreground font-medium text-sm">www.linkedin.com/in/rahul-kumar-thakur-270050229</p>
            </div>
          </a>
          <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors block">
            <Github className="text-primary shrink-0" size={22} />
            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <p className="text-foreground font-medium text-sm">www.github.com/RahulKumarThakur05</p>
            </div>
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            <Send size={16} />
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
