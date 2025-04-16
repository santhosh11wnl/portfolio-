
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Cloud, Cpu, BarChart, Globe, Terminal, Wrench } from "lucide-react";

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5 text-tech-python" />,
      skills: ["Python", "Java", "C", "C++", "SQL"],
    },
    {
      name: "Web Technologies",
      icon: <Globe className="h-5 w-5 text-tech-react" />,
      skills: ["HTML", "CSS", "JavaScript", "Angular", "React"],
    },
    {
      name: "Frameworks & Libraries",
      icon: <Terminal className="h-5 w-5 text-tech-node" />,
      skills: ["Django", "FastAPI", "Node.js", "Express.js"],
    },
    {
      name: "Big Data Technologies",
      icon: <BarChart className="h-5 w-5 text-tech-ml" />,
      skills: ["Apache Spark", "Apache Hadoop", "Apache Airflow", "AWS Glue", "Azure Data Factory", "Databricks"],
    },
    {
      name: "Cloud & Containerization",
      icon: <Cloud className="h-5 w-5 text-tech-aws" />,
      skills: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Microsoft Azure", "Jenkins", "Kubernetes", "Docker", "Terraform", "CI/CD"],
    },
    {
      name: "Databases & Storage",
      icon: <Database className="h-5 w-5 text-tech-database" />,
      skills: ["MySQL", "PostgreSQL", "Oracle", "MongoDB (NoSQL)", "Snowflake", "Neon DB"],
    },
    {
      name: "AI & ML Frameworks",
      icon: <Cpu className="h-5 w-5 text-tech-ai" />,
      skills: ["TensorFlow", "PyTorch", "Hugging Face Transformers", "Keras", "Vertex AI", "AWS SageMaker", "RAG", "LLM's AND Lcm's"],
    },
    {
      name: "Tools & Skills",
      icon: <Wrench className="h-5 w-5 text-tech-ml" />,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Prompt Engineering (ChatGPT, Claude, Gemini)"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="ml-2 text-xl font-medium">{category.name}</h3>
                </div>
                <div className="flex flex-wrap">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
