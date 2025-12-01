import type { Experience, Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Jyotiraditya Dhalmahapatra",
  shortName: "JD",
  title: "Senior Technical Architect",
  tagline: "Unlocking Business Potential with Cloud & AI | Building Intelligent Agents",
  experienceYears: 14,
  location: "Global / Remote",
  email: "contact@example.com",
  github: "https://github.com/jdhalmahapatra",
  linkedin: "https://linkedin.com/in/jdhalmahapatra",
  summary: `Senior Technical Architect and LJMU Alumni (MS in CS) with 14+ years of expertise. I specialize in unlocking business potential through Cloud, Agentic AI, and Low-Code/No-Code solutions. A Microsoft & Salesforce Certified professional dedicated to designing intelligent, scalable distributed systems and driving digital transformation.`
};

export const SKILLS: SkillCategory[] = [
  {
    category: "AI & Intelligent Agents",
    skills: ["Agentic AI", "LLM Integration", "RAG Pipelines", "Gemini/OpenAI API", "AI Agents", "Predictive Analytics"]
  },
  {
    category: "Enterprise Architecture",
    skills: ["Solution Architecture", "Microservices", "Event-Driven Architecture", "Domain-Driven Design", "Cloud Native Strategy"]
  },
  {
    category: "Salesforce & Low-Code",
    skills: ["Salesforce Clouds", "Apex & LWC", "Power Platform", "Low-Code/No-Code Strategy", "CRM Integration", "Business Automation"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["Azure", "AWS", "Google Cloud", "Kubernetes", "CI/CD Pipelines", "Terraform", "Docker"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Technical Architect",
    company: "Enterprise Solutions",
    period: "2019 - Present",
    description: "Leading architectural vision for intelligent cloud platforms and low-code transformations.",
    achievements: [
      "Architected enterprise-grade Agentic AI solutions reducing manual operational load by 40%.",
      "Led digital transformation initiatives using Salesforce and Low-Code platforms to accelerate time-to-market.",
      "Designed scalable microservices architecture on Azure/AWS for global clients."
    ]
  },
  {
    id: "exp-2",
    role: "Lead Solution Architect",
    company: "Tech Innovators",
    period: "2015 - 2019",
    description: "Spearheaded cloud migration and CRM modernization initiatives.",
    achievements: [
      "Implemented complex Salesforce integrations with legacy ERP systems.",
      "Established Center of Excellence (CoE) for Low-Code development standards.",
      "Optimized cloud infrastructure costs by 30% through serverless adoption."
    ]
  },
  {
    id: "exp-3",
    role: "Senior Software Engineer",
    company: "Global Systems Inc",
    period: "2012 - 2015",
    description: "Full-stack development for high-traffic financial applications.",
    achievements: [
      "Developed secure fintech payment gateways compliant with PCI-DSS standards.",
      "Led the mobile-first redesign of the flagship customer portal.",
      "Created internal tools for automated testing and monitoring."
    ]
  },
  {
    id: "exp-4",
    role: "Software Developer",
    company: "StartUp Hub",
    period: "2010 - 2012",
    description: "Early core team member building SaaS products.",
    achievements: [
      "Built the MVP for a project management SaaS that scaled to 10k users.",
      "Implemented real-time collaboration features using WebSockets."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Intelligent Agentic AI Platform",
    description: "A comprehensive platform for orchestrating autonomous AI agents to handle complex business workflows using Gemini and LangChain.",
    tags: ["Agentic AI", "Python", "React", "Vector DB"],
    featured: true,
    github: "https://github.com/jdhalmahapatra",
  },
  {
    id: "proj-2",
    title: "Salesforce Enterprise Transformation",
    description: "Large-scale Salesforce implementation featuring complex LWC components and seamless integration with external microservices.",
    tags: ["Salesforce", "Apex", "LWC", "Azure Integration"],
    featured: true,
    github: "https://github.com/jdhalmahapatra",
  },
  {
    id: "proj-3",
    title: "Low-Code Business Automation",
    description: "Automated critical financial reporting processes using Power Platform, reducing manual effort by 95%.",
    tags: ["Power Automate", "Azure Functions", "Dataverse"],
    featured: false,
    github: "https://github.com/jdhalmahapatra",
  },
    {
    id: "proj-4",
    title: "Cloud-Native eCommerce Platform",
    description: "A headless commerce solution built with Next.js, GraphQL, and AWS Serverless.",
    tags: ["Next.js", "AWS", "GraphQL", "Terraform"],
    featured: false,
    github: "https://github.com/jdhalmahapatra",
  }
];