import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Cloud, Zap, Shield, Layers } from "lucide-react";

const highlights = [
  { icon: Server, label: "End-to-End Ownership", desc: "Sole Developer Across All Projects" },
  { icon: Database, label: "Database Engineering", desc: "MySQL, PostgreSQL, MongoDB, Redis" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS, Docker, Kubernetes, CI/CD" },
  { icon: Zap, label: "Performance Tuning", desc: "40% Deployment Speed Improvement" },
  { icon: Shield, label: "API Security", desc: "JWT, OAuth2, Spring Security" },
  { icon: Layers, label: "System Reliability", desc: "99.9% Production Uptime" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
        <h2 className="section-title">
          Who I <span className="gradient-text">Am</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-10 mt-10">
        <motion.div
          className="md:col-span-3 space-y-5"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-secondary-foreground leading-relaxed">
            I'm a <span className="text-primary font-semibold">Software Engineer</span> specializing in <span className="text-primary font-semibold">Java Backend Development</span> with <span className="text-primary font-semibold">1+ year</span> of production experience. I've worked as a <span className="text-primary font-semibold">sole developer</span> across all projects — independently owning the full lifecycle from requirement analysis and architecture design to production deployment and maintenance.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            My expertise spans <span className="text-primary font-semibold">Spring Boot, microservices architecture, and database optimization</span>. I've designed RESTful APIs with Spring Security and OAuth2, implemented <span className="text-primary font-semibold">Redis caching and query indexing strategies</span> that improved deployment speed by 40%, and maintained <span className="text-primary font-semibold">99.9% system uptime</span> across enterprise healthcare (HMIS) and education (School Management SaaS) platforms.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            Beyond writing code, I take <span className="text-primary font-semibold">complete ownership</span> — from database schema modeling using dbdiagram.io, to API documentation with Postman, to CI/CD pipeline management and AWS deployment. I've independently designed system architectures, optimized N+1 query issues, added composite indexes, and integrated payment gateways like Razorpay.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            Currently expanding into <span className="text-accent font-semibold">AWS, Docker, Kubernetes, and advanced CI/CD automation</span> — with a clear goal to become a full-stack Backend + DevOps engineer who can architect, build, <em>and</em> deploy cloud-native systems at scale.
          </p>
        </motion.div>

        <motion.div
          className="md:col-span-2 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass-card p-5 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-colors group"
            >
              <h.icon size={28} className="text-primary group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-sm text-foreground">{h.label}</p>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
