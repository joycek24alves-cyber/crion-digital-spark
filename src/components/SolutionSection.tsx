import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { ShieldCheck, PenTool, Target, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const diffs = [
  { icon: ShieldCheck, title: "Estrutura validada", desc: "Arquitetura de página testada e aprovada em dezenas de projetos." },
  { icon: PenTool, title: "Copy persuasiva", desc: "Cada palavra escrita para gerar ação e eliminar objeções." },
  { icon: Target, title: "Design orientado a vendas", desc: "Nada de firula. Cada elemento existe pra converter." },
  { icon: TrendingUp, title: "Foco em resultado", desc: "Métricas, velocidade e SEO pensados desde o dia 1." },
];

const SolutionSection = () => (
  <section className="bg-alt py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[140px] pointer-events-none" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
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
            <div className="flex items-start gap-4 rounded-xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20"
                style={{ boxShadow: "0 0 20px hsl(192 100% 50% / 0.1)" }}
              >
                <d.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground mb-1">{d.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-lg transition-all duration-300 hover:-translate-y-1"
          style={{
            background: "linear-gradient(135deg, #00c6ff, #5b5ef4)",
            color: "#fff",
            boxShadow: "0 0 30px hsl(192 100% 50% / 0.25), 0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <span className="relative z-10">Quero uma página que vende →</span>
          <div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(135deg, #33d4ff, #7b7ef6)",
              boxShadow: "0 0 50px hsl(192 100% 50% / 0.4), 0 0 100px hsl(239 89% 65% / 0.2)",
            }}
          />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default SolutionSection;
