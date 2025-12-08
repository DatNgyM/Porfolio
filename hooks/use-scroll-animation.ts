"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  margin?: string;
  once?: boolean;
  amount?: number;
}

/**
 * Custom hook for scroll-triggered animations with optimized Intersection Observer
 * Provides smooth, performant scroll animations for elements
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    margin = "0px",
    once = true,
    amount = 0.3,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin,
    amount,
  });

  return { ref, isInView };
}

/**
 * Hook for parallax effects based on scroll position
 */
export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const windowHeight = window.innerHeight;

        // Calculate parallax offset
        const scrolled = scrollY + windowHeight;
        const parallax = (scrolled - elementTop) * speed;
        setOffset(parallax);
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [speed]);

  return { ref, offset };
}

/**
 * Hook for stagger children animations
 */
export function useStaggerAnimation(
  childrenCount: number,
  delay: number = 0.1
) {
  const { ref, isInView } = useScrollAnimation();

  const getStaggerDelay = (index: number) => {
    return index * delay;
  };

  return {
    ref,
    isInView,
    getStaggerDelay,
  };
}
