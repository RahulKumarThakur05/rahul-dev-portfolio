// Centralized configuration for the portfolio

export const config = {
  // Personal Information
  name: "Rahul Kumar",
  initials: "RK",
  title: "Java Backend Developer & DevOps Enthusiast",
  email: "rahul.kumar@example.com",
  
  // Social Links
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "mailto:rahul.kumar@example.com",
  },
  
  // Resume
  resume: {
    downloadUrl: "/resume.pdf", // Place your resume PDF in public folder
  },
  
  // Copyright
  get copyright() {
    return `© ${new Date().getFullYear()} ${this.name}. Built with passion and modern technologies.`;
  },
};

export type Config = typeof config;
