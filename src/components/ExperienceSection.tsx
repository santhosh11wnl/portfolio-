import React from "react";
import { Building2, Calendar } from "lucide-react";

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "AI/Machine Learning Engineer",
      company: "AT&T",
      location: "Dallas, TX",
      period: "June 2024 - Present",
      achievements: [
        "Designed and implemented a scalable vector database leveraging NeonDB, Pinecone, Weaviate, and pgvector to enable high-performance semantic search and efficient similarity retrieval across diverse data sources.",
        "Developed a Retrieval-Augmented Generation (RAG) pipeline powered by DeepSeek-R1-Distill-Llama-70B, deployed on AWS SageMaker and Vertex AI, delivering scalable, context-aware AI responses through optimized inference workflows.",
        "Integrated OpenAI's GPT suite, including hands-on experience with GPT-4V and GPT-4o, to support advanced multimodal tasks such as visual reasoning, conversational agents, and document understanding within GenAI-powered pipelines.",
        "Integrated OLAMA, Kubernetes, and AWS SageMaker for containerized, scalable deployment, ensuring high availability and resource-efficient orchestration across hybrid cloud environments including GCP GKE.",
        "Implemented HNSW indexing and hybrid search (BM25 + dense embeddings) on AWS OpenSearch and Vertex AI Matching Engine to boost retrieval accuracy and search relevance in both structured and unstructured datasets.",
        "Built robust ETL pipelines for automated data ingestion, transformation, and embedding storage using AWS Glue, S3, DynamoDB, and GCP Cloud Functions with BigQuery and Cloud Storage, ensuring high data integrity and accelerated access.",
        "Enhanced LLM inference performance via query compression, response caching, and indexed retrieval, using AWS Inferentia, SageMaker Neo, Amazon Elastic Inference, and GCP TPU, reducing API latency and backend load by 40%.",
        "Deployed and fine-tuned LLMs on both AWS SageMaker and Vertex AI using distributed training with EC2, SageMaker Training Jobs, and Vertex AI Pipelines, accelerating model adaptation to domain-specific tasks.",
        "Implemented real-time observability with AWS CloudWatch, Prometheus, Grafana, and GCP Cloud Monitoring, enabling proactive system health checks, performance tracking, and query optimization.",
        "Advanced multi-model inference by integrating Gemini, GPT, DeepSeek, and Qwen APIs, enabling AI-driven decision-making, comparative response generation, and cross-model orchestration across AWS, GCP, and on-premises environments."
      ]
    },
    {
      title: "Gen AI/Machine Learning Engineer",
      company: "Life Sciences Center, University of Missouri",
      location: "Columbia, MO, USA",
      period: "August 2023 – May 2024",
      achievements: [
        "Created an innovative solution for automating gene pathway analysis from documents, leveraging the GPT-4 API to streamline extraction accuracy and enhance analytical efficiency.",
        "Designed and deployed a specialized machine learning model to accurately detect and extract gene pathway images from diverse sources.",
        "Seamlessly integrated GPT-4, Claude 3, Gemini APIs and advanced prompts for complex biological data analysis.",
        "Built and deployed an LLM-powered Retrieval-Augmented Generation (RAG) pipeline specifically for gene data integration.",
        "Used MMOCR, SAM, Google OCR, Detectron, and Siamese networks for enhanced entity extraction and image-based interpretation.",
        "Built a verification system to reduce error rates and maintain high-quality outputs in gene pathway research.",
        "Developed a hybrid analytical model combining Claude 3 Opus with a custom pipeline for precise data interpretation.",
        "Published a research paper and presented at AMIA, demonstrating impact on cancer research and bioinformatics."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Life Sciences Center, University of Missouri",
      location: "Columbia, MO, USA",
      period: "January 2023 – August 2023",
      achievements: [
        "Led a gene detection project integrating object detection and OCR models like SAM, Google OCR, and MMOCR.",
        "Designed a user-friendly UI for researchers, improving workflow accessibility and efficiency.",
        "Automated bioinformatics workflows for analyzing gene activation and inhibition pathways.",
        "Published research in an international journal on AI-powered bioinformatics.",
        "Engineered scalable web apps with React.js, Node.js, and MySQL for efficient data flow and performance.",
        "Implemented RESTful APIs, CI/CD pipelines for automated deployment and reliable integration.",
        "Developed modular React components for better code reuse and UI responsiveness.",
        "Built performant Node.js backend systems for scalable data handling.",
        "Executed full SDLC using Agile and DevOps practices with thorough testing and release cycles."
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Bank of Baroda",
      location: "India",
      period: "January 2020 – December 2022",
      achievements: [
        "Designed and deployed scalable ML pipelines for fraud detection, credit risk, and customer segmentation using Azure ML stack.",
        "Implemented predictive analytics using scikit-learn, TensorFlow, PyTorch and Azure Synapse, reducing fraud by 30%.",
        "Built ETL pipelines for large-scale data with Azure Data Factory, Data Lake, and SQL DW to ensure low-latency compliance processing.",
        "Enhanced feature engineering using Azure Logic and Function Apps, improving scoring accuracy by 40%.",
        "Created AI-driven financial recommendation systems using Azure Cognitive Services and MLflow.",
        "Improved credit risk models with LSTMs and time-series forecasting, boosting accuracy by 15%.",
        "Monitored ML models using Azure ML Ops, Monitor, and Application Insights for drift detection and SLA adherence.",
        "Applied big data analytics with Apache Spark on Databricks, cutting transaction query time by 30%.",
        "Built clustering and classification models to improve fraud detection and loan processing by 25%.",
        "Led Agile-based model iteration cycles, aligning AI delivery with financial business goals."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        <div className="grid grid-cols-1 gap-6">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold mb-2 md:mb-0">{experience.title}</h3>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{experience.period}</span>
                </div>
              </div>
              <div className="flex items-center mb-4 text-muted-foreground">
                <Building2 className="mr-2 h-4 w-4" />
                <span>
                  {experience.company} • {experience.location}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
