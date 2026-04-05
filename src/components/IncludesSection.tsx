import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Layout, Globe, Search, ShieldCheck, Smartphone, Headphones } from "lucide-react";
import { Check } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const items = [
  { icon: Layout, title: "LP de alta conversão" },
  { icon: Globe, title: "Domínio .com.br" },
  { icon: Search, title: "Indexação no Google" },
  { icon: ShieldCheck, title: "SSL e segurança" },
  { icon: Smartphone, title: "100% responsivo" },
  { icon: Headphones, title: "30 dias de suporte" },
];

const IncludesSection = () => (
  <section className="bg-alt py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel text="Tudo incluso" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-3">
          Você recebe. Tudo isso.
        </h2>
        <p className="font-body text-muted-foreground">
          Sem surpresas. Sem custos escondidos.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-center gap-3 rounded-xl border border-foreground/5 bg-foreground/[0.02] p-5 transition-all duration-300 hover:border-primary/40">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check size={18} className="text-primary" />
              </div>
              <span className="font-heading text-lg text-foreground">{item.title}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-primary font-body font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Solicitar proposta →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default IncludesSection;
