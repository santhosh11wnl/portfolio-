
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold font-heading mb-6">
            <span className="gradient-text">Santhosh</span>
          </div>
          <div className="flex gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/santhosh-katragadda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/santhosh11wnl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github />
            </a>
            <a
              href="mailto:rk7rd@umsystem.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email Me"
            >
              <Mail />
            </a>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>
              &copy; {currentYear} Rama Pavan Naga Sai Santhosh Katragadda. All rights reserved.
            </p>
            <p className="mt-2">
              AI/ML Engineer specializing in Large Language Models and Scalable AI Systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
