import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Container, GitBranch, Target } from "lucide-react";

const steps = [
  {
    icon: Cloud,
    title: "AWS Fundamentals",
    desc: "Exploring EC2 instances, S3 storage, IAM policies, and core cloud architecture patterns.",
    status: "In Progress",
  },
  {
    icon: Container,
    title: "Docker & Containers",
    desc: "Learning containerization — building images, managing containers, and multi-service setups with Docker Compose.",
    status: "In Progress",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "Setting up automated build, test, and deployment workflows using GitHub Actions and Jenkins.",
    status: "Starting",
  },
  {
    icon: Target,
    title: "Goal: Backend + DevOps",
    desc: "Combining backend expertise with infrastructure skills to build and deploy production systems end-to-end.",
    status: "Vision",
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
        <p className="font-mono text-primary text-sm mb-2">05. DevOps Journey</p>
        <h2 className="section-title">
          Cloud & <span className="gradient-text-accent">DevOps</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          My roadmap from backend developer to full-stack DevOps engineer — actively building skills in cloud infrastructure and automation.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="glass-card p-6 relative overflow-hidden group hover:border-accent/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * i }}
          >
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-mono rounded-bl-lg bg-accent/10 text-accent border-b border-l border-accent/20">
              {step.status}
            </div>
            <step.icon size={32} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-mono font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevOpsSection;
