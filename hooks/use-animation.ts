import { useSpring, animated } from "@react-spring/web";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function useFadeInUp() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const springs = useSpring({
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 50,
    config: { tension: 280, friction: 60 },
  });

  return { ref, springs, Animated: animated };
}

export function useScaleIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const springs = useSpring({
    scale: isInView ? 1 : 0.8,
    opacity: isInView ? 1 : 0,
    config: { tension: 280, friction: 60 },
  });

  return { ref, springs, Animated: animated };
}

