import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Container, GitBranch, Server, Settings, Shield } from "lucide-react";

const devopsSkills = [
  {
    icon: Container,
    title: "Docker & Containerization",
    desc: "Building containerized applications, writing Dockerfiles, managing multi-service architectures with Docker Compose for microservices deployment.",
    proficiency: "50%",
    status: "Intermediate",
  },
  {
    icon: Cloud,
    title: "AWS Cloud Services",
    desc: "Deploying and managing EC2 instances, S3 storage, IAM policies, and configuring cloud infrastructure for production applications.",
    proficiency: "55%",
    status: "Intermediate",
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    desc: "Building automated build, test, and deployment pipelines using Jenkins and GitHub Actions for continuous integration and delivery.",
    proficiency: "68%",
    status: "Intermediate",

  },
  {
    icon: Server,
    title: "Kubernetes & Orchestration",
    desc: "Container orchestration, managing deployments, scaling services, and implementing service mesh patterns for microservices architecture.",
    proficiency: "30%",
    status: "Intermediate",
  },
  {
    icon: Settings,
    title: "Linux & Shell Scripting",
    desc: "Server administration, automation with Bash scripting, log management, and infrastructure troubleshooting in Linux environments.",
    proficiency: "40%",
    status: "Intermediate",
  },
  {
    icon: Shield,
    title: "Version Control & Collaboration",
    desc: "Advanced Git workflows, GitHub/GitLab repository management, code review processes, and team collaboration using Postman and Swagger.",
    proficiency: "85%",
    status: "Advanced",
  },
];

const DevOpsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="devops" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-accent text-sm mb-2">06. DevOps & Cloud</p>
        <h2 className="section-title">
          Infrastructure & <span className="gradient-text-accent">Automation</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Production-ready DevOps skills — from containerization and orchestration to CI/CD pipelines and cloud deployment, complementing backend expertise.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {devopsSkills.map((skill, i) => (
          <motion.div
            key={i}
            className="glass-card p-6 relative overflow-hidden group hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 * i }}
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono rounded-bl-lg bg-accent/10 text-accent border-b border-l border-accent/20">
              {skill.status}
            </div>
            <skill.icon size={32} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-mono font-bold text-foreground mb-2">{skill.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{skill.desc}</p>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-accent">Proficiency</span>
              <span className="text-foreground font-bold">{skill.proficiency}</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden mt-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent"
                initial={{ width: 0 }}
                animate={inView ? { width: skill.proficiency } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.15 * i }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevOpsSection;
