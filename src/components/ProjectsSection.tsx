
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Search } from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Assessment and Integration of Emerging AI Chatbots for Tumor Signaling Pathway Curation",
      description: "Led a groundbreaking project focused on integrating advanced AI chatbots—GPT-4, Claude3 Pro, and Gemini—with a custom pipeline I developed, utilizing Large Language Models (LLMs) for the detailed analysis of gene interactions in tumor signaling pathway images.",
      achievements: [
        "Designed and implemented a hybrid model combining Claude3 Pro with a custom pipeline to improve biological data analysis accuracy",
        "Published research paper and presented poster at the AMIA conference",
        "Demonstrated proficiency in deploying advanced computational strategies for cancer research"
      ],
      icon: <Brain className="h-10 w-10 text-tech-ai" />,
    },
    {
      title: "Multimodal Expression Recognition",
      description: "Led the development of a multi-modal expression recognition project, focusing on detecting expressions through image-based and relation-based inputs including images, videos, and webcam feeds.",
      achievements: [
        "Implemented MTCNN model for face extraction from static images and video frames",
        "Used VGG-19 model for feature extraction and expression classification",
        "Developed relation-based component using text (Bag of Words) and audio (Librosa) for expression detection",
        "Published paper with impact score of 3.74"
      ],
      icon: <Search className="h-10 w-10 text-tech-ml" />,
    },
  ];

  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:mr-6 flex justify-center mb-4 md:mb-0">
                    <div className="bg-muted p-4 rounded-full">
                      {project.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <h4 className="font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
