import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { config } from "@/config";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
                Click to send email
              </a>
            </div>
          </div>
                   <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors block">
            <Linkedin className="text-primary shrink-0" size={22} />
            <div>
              <p className="text-sm text-muted-foreground">LinkedIn</p>
              <p className="text-foreground font-medium text-sm">View LinkedIn Profile</p>
            </div>
          </a>
          <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors block">
            <Github className="text-primary shrink-0" size={22} />
            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <p className="text-foreground font-medium text-sm">View GitHub Profile</p>
            </div>
          </a>
          <a href={config.social.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-colors block">
            <MessageCircle className="text-primary shrink-0" size={22} />
            <div>
              <p className="text-sm text-muted-foreground">WhatsApp</p>
              <p className="text-foreground font-medium text-sm">Chat on WhatsApp</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-6 space-y-6"
        >
          <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Prefer a direct conversation? Click below to send me an email or connect on WhatsApp!
          </p>
          
          <a
            href={`mailto:${config.email}?subject=Hello%20Rahul!&body=Hi%20Rahul,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ABest%20regards`}
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow-primary"
          >
            <Mail size={16} />
            Send Email
          </a>
          
          <a
            href={config.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium text-sm border-2 border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp Me
          </a>
          
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Prefer direct email?{" "}
              <a href={config.social.email} className="text-primary hover:underline">
                Click here to email
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
