"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function GradientBackground() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
      {/* Enhanced gradient overlay - Soft Green & Sage */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-emerald-900/10" />
      
      {/* Animated gradient orbs with optimized performance */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-green-400/10 to-emerald-400/10 blur-3xl"
        animate={prefersReducedMotion ? {
          scale: 1,
          opacity: 0.3,
          x: 0,
          y: 0,
        } : {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 20,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity', transform: 'translateZ(0)' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-teal-400/10 to-cyan-400/10 blur-3xl"
        animate={prefersReducedMotion ? {
          scale: 1,
          opacity: 0.3,
          x: 0,
          y: 0,
        } : {
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 25,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: "easeInOut",
          delay: prefersReducedMotion ? 0 : 2,
        }}
        style={{ willChange: prefersReducedMotion ? 'auto' : 'transform, opacity', transform: 'translateZ(0)' }}
      />
      {!prefersReducedMotion && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-400/5 to-teal-400/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}
        />
      )}
    </div>
  );
}
