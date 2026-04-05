import { useState, useEffect } from "react";
import crionLogo from "@/assets/crion-logo.png";

const WA_LINK = "https://wa.me/5511933653167";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-2xl border-b border-primary/8" : ""
      }`}
      style={{ backgroundColor: scrolled ? "hsla(260, 35%, 4%, 0.92)" : "transparent" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <img
          src={crionLogo}
          alt="Crion Digital"
          className="h-32 drop-shadow-[0_0_15px_rgba(123,46,255,0.3)] object-fill rounded-lg"
        />
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary font-body text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 glow-primary hover:glow-primary-strong"
          style={{ color: "#fff" }}
        >
          Solicitar proposta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
