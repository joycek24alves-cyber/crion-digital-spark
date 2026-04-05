import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Rocket, BarChart3, Clock, TrendingUp } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const benefits = [
  {
    icon: Rocket,
    title: "Mais vendas com o mesmo tráfego",
    desc: "Sem gastar mais. Só convertendo melhor.",
  },
  {
    icon: BarChart3,
    title: "Melhor aproveitamento dos seus anúncios",
    desc: "Cada real investido gerando mais retorno.",
  },
  {
    icon: Clock,
    title: "Página que trabalha 24h por você",
    desc: "Vendendo enquanto você dorme.",
  },
  {
    icon: TrendingUp,
    title: "Escala previsível",
    desc: "Mais tráfego = mais resultado. Simples assim.",
  },
];

const BenefitsSection = () => (
  <section className="bg-main py-24 relative overflow-hidden">
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[120px] pointer-events-none" />

    <div className="relative container mx-auto px-4">
      <AnimatedSection className="text-center mb-14">
        <SectionLabel text="Benefícios" />
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          O que você <span className="text-gradient">ganha</span> com isso
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-14">
        {benefits.map((b, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group rounded-xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 h-full">
              <div
                className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 transition-shadow duration-300 group-hover:shadow-[0_0_25px_hsl(192_100%_50%/0.2)]"
              >
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-primary font-body font-semibold text-lg px-10 py-5 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Quero esses resultados →
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default BenefitsSection;
