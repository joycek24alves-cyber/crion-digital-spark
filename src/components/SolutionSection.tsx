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
  <section className="bg-alt py-28 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="A solução" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
          Nós <span className="text-gradient">resolvemos</span> isso.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Criamos landing pages com foco total em conversão, usando{" "}
          <strong className="text-foreground">estratégia, design e copy</strong>{" "}
          para transformar visitantes em clientes.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
        {diffs.map((d, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="flex items-start gap-4 rounded-xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-foreground/[0.04]">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/15 glow-primary">
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
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero uma página que vende →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
