import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";

const WA_LINK = "https://wa.me/5511999999999";

const CtaSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent" />
    <div className="relative container mx-auto px-4 text-center">
      <AnimatedSection>
        <SectionLabel text="Investimento" />
        <h2 className="font-heading text-5xl md:text-6xl text-foreground mb-4">Valor sob consulta</h2>
        <p className="font-body font-light text-muted-foreground max-w-md mx-auto mb-8">
          Cada projeto é único. Me conta sobre o seu negócio e te envio uma proposta personalizada.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-primary font-body font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Solicitar proposta no WhatsApp
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
