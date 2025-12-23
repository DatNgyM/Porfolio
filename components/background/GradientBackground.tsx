"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Component for a single floating prism (triangle/geometric shape)
const PrismShape = ({ 
  className, 
  delay = 0, 
  duration = 20, 
  scale = [1, 1.2, 1],
  rotate = [0, 90, 0],
  style
}: { 
  className: string;
  delay?: number;
  duration?: number;
  scale?: number[];
  rotate?: number[];
  style?: React.CSSProperties;
}) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className={`absolute ${className} backdrop-blur-3xl`}
      animate={prefersReducedMotion ? {
        rotate: 0,
        scale: 1,
      } : {
        rotate: rotate,
        scale: scale,
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay,
      }}
      style={{ willChange: 'transform', ...style }}
    />
  );
};

export default function GradientBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background h-screen w-screen">
      {/* Base gradient mesh - Monochrome */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800/40" />
      
      {/* Geometric Prisms - Monochrome */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40">
        {/* Large primary prism - Top Left */}
        <PrismShape 
          className="top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-gradient-to-br from-black/10 to-gray-600/10 rounded-[40px] rotate-12"
          duration={25}
          rotate={[12, 24, 12]}
        />
        
        {/* Secondary prism - Bottom Right */}
        <PrismShape 
          className="bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-gradient-to-tl from-gray-700/10 to-black/10 rounded-[60px] -rotate-12"
          duration={30}
          delay={2}
          rotate={[-12, -24, -12]}
        />

        {/* Floating Accent Triangle 1 */}
        <PrismShape 
          className="top-[20%] right-[15%] w-64 h-64 bg-gradient-to-bl from-gray-800/10 to-black/10"
          scale={[1, 1.1, 0.9, 1]}
          rotate={[45, 90, 45]}
          duration={15}
          // Using clip-path for triangle shape
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />

        {/* Floating Accent Triangle 2 */}
        <PrismShape 
          className="bottom-[30%] left-[10%] w-48 h-48 bg-gradient-to-tr from-gray-600/10 to-gray-400/10"
          scale={[1, 1.2, 1]}
          rotate={[-15, 15, -15]}
          duration={18}
          delay={1}
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} // Diamond
        />
        
        {/* Center refractive glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent dark:via-white/5 bg-[length:200%_200%] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      {/* Noise texture for texture */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}
