
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-lg mb-6">
              I'm a passionate Machine Learning/AI Engineer with a focus on Large Language Models,
              Retrieval-Augmented Generation (RAG), and scalable AI systems. With 5 years of 
              professional experience, I specialize in designing and implementing robust,
              user-centric applications that solve complex real-world problems.
            </p>
            <p className="text-lg mb-6">
              My expertise spans across the entire ML lifecycle - from data preparation and feature engineering
              to model development, deployment, and monitoring in production environments. I'm particularly
              interested in the intersection of natural language processing, computer vision, and
              bioinformatics, having contributed to groundbreaking research in gene pathway analysis.
            </p>
            <p className="text-lg">
              Currently working at AT&T as an AI/ML Engineer, I develop sophisticated solutions 
              using cutting-edge tools and technologies including AWS SageMaker, Vertex AI, RAG pipelines, 
              vector databases, and large-scale distributed systems. I'm dedicated to creating AI systems
              that are not just technically excellent but also ethically responsible and user-focused.
            </p>
          </div>
          <div>
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground">Dallas, TX, USA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground">+1 (573) 514-4759</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">rk7rd@umsystem.edu</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-primary" />
                    <div>
                      <div className="font-medium">Experience</div>
                      <div className="text-muted-foreground">5+ Years</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-primary" />
                    <div>
                      <div className="font-medium">Education</div>
                      <div className="text-muted-foreground">Master of Computer Science</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
