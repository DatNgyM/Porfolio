"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with real-time inventory management and seamless checkout experience.",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management with drag-and-drop functionality and real-time updates.",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website showcasing creative work with smooth animations.",
    image: "bg-gradient-to-br from-orange-500 to-red-500",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with interactive maps and detailed forecasts.",
    image: "bg-gradient-to-br from-green-500 to-emerald-500",
    technologies: ["React", "API Integration", "Chart.js"],
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "Full-featured social media platform with posts, comments, and real-time messaging.",
    image: "bg-gradient-to-br from-indigo-500 to-purple-500",
    technologies: ["Next.js", "Prisma", "NextAuth", "AWS"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description:
      "Comprehensive analytics dashboard with data visualization and reporting tools.",
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
    technologies: ["React", "D3.js", "Python", "PostgreSQL"],
    github: "#",
    live: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
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

export default function Projects() {
  const { ref, isInView } = useScrollAnimation({ amount: 0.2 });

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <span className="gradient-text-2">Featured Projects</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore my latest work and creative solutions
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl glass dark:glass-dark cursor-pointer"
              >
                {/* Project Image/Color */}
                <div
                  className={`${project.image} h-48 relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:to-black/40 transition-all duration-300"
                    initial={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Code2 className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%", skewX: -20 }}
                    whileHover={{ x: "200%", skewX: -20 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:gradient-text transition-all"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial="hidden"
                    whileHover="visible"
                  >
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        variants={{
                          hidden: { opacity: 0.7, scale: 1 },
                          visible: {
                            opacity: 1,
                            scale: 1.05,
                            transition: { delay: index * 0.05 },
                          },
                        }}
                        className="px-3 py-1 text-xs rounded-full glass dark:glass-dark text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full glass dark:glass-dark border-2 group/btn relative overflow-hidden"
                      >
                        <motion.span
                          className="relative z-10 flex items-center justify-center"
                          whileHover={{ x: 2 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="glass dark:glass-dark"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </motion.a>
                  </div>
                </div>

                {/* Enhanced Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-emerald-600/0 group-hover:from-green-600/10 group-hover:to-emerald-600/10 transition-all duration-300 pointer-events-none"
                  initial={false}
                />
                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-500/30 transition-all duration-300 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-lg shadow-green-500/50 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View All Projects
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </motion.div>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
