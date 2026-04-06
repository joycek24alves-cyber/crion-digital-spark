import { useState } from "react";

const WA_LINK = "https://wa.me/5511933653167";

const ContactFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const msg = encodeURIComponent(`Olá! Meu nome é ${name.trim()} e meu telefone é ${phone.trim()}. Gostaria de saber mais sobre os serviços da Crion.`);
    window.open(`${WA_LINK}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contato" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Fale conosco
        </h2>
        <p className="text-muted-foreground text-center mb-10 font-body">
          Preencha seus dados e entraremos em contato.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-card/60 backdrop-blur-xl border border-primary/10 rounded-2xl p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-sm font-medium text-foreground/80 font-body">
              Nome
            </label>
            <input
              id="contact-name"
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="h-12 w-full rounded-xl border border-primary/20 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-body"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-phone" className="text-sm font-medium text-foreground/80 font-body">
              Telefone
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(11) 99999-9999"
              className="h-12 w-full rounded-xl border border-primary/20 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-body"
            />
          </div>
          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-xl bg-gradient-primary font-body text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 glow-primary hover:glow-primary-strong"
          >
            {submitted ? "Enviado! ✓" : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;
