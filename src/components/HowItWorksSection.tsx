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
  <section className="bg-alt py-32 relative overflow-hidden noise-overlay clip-diagonal-top">
    <div className="skew-stripe" />
    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(260 80% 50% / 0.05), transparent)" }} />
    <BackgroundLines count={3} color="mixed" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="text-center mb-16" variant="blur">
        <SectionLabel text="Simples e rápido" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
          4 passos. 7 dias. <span className="text-gradient-intense">Sem enrolação.</span>
        </h2>
      </AnimatedSection>

      {/* Timeline-style with connecting line */}
      <div className="relative max-w-4xl mx-auto mb-16">
        {/* Vertical connecting line */}
        <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden lg:block" />

        <div className="grid lg:grid-cols-1 gap-8">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.15} variant={i % 2 === 0 ? "fadeLeft" : "fadeRight"}>
              <div
                className="flex items-start gap-8 group"
                style={{ marginLeft: i % 2 === 0 ? 0 : "auto", maxWidth: "85%", marginRight: i % 2 === 0 ? "auto" : 0 }}
              >
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="h-[4.5rem] w-[4.5rem] rounded-2xl bg-primary/8 flex items-center justify-center border border-primary/10 glow-primary transition-all duration-500 group-hover:shadow-[0_0_25px_hsl(263_100%_59%_/_0.35)]"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <s.icon size={28} className="text-primary" />
                  </motion.div>
                  <span className="absolute -top-3 -right-3 font-heading text-xs text-primary/40 tracking-widest">{s.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-heading text-2xl text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-base text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
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
