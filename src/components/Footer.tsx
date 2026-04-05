import crionLogo from "@/assets/crion-logo.png";

const Footer = () => (
  <footer className="bg-alt py-14 border-t border-foreground/5">
    <div className="container mx-auto px-4 text-center flex flex-col items-center">
      <img src={crionLogo} alt="Crion Digital" className="h-10 mb-4 opacity-70" />
      <p className="font-body text-sm text-muted-foreground/60 mb-2">
        Landing Pages de alta conversão · criondigital.com.br
      </p>
      <p className="font-body text-xs text-muted-foreground/30">
        © 2026 Crion Digital · Todos os direitos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
