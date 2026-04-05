import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: 30, suffix: "+", label: "Projetos entregues" },
  { value: 7, suffix: "", label: "Dias para entregar" },
  { value: 100, suffix: "%", label: "No prazo" },
  { value: 30, suffix: "", label: "Dias de suporte" },
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
    <span ref={ref} className="font-heading text-5xl md:text-6xl text-gradient">
      {count}
      {suffix}
    </span>
  );
}

const NumbersSection = () => (
  <section className="bg-alt py-20">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {stats.map((s, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.1}
            className={`flex flex-col items-center py-10 ${
              i < stats.length - 1 ? "md:border-r border-subtle" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-subtle" : ""}`}
          >
            <Counter target={s.value} suffix={s.suffix} />
            <span className="font-body text-sm text-muted-foreground mt-2">{s.label}</span>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default NumbersSection;
