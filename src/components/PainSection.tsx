import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import FloatingParticles from "./FloatingParticles";
import { TrendingDown, MousePointerClick, Palette, DollarSign } from "lucide-react";

const WA_LINK = "https://wa.me/5511933653167";

const pains = [
  { icon: TrendingDown, text: <>Você investe em anúncios, mas <strong className="text-red-400">não vende</strong></> },
  { icon: MousePointerClick, text: <>Sua página recebe cliques, mas <strong className="text-red-400">não converte</strong></> },
  { icon: Palette, text: <>Seu design é bonito, mas <strong className="text-red-400">não gera resultado</strong></> },
  { icon: DollarSign, text: <>Você está <strong className="text-red-400">deixando dinheiro na mesa</strong> todos os dias</> },
];

const PainSection = () => (
  <section className="bg-main py-32 relative overflow-hidden noise-overlay">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(0 70% 50% / 0.04), transparent)" }} />
    <FloatingParticles count={12} />

    <div className="relative z-10 container mx-auto px-4">
      {/* Asymmetric two-column layout */}
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        {/* Left: heading offset up */}
        <AnimatedSection variant="fadeLeft" className="lg:-mt-16">
          <SectionLabel text="Isso te parece familiar?" />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9] mb-8">
            Seu problema <span className="text-red-500" style={{ textShadow: "0 0 40px hsl(0 70% 50% / 0.3)" }}>não é tráfego.</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground leading-relaxed">
            Se você se identificou, o problema <strong className="text-foreground">não é o tráfego</strong>.{" "}
            <strong className="text-gradient">É que você ainda não tem uma página feita pra vender.</strong>
          </p>
        </AnimatedSection>

        {/* Right: staggered cards with offset */}
        <div className="space-y-4 lg:mt-12">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 0.12} variant={i % 2 === 0 ? "fadeRight" : "fadeLeft"}>
              <div
                className="flex items-center gap-5 rounded-2xl border border-red-500/8 bg-red-500/[0.02] p-6 card-hover-glow backdrop-blur-sm"
                style={{ marginLeft: i % 2 === 0 ? 0 : "2rem", marginRight: i % 2 === 0 ? "2rem" : 0 }}
              >
                <div className="h-12 w-12 rounded-xl bg-red-500/8 flex items-center justify-center flex-shrink-0 border border-red-500/10">
                  <pain.icon size={20} className="text-red-400/80" />
                </div>
                <span className="font-body text-base sm:text-lg text-foreground/85">{pain.text}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection className="text-center mt-20" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero uma LP que vende →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default PainSection;
