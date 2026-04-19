import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, HeartPulse, GraduationCap, Globe, Volume2 } from "lucide-react";

const projects = [
  {
    icon: HeartPulse,
    title: "HMIS (Healthcare Management Information System)",
    desc: "Enterprise multi-tenant healthcare platform independently owned from architecture design to production deployment. Complete system for patient registration, appointment scheduling, billing, and reporting with role-based access control across multiple healthcare facilities.",
    highlights: [
      "Designed entire PostgreSQL schema using dbdiagram.io with normalization, indexing, and query optimization for multi-tenant architecture",
      "Implemented multi-tenant role-based authentication with Spring Security to protect sensitive patient data across facilities",
      "Engineered high-performance REST APIs enabling seamless integration with multiple frontend clients and external systems",
    ],
    tech: ["Java", "Spring Boot", "Spring Security", "REST APIs", "PostgreSQL", "Multi-tenant", "dbdiagram.io"],
    live: null,
  },
  {
    icon: GraduationCap,
    title: "LIMS (Laboratory Information Management System) — In Progress",
    desc: "Multi-tenant laboratory management platform currently under development. Streamlining lab operations with test management, sample tracking, result reporting, quality control workflows, and automated report generation for multiple laboratory facilities.",
    highlights: [
      "Building multi-tenant architecture supporting multiple laboratories with isolated data and role-based access control",
      "Implementing comprehensive test catalog management, sample tracking, and automated result processing workflows",
      "Developing quality control modules, analytical dashboards, and regulatory compliance reporting features",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "Redis", "MySQL", "Multi-tenant", "Quality Control"],
    live: null,
  },
  {
    icon: GraduationCap,
    title: "School Management SaaS (Microservices)",
    desc: "Multi-tenant SaaS platform independently architected and deployed on AWS. Built core modules including Course, Class & Section, Student/Faculty Records, Library, Attendance, and Fees Management with role-based access control.",
    highlights: [
      "Designed MySQL and MongoDB schemas using dbdiagram.io with indexing strategies and Redis caching",
      "Implemented RBAC for Admin, Faculty, Student, Accountant, and Librarian roles with Spring Security and JWT",
      "Configured AWS infrastructure for scalability, availability, and secure access",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "MongoDB", "JWT", "Redis", "AWS", "Microservices"],
    live: null,
  },
  // {
  //   icon: Globe,
  //   title: "Tourism Management System",
  //   desc: "Full-featured tourism platform with destination recommendations based on user preferences, trip planning, reviews, and interactive guides for real-world famous locations. Built complete backend and frontend with modern Java web technologies.",
  //   highlights: [
  //     "Implemented intelligent destination recommendation engine based on user preferences and travel history",
  //     "Built comprehensive trip planning system with itinerary management and booking capabilities",
  //     "Developed user review system and interactive guides for famous tourist locations worldwide",
  //   ],
  //   tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "REST API"],
  //   github: "#",
  //   live: null,
  // },
  {
    icon: Volume2,
    title: "Text-to-Speech Converter",
    desc: "Interactive web application that converts uploaded text files into speech audio. Users can upload text documents and listen to them being read aloud with configurable speech settings and multiple voice options.",
    highlights: [
      "Built file upload system supporting multiple text formats with real-time text extraction and processing",
      "Integrated speech synthesis engine with configurable voice, pitch, speed, and language settings",
      "Developed audio playback controls with pause, resume, and stop functionality for seamless user experience",
    ],
    tech: ["Java", "Spring Boot", "JavaScript", "HTML5", "CSS3", "Web Speech API", "File Processing"],
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
        <p className="font-mono text-primary text-sm mb-2">Projects</p>
        <h2 className="section-title">
          Featured <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Enterprise-grade systems I've independently built — from architecture design to production deployment, owning the full lifecycle end-to-end.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {projects?.map((proj, i) => (
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
                {/* <a href={proj.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a> */}
                {proj.live && (
                  <a href={proj?.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="font-mono font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {proj?.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {proj?.desc}
            </p>

            <ul className="space-y-2 mb-5">
              {proj?.highlights?.map((h, hi) => (
                <li key={hi} className="flex gap-2 text-xs text-secondary-foreground leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">▹</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-auto">
              {proj?.tech?.map((t) => (
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
