import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroParticleSphere from "./HeroParticleSphere";
import { useIsMobile } from "@/hooks/use-mobile";
import crionHeroLogo from "@/assets/crion-hero-logo.png";

const WA_LINK = "https://wa.me/5511933653167";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(260 35% 4%) 0%, hsl(263 40% 6%) 50%, hsl(260 35% 4%) 100%)" }}>

      {/* Three.js particle sphere */}
      <HeroParticleSphere isMobile={isMobile} />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(8,12,18,0.80)" }} />

      <HeroBackground />

      {/* Single ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[200px] pointer-events-none z-[2]"
        style={{ background: "radial-gradient(circle, hsl(263 100% 59% / 0.10), transparent 70%)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-5 py-2 mb-14 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-body text-xs tracking-widest uppercase text-primary/70">Vagas limitadas</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] leading-[0.9] tracking-tight uppercase mb-2"
        >
          <span className="block text-foreground">Clique não paga conta.</span>
          <span className="block mt-2 text-gradient-intense" style={{ filter: "drop-shadow(0 0 30px hsl(263 100% 59% / 0.25))" }}>
            Venda sim.
          </span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-24 h-px mx-auto my-10 origin-center"
          style={{ background: "linear-gradient(90deg, transparent, hsl(263 100% 59% / 0.5), transparent)" }}
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="font-body text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Criamos landing pages do zero, projetadas para{" "}
          <strong className="text-foreground font-medium">transformar cliques em clientes.</strong>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.35 }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 font-body font-bold text-base sm:text-lg uppercase tracking-wider px-12 py-5 rounded-xl transition-all duration-500 hover:-translate-y-1 text-primary-foreground bg-gradient-primary glow-cta hover:glow-cta-hover"
          >
            Quero uma LP que vende
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-primary/15 flex justify-center pt-2">
            <motion.div
              className="w-0.5 h-2 rounded-full bg-primary/40"
              animate={{ y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
