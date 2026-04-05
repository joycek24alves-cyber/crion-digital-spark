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
  <section className="bg-alt py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel text="Simples e rápido" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          4 passos. 7 dias. Sem enrolação.
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.12} className="relative text-center">
            <span className="font-heading text-8xl text-primary/[0.06] absolute -top-6 left-1/2 -translate-x-1/2 select-none">
              {s.num}
            </span>
            <div className="relative pt-12">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
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
          Começar meu projeto agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorksSection;
