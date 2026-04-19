import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Java Backend Developer",
    company: "Current Organization",
    period: "2023 – Present",
    current: true,
    points: [
      "Lead backend development for HMIS/LMIS platforms handling 10,000+ daily transactions across healthcare and logistics operations",
      "Architected and built 50+ RESTful APIs with Spring Boot, consumed by web and mobile clients in production",
      "Implemented Redis caching layer that reduced API response times by 40% and cut database load significantly",
      "Designed normalized database schemas and optimized complex SQL queries, improving report generation speed by 3x",
      "Integrated Spring Security with JWT-based authentication and role-based access control for multi-tenant environments",
      "Participated in code reviews, mentored junior developers, and contributed to architecture decisions",
    ],
  },
  {
    title: "Java Developer (Junior)",
    company: "Previous Organization",
    period: "2022 – 2023",
    current: false,
    points: [
      "Built internal tools and CRUD APIs using Spring Boot and Hibernate, serving 500+ daily active users",
      "Developed automated data processing modules that replaced manual workflows, saving 15+ hours/week",
      "Collaborated in Agile sprints with cross-functional teams, consistently delivering features on schedule",
      "Wrote unit and integration tests with JUnit and Mockito, maintaining 80%+ code coverage",
      "Gained deep understanding of Java OOP, design patterns, and clean code principles",
    ],
  },
];

const metrics = [
  { value: "2+", label: "Years Experience" },
  { value: "50+", label: "APIs Built" },
  { value: "40%", label: "Latency Reduced" },
  { value: "10K+", label: "Daily Transactions" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-2">03. Experience</p>
        <h2 className="section-title">
          Work <span className="gradient-text">History</span>
        </h2>
      </motion.div>

      {/* Impact metrics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {metrics.map((m, i) => (
          <div key={i} className="glass-card p-4 text-center">
            <p className="text-2xl md:text-3xl font-bold font-mono gradient-text">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative pl-12 md:pl-20"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + 0.2 * i }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                exp.current ? "border-primary bg-primary/20" : "border-muted-foreground bg-secondary"
              }`}>
                <Briefcase size={10} className={exp.current ? "text-primary" : "text-muted-foreground"} />
              </div>

              <div className="glass-card p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-mono font-bold text-lg text-foreground">{exp.title}</h3>
                  {exp.current && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  {exp.company} · {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((p, pi) => (
                    <li key={pi} className="flex gap-3 text-sm text-secondary-foreground leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
