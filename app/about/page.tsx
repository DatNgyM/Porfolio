"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users, Award, Target, Mail, MapPin, Calendar, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/background/GradientBackground";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef, useState, useEffect } from "react";

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

export default function AboutPage() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.3 });
  const { ref: statsRef, isInView: isStatsInView } = useScrollAnimation({ amount: 0.2, once: true });
  const [hasStatsShown, setHasStatsShown] = useState(false);

  useEffect(() => {
    if (isStatsInView) {
      setHasStatsShown(true);
    }
  }, [isStatsInView]);

  return (
    <main className="min-h-screen relative">
      <GradientBackground />
      <Navbar />
      
      <section className="relative pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="gradient-text">About Me</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass dark:glass-dark rounded-2xl p-8 max-w-3xl mx-auto"
              >
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  I&apos;m a passionate developer and designer who loves creating
                  beautiful, functional, and user-centered digital experiences.
                  With a keen eye for detail and a commitment to excellence, I
                  bring ideas to life through code and design.
                </p>
              </motion.div>
            </motion.div>

            {/* Personal Information Section */}
            <motion.div
              variants={itemVariants}
              className="glass dark:glass-dark rounded-2xl p-8 mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text-2">Thông Tin Cá Nhân</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Email</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">nguyenminhdat03112003@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Location</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Vietnam</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Date of Birth</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">03/11/2003</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Briefcase className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Position</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Frontend Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 gradient-text-2 text-center">Skills</h2>
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
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-black/0 to-gray-600/0 group-hover:from-black/10 group-hover:to-gray-600/10 transition-all duration-300"
                      initial={false}
                    />
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-gradient-to-br from-black/20 to-gray-600/20 group-hover:from-black/30 group-hover:to-gray-600/30 transition-all"
                      >
                        <skill.Icon className="w-6 h-6 text-black dark:text-white" />
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
            </motion.div>

            {/* Education & Experience Section */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Education */}
              <motion.div className="glass dark:glass-dark rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <h2 className="text-2xl font-bold gradient-text-2">Education</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      Hutech University of Technology 
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      [Infomation Technology/Software Technology]
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      [2022] - [2026] (Expected/Completed)
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              <motion.div className="glass dark:glass-dark rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <h2 className="text-2xl font-bold gradient-text-2">Experience</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      [Position/Title]
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      [Company Name] | [Location]
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                      [Start Date] - [End Date / Present]
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>[Achievement or responsibility]</li>
                      <li>[Achievement or responsibility]</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants} className="mb-12">
              <motion.div className="glass dark:glass-dark rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  <h2 className="text-2xl font-bold gradient-text-2">Certifications</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Certification Item 1 */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 p-5 bg-gradient-to-br from-black/5 to-gray-600/5 hover:from-black/10 hover:to-gray-600/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-black/20 to-gray-600/20 group-hover:from-black/30 group-hover:to-gray-600/30 transition-all">
                        <Award className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 group-hover:gradient-text transition-all">
                          JavaScript Essentials 1
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          [Tổ Chức Cấp]
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs mb-2">
                          Ngày Cấp: 23/12/2024
                        </p>
                        <a
                          href="/certificates/JavaScriptEssentials1Update20251223-30-7cig6a.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Xem chứng chỉ
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Certification Item 2 */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 p-5 bg-gradient-to-br from-black/5 to-gray-600/5 hover:from-black/10 hover:to-gray-600/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-black/20 to-gray-600/20 group-hover:from-black/30 group-hover:to-gray-600/30 transition-all">
                        <Award className="w-5 h-5 text-black dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1 group-hover:gradient-text transition-all">
                          Networking Basics
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          [Tổ Chức Cấp]
                        </p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs mb-2">
                          Ngày Cấp: 23/12/2024
                        </p>
                        <a
                          href="/certificates/NetworkingBasicsUpdate20251223-30-9x10ra.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Xem chứng chỉ
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>

                  {/* Add more certifications by duplicating the certification item above */}
                </div>
                {/* Note: Bạn có thể thêm nhiều chứng chỉ bằng cách duplicate certification item trên */}
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial="hidden"
              animate={hasStatsShown || isStatsInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                { number: "8+", label: "Projects" },
                { number: "100%", label: "Satisfaction" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  custom={index}
                  initial="hidden"
                  animate={hasStatsShown || isStatsInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  className="glass dark:glass-dark rounded-xl p-6 text-center group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/5 to-gray-600/5"
                    initial={false}
                  />
                  <motion.div
                    className="text-4xl font-bold gradient-text mb-2 relative z-10"
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

      <Footer />
    </main>
  );
}

