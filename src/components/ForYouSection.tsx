import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { CheckCircle2 } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const profiles = [
  "Negócios que investem em tráfego pago mas não têm uma LP profissional",
  "Profissionais que precisam de uma página feita pra vender",
  "Empresas que ainda usam templates genéricos ou não têm site",
  "Quem quer uma presença online construída com estratégia de conversão",
];

const ForYouSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay">
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.05), transparent)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 container mx-auto px-4 max-w-3xl">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="É pra você?" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6 leading-[0.9]">
          Funciona <span className="text-gradient-intense">pra você?</span>
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
          Se você investe em tráfego pago e ainda não tem uma LP profissional,{" "}
          <strong className="text-foreground">sim — isso é pra você.</strong>
        </p>
      </AnimatedSection>

      <div className="space-y-3 mb-16">
        {profiles.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex items-center gap-4 rounded-2xl border border-primary/5 bg-primary/[0.02] px-7 py-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] backdrop-blur-sm">
              <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
              <span className="font-body text-base text-foreground/85">{p}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 leading-[0.95]">
          Não é sobre gastar mais em ads.{" "}
          <span className="text-gradient-intense">É sobre ter uma página feita pra vender.</span>
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero minha LP agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ForYouSection;
