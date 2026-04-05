import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const WA_LINK = "https://wa.me/5511999999999";

const FinalCtaSection = () => (
  <section className="relative py-40 overflow-hidden noise-overlay">
    <div className="absolute inset-0 bg-main" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(270 80% 50% / 0.1), transparent 60%)" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.06), hsl(250 80% 50% / 0.03), transparent)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />

    {/* Grid */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
      backgroundImage: "linear-gradient(hsl(270 80% 65% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(270 80% 65% / 0.5) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <AnimatedSection>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 mb-14 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse_dot" />
          <span className="font-body text-sm font-medium text-primary/90">Apenas 5 vagas este mês</span>
        </motion.div>

        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.88] mb-8 max-w-5xl mx-auto">
          Ou você continua <span className="text-red-500" style={{ textShadow: "0 0 40px hsl(0 70% 50% / 0.3)" }}>perdendo dinheiro</span>…
          <br />
          ou <span className="text-gradient-intense" style={{ filter: "drop-shadow(0 0 30px hsl(270 80% 65% / 0.4))" }}>resolve isso agora.</span>
        </h2>

        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-14">
          Criamos a página que vai vender por você. <strong className="text-foreground">Do zero. Em 7 dias.</strong>
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-primary font-body font-bold text-xl uppercase tracking-wider px-16 py-7 rounded-2xl transition-all duration-300 hover:-translate-y-2 glow-cta hover:glow-cta-hover"
          style={{ color: "#fff" }}
        >
          Quero mais vendas agora →
        </a>

        <p className="font-body text-xs text-muted-foreground/30 mt-10 tracking-[0.25em] uppercase">
          Resposta em até 2 horas · Sem contrato · Resultado em 7 dias
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCtaSection;
