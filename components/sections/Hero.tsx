"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";
import { useRef, useMemo } from "react";

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Optimized floating variants for reduced motion
const floatingVariantsReduced = {
  animate: {
    y: 0,
    transition: {
      duration: 0,
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
    layoutEffect: false, // Use layoutEffect: false for better performance
  });

  // Simplified parallax effects - reduced intensity for better performance
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", prefersReducedMotion ? "0%" : "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const springProps = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 280, friction: 60 },
    delay: 300,
  });

  // Memoize animation configs for better performance
  const backgroundAnimationConfig = useMemo(() => ({
    scale: prefersReducedMotion ? 1 : [1, 1.2, 1],
    opacity: prefersReducedMotion ? 0.3 : [0.3, 0.5, 0.3],
    transition: {
      duration: prefersReducedMotion ? 0 : 8,
      repeat: prefersReducedMotion ? 0 : Infinity,
      ease: "easeInOut" as const,
    },
  }), [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements with parallax - Optimized */}
      <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <motion.div
          style={{ y: y1, willChange: 'transform', transform: 'translateZ(0)' }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 blur-3xl"
          animate={backgroundAnimationConfig}
        />
        <motion.div
          style={{ y: y2, willChange: 'transform', transform: 'translateZ(0)' }}
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 blur-3xl"
          animate={{
            ...backgroundAnimationConfig,
            transition: {
              ...backgroundAnimationConfig.transition,
              duration: prefersReducedMotion ? 0 : 10,
              delay: prefersReducedMotion ? 0 : 1,
            },
          }}
        />
        {!prefersReducedMotion && (
          <motion.div
            style={{ y: y1, opacity, willChange: 'transform, opacity', transform: 'translateZ(0)' }}
            className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/15 to-teal-400/15 blur-2xl"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        )}
      </div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with staggered text reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              variants={prefersReducedMotion ? floatingVariantsReduced : floatingVariants}
              animate="animate"
              style={{ willChange: prefersReducedMotion ? 'auto' : 'transform', transform: 'translateZ(0)' }}
            >
              <motion.span
                className="gradient-text block"
                custom={0}
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
              >
                Creative
              </motion.span>
              <motion.span
                className="gradient-text-2 block"
                custom={1}
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
              >
                Developer
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Subtitle with glassmorphism and staggered reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mb-8"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
              className="glass dark:glass-dark rounded-2xl p-6 inline-block"
              style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
            >
              <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100">
                Chia sẻ kiến thức về{" "}
                <motion.span
                  className="font-semibold gradient-text-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Java & JavaScript
                </motion.span>{" "}
                và{" "}
                <motion.span
                  className="font-semibold gradient-text"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Network Programming
                </motion.span>
              </p>
            </motion.div>
          </motion.div>

          {/* Icon showcase with stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.6,
                },
              },
            }}
            className="flex justify-center gap-6 mb-10 flex-wrap"
          >
            {[
              { Icon: Code, label: "Code", color: "text-green-500" },
              { Icon: Palette, label: "Design", color: "text-emerald-500" },
              { Icon: Sparkles, label: "Innovation", color: "text-teal-500" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 20 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    },
                  },
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.1, y: -5, rotate: [0, -5, 5, 0] }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                className="glass dark:glass-dark rounded-xl p-4 cursor-pointer group"
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { rotate: 360 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                  style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
                >
                  <item.Icon className={`w-8 h-8 ${item.color} mb-2 mx-auto group-hover:scale-110 transition-transform`} />
                </motion.div>
                <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 1.1 }}
              style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
            >
              <a href="/blog">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 shadow-lg shadow-green-500/50 relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: [0, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    Đọc Blog
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </a>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: prefersReducedMotion ? 0 : 1.2 }}
              style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity' }}
            >
              <a href="#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass dark:glass-dark border-2 hover:bg-white/10 relative overflow-hidden group"
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ x: [0, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    Về Tôi
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator with enhanced animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center gap-2 cursor-pointer group"
              animate={prefersReducedMotion ? { y: 0 } : { y: [0, 10, 0] }}
              transition={{
                duration: prefersReducedMotion ? 0 : 2,
                repeat: prefersReducedMotion ? 0 : Infinity,
                ease: "easeInOut",
              }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
              style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
            >
              <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors font-medium">
                Scroll down
              </span>
              <motion.div
                animate={prefersReducedMotion ? { y: 0 } : { y: [0, 5, 0] }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 1.5,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut",
                }}
                style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
              >
                <ArrowDown className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
