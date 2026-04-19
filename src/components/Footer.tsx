import { Github, Linkedin, Mail } from "lucide-react";
import { config } from "@/config";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        {config.copyright}
      </p>
      <div className="flex gap-4">
        <a 
          href={config.social.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-primary transition-colors" 
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
        <a 
          href={config.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-muted-foreground hover:text-primary transition-colors" 
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a 
          href={config.social.email} 
          className="text-muted-foreground hover:text-primary transition-colors" 
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
