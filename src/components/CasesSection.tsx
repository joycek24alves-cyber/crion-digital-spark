import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "Estética · São Paulo",
    title: "Estética by Viviane Oliveira",
    desc: "Landing page criada para clínica de estética, com foco em conversão e presença no Google.",
    link: "https://esteticabyvivianeoliveira.com.br",
  },
  {
    tag: "Bronzeamento · SP",
    title: "Spazio Bronze e Estética",
    desc: "LP premium para estúdio de bronzeamento, com design sofisticado e otimização SEO.",
    link: "http://simonebybronze.com.br",
  },
  {
    tag: "Engenharia Civil · SP",
    title: "Vieira Engenharia",
    desc: "Landing page de alto padrão para empresa de engenharia civil, transmitindo credibilidade.",
    link: "https://vieiraengenhariacivil.com.br",
  },
];

const CasesSection = () => (
  <section id="cases" className="bg-main py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Portfólio" />
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Cases reais</h2>
        <p className="font-body font-light text-muted-foreground max-w-lg mx-auto">
          Páginas criadas para negócios reais, indexadas no Google e gerando resultados.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="group rounded-xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="#00c6ff" strokeWidth="1.5" />
                  <path d="M3 9h18" stroke="#5b5ef4" strokeWidth="1.5" />
                  <circle cx="6" cy="6" r="1" fill="#00c6ff" />
                  <circle cx="9" cy="6" r="1" fill="#5b5ef4" />
                </svg>
              </div>
              <span className="font-body text-xs font-medium text-primary/70 tracking-wide uppercase">
                {c.tag}
              </span>
              <h3 className="font-heading text-xl text-foreground mt-2 mb-3">{c.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground mb-6">{c.desc}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-all group-hover:gap-2"
              >
                Ver página <ArrowUpRight size={14} />
              </a>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CasesSection;
