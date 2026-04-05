import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import BackgroundLines from "./BackgroundLines";
import FloatingParticles from "./FloatingParticles";
import { Rocket, BarChart3, Clock, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const benefits = [
  { icon: Rocket, title: "Uma página construída pra vender", desc: "Do zero. Com estratégia. Sem template." },
  { icon: BarChart3, title: "Seus anúncios finalmente dão retorno", desc: "Tráfego pago + LP estratégica = vendas reais." },
  { icon: Clock, title: "Página que trabalha 24h por você", desc: "Vendendo enquanto você dorme." },
  { icon: TrendingUp, title: "Escala previsível", desc: "Mais tráfego = mais resultado. Simples." },
];

const BenefitsSection = () => (
  <section className="bg-main py-32 relative overflow-hidden noise-overlay clip-diagonal-bottom">
    <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none" style={{ background: "radial-gradient(circle, hsl(280 80% 50% / 0.05), transparent)" }} />
    <BackgroundLines count={3} color="purple" />
    <FloatingParticles count={18} />

    <div className="relative z-10 container mx-auto px-4">
      <AnimatedSection className="mb-16" variant="blur">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end">
          <div>
            <SectionLabel text="Benefícios" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[0.9]">
              O que você <span className="text-gradient-intense">ganha</span> com isso
            </h2>
          </div>
          <p className="font-body text-lg text-muted-foreground leading-relaxed lg:text-right">
            Cada detalhe pensado para que seu investimento em tráfego <strong className="text-foreground">finalmente dê retorno.</strong>
          </p>
        </div>
      </AnimatedSection>

      {/* Bento-style asymmetric grid */}
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
        {benefits.map((b, i) => (
          <AnimatedSection key={i} delay={i * 0.1} variant={i % 2 === 0 ? "fadeUp" : "scaleUp"}>
            <div
              className={`group rounded-2xl border border-primary/5 bg-primary/[0.02] p-8 card-hover-glow backdrop-blur-sm h-full ${
                i === 0 ? "sm:row-span-2 flex flex-col justify-center" : ""
              }`}
              style={i === 0 ? { minHeight: "280px" } : undefined}
            >
              <div className="h-12 w-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 border border-primary/10 transition-all duration-500 group-hover:shadow-[0_0_20px_hsl(263_100%_59%_/_0.3)]">
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className={`font-heading text-foreground mb-2 ${i === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" variant="scaleUp">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-primary font-body font-bold text-lg uppercase tracking-wider px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 glow-cta hover:glow-cta-hover" style={{ color: "#fff" }}>
          Quero esses resultados →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;
