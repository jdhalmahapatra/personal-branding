
export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: string;
}

export const useCasesData: Post[] = [
  {
    id: 1,
    slug: "agentic-ai-system",
    title: "Building an Agentic AI System",
    excerpt: "An exploration into the architecture of agentic AI systems. We'll look at the core components, how they interact, and the challenges in building robust and reliable AI agents that can reason and act.",
    date: "2023-11-15",
    tags: ["AI", "Agents", "LangChain", "Python"],
    content: `
## The Rise of Agentic AI

Agentic AI represents a significant shift from traditional machine learning models. Instead of simply predicting or classifying, agentic systems can *act*. They can perform tasks, make decisions, and interact with their environment to achieve goals. This requires a more complex architecture that goes beyond a single model.

At the core of an agentic system is a reasoning loop, often powered by a Large Language Model (LLM). This loop typically involves a series of steps:

1.  **Observation**: The agent gathers information about its current state and environment.
2.  **Thought**: Based on the observation and its goals, the agent thinks about what to do next. This might involve breaking down a problem, weighing options, or formulating a plan.
3.  **Action**: The agent executes a chosen action. This could be calling an API, running a script, or generating a response.

This "ReAct" (Reason + Act) framework is a powerful paradigm for building agents. Frameworks like LangChain and LlamaIndex provide tools and abstractions to make building these systems easier. We utilized LangChain to orchestrate multiple tools, including a search API and a code interpreter, allowing the agent to dynamically decide which tool to use based on the user's query. The result was a flexible system that could answer questions, write code, and even perform simple data analysis tasks.
    `
  },
  {
    id: 2,
    slug: "low-code-platforms",
    title: "The Power of Low-Code Platforms",
    excerpt: "Low-code platforms are changing the way we build applications. By abstracting away complex infrastructure and boilerplate code, they empower developers and non-developers alike to build and deploy applications faster than ever.",
    date: "2023-10-02",
    tags: ["Low-Code", "Salesforce", "Productivity"],
    content: `
## Accelerating Development with Low-Code

The demand for new applications is outpacing the supply of developers. Low-code platforms have emerged as a solution to this problem, enabling "citizen developers" to build applications with minimal coding knowledge. But low-code is not just for non-technical users. Professional developers can also leverage these platforms to accelerate their workflows and focus on the unique business logic that delivers the most value.

Platforms like Salesforce and Microsoft Power Platform provide a rich set of pre-built components, connectors, and tools that handle much of the heavy lifting of application development. This includes things like:

-   **Data modeling and storage**: Visually create data models and relationships.
-   **User interface**: Drag-and-drop components to build responsive user interfaces.
-   **Automation**: Define business processes and workflows with visual tools.
-   **Integration**: Connect to hundreds of services with pre-built connectors.

In a recent project, we used Salesforce to build a complete customer relationship management (CRM) system for a small business in just a few weeks. By leveraging the platform's standard objects and building custom components with the Lightning Web Components framework, we were able to deliver a solution that was tailored to the client's needs, on time and under budget. The speed of development and the ability to rapidly iterate based on user feedback was a game-changer.
    `
  },
  {
    id: 3,
    slug: "edge-deployment-cloudflare",
    title: "Deploying to the Edge with Cloudflare",
    excerpt: "Edge computing is bringing computation closer to the user, resulting in faster applications and new possibilities. Cloudflare Workers provides a powerful and easy-to-use platform for deploying serverless functions to the edge.",
    date: "2023-09-21",
    tags: ["Cloud", "DevOps", "JavaScript", "Serverless"],
    content: `
## The Future is on the Edge

Traditionally, web applications have been deployed to servers in a specific region. This means that users who are far away from that region will experience higher latency. Edge computing solves this problem by deploying code to a global network of data centers, so that it's always close to the user.

Cloudflare Workers is a serverless platform that allows you to run JavaScript, TypeScript, and WebAssembly on Cloudflare's global network. This has a number of advantages:

-   **Performance**: Code runs closer to the user, reducing latency.
-   **Scalability**: The network automatically scales to handle traffic.
-   **Cost**: You only pay for what you use.

We recently used Cloudflare Workers to build a real-time analytics dashboard. The application required low-latency data ingestion and processing from users all over the world. By deploying our data processing logic as a Cloudflare Worker, we were able to achieve sub-second latency for 99% of our users. The Worker receives data from the client, performs some initial processing and aggregation, and then forwards it to a central database for storage and further analysis. This architecture proved to be highly scalable and cost-effective. The developer experience was also excellent, with a simple CLI and a generous free tier for getting started.
    `
  }
];
