import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Package, Globe, HeartPulse, ShieldCheck } from "lucide-react";

const projects = [
  {
    icon: Package,
    title: "Smart Raw Material Inventory System",
    desc: "Intelligent inventory platform with real-time stock monitoring, automated low-stock alerts, usage trend analytics, and procurement optimization — reducing material waste by 25%.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "Redis"],
    github: "#",
    live: null,
  },
  {
    icon: Globe,
    title: "Tourism Management System",
    desc: "Full-featured tourism platform with destination recommendations based on user preferences, trip planning, reviews, and interactive guides for real-world famous locations.",
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf"],
    github: "#",
    live: null,
  },
  {
    icon: HeartPulse,
    title: "HMIS / LMIS Platform",
    desc: "Enterprise-grade backend powering healthcare management and logistics — handling patient records, supply chain tracking, and real-time operational dashboards for 10K+ daily transactions.",
    tech: ["Java", "Spring Boot", "Redis", "MySQL", "Spring Security"],
    github: "#",
    live: null,
  },
  {
    icon: ShieldCheck,
    title: "Secure REST API Starter",
    desc: "Production-ready Spring Boot boilerplate with JWT authentication, role-based access control, global exception handling, Swagger docs, and standardized response patterns.",
    tech: ["Java", "Spring Boot", "JWT", "Swagger", "Maven"],
    github: "#",
    live: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-2">04. Projects</p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          A selection of systems I've built — from enterprise healthcare platforms to developer tooling.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="glass-card p-6 flex flex-col group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 * i }}
          >
            <div className="flex items-center justify-between mb-4">
              <proj.icon size={28} className="text-primary" />
              <div className="flex gap-3">
                <a href={proj.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                {proj.live && (
                  <a href={proj.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {proj.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {proj.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {proj.tech.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
