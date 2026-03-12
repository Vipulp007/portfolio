import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React", "Remix", "Shopify Polaris", "HTML5", "CSS3", "jQuery", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "PHP", "Laravel", "SQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
  },
  {
    title: "AI & LLM",
    skills: ["LangGraph", "Large Language Models", "Prompt Engineering", "AI Agent Workflows"],
  },
  {
    title: "Testing & DevOps",
    skills: ["Playwright", "GitHub Actions", "Docker", "AWS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Stripe", "Razorpay"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">02. Skills</p>
          <h2 className="section-title">
            My <span className="text-gradient">toolkit</span>
          </h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass-card p-6 hover-lift group"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {skill}
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

export default Skills;
