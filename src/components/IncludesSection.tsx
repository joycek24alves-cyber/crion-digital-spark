import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
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
  <section className="bg-alt py-28 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[120px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Tudo incluso" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">
          Você recebe. <span className="text-gradient">Tudo isso.</span>
        </h2>
        <p className="font-body text-muted-foreground text-lg">Sem surpresas. Sem custos escondidos.</p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-14">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-center gap-4 rounded-xl border border-foreground/5 bg-foreground/[0.02] p-5 transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.04]">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/15 glow-primary">
                <Check size={18} className="text-primary" />
              </div>
              <span className="font-heading text-lg text-foreground">{item}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Solicitar proposta →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default IncludesSection;
