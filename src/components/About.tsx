import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const facts = [
  { icon: MapPin, label: "Location", value: "Austin, TX" },
  { icon: Briefcase, label: "Experience", value: "2+ Years" },
  { icon: GraduationCap, label: "Degree", value: "B.E. Computer Engineering" },
  { icon: Code2, label: "Focus", value: "Full Stack Development" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">01. About Me</p>
          <h2 className="section-title">
            Get to know <span className="text-gradient">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer with 2+ years of experience building and iterating
              user-facing features using React, TypeScript, Node.js, PHP and SQL.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have a proven track record in designing responsive interfaces and backend
              processes that boost performance and usability. I enjoy partnering with designers
              and cross-functional teams to support experimentation and optimize user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently passionate about AI-powered applications, building Shopify solutions,
              and creating tools that make developers' lives easier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {facts.map((fact, i) => (
              <div key={i} className="glass-card p-5 hover-lift">
                <fact.icon size={20} className="text-primary mb-3" />
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-foreground">{fact.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
