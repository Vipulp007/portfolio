import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "JobScout AI",
    description:
      "AI-powered job discovery platform with automated job searches, reducing manual job hunting effort by 60%. Features AI agent workflows for crawling and analyzing job postings with 90% extraction accuracy.",
    tech: ["React", "Node.js", "LangGraph", "AI Agents"],
    highlights: ["60% less manual effort", "90% extraction accuracy", "Resume matching engine"],
    github: "https://github.com/Vipulp007",
  },
  {
    title: "AI Meta Content Generator",
    description:
      "Shopify app using React, GraphQL, and Shopify Polaris for AI-powered meta title and description generation, reducing SEO content creation time by 50%.",
    tech: ["React", "GraphQL", "Shopify Polaris", "AI"],
    highlights: ["50% faster SEO content", "Interactive product grid", "30% faster navigation"],
    github: "https://github.com/Vipulp007",
  },
  {
    title: "Job Management System",
    description:
      "Full stack MERN job tracking system with secure RESTful APIs, authentication, and data visualization for application analytics.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    highlights: ["40% better tracking", "Data visualization", "Secure auth"],
    github: "https://github.com/Vipulp007",
  },
  {
    title: "Multi-Location Delivery System",
    description:
      "Custom multi-address Shopify checkout flow enabling customers to ship to multiple locations in a single journey with real-time GraphQL discount handling.",
    tech: ["PHP", "GraphQL", "Liquid", "JavaScript"],
    highlights: ["40% more flexible checkout", "35% fewer errors", "30% better fulfillment"],
    github: "https://github.com/Vipulp007",
  },
  {
    title: "Custom Quotation Management",
    description:
      "Private Shopify app for product quote requests with automated approval engine issuing cash/voucher rewards, boosting conversions by 20%.",
    tech: ["React", "PHP", "GraphQL", "Shopify"],
    highlights: ["40% faster quotes", "35% less processing", "20% more conversions"],
    github: "https://github.com/Vipulp007",
  },
  {
    title: "Automation Testing Suite",
    description:
      "Scalable Playwright framework for validating critical eCommerce flows including Stripe and Razorpay checkout, with detailed PDF reports and GitHub CI integration.",
    tech: ["TypeScript", "Playwright", "Node.js", "GitHub Actions"],
    highlights: ["50% more coverage", "30% fewer defects", "60% less manual testing"],
    github: "https://github.com/Vipulp007",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">03. Projects</p>
          <h2 className="section-title">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="section-subtitle">A selection of projects I'm proud of</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass-card p-6 hover-lift group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-2"
                >
                  <Github size={18} />
                </a>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {project.highlights.map((h) => (
                  <span key={h} className="text-xs text-muted-foreground flex items-center gap-1">
                    <ArrowUpRight size={12} className="text-primary" />
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
