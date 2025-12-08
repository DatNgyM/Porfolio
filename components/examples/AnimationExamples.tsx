"use client";

import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useFadeInUp, useScaleIn } from "@/hooks/use-animation";

export default function AnimationExamples() {
  const fadeInUp = useFadeInUp();
  const scaleIn = useScaleIn();

  const springProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Animation Examples</h2>

      <div>
        <h3 className="text-xl font-semibold mb-4">Framer Motion</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-4 bg-primary/10 rounded-lg"
        >
          Fade in with Framer Motion
        </motion.div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">React Spring</h3>
        <animated.div
          style={springProps}
          className="p-4 bg-secondary/10 rounded-lg"
        >
          Slide in with React Spring
        </animated.div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Custom Hook - Fade In Up</h3>
        <fadeInUp.Animated.div
          ref={fadeInUp.ref}
          style={fadeInUp.springs}
          className="p-4 bg-accent/10 rounded-lg"
        >
          Fade in up with custom hook
        </fadeInUp.Animated.div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Custom Hook - Scale In</h3>
        <scaleIn.Animated.div
          ref={scaleIn.ref}
          style={scaleIn.springs}
          className="p-4 bg-muted rounded-lg"
        >
          Scale in with custom hook
        </scaleIn.Animated.div>
      </div>
    </div>
  );
}

