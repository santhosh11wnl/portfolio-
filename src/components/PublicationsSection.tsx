import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: "Assessment and Integration of Emerging AI Chatbots for Tumor Signaling Pathway Curation",
      conference: "IEEE Conference (BIBM)",
      link: "https://www.computer.org/csdl/proceedings-article/bibm/2024/10822181/23onpGBssrm",
      type: "Research Paper & Poster Presentation",
      description: "Research highlighting the effective use of AI chatbots in bioinformatics, specifically for tumor signaling pathway curation.",
    },
    {
      title: "Multimodal Expression Recognition",
      conference: "Research Publication",
      link: "", // Removed specific link
      type: "Research Paper",
      description: "Paper on novel approaches to expression recognition using multimodal inputs, published with an impact score of 3.74.",
    },
  ];

  return (
    <section id="publications" className="section">
      <div className="container mx-auto">
        <h2 className="section-heading">Publications</h2>
        <div className="grid grid-cols-1 gap-6">
          {publications.map((publication, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <div className="bg-muted p-4 rounded-full">
                      <FileText className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                      <div className="text-muted-foreground">{publication.conference}</div>
                      <div className="hidden md:block text-muted-foreground">•</div>
                      <div className="text-primary font-medium">{publication.type}</div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {publication.description}
                    </p>
                    {publication.link && (
                      <Button variant="outline" size="sm" asChild>
                        <a 
                          href={publication.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Publication <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
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

export default PublicationsSection;
