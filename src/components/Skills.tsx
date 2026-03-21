import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "C", "C++"],
  },
  {
    title: "Frontend and Backend",
    skills: ["React", "HTML", "CSS", "jQuery", "Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases, Testing, and Cloud",
    skills: ["MySQL", "Playwright", "Docker", "AWS", "Git"],
  },
  {
    title: "AI and Automation",
    skills: ["LLM-based Workflows", "RAG", "LangGraph", "n8n"],
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
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.25 } 
              }}
              className="glass-card p-6 group cursor-default relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,hsl(172,66%,50%,0.08),transparent_70%)]" />
              
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary/20" />

              <h3 className="font-mono text-primary text-sm font-semibold mb-4 uppercase tracking-wider relative z-10">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
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
