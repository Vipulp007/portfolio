import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Zap, Bot, ShieldCheck, TestTube } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "30% Performance Boost",
    description: "Optimized Magento multistore backends reducing manual admin tasks significantly.",
  },
  {
    icon: Bot,
    title: "AI-Powered Job Matching",
    description: "Built AI agents achieving 90% extraction accuracy and 60% reduction in manual job search.",
  },
  {
    icon: Zap,
    title: "50% Faster SEO Content",
    description: "Developed AI meta content generation tool for Shopify merchants.",
  },
  {
    icon: TestTube,
    title: "60% Less Manual Testing",
    description: "Created Playwright automation framework with GitHub CI and PDF reporting.",
  },
  {
    icon: ShieldCheck,
    title: "35% Faster Debugging",
    description: "Built Node.js automation scripts and implemented automated testing pipelines.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">06. Achievements</p>
          <h2 className="section-title">
            Key <span className="text-gradient">highlights</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass-card p-6 hover-lift"
            >
              <item.icon size={22} className="text-primary mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
