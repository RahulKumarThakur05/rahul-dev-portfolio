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
    whatsapp: "https://wa.me/916207707617?text=Hi%20Rahul!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.",
  },
  
  // Resume
  resume: {
    downloadUrl: "/rahul-java-backend-developer-cv.html", // Professional HTML resume with photo - downloads as "rahul-java-backend-developer-cv"
  },
  
  // Copyright
  get copyright() {
    return `© ${new Date().getFullYear()} ${this.name}. Built with passion and modern technologies.`;
  },
};

export type Config = typeof config;
