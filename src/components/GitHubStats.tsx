import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GitCommit, Star, GitFork, Code2, Activity, Trophy } from "lucide-react";

const stats = [
  { icon: GitCommit, label: "Total Commits", value: "800+" },
  { icon: Star, label: "Stars Earned", value: "25+" },
  { icon: GitFork, label: "Repositories", value: "30+" },
  { icon: Code2, label: "Languages Used", value: "5+" },
  { icon: Activity, label: "Contributions (2024)", value: "350+" },
  { icon: Trophy, label: "Longest Streak", value: "45 days" },
];

const GitHubStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container pt-0" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-primary text-sm mb-2">06. GitHub</p>
        <h2 className="section-title">
          Open Source <span className="gradient-text">Activity</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="glass-card p-5 text-center group hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.08 * i }}
          >
            <s.icon size={22} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-xl font-bold font-mono text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHubStats;
