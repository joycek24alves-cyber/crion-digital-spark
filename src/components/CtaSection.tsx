import AnimatedSection from "./AnimatedSection";

const WA_LINK = "https://wa.me/5511999999999";

const CtaSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
    <div className="relative container mx-auto px-4 text-center">
      <AnimatedSection>
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
          Valor sob consulta.
        </h2>
        <p className="font-body text-xl text-muted-foreground max-w-lg mx-auto mb-3">
          Cada negócio é único. O preço também.
        </p>
        <p className="font-body text-sm text-primary mb-8">
          ⚡ Resposta em menos de 2 horas
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
          style={{ color: "#fff" }}
        >
          Pedir minha proposta agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
