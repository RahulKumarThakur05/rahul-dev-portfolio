import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Cloud, Zap, Shield, Layers } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Architecture", desc: "Microservices & Monoliths" },
  { icon: Database, label: "Database Engineering", desc: "Schema Design & Optimization" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS, Docker, CI/CD" },
  { icon: Zap, label: "Performance Tuning", desc: "40%+ Latency Reduction" },
  { icon: Shield, label: "API Security", desc: "JWT, OAuth2, Spring Security" },
  { icon: Layers, label: "System Integration", desc: "REST, Messaging, Caching" },
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
            I'm a <span className="text-primary font-semibold">Java Backend Developer</span> with <span className="text-primary font-semibold">2 years</span> of production experience designing, building, and maintaining enterprise-grade systems. I've been a core contributor to <span className="text-primary font-semibold">HMIS and LMIS platforms</span> — mission-critical healthcare and logistics systems processing thousands of transactions daily.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            My expertise spans <span className="text-primary font-semibold">Spring Boot, Hibernate, and microservice architectures</span>. I've designed RESTful APIs consumed by multiple frontend clients, implemented <span className="text-primary font-semibold">Redis-based caching strategies</span> that cut response times by 40%, and built complex business logic handling real-time data flows, role-based access, and multi-tenant environments.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            Beyond writing code, I take ownership — from <span className="text-primary font-semibold">database schema design and query optimization</span> to API documentation and code reviews. I've mentored junior developers and actively participate in architecture decisions.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            Now I'm expanding into <span className="text-accent font-semibold">AWS, Docker, and CI/CD pipelines</span> — with a clear goal to become a full-stack Backend + DevOps engineer who can architect, build, <em>and</em> deploy cloud-native systems at scale.
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
