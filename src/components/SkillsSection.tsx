import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  learning?: boolean;
}

const categories: { title: string; color: string; badge?: string; skills: Skill[] }[] = [
  {
    title: "Backend",
    color: "from-primary to-primary",
    skills: [
      { name: "Java (Core + Advanced)", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Hibernate / JPA", level: 80 },
      { name: "Spring Security / JWT", level: 70 },
      { name: "Microservices Architecture", level: 65 },
    ],
  },
  {
    title: "Database & Caching",
    color: "from-primary to-primary",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 60 },
      { name: "Redis", level: 65 },
      { name: "Query Optimization", level: 75 },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "from-primary to-primary",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Maven / Gradle", level: 80 },
      { name: "Postman / Swagger", level: 85 },
      { name: "IntelliJ IDEA", level: 90 },
      { name: "Linux / Bash", level: 55 },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "from-accent to-accent",
    badge: "Learning",
    skills: [
      { name: "AWS (EC2, S3, IAM)", level: 40, learning: true },
      { name: "Docker", level: 40, learning: true },
      { name: "CI/CD (GitHub Actions)", level: 35, learning: true },
      { name: "Nginx / Reverse Proxy", level: 30, learning: true },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-2">02. Skills</p>
        <h2 className="section-title">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Two years of hands-on experience across the Java ecosystem, databases, and developer tooling — now expanding into cloud & DevOps.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="glass-card p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * ci }}
          >
            <h3 className="font-mono font-semibold text-foreground mb-5 text-lg flex items-center gap-2">
              {cat.title}
              {cat.badge && (
                <span className="text-xs px-2 py-0.5 rounded-full border border-accent/40 text-accent font-normal">
                  {cat.badge}
                </span>
              )}
            </h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-secondary-foreground font-medium flex items-center gap-2">
                      {skill.name}
                      {skill.learning && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                      )}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: 0.12 * si + 0.15 * ci }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
