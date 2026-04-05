import AnimatedSection from "./AnimatedSection";
import SectionLabel from "./SectionLabel";
import { Layout, Globe, Search, ShieldCheck, Smartphone, Headphones } from "lucide-react";

const items = [
  { icon: Layout, title: "Landing Page profissional", desc: "Design exclusivo, moderno e focado em conversão para o seu negócio." },
  { icon: Globe, title: "Domínio .com.br", desc: "Registro e configuração do seu domínio próprio inclusos no pacote." },
  { icon: Search, title: "Indexação no Google", desc: "Search Console configurado e sitemap enviado para aparecer nas buscas." },
  { icon: ShieldCheck, title: "SSL e segurança", desc: "Certificado SSL gratuito para seu site ser seguro e confiável." },
  { icon: Smartphone, title: "100% responsivo", desc: "Perfeito em qualquer dispositivo: celular, tablet ou desktop." },
  { icon: Headphones, title: "Suporte por 30 dias", desc: "Ajustes de texto, cores e imagens sem custo extra por 30 dias." },
];

const IncludesSection = () => (
  <section className="bg-alt py-24">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel text="O que está incluso" />
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Tudo que você precisa</h2>
        <p className="font-body font-light text-muted-foreground max-w-lg mx-auto">
          Uma solução completa, pronta para atrair clientes todos os dias.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="rounded-xl border border-foreground/5 bg-foreground/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-sm font-light text-muted-foreground">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default IncludesSection;
