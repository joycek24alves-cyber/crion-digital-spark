import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import BackgroundLines from "./BackgroundLines";
import { ArrowUpRight } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const cases = [
  { tag: "Estética · SP", title: "Estética by Viviane Oliveira", desc: "LP criada do zero com foco em conversão. Resultado 3x maior.", link: "https://esteticabyvivianeoliveira.com.br" },
  { tag: "Bronzeamento · SP", title: "Spazio Bronze e Estética", desc: "LP premium que posiciona a marca e converte direto pelo WhatsApp.", link: "http://simonebybronze.com.br" },
  { tag: "Engenharia · SP", title: "Vieira Engenharia", desc: "Credibilidade instantânea. Página indexada no Google em 48h.", link: "https://vieiraengenhariacivil.com.br" },
];

const CasesSection = () => (
  <section id="cases" className="bg-main py-32 relative overflow-hidden noise-overlay">
    <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.05), transparent)" }} />
    <BackgroundLines count={3} color="mixed" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="mb-16" variant="blur">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-end">
          <div>
            <SectionLabel text="Prova real" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
              Resultados, não promessas.
            </h2>
          </div>
          <p className="font-body text-lg text-muted-foreground lg:text-right">
            Páginas reais. Clientes reais. <strong className="text-foreground">Conversão real.</strong>
          </p>
        </div>
      </AnimatedSection>

      {/* Staggered overlapping cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.18} variant="fadeUp">
            <div
              className="group rounded-2xl border border-primary/5 bg-primary/[0.02] p-8 card-hover-glow backdrop-blur-sm h-full flex flex-col"
              style={{ marginTop: i === 1 ? "2.5rem" : i === 2 ? "1rem" : 0 }}
            >
              <span className="font-body text-[11px] font-semibold text-primary/60 tracking-[0.2em] uppercase">{c.tag}</span>
              <h3 className="font-heading text-2xl text-foreground mt-3 mb-3">{c.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-8 flex-1">{c.desc}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary transition-all group-hover:gap-3">
                Ver ao vivo <ArrowUpRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero um resultado assim →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CasesSection;
