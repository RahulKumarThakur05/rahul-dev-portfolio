import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { config } from "@/config";

const titles = [
  "Java Backend Developer",
  "Spring Boot Engineer",
  "DevOps Enthusiast",
  "API Architect",
  "Cloud Learner",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 w-full px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Photo Section - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl scale-125 animate-pulse" />
            
            {/* Main photo container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated outer rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 via-transparent to-accent/30 blur-sm"
              />
              
              {/* Gradient border with glassmorphism */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
                <div className="w-full h-full rounded-full bg-background/80 backdrop-blur-sm" />
              </div>
              
              {/* Photo with subtle shadow */}
              <div className="absolute inset-1 rounded-full overflow-hidden shadow-[0_0_40px_rgba(var(--primary-rgb),0.3)]">
                <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src="/profile-photo.png"
                    alt={config.name}
                    className="w-full h-full object-cover object-[center_25%] hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>
              
              {/* Floating experience badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x rounded-full shadow-xl border-2 border-background"
              >
                <span className="text-xs md:text-sm font-bold text-primary-foreground whitespace-nowrap flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  1+ Years Experience
                </span>
              </motion.div>
            </div>
            
            {/* Decorative floating particles */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg"
            />
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-10 w-2 h-2 bg-primary rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-1/4 -left-10 w-2 h-2 bg-accent rounded-full"
            />
          </motion.div>

          {/* Content Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-primary text-base md:text-lg mb-4 tracking-wider"
            >
              {"Hello, World! I'm"}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono mb-6 tracking-tight"
            >
              Rahul{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Thakur
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <span className="font-mono text-xl md:text-2xl text-muted-foreground">
                {text}
                <span className="animate-blink text-primary">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed"
            >
              1+ year of building production-grade backend systems · Now evolving into cloud & DevOps engineering
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href={config.resume.downloadUrl}
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm border-2 border-border hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm border-2 border-border hover:border-accent/50 hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-xs md:text-sm font-mono text-foreground hover:bg-primary/10 transition-colors cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                Learning AWS & Docker
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 bg-accent/5 text-xs md:text-sm font-mono text-foreground hover:bg-accent/10 transition-colors cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
