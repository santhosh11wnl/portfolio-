import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center py-20 pt-32"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 animate-fade-in">
            <p className="text-primary font-medium mb-4">Hello, I'm</p>
            <h1 className="mb-4 font-bold">
              Rama Pavan Naga Sai Santhosh Katragadda
            </h1>
            <div className="h-1 w-20 bg-primary mb-6 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl mb-6">
              <span className="gradient-text">AI/ML Engineer</span> specializing in 
              <span className="highlight-text"> Large Language Models</span> and
              <span className="highlight-text"> Full Stack Development</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
              With 5 years of experience designing and delivering robust, user-centric 
              applications. Skilled in transforming complex requirements into high-performance 
              solutions and developing LLM & RAG based models. Committed to innovation and excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="/KRPNS Resume FT.docx" download>
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a 
                  href="https://www.linkedin.com/in/santhosh-katragadda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a 
                  href="https://github.com/santhosh11wnl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <a 
                  href="mailto:rk7rd@umsystem.edu" 
                  aria-label="Email Me"
                >
                  <Mail />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-primary/20 to-purple-400/20 flex items-center justify-center">
                <img
                  src="/me.jpeg"
                  alt="Rama Pavan Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card shadow-lg rounded-lg p-4 border border-border">
                <div className="text-sm font-medium text-muted-foreground">Current Position</div>
                <div className="font-semibold">AI/ML Engineer @ AT&T</div> 
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown size={28} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
