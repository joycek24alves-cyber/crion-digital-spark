import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { MessageCircle, Paintbrush, Globe, Rocket } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const steps = [
  { num: "01", icon: MessageCircle, title: "Briefing rápido", desc: "10 minutos no WhatsApp. Sem reunião." },
  { num: "02", icon: Paintbrush, title: "Criamos tudo", desc: "Design, copy e código. Você só aprova." },
  { num: "03", icon: Globe, title: "No ar em 7 dias", desc: "Domínio, SSL e Google configurados." },
  { num: "04", icon: Rocket, title: "Começa a converter", desc: "Sua LP trabalhando 24h por você." },
];

const HowItWorksSection = () => (
  <section className="bg-alt py-28 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[120px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Simples e rápido" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          4 passos. 7 dias. <span className="text-gradient">Sem enrolação.</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.12} className="relative text-center">
            <span className="font-heading text-8xl text-primary/[0.05] absolute -top-6 left-1/2 -translate-x-1/2 select-none">{s.num}</span>
            <div className="relative pt-14">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 border border-primary/15 glow-primary">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Começar meu projeto agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorksSection;
