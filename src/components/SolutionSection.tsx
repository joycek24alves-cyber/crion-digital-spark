import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import BackgroundLines from "./BackgroundLines";
import FloatingParticles from "./FloatingParticles";
import { ShieldCheck, PenTool, Target, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511933653167";

const diffs = [
  { icon: ShieldCheck, title: "Estrutura validada", desc: "Arquitetura testada em dezenas de projetos reais." },
  { icon: PenTool, title: "Copy persuasiva", desc: "Cada palavra escrita para gerar ação." },
  { icon: Target, title: "Design orientado a vendas", desc: "Cada elemento existe pra converter." },
  { icon: TrendingUp, title: "Foco em resultado", desc: "Métricas, velocidade e SEO desde o dia 1." },
];

const SolutionSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay clip-diagonal-top">
    <div className="skew-stripe" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.06), transparent)" }} />
    <BackgroundLines count={4} color="mixed" />
    <FloatingParticles count={15} />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="text-center mb-16" variant="blur">
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

      {/* Overlapping asymmetric grid */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {diffs.map((d, i) => (
            <AnimatedSection key={i} delay={i * 0.12} variant={i < 2 ? "fadeLeft" : "fadeRight"}>
              <div
                className="group flex items-start gap-4 rounded-2xl border border-primary/5 bg-primary/[0.02] p-7 card-hover-glow backdrop-blur-sm"
                style={{ transform: i === 1 ? "translateY(2rem)" : i === 2 ? "translateY(-1rem)" : undefined }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 border border-primary/10 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(263_100%_59%_/_0.3)]">
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
        {/* Decorative overlapping accent */}
        <div className="absolute -bottom-8 -right-4 w-40 h-40 rounded-full blur-[80px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(263 100% 59% / 0.12), transparent)" }} />
      </div>

      <AnimatedSection className="text-center" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero uma página que vende →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
