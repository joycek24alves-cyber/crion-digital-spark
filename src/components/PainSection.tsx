import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { AlertTriangle } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const pains = [
  "Gasta R$ 2.000+ em ads e vê poucas conversões",
  "Sua página demora pra carregar e perde visitas",
  "Seu site não aparece no Google",
  "Usa template genérico que não passa confiança",
  "Não sabe o que mudar pra converter mais",
  "Concorrente com site pior vende mais que você",
];

const PainSection = () => (
  <section className="bg-main py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel text="Isso te parece familiar?" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          Você está <span className="text-red-500">queimando dinheiro</span> com tráfego pago?
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        {pains.map((pain, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex items-start gap-3 rounded-xl border border-red-500/10 bg-red-500/5 p-4">
              <AlertTriangle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
              <span className="font-body text-sm text-foreground/90">{pain}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="font-body text-lg text-muted-foreground mb-6">
          O problema <strong className="text-foreground">não é o tráfego</strong>. É a sua página.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-primary font-body font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Resolver isso agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default PainSection;
