// Simple FAQ serverless function for portfolio chatbot
// POST { message: string }
// Returns { ok: true, text: string }

const FAQ_ENTRIES: Array<{ question: string; answer: string; keywords: string[] }> = [
  {
    question: 'How can I contact you?',
    answer: 'You can reach me via the contact form on this site or email me at jyotiraditya12@hotmail.com.',
    keywords: ['contact', 'email', 'reach', 'hire'],
  },
  {
    question: 'What is your experience?',
    answer: 'I have experience building full-stack web applications, working with REST and GraphQL APIs, and integrating third-party services.',
    keywords: ['experience', 'years', 'background'],
    },
    {
    "question": "Tell me about yourself",
    "answer": "I am a Solution and Software Architect with 14 years of experience in cloud, Salesforce, .NET, and healthcare systems. I design scalable architectures, lead teams, and deliver enterprise solutions with measurable impact.",
    "keywords": ["about", "yourself", "bio", "who", "are", "you"]
  },
  {
    "question": "What is your current role and experience?",
    "answer": "I am a Solution and Software Architect with 14 years of experience in designing and delivering enterprise solutions across healthcare and insurance. I lead architecture, integrations, and team mentoring.",
    "keywords": ["role", "experience", "years", "position", "current"]
  },
  {
    "question": "Which Salesforce skills do you specialize in?",
    "answer": "I specialize in Apex, Lightning Web Components (LWC), OmniStudio, Salesforce Flows, Health Cloud, Sales Cloud, and integrations using SOQL, SOSL, and APIs.",
    "keywords": ["salesforce", "apex", "lwc", "omnistudio", "flows", "health cloud"]
  },
  {
    "question": "Which cloud platforms do you work with?",
    "answer": "I work with AWS and Azure using services like Lambda, Elastic Beanstalk, App Service, Logic Apps, and cloud-native architecture best practices.",
    "keywords": ["cloud", "aws", "azure", "infrastructure", "devops"]
  },
  {
    "question": "Tell me about your notable projects",
    "answer": "My projects include Medinea Member 360, Health Cloud migration from .NET microservices, GPRA SOR III reporting platform, and an MDM migration for sports medicine.",
    "keywords": ["projects", "case study", "medinea", "gpra", "mdm", "healthcare"]
  },
  {
    "question": "What impact have your projects delivered?",
    "answer": "My projects drove a 35 percent reduction in call center volume, 40 percent faster claims resolution, 25 percent fewer processing errors, and successful migration of over 5 million records.",
    "keywords": ["impact", "metrics", "results", "outcomes", "benefits"]
  },
  {
    "question": "Do you handle integrations and APIs?",
    "answer": "Yes. I design REST and SOAP APIs, MuleSoft integrations, and real-time FHIR or HL7 data flows for healthcare ecosystems.",
    "keywords": ["integrations", "api", "rest", "soap", "mulesoft", "fhir", "hl7"]
  },
  {
    "question": "Do you lead and mentor engineering teams?",
    "answer": "Yes. I lead cross-functional teams, coach developers, run design reviews, improve code quality, and guide architecture decisions.",
    "keywords": ["leadership", "mentor", "team", "manage", "lead"]
  },
  {
    "question": "What programming languages do you use?",
    "answer": "I work with C#, .NET Core, JavaScript, React, Node.js, and Salesforce technologies like Apex and LWC.",
    "keywords": ["languages", "c#", ".net", "react", "javascript", "node"]
  },
  {
    "question": "What certifications do you have?",
    "answer": "I hold AWS Solutions Architect Associate, Salesforce Platform Developer I, and multiple technical certifications and university qualifications.",
    "keywords": ["certifications", "aws", "salesforce", "credentials"]
  },
  {
    "question": "Where can I see your code?",
    "answer": "Visit my GitHub for repositories, sample projects, utilities, and architecture demos.",
    "keywords": ["github", "code", "repositories", "projects", "demo"]
  },
  {
    "question": "Where can I see your professional background?",
    "answer": "My LinkedIn profile includes my complete work history, achievements, and endorsements.",
    "keywords": ["linkedin", "profile", "recommendations", "endorsements"]
  },
  {
    "question": "Are you open to new opportunities?",
    "answer": "Yes. I consider senior engineering, architect, and leadership roles and consulting projects aligned with cloud, CRM, and healthcare.",
    "keywords": ["open", "hire", "consulting", "opportunity", "available"]
  },
  {
    "question": "Do you work remotely or relocate?",
    "answer": "I am open to remote and hybrid roles. Relocation depends on role, location, and package.",
    "keywords": ["remote", "relocate", "onsite", "hybrid", "work"]
  },
  {
    "question": "What is your availability or notice period?",
    "answer": "It depends on ongoing commitments. Share your timeline and I will confirm my availability.",
    "keywords": ["availability", "notice", "start", "timeline"]
  },
  {
    "question": "Can you provide architecture diagrams?",
    "answer": "Yes. I provide diagrams, solution docs, integration flows, and design rationale on request.",
    "keywords": ["architecture", "diagram", "design", "system"]
  },
  {
    "question": "How do you handle compliance and security?",
    "answer": "I design HIPAA-compliant systems, use encryption, follow least privilege principles, and apply audit controls.",
    "keywords": ["hipaa", "compliance", "security", "shield", "encryption"]
  },
  {
    "question": "Do you help with Salesforce data migrations?",
    "answer": "Yes. I design ETL processes, mapping, deduplication, and large-scale record migrations with high integrity.",
    "keywords": ["migration", "data migration", "etl", "records", "integrity"]
  },
  {
    "question": "Do you provide references?",
    "answer": "Yes. References are available on request depending on client approvals.",
    "keywords": ["references", "client", "contacts"]
  },
  {
    "question": "What is your education background?",
    "answer": "I hold a Master’s in Computer Science from Liverpool John Moores University and a B.Tech in Information Technology.",
    "keywords": ["education", "degree", "ms", "btech", "university"]
  },
  {
    "question": "Which domains do you focus on?",
    "answer": "I focus on healthcare, insurance, CRM modernization, patient and member experience, and claims systems.",
    "keywords": ["domain", "healthcare", "insurance", "crm", "claims"]
  },
  {
    "question": "How do you enable teams?",
    "answer": "I run design sessions, code reviews, technical workshops, and hands-on mentoring to lift delivery quality.",
    "keywords": ["mentorship", "coaching", "training", "workshops"]
  },
  {
    "question": "How can I contact you?",
    "answer": "Use the contact form or email me at jyotiraditya12@hotmail.com. You can also message me on LinkedIn.",
    "keywords": ["contact", "email", "reach", "connect", "linkedin"]
  }
  
];

function score(message: string, entry: { question: string; answer: string; keywords: string[] }) {
  const text = message.toLowerCase();
  let score = 0;
  // keyword matches
  for (const k of entry.keywords) {
    if (text.includes(k)) score += 2;
  }
  // question words match
  const qWords = entry.question.toLowerCase().split(/\W+/).filter(Boolean);
  for (const w of qWords) if (text.includes(w)) score += 1;
  return score;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'Missing `message` in request body' });

  // Find best match
  let best = null as null | { entry: typeof FAQ_ENTRIES[number]; score: number };
  for (const e of FAQ_ENTRIES) {
    const s = score(message, e);
    if (!best || s > best.score) best = { entry: e, score: s };
  }

  // Add 1 second delay for a more natural response feel
  await new Promise(resolve => setTimeout(resolve, 1500));

  if (best && best.score > 0) {
    return res.status(200).json({ ok: true, text: best.entry.answer, matched: best.entry.question });
  }

  // No good match — fall back to a generic reply
  const fallback = "Sorry — I don't have an exact answer for that. You can try asking about my projects, experience, or contact details.";
  return res.status(200).json({ ok: true, text: fallback });
}
