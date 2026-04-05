import { useState, useEffect } from "react";
import crionLogo from "@/assets/crion-logo.png";

const WA_LINK = "https://wa.me/5511999999999";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(8,12,18,0.92)" : "transparent",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <img src={crionLogo} alt="Crion Digital" className="h-12" />
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-primary font-body text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          style={{ color: "#fff" }}
        >
          Solicitar proposta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
