import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const WA_LINK = "https://wa.me/5511999999999";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-main">
    <HeroBackground />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8"
      >
        <span className="h-2 w-2 rounded-full bg-primary animate-pulse_dot" />
        <span className="font-body text-sm font-light text-primary">
          Landing Pages que convertem de verdade
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6"
      >
        <span className="block text-foreground">Sua página na internet</span>
        <span className="block text-gradient">trabalhando por você</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="font-body font-light text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10"
      >
        Criamos landing pages profissionais, rápidas e indexadas no Google para
        negócios que querem atrair clientes todos os dias.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary font-body font-medium px-8 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Quero minha LP agora
        </a>
        <a
          href="#cases"
          className="font-body font-medium px-8 py-3.5 rounded-lg border border-foreground/10 text-foreground/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40"
        >
          Ver cases
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-foreground/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-scroll-hint" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
