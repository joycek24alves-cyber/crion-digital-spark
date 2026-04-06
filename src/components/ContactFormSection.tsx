import { useForm, ValidationError } from "@formspree/react";

const ContactFormSection = () => {
  const [state, handleSubmit] = useForm("mdapyrej");

  return (
    <section id="contato" className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-lg">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Fale conosco
        </h2>
        <p className="text-muted-foreground text-center mb-10 font-body">
          Preencha seus dados e entraremos em contato.
        </p>

        {state.succeeded ? (
          <div className="bg-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-10 text-center">
            <p className="text-2xl font-heading font-bold text-primary mb-2">Enviado! ✓</p>
            <p className="text-muted-foreground font-body">Entraremos em contato em breve.</p>
          </div>
        ) : (
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
                name="name"
                required
                maxLength={100}
                placeholder="Seu nome"
                className="h-12 w-full rounded-xl border border-primary/20 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-body"
              />
              <ValidationError field="name" prefix="Nome" errors={state.errors} className="text-sm text-destructive" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-phone" className="text-sm font-medium text-foreground/80 font-body">
                Telefone
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                required
                maxLength={20}
                placeholder="(11) 99999-9999"
                className="h-12 w-full rounded-xl border border-primary/20 bg-background/50 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-body"
              />
              <ValidationError field="phone" prefix="Telefone" errors={state.errors} className="text-sm text-destructive" />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="mt-2 h-12 w-full rounded-xl bg-gradient-primary font-body text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 glow-primary hover:glow-primary-strong disabled:opacity-50 disabled:pointer-events-none"
            >
              {state.submitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactFormSection;
