"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    id: 1,
    title: "JavaScript Documentation Website",
    description:
      "A comprehensive JavaScript documentation website with interactive examples and detailed explanations.",
    image: "bg-gradient-to-br from-black to-gray-700",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DatNgyM/JS-Document-Website",
    live: "#",
  },
  {
    id: 2,
    title: "Landing Page",
    description:
      "A modern and responsive landing page with beautiful design and smooth animations.",
    image: "bg-gradient-to-br from-gray-800 to-gray-600",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/Ladding_Page",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website showcasing creative work with smooth animations and modern design.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/DatNgyM/Porfolio",
    live: "#",
  },
  {
    id: 4,
    title: "NFT Website",
    description:
      "A modern NFT marketplace website featuring digital art collections and trading functionality.",
    image: "bg-gradient-to-br from-gray-600 to-gray-800",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/NFT_Web",
    live: "#",
  },
  {
    id: 5,
    title: "Reading App",
    description:
      "An interactive reading application with book management, reading progress tracking, and user-friendly interface.",
    image: "bg-gradient-to-br from-black to-gray-700",
    technologies: ["Flutter", "Dart"],
    github: "https://github.com/DatNgyM/Reading_app",
    live: "#",
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "A full-featured blog website with content management, categories, and modern UI design.",
    image: "bg-gradient-to-br from-gray-700 to-black",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/DatNgyM/Blog_Web",
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
                          className="absolute inset-0 bg-gradient-to-r from-black/10 to-gray-600/10"
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
                  className="absolute inset-0 bg-gradient-to-br from-black/0 to-gray-600/0 group-hover:from-black/10 group-hover:to-gray-600/10 transition-all duration-300 pointer-events-none"
                  initial={false}
                />
                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/30 dark:group-hover:border-white/30 transition-all duration-300 pointer-events-none"
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
                className="bg-gradient-to-r from-black to-gray-700 hover:from-gray-800 hover:to-black text-white dark:text-black dark:bg-gradient-to-r dark:from-white dark:to-gray-300 dark:hover:from-gray-200 dark:hover:to-white border-0 shadow-lg shadow-black/50 dark:shadow-white/20 relative overflow-hidden group"
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
                  className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white"
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
