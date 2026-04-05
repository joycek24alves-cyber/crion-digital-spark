import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { CheckCircle2 } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const profiles = [
  "Negócios que investem em Google Ads ou Meta Ads",
  "Profissionais que têm cliques mas poucas vendas",
  "Empresas cansadas de templates genéricos",
  "Quem quer resultados reais, não páginas bonitas",
];

const ForYouSection = () => (
  <section className="bg-alt py-28 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4 max-w-3xl">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel text="É pra você?" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Funciona <span className="text-gradient">pra você?</span>
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          Se você já investe em tráfego pago e não está tendo resultado,{" "}
          <strong className="text-foreground">sim — isso é pra você.</strong>
        </p>
      </AnimatedSection>

      <div className="space-y-3 mb-14">
        {profiles.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex items-center gap-4 rounded-xl border border-foreground/5 bg-foreground/[0.02] px-6 py-5 transition-all duration-300 hover:border-primary/30 hover:bg-foreground/[0.04]">
              <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
              <span className="font-body text-base text-foreground/90">{p}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="font-heading text-2xl md:text-3xl text-foreground mb-10">
          Não é sobre gastar mais.{" "}
          <span className="text-gradient">É sobre converter melhor.</span>
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero converter melhor →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ForYouSection;
