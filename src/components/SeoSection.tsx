import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Search, Zap, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const cards = [
  { icon: Search, title: "SEO agressivo", desc: "Sua LP no Google sem pagar por cada clique." },
  { icon: Zap, title: "Carrega em <2s", desc: "Página lenta = cliente perdido. A sua não será." },
  { icon: TrendingUp, title: "Feita pra converter", desc: "Cada elemento pensado para gerar ação." },
];

const SeoSection = () => (
  <section className="bg-main py-28 relative overflow-hidden">
    <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Performance" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">
          Tráfego orgânico + conversão.<br />
          <span className="text-gradient">Sem pagar mais por isso.</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {cards.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="rounded-xl border border-foreground/5 bg-foreground/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-foreground/[0.04]">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/15 glow-primary">
                <c.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero tráfego orgânico →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SeoSection;
