import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Search, Zap, Globe } from "lucide-react";

const cards = [
  { icon: Search, title: "SEO On-Page", desc: "Títulos, descrições e estrutura otimizados para os algoritmos do Google." },
  { icon: Zap, title: "Velocidade de carregamento", desc: "Sites rápidos ranqueiam melhor e convertem mais visitantes." },
  { icon: Globe, title: "Indexação garantida", desc: "Configuração do Google Search Console e envio do sitemap no dia da entrega." },
];

const SeoSection = () => (
  <section className="bg-main py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Tráfego orgânico" />
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Seu site vendendo por si só</h2>
        <p className="font-body font-light text-muted-foreground max-w-xl mx-auto">
          Cada LP entregue é otimizada com técnicas de SEO para aparecer nas buscas do Google de forma orgânica, sem depender só de tráfego pago.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="rounded-xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <c.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{c.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground">{c.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SeoSection;
