import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">05. Education</p>
          <h2 className="section-title">
            Academic <span className="text-gradient">background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 mt-8 max-w-2xl hover-lift"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Bachelor of Computer Engineering
              </h3>
              <p className="text-primary font-mono text-sm">
                MBIT, CVM University, India
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Jun 2020 — Jul 2024
              </p>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10">
                <span className="text-sm font-semibold text-primary">GPA: 9.25 / 10.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
