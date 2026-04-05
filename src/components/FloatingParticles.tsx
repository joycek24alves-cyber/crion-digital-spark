import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Lightweight floating particles for section backgrounds.
 * CSS-only — no Three.js overhead.
 */
const FloatingParticles = ({ count = 20 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
        isPurple: Math.random() > 0.25,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.isPurple
              ? "hsl(263 100% 59% / 0.4)"
              : "hsl(187 100% 50% / 0.3)",
            boxShadow: p.isPurple
              ? "0 0 6px hsl(263 100% 59% / 0.3)"
              : "0 0 6px hsl(187 100% 50% / 0.25)",
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
