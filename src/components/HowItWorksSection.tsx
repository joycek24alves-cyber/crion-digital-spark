import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import BackgroundLines from "./BackgroundLines";
import { MessageCircle, Paintbrush, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5511999999999";

const steps = [
  { num: "01", icon: MessageCircle, title: "Briefing rápido", desc: "10 min no WhatsApp. Sem reunião." },
  { num: "02", icon: Paintbrush, title: "Criamos tudo", desc: "Design, copy e código. Você só aprova." },
  { num: "03", icon: Globe, title: "No ar em 7 dias", desc: "Domínio, SSL e Google configurados." },
  { num: "04", icon: Rocket, title: "Começa a converter", desc: "Sua LP trabalhando 24h por você." },
];

const HowItWorksSection = () => (
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay">
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(260 80% 50% / 0.05), transparent)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />
    <BackgroundLines count={3} color="mixed" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <SectionLabel text="Simples e rápido" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
          4 passos. 7 dias. <span className="text-gradient-intense">Sem enrolação.</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {steps.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.15} variant="fadeUp" className="relative text-center">
            <motion.span
              className="font-heading text-[6rem] text-primary/[0.04] absolute -top-4 left-1/2 -translate-x-1/2 select-none leading-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 + 0.2 }}
            >
              {s.num}
            </motion.span>
            <div className="relative pt-16">
              <div className="h-14 w-14 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-5 border border-primary/10 glow-primary transition-all duration-500 hover:shadow-[0_0_25px_hsl(263_100%_59%_/_0.35)]">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Começar meu projeto agora →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default HowItWorksSection;
