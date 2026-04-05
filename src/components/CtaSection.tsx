import AnimatedSection from "./AnimatedSection";
import BackgroundLines from "./BackgroundLines";
import FloatingParticles from "./FloatingParticles";

const WA_LINK = "https://wa.me/5511999999999";

const CtaSection = () => (
  <section className="relative py-32 overflow-hidden noise-overlay">
    <div className="absolute inset-0 bg-main" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(270 80% 50% / 0.08), transparent 70%)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />
    <div className="section-divider absolute bottom-0 left-0 right-0" />
    <BackgroundLines count={3} color="purple" />
    <FloatingParticles count={15} />

    <div className="relative z-10 container mx-auto px-4 text-center">
      <AnimatedSection variant="blur">
        <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-5 leading-[0.9]">
          Valor sob consulta.
        </h2>
        <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto mb-4">
          Cada negócio é único. O preço também.
        </p>
        <p className="font-body text-sm text-primary mb-12 text-glow-primary tracking-wide">
          ⚡ Resposta em menos de 2 horas
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-xl uppercase tracking-wider px-14 py-6 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Pedir minha proposta agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
