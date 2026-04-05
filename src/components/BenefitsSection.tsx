import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Rocket, BarChart3, Clock, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const benefits = [
  { icon: Rocket, title: "Mais vendas com o mesmo tráfego", desc: "Sem gastar mais. Só convertendo melhor." },
  { icon: BarChart3, title: "Melhor aproveitamento dos anúncios", desc: "Cada real investido gerando mais retorno." },
  { icon: Clock, title: "Página que trabalha 24h por você", desc: "Vendendo enquanto você dorme." },
  { icon: TrendingUp, title: "Escala previsível", desc: "Mais tráfego = mais resultado. Simples." },
];

const BenefitsSection = () => (
  <section className="bg-main py-32 relative overflow-hidden noise-overlay">
    <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(280 80% 50% / 0.05), transparent)" }} />
    <div className="section-divider absolute top-0 left-0 right-0" />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="Benefícios" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
          O que você <span className="text-gradient-intense">ganha</span> com isso
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
        {benefits.map((b, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group rounded-2xl border border-primary/5 bg-primary/[0.02] p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:bg-primary/[0.04] backdrop-blur-sm h-full">
              <div className="h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-300 group-hover:glow-primary-strong">
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero esses resultados →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;
