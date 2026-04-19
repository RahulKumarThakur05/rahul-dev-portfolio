// Centralized configuration for the portfolio

export const config = {
  // Personal Information
  name: "Rahul Kumar Thakur",
  initials: "RKT",
  title: "Software Engineer | Java Backend Developer | DevOps Practitioner",
  email: "rahulku75564@gmail.com",
  phone: "+91 6207707617",
  location: "Kolkata, India",
  shortBio: "Software Engineer with 1+ year of experience independently owning and delivering enterprise-grade Java backend solutions.",
  
  // Hero Section
  hero: {
    tagline: "1+ year of building production-grade backend systems with 99.9% uptime · Specialized in microservices, API optimization & database performance tuning",
  },
  
  // Social Links
  social: {
    github: "https://github.com/RahulKumarThakur05",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-thakur-270050229/",
    email: "mailto:rahulku75564@gmail.com",
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
