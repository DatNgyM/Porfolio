"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Users, Award, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  { Icon: Code2, title: "Frontend Development", description: "React, Next.js, TypeScript" },
  { Icon: Palette, title: "UI/UX Design", description: "Figma, Design Systems" },
  { Icon: Zap, title: "Performance", description: "Optimization & Best Practices" },
  { Icon: Users, title: "Collaboration", description: "Team Work & Communication" },
  { Icon: Award, title: "Quality", description: "Clean Code & Testing" },
  { Icon: Target, title: "Problem Solving", description: "Creative Solutions" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
};

export default function About() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.3 });

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="gradient-text">About Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass dark:glass-dark rounded-2xl p-6 max-w-3xl mx-auto"
            >
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                I'm a passionate developer and designer who loves creating
                beautiful, functional, and user-centered digital experiences.
                With a keen eye for detail and a commitment to excellence, I
                bring ideas to life through code and design.
              </p>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8, rotate: [0, -1, 1, 0] }}
                className="glass dark:glass-dark rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300"
                  initial={false}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all"
                  >
                    <skill.Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats with enhanced animations */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "50+", label: "Projects" },
              { number: "100%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                custom={index}
                variants={statsVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass dark:glass-dark rounded-xl p-6 text-center cursor-pointer group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300"
                  initial={false}
                />
                <motion.div
                  className="text-4xl font-bold gradient-text mb-2 relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400 relative z-10 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
