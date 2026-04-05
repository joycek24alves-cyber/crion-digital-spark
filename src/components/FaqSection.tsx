import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const faqs = [
  { q: "Quanto tempo leva para entregar minha LP?", a: "Em até 7 dias úteis após o briefing aprovado." },
  { q: "Preciso ter domínio antes de contratar?", a: "Não. O registro e configuração estão inclusos." },
  { q: "Funciona para qualquer tipo de negócio?", a: "Sim. Cada página é criada do zero para o seu nicho." },
  { q: "Como funciona o suporte de 30 dias?", a: "Ajustes de texto, cores e imagens sem custo extra." },
  { q: "Minha LP vai aparecer no Google?", a: "Sim. Configuro o Search Console e envio o sitemap." },
  { q: "Como é feito o pagamento?", a: "50% na aprovação do briefing e 50% na entrega final." },
  { q: "E a hospedagem do site, como funciona?", a: "A hospedagem é de responsabilidade do cliente e paga diretamente à plataforma de hospedagem, não para a Crion Digital. O valor varia conforme o plano e é cobrado mensalmente para manter o site no ar. Fico disponível para orientar na escolha do melhor plano." },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimatedSection delay={index * 0.06}>
      <div className="border-b border-foreground/5">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="font-body font-medium text-foreground pr-4">{q}</span>
          <span
            className={`text-primary text-xl transition-transform duration-300 flex-shrink-0 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "200px" : "0" }}
        >
          <p className="font-body text-sm font-light text-muted-foreground pb-5">{a}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

const FaqSection = () => (
  <section className="bg-alt py-24">
    <div className="container mx-auto px-4 max-w-2xl">
      <AnimatedSection className="text-center mb-12">
        <SectionLabel text="Dúvidas" />
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">Perguntas frequentes</h2>
      </AnimatedSection>
      {faqs.map((f, i) => (
        <FaqItem key={i} q={f.q} a={f.a} index={i} />
      ))}
    </div>
  </section>
);

export default FaqSection;
