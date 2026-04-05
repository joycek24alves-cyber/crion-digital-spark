import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { ShieldCheck, PenTool, Target, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const diffs = [
  { icon: ShieldCheck, title: "Estrutura validada", desc: "Arquitetura testada em dezenas de projetos reais." },
  { icon: PenTool, title: "Copy persuasiva", desc: "Cada palavra escrita para gerar ação." },
  { icon: Target, title: "Design orientado a vendas", desc: "Cada elemento existe pra converter." },
  { icon: TrendingUp, title: "Foco em resultado", desc: "Métricas, velocidade e SEO desde o dia 1." },
];

const SolutionSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.06), transparent)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="A solução" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 leading-[0.9]">
          Nós <span className="text-gradient-intense" style={{ filter: "drop-shadow(0 0 30px hsl(270 80% 65% / 0.3))" }}>resolvemos</span> isso.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Construímos landing pages do zero, com{" "}
          <strong className="text-foreground">estrutura estratégica, design e copy</strong>{" "}
          pensados para transformar visitantes em clientes.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
        {diffs.map((d, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="group flex items-start gap-4 rounded-2xl border border-primary/5 bg-primary/[0.02] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:bg-primary/[0.04] backdrop-blur-sm">
              <div className="h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 border border-primary/10 transition-all duration-300 group-hover:glow-primary-strong">
                <d.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">{d.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero uma página que vende →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
