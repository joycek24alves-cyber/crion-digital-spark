import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";

const WA_LINK = "https://wa.me/5511999999999";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-main">
    <HeroBackground />

    {/* Neon glow orbs */}
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

    {/* Speed lines */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          style={{
            top: `${15 + i * 18}%`,
            left: "-10%",
            width: `${60 + i * 10}%`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: [0, 1, 0] }}
          transition={{
            duration: 2.5 + i * 0.3,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 3 + i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <span className="font-heading text-lg sm:text-xl tracking-[0.35em] text-primary uppercase"
          style={{
            textShadow: "0 0 20px hsl(192 100% 50% / 0.5), 0 0 60px hsl(192 100% 50% / 0.2)",
          }}
        >
          CRION DIGITAL
        </span>
      </motion.div>

      {/* Urgency badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 mb-10"
      >
        <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse_dot" />
        <span className="font-body text-sm font-medium text-red-400">
          Vagas limitadas este mês
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] mb-2 uppercase"
      >
        <span className="block text-foreground"
          style={{
            textShadow: "0 0 40px rgba(255,255,255,0.05)",
          }}
        >
          Clique não paga conta.
        </span>
        <span className="block text-gradient mt-2"
          style={{
            filter: "drop-shadow(0 0 30px hsl(192 100% 50% / 0.3))",
          }}
        >
          Venda sim.
        </span>
      </motion.h1>

      {/* Divider line with neon glow */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-24 h-[2px] mx-auto my-8 bg-gradient-primary"
        style={{
          boxShadow: "0 0 15px hsl(192 100% 50% / 0.5), 0 0 40px hsl(192 100% 50% / 0.2)",
        }}
      />

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Desenvolvemos landing pages focadas em conversão para{" "}
        <strong className="text-foreground">transformar seus cliques em vendas reais.</strong>
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center font-body font-bold text-lg sm:text-xl uppercase tracking-wider px-12 py-5 rounded-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, #00c6ff, #5b5ef4)",
            color: "#fff",
            boxShadow: "0 0 30px hsl(192 100% 50% / 0.3), 0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <span className="relative z-10">Quero mais vendas →</span>
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #33d4ff, #7b7ef6)",
              boxShadow: "0 0 50px hsl(192 100% 50% / 0.5), 0 0 100px hsl(239 89% 65% / 0.3)",
            }}
          />
        </a>
      </motion.div>

      {/* Micro-copy */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="font-body text-xs text-muted-foreground/60 mt-6 tracking-wide"
      >
        Sem contrato · Sem mensalidade · Resultado em 7 dias
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/30 flex justify-center pt-1.5"
          style={{
            boxShadow: "0 0 15px hsl(192 100% 50% / 0.15)",
          }}
        >
          <div className="w-1 h-2 rounded-full bg-primary animate-scroll-hint" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
