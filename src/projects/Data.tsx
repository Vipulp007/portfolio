type Projects = Array<{
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
}>;

const projects: Projects = [
  {
    title: "JobScout AI",
    description:
      `
      <p>
        JobScout AI is an intelligent job-matching and resume optimization platform designed to streamline the job search process using AI-driven insights. The system analyzes job descriptions and candidate resumes to generate highly relevant matches, helping users focus on opportunities with the highest success probability.
      </p>
      <p>
        Built using LLM-powered workflows, the platform extracts key requirements such as skills, experience, and keywords from job postings, and compares them against user profiles to produce a structured match score and gap analysis. It also provides AI-generated suggestions to improve resumes, ensuring better alignment with targeted roles.
      </p>

      <p>
        The application leverages a modular backend architecture with AI agents orchestrated via LangGraph, enabling scalable processing of multiple job inputs while maintaining consistency and reliability. On the frontend, an intuitive interface allows users to upload resumes, track matches, and visualize insights without requiring technical expertise.
      </p>
`,
    tech: ["React", "Node.js", "LangGraph", "AI Agents"],
    highlights: ["60% less manual effort", "90% extraction accuracy", "Resume matching engine"],
  },
  {
    title: "Custom Quotation Management",
    description:
      `<p>The Quotation Management System is a custom-built application designed to replace manual and fragmented quotation processes with a centralized, automated workflow. It enables customers to request product quotes through an intuitive interface while providing administrators with tools to review, validate, price, and approve quotes efficiently.</p>
      <p>The system integrates frontend and backend services to handle dynamic pricing, approval rules, and status tracking. By automating decision flows and reducing operational friction, it improves turnaround time, increases conversion from quote to order, and ensures consistency, scalability, and reliability across the entire quotation lifecycle.</p>`,
    tech: ["React", "Node.js", "GraphQL", "Shopify"],
    highlights: ["40% faster quotes", "35% less processing", "20% more conversions"],
  },
  {
    title: "AI Meta Content Generator",
    description:
      `<p>Developed an AI-powered SEO automation system to generate optimized meta titles and descriptions at scale, reducing manual SEO effort and improving content consistency.</p>
      <p>The application enabled users to select products or pages, trigger AI-generated SEO content, review outputs, and apply updates seamlessly. Implemented backend workflows to integrate LLM-based generation with validation and error handling, ensuring reliable and usable results. Built intuitive frontend interfaces to support non-technical users and collaborated with stakeholders to refine prompts and workflows, resulting in faster SEO content creation and improved operational efficiency</p>`,
    tech: ["React", "GraphQL", "Shopify Polaris", "AI"],
    highlights: ["50% faster SEO content", "Interactive admin interface", "30% faster navigation"],
  },
  {
    title: "Automation Testing Suite",
    description:
      `<p>The Automation Testing Suite for the eCommerce Store was designed to ensure reliability and stability across critical user journeys, including product browsing, subscriptions, and payment processing. The project focused on replacing manual regression testing with a scalable, automated end-to-end testing framework capable of running consistently across environments.</p>

      <p>The framework validated complex checkout flows, including subscription-based purchases and third-party payment integrations such as Stripe and Razorpay. It captured detailed execution data, including screenshots, logs, and video recordings, to make failures easy to diagnose. To improve visibility and reporting, the system generated comprehensive PDF test reports containing pass/fail metrics, error summaries, and execution evidence.</p>

      <p>The entire test suite was integrated into GitHub Workflows, enabling automated execution on code changes and scheduled runs. This ensured faster feedback for developers, reduced manual QA effort, and improved overall release confidence.</p>`,
    tech: ["TypeScript", "Playwright", "Node.js", "GitHub Actions"],
    highlights: ["50% more coverage", "30% fewer defects", "60% less manual testing"],
  },
  {
    title: "Multi-Location Delivery System",
    description:
      `<p>This project involved building a custom checkout experience that allowed customers to ship items to multiple delivery addresses in a single checkout, overcoming Shopify's default single-address limitation.</p>
      <p> The system captured delivery details at the product level, applied real-time discounts, and automatically generated separate orders per location to streamline fulfillment for the bakery.</p>`,
    tech: ["PHP", "GraphQL", "Liquid", "JavaScript"],
    highlights: ["40% more flexible checkout", "35% fewer errors", "30% better fulfillment"],
  },
];

export default projects;