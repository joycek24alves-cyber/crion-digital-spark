import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const WA_LINK = "https://wa.me/5511999999999";

const faqs = [
  { q: "Quanto tempo leva?", a: "7 dias úteis. Do briefing à página no ar." },
  { q: "Preciso ter domínio?", a: "Não. Registro e configuração inclusos." },
  { q: "Funciona pro meu nicho?", a: "Sim. Cada LP é criada do zero pro seu negócio." },
  { q: "E o suporte?", a: "30 dias de ajustes sem custo extra." },
  { q: "Vai aparecer no Google?", a: "Sim. Search Console + sitemap configurados na entrega." },
  { q: "Como pago?", a: "50% no briefing, 50% na entrega. Simples." },
  { q: "E a hospedagem?", a: "Paga direto à plataforma. Te oriento na escolha." },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.06}>
      <div className="border-b border-primary/5">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-6 text-left group">
          <span className="font-body font-medium text-foreground text-base pr-4">{q}</span>
          <span className={`text-primary text-xl transition-transform duration-300 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
        </button>
        <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "200px" : "0" }}>
          <p className="font-body text-sm text-muted-foreground pb-6">{a}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

const FaqSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay">
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 container mx-auto px-4 max-w-2xl">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Dúvidas" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground leading-[0.9]">Sem enrolação.</h2>
      </AnimatedSection>
      {faqs.map((f, i) => (
        <FaqItem key={i} q={f.q} a={f.a} index={i} />
      ))}
      <AnimatedSection className="text-center mt-16">
        <p className="font-body text-muted-foreground mb-6">Ainda tem dúvida?</p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Falar comigo no WhatsApp →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default FaqSection;
