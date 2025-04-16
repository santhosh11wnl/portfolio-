
import React from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Missouri",
      location: "Columbia, MO, USA",
      period: "January 2023 - May 2024",
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Vignan's Lara Institute of Technology & Sciences",
      location: "Guntur, India",
      period: "August 2018 - June 2022",
    },
  ];

  return (
    <section id="education" className="section bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-heading">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-2 text-primary">
                  <GraduationCap className="mr-2" />
                  <h3 className="font-semibold text-xl">{edu.degree}</h3>
                </div>
                <div className="mb-2">
                  <div className="font-medium">{edu.institution}</div>
                  <div className="text-muted-foreground">{edu.location}</div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
