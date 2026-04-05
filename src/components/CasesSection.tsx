import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const cases = [
  { tag: "Estética · SP", title: "Estética by Viviane Oliveira", desc: "Conversão 3x maior após trocar site genérico pela LP da Crion.", link: "https://esteticabyvivianeoliveira.com.br" },
  { tag: "Bronzeamento · SP", title: "Spazio Bronze e Estética", desc: "LP premium que posiciona a marca e converte direto pelo WhatsApp.", link: "http://simonebybronze.com.br" },
  { tag: "Engenharia · SP", title: "Vieira Engenharia", desc: "Credibilidade instantânea. Página indexada no Google em 48h.", link: "https://vieiraengenhariacivil.com.br" },
];

const CasesSection = () => (
  <section id="cases" className="bg-main py-28 relative overflow-hidden">
    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Prova real" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">
          Resultados, não promessas.
        </h2>
        <p className="font-body text-muted-foreground text-lg">Páginas reais. Clientes reais. Conversão real.</p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 mb-14">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="group rounded-xl border border-foreground/5 bg-foreground/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:bg-foreground/[0.04] h-full flex flex-col">
              <span className="font-body text-xs font-medium text-primary/70 tracking-wide uppercase">{c.tag}</span>
              <h3 className="font-heading text-xl text-foreground mt-2 mb-3">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-6 flex-1">{c.desc}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-all group-hover:gap-2">
                Ver ao vivo <ArrowUpRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero um resultado assim →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CasesSection;
