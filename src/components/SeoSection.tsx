import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Search, Zap, TrendingUp } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const WA_LINK = "https://wa.me/5511933653167";

const cards = [
  { icon: Search, title: "SEO agressivo", desc: "Sua LP no Google sem pagar por cada clique." },
  { icon: Zap, title: "Carrega em <2s", desc: "Página lenta = cliente perdido. A sua não será." },
  { icon: TrendingUp, title: "Feita pra converter", desc: "Cada elemento pensado para gerar ação." },
];

const SeoSection = () => (
  <section className="bg-main py-32 relative overflow-hidden noise-overlay">
    <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.05), transparent)" }} />
    <FloatingParticles count={12} />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="mb-16" variant="blur">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">
          <div>
            <SectionLabel text="Performance" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
              Tráfego orgânico + conversão.
              <br />
              <span className="text-gradient-intense">Sem pagar mais por isso.</span>
            </h2>
          </div>
        </div>
      </AnimatedSection>

      {/* Horizontal overlapping layout */}
      <div className="flex flex-col md:flex-row gap-6 mb-16 max-w-5xl mx-auto">
        {cards.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15} variant="fadeUp" className="flex-1">
            <div
              className="group rounded-2xl border border-primary/5 bg-primary/[0.02] p-8 card-hover-glow backdrop-blur-sm h-full"
              style={{ marginTop: i === 1 ? "-1.5rem" : i === 2 ? "1.5rem" : 0 }}
            >
              <div className="h-14 w-14 rounded-xl bg-primary/8 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(263_100%_59%_/_0.3)]">
                <c.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero tráfego orgânico →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SeoSection;
