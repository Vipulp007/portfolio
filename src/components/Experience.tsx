import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "ZealousWeb",
    location: "Ahmedabad, India",
    role: "Full Stack Developer",
    period: "Jan 2024 — Dec 2025",
    points: [
      "Built responsive admin interfaces for Shopify and Magento using React, JavaScript, HTML5 and CSS3, improving usability for non-technical teams.",
      "Designed custom Magento 2 modules for multistore environment, cutting manual admin tasks by 30%.",
      "Developed automation scripts with Node.js and TypeScript, reducing debugging time by 35% and testing cycles by 25%.",
    ],
    tech: ["React", "TypeScript", "Node.js", "Shopify", "Magento", "PHP"],
  },
  {
    company: "iTeam Technology",
    location: "Anand, India",
    role: "Laravel Developer",
    period: "Mar 2023 — Aug 2023",
    points: [
      "Built RESTful APIs and secure authentication workflows in a Laravel 8 web application.",
      "Designed relational database schemas for CRM and Event Management System.",
      "Collaborated via Git-based version control on feature development and deployments across multiple client projects.",
    ],
    tech: ["Laravel", "PHP", "SQL", "REST APIs", "Git"],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      className="relative pl-12 md:pl-16"
    >
      {/* Dot */}
      <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

      <div className="glass-card p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="text-primary font-mono text-sm">
              {exp.company} · {exp.location}
            </p>
          </div>
          <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2 mb-4">
          {exp.points.map((point, j) => (
            <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
              <span className="text-primary mt-1 flex-shrink-0">▹</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-mono">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.8"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative" ref={sectionRef}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">04. Experience</p>
          <h2 className="section-title">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </motion.div>

        <div className="mt-12 relative" ref={timelineRef}>
          {/* Static background line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-4 md:left-6 top-0 w-px bg-primary origin-top"
            style={{
              scaleY,
              height: "100%",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
