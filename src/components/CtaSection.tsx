import AnimatedSection from "./AnimatedSection";

const WA_LINK = "https://wa.me/5511999999999";

const CtaSection = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-secondary/[0.06] to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[160px] pointer-events-none" />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative container mx-auto px-4 text-center">
      <AnimatedSection>
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
          Valor sob consulta.
        </h2>
        <p className="font-body text-xl text-muted-foreground max-w-lg mx-auto mb-3">
          Cada negócio é único. O preço também.
        </p>
        <p className="font-body text-sm text-primary mb-10 text-glow-primary">
          ⚡ Resposta em menos de 2 horas
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-xl uppercase tracking-wider px-12 py-6 rounded-xl transition-all duration-300 hover:-translate-y-1 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Pedir minha proposta agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
