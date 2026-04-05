import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { TrendingDown, MousePointerClick, Palette, DollarSign } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const pains = [
  { icon: TrendingDown, text: <>Você investe em anúncios, mas <strong className="text-red-400">não vende</strong></> },
  { icon: MousePointerClick, text: <>Sua página recebe cliques, mas <strong className="text-red-400">não converte</strong></> },
  { icon: Palette, text: <>Seu design é bonito, mas <strong className="text-red-400">não gera resultado</strong></> },
  { icon: DollarSign, text: <>Você está <strong className="text-red-400">deixando dinheiro na mesa</strong> todos os dias</> },
];

const PainSection = () => (
  <section className="bg-main py-32 relative overflow-hidden noise-overlay">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(0 70% 50% / 0.04), transparent)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Isso te parece familiar?" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
          Seu problema <span className="text-red-500" style={{ textShadow: "0 0 40px hsl(0 70% 50% / 0.3)" }}>não é tráfego.</span>
        </h2>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto space-y-4 mb-16">
        {pains.map((pain, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="flex items-center gap-5 rounded-2xl border border-red-500/8 bg-red-500/[0.02] p-6 transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/[0.04] backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-red-500/8 flex items-center justify-center flex-shrink-0 border border-red-500/10">
                <pain.icon size={20} className="text-red-400/80" />
              </div>
              <span className="font-body text-base sm:text-lg text-foreground/85">{pain.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Se você se identificou, o problema <strong className="text-foreground">não é o tráfego</strong>.{" "}
          <strong className="text-gradient">É que você ainda não tem uma página feita pra vender.</strong>
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero uma LP que vende →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default PainSection;
