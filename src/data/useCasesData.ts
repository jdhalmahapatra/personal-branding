
export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  contentPath: string;
  author: string;
}

export const useCasesData: Post[] = [
  {
    id: 1,
    slug: "agentic-ai-system",
    title: "Building an Agentic AI System",
    excerpt: "An exploration into the architecture of agentic AI systems. We'll look at the core components, how they interact, and the challenges in building robust and reliable AI agents that can reason and act.",
    date: "2023-11-15",
    tags: ["AI", "Agents", "LangChain", "Python"],
    contentPath: "/content/blogs/agentic-ai-system.html",
    author: "Jyotiraditya Dhalmahapatra"
  },
  {
    id: 2,
    slug: "low-code-platforms",
    title: "The Power of Low-Code Platforms",
    excerpt: "Low-code platforms are changing the way we build applications. By abstracting away complex infrastructure and boilerplate code, they empower developers and non-developers alike to build and deploy applications faster than ever.",
    date: "2023-10-02",
    tags: ["Low-Code", "Salesforce", "Productivity", "Power Apps", "AppSheet", "Mendix"],
    contentPath: "/content/blogs/low-code-platforms.html",
    author: "Jyotiraditya Dhalmahapatra"
  },
  {
    id: 3,
    slug: "edge-deployment-cloudflare",
    title: "Deploying to the Edge with Cloudflare",
    excerpt: "Edge computing is bringing computation closer to the user, resulting in faster applications and new possibilities. Cloudflare Workers provides a powerful and easy-to-use platform for deploying serverless functions to the edge.",
    date: "2023-09-21",
    tags: ["Cloud", "DevOps", "JavaScript", "Serverless"],
    contentPath: "/content/blogs/edge-deployment-cloudflare.html",
    author: "Jyotiraditya Dhalmahapatra"
  }
];
