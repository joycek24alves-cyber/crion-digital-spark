import { motion } from "framer-motion";

/**
 * Animated light lines that streak across section backgrounds.
 * Use color="purple" (default) or color="blue" for accent sections.
 */
const BackgroundLines = ({
  count = 5,
  color = "purple",
}: {
  count?: number;
  color?: "purple" | "blue" | "mixed";
}) => {
  const getGradient = (i: number) => {
    if (color === "blue") return "linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.12), transparent)";
    if (color === "mixed" && i % 2 === 0) return "linear-gradient(90deg, transparent, hsl(187 100% 50% / 0.1), transparent)";
    return "linear-gradient(90deg, transparent, hsl(263 100% 59% / 0.15), transparent)";
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px]"
          style={{
            top: `${15 + i * (70 / count)}%`,
            left: "-5%",
            width: `${30 + i * 8}%`,
            background: getGradient(i),
          }}
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: ["−100%", "400%"], opacity: [0, 0.8, 0] }}
          viewport={{ once: false }}
          transition={{
            duration: 3 + i * 0.5,
            delay: i * 0.6,
            repeat: Infinity,
            repeatDelay: 5 + i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundLines;
