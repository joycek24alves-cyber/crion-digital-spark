import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { MessageCircle, Paintbrush, Globe, Headphones } from "lucide-react";

const steps = [
  { num: "01", icon: MessageCircle, title: "Briefing no WhatsApp", desc: "Conversa rápida para entender seu negócio, público e objetivo da página." },
  { num: "02", icon: Paintbrush, title: "Criação em até 7 dias", desc: "Design, desenvolvimento e otimização SEO feitos com atenção a cada detalhe." },
  { num: "03", icon: Globe, title: "No ar com domínio próprio", desc: "Publicação com seu domínio .com.br, SSL e indexação no Google configurados." },
  { num: "04", icon: Headphones, title: "Suporte por 30 dias", desc: "Ajustes de texto, cores e imagens sem custo extra durante 30 dias." },
];

const HowItWorksSection = () => (
  <section className="bg-alt py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Como funciona" />
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">Do briefing à entrega</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.12} className="relative text-center">
            <span className="font-heading text-7xl text-primary/[0.08] absolute -top-4 left-1/2 -translate-x-1/2 select-none">
              {s.num}
            </span>
            <div className="relative pt-10">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
