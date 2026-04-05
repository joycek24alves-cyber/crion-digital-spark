import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { TrendingDown, MousePointerClick, Palette, DollarSign } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const pains = [
  {
    icon: TrendingDown,
    text: <>Você investe em anúncios, mas <strong className="text-red-400">não vende</strong></>,
  },
  {
    icon: MousePointerClick,
    text: <>Sua página recebe cliques, mas <strong className="text-red-400">não converte</strong></>,
  },
  {
    icon: Palette,
    text: <>Seu design é bonito, mas <strong className="text-red-400">não gera resultado</strong></>,
  },
  {
    icon: DollarSign,
    text: <>Você está <strong className="text-red-400">deixando dinheiro na mesa</strong> todos os dias</>,
  },
];

const PainSection = () => (
  <section className="bg-main py-24 relative overflow-hidden">
    {/* Subtle red ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-500/[0.04] blur-[120px] pointer-events-none" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel text="Isso te parece familiar?" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          Seu problema <span className="text-red-500">não é tráfego.</span>
        </h2>
      </AnimatedSection>

      <div className="max-w-2xl mx-auto space-y-4 mb-14">
        {pains.map((pain, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="flex items-center gap-5 rounded-xl border border-red-500/10 bg-red-500/[0.03] p-5 transition-all duration-300 hover:border-red-500/25 hover:bg-red-500/[0.06]">
              <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0 border border-red-500/20">
                <pain.icon size={22} className="text-red-400" />
              </div>
              <span className="font-body text-base sm:text-lg text-foreground/90">{pain.text}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Se você se identificou, o problema <strong className="text-foreground">não é o tráfego</strong>.{" "}
          <strong className="text-gradient">É a sua página.</strong>
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Resolver isso agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default PainSection;
