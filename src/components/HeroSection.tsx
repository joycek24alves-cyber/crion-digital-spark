import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const WA_LINK = "https://wa.me/5511999999999";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-main noise-overlay">
    <HeroBackground />

    {/* Purple ambient glow */}
    <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.15), transparent)" }} />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(250 80% 50% / 0.12), transparent)" }} />

    {/* Speed lines */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px]"
          style={{
            top: `${12 + i * 15}%`,
            left: "-10%",
            width: `${50 + i * 10}%`,
            background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? 'hsl(270 80% 65% / 0.3)' : 'hsl(250 80% 60% / 0.2)'}, transparent)`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "250%", opacity: [0, 1, 0] }}
          transition={{ duration: 2 + i * 0.4, delay: i * 0.3, repeat: Infinity, repeatDelay: 4 + i * 0.5, ease: "easeInOut" }}
        />
      ))}
    </div>

    {/* Grid overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(270 80% 65% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(270 80% 65% / 0.3) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
    }} />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
      {/* Brand */}
      <motion.div initial={{ opacity: 0, scale: 0.8, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-8">
        <span className="font-heading text-base sm:text-lg tracking-[0.5em] text-primary uppercase text-glow-primary font-bold">
          CRION DIGITAL
        </span>
      </motion.div>

      {/* Badge */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 mb-12 backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse_dot" />
        <span className="font-body text-sm font-medium text-primary/90">Vagas limitadas este mês</span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] leading-[0.88] mb-2 uppercase"
      >
        <span className="block text-foreground" style={{ textShadow: "0 0 80px hsl(270 80% 65% / 0.1)" }}>
          Clique não paga conta.
        </span>
        <span
          className="block text-gradient-intense mt-3"
          style={{ filter: "drop-shadow(0 0 40px hsl(270 80% 65% / 0.4))" }}
        >
          Venda sim.
        </span>
      </motion.h1>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-32 h-[2px] mx-auto my-10"
        style={{
          background: "linear-gradient(90deg, transparent, #a855f7, #7c3aed, transparent)",
          boxShadow: "0 0 20px hsl(270 80% 65% / 0.4)",
        }}
      />

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
      >
        Desenvolvemos landing pages focadas em conversão para{" "}
        <strong className="text-foreground">transformar seus cliques em vendas reais.</strong>
      </motion.p>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.3 }}>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center bg-gradient-primary font-body font-bold text-lg sm:text-xl uppercase tracking-wider px-14 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover"
          style={{ color: "#fff" }}
        >
          Quero mais vendas →
        </a>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.6 }} className="font-body text-xs text-muted-foreground/40 mt-8 tracking-widest uppercase">
        Sem contrato · Sem mensalidade · Resultado em 7 dias
      </motion.p>

      {/* Scroll */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 0.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-5 h-9 rounded-full border-2 border-primary/20 flex justify-center pt-2 glow-primary">
          <div className="w-1 h-2 rounded-full bg-primary animate-scroll-hint" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
