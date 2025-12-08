"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";

const skills = [
  { name: "React/Next.js", level: 95, color: "from-green-500 to-emerald-500" },
  { name: "TypeScript", level: 90, color: "from-emerald-500 to-teal-500" },
  { name: "UI/UX Design", level: 85, color: "from-teal-500 to-cyan-500" },
  { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
  { name: "Framer Motion", level: 88, color: "from-green-500 to-emerald-500" },
  { name: "Node.js", level: 80, color: "from-emerald-500 to-green-500" },
];

// Animated counter component
function AnimatedCounter({ 
  value, 
  suffix = "%", 
  duration = 1.5,
  isInView 
}: { 
  value: number; 
  suffix?: string; 
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easeOutCubic));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Skills() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.3 });

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="gradient-text-3">Skills & Expertise</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Technologies I work with daily
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99],
                }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass dark:glass-dark rounded-xl p-6 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-300"
                  initial={false}
                />
                <div className="flex justify-between items-center mb-3 relative z-10">
                  <motion.span
                    className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {skill.name}
                  </motion.span>
                  <motion.span
                    className="text-sm font-medium gradient-text"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <AnimatedCounter value={skill.level} duration={1.5} isInView={isInView} />
                  </motion.span>
                </div>
                <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{
                      duration: 1.5,
                      delay: index * 0.1 + 0.3,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={
                        isInView
                          ? {
                              x: ["-100%", "200%"],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        delay: index * 0.1 + 1.5,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

