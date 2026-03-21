import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import projects from "@/projects/Data";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.25 } 
              }}
              className="glass-card p-6 group flex flex-col cursor-default relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,hsl(172,66%,50%,0.1),transparent_60%)]" />
              
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-primary/20" />

              <div className="flex items-start justify-between mb-3 relative z-10">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 relative z-10">
                {project.description}
              </p> */}

                <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1 relative z-10" dangerouslySetInnerHTML={{ __html: expandedIndex === i ? project.description : `${project.description.substring(0, 180)}...` }} />

                <button
                  onClick={() => toggleReadMore(i)}
                  className="text-primary text-xs font-mono hover:underline mb-4 w-fit"
                >
                  {expandedIndex === i ? "Read Less ↑" : "Read More →"}
                </button>

              <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-mono transition-colors duration-200 group-hover:bg-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 relative z-10">
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
