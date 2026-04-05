import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const WA_LINK = "https://wa.me/5511999999999";

const FinalCtaSection = () => (
  <section className="relative py-32 overflow-hidden">
    {/* Intense background layers */}
    <div className="absolute inset-0 bg-main" />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-transparent to-secondary/[0.08]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.06] blur-[160px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="relative container mx-auto px-4 text-center">
      <AnimatedSection>
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 mb-10"
        >
          <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse_dot" />
          <span className="font-body text-sm font-medium text-red-400">
            Apenas 5 vagas este mês
          </span>
        </motion.div>

        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] mb-6 max-w-4xl mx-auto">
          Ou você continua{" "}
          <span className="text-red-500">perdendo dinheiro</span>…
          <br />
          ou{" "}
          <span className="text-gradient" style={{ filter: "drop-shadow(0 0 20px hsl(192 100% 50% / 0.3))" }}>
            resolve isso agora.
          </span>
        </h2>

        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12">
          Sua página pode vender mais.{" "}
          <strong className="text-foreground">E nós mostramos como.</strong>
        </p>

        {/* Main CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center font-body font-bold text-xl uppercase tracking-wider px-14 py-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, #00c6ff, #5b5ef4)",
            color: "#fff",
            boxShadow:
              "0 0 40px hsl(192 100% 50% / 0.35), 0 0 80px hsl(239 89% 65% / 0.15), 0 8px 30px rgba(0,0,0,0.4)",
          }}
        >
          <span className="relative z-10">Quero mais vendas agora →</span>
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #33d4ff, #7b7ef6)",
              boxShadow:
                "0 0 60px hsl(192 100% 50% / 0.5), 0 0 120px hsl(239 89% 65% / 0.3), 0 8px 40px rgba(0,0,0,0.4)",
            }}
          />
        </a>

        <p className="font-body text-xs text-muted-foreground/50 mt-8 tracking-wide">
          ⚡ Resposta em até 2 horas · Sem contrato · Resultado em 7 dias
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCtaSection;
