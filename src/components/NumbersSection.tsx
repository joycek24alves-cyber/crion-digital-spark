import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import BackgroundLines from "./BackgroundLines";
import { motion } from "framer-motion";

const stats = [
  { value: 30, suffix: "+", label: "LPS ENTREGUES" },
  { value: 7, suffix: " DIAS", label: "DO ZERO AO AR" },
  { value: 100, suffix: "%", label: "NO PRAZO" },
  { value: 3, suffix: "X", label: "MAIS CONVERSÃO" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-7xl text-gradient-intense" style={{ filter: "drop-shadow(0 0 20px hsl(270 80% 65% / 0.25))" }}>
      {count}{suffix}
    </span>
  );
}

const NumbersSection = () => (
  <section className="bg-alt py-24 relative overflow-hidden noise-overlay clip-diagonal-both">
    <div className="skew-stripe" />
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: "linear-gradient(hsl(270 80% 65% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(270 80% 65% / 0.5) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />
    <BackgroundLines count={3} color="purple" />

    <div className="relative z-10 container mx-auto px-4">
      {/* Asymmetric: first stat large, rest in row */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
        <AnimatedSection variant="scaleUp" className="lg:w-2/5 text-center lg:text-left lg:border-r border-primary/5 lg:pr-12 py-8">
          <Counter target={stats[0].value} suffix={stats[0].suffix} />
          <span className="block font-body text-[11px] text-muted-foreground mt-3 tracking-[0.2em] uppercase">{stats[0].label}</span>
        </AnimatedSection>
        <div className="lg:w-3/5 grid grid-cols-3 gap-0">
          {stats.slice(1).map((s, i) => (
            <AnimatedSection
              key={i}
              delay={0.15 + i * 0.15}
              variant="fadeUp"
              className={`flex flex-col items-center py-8 ${i < 2 ? "border-r border-primary/5" : ""}`}
            >
              <Counter target={s.value} suffix={s.suffix} />
              <span className="font-body text-[11px] text-muted-foreground mt-3 tracking-[0.2em] uppercase">{s.label}</span>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default NumbersSection;
