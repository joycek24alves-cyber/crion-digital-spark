import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { CheckCircle2 } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const WA_LINK = "https://wa.me/5511933653167";

const profiles = [
  "Negócios que investem em tráfego pago mas não têm uma LP profissional",
  "Profissionais que precisam de uma página feita pra vender",
  "Empresas que ainda usam templates genéricos ou não têm site",
  "Quem quer uma presença online construída com estratégia de conversão",
];

const ForYouSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay clip-diagonal-both">
    <div className="skew-stripe" />
    <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(270 80% 50% / 0.05), transparent)" }} />
    <FloatingParticles count={10} />

    <div className="relative z-10 container mx-auto px-4">
      {/* Split layout: text left, checklist right */}
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-center max-w-5xl mx-auto">
        <AnimatedSection variant="fadeLeft">
          <SectionLabel text="É pra você?" />
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[0.9]">
            Funciona <span className="text-gradient-intense">pra você?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            Se você investe em tráfego pago e ainda não tem uma LP profissional,{" "}
            <strong className="text-foreground">sim — isso é pra você.</strong>
          </p>
          <p className="font-heading text-xl md:text-2xl text-foreground leading-tight">
            Não é sobre gastar mais em ads.{" "}
            <span className="text-gradient-intense">É sobre ter uma página feita pra vender.</span>
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {profiles.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.1} variant="fadeRight">
              <div
                className="flex items-center gap-4 rounded-2xl border border-primary/5 bg-primary/[0.02] px-7 py-5 card-hover-glow backdrop-blur-sm"
                style={{ marginLeft: `${i * 0.8}rem` }}
              >
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="font-body text-base text-foreground/85">{p}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection className="text-center mt-16" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero minha LP agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default ForYouSection;
