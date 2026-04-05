import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import BackgroundLines from "./BackgroundLines";
import { Check } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const items = [
  "LP de alta conversão",
  "Domínio .com.br",
  "Indexação no Google",
  "SSL e segurança",
  "100% responsivo",
  "30 dias de suporte",
];

const IncludesSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay clip-diagonal-both">
    <div className="skew-stripe" />
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(260 80% 50% / 0.05), transparent)" }} />
    <BackgroundLines count={3} color="purple" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="mb-16" variant="blur">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-end">
          <div>
            <SectionLabel text="Tudo incluso" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
              Você recebe. <span className="text-gradient-intense">Tudo isso.</span>
            </h2>
          </div>
          <p className="font-body text-lg text-muted-foreground lg:text-right leading-relaxed">
            Sem surpresas. <strong className="text-foreground">Sem custos escondidos.</strong>
          </p>
        </div>
      </AnimatedSection>

      {/* Hexagonal-feel staggered layout */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-16">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08} variant={i % 3 === 0 ? "fadeLeft" : i % 3 === 1 ? "fadeUp" : "fadeRight"}>
            <div
              className="flex items-center gap-4 rounded-2xl border border-primary/5 bg-primary/[0.02] p-6 card-hover-glow backdrop-blur-sm"
              style={{ transform: i % 2 !== 0 ? "translateY(1rem)" : undefined }}
            >
              <div className="h-10 w-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 border border-primary/10 glow-primary">
                <Check size={18} className="text-primary" />
              </div>
              <span className="font-heading text-lg text-foreground">{item}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Solicitar proposta →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default IncludesSection;
