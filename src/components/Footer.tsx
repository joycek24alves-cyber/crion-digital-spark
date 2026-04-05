import crionLogo from "@/assets/crion-logo.png";

const Footer = () => (
  <footer className="bg-alt py-12 border-t border-foreground/5">
    <div className="container mx-auto px-4 text-center flex flex-col items-center">
      <img src={crionLogo} alt="Crion Digital" className="h-12 mb-4" />
      <p className="font-body text-sm text-muted-foreground mb-2">
        Landing Pages profissionais · criondigital.com.br
      </p>
      <p className="font-body text-xs text-muted-foreground/60">
        © 2026 Crion Digital · Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
