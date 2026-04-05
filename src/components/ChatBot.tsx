import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WA_LINK = "https://wa.me/5511999999999";

const options = [
  { label: "Qual o prazo?", answer: "Entregamos sua LP em até 7 dias úteis após a aprovação do briefing." },
  { label: "O que está incluso?", answer: "LP profissional, domínio .com.br, indexação no Google, SSL, design responsivo e 30 dias de suporte." },
  { label: "Como funciona?", answer: "Briefing pelo WhatsApp, criamos sua LP em 7 dias, publicamos e oferecemos 30 dias de suporte." },
  { label: "Falar com humano", answer: "__whatsapp__" },
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Olá! Como posso te ajudar?", isBot: true },
  ]);

  const handleOption = (opt: (typeof options)[0]) => {
    if (opt.answer === "__whatsapp__") {
      window.open(WA_LINK, "_blank");
      return;
    }
    setMessages((prev) => [...prev, { text: opt.label, isBot: false }, { text: opt.answer, isBot: true }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-80 rounded-2xl overflow-hidden border border-primary/10 shadow-2xl backdrop-blur-sm"
            style={{ backgroundColor: "hsl(260 35% 5% / 0.95)" }}
          >
            <div className="bg-gradient-primary p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <MessageCircle size={18} style={{ color: "#fff" }} />
              </div>
              <div>
                <p className="font-body font-semibold text-sm" style={{ color: "#fff" }}>Crion Digital</p>
                <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Online agora</p>
              </div>
            </div>
            <div className="p-4 max-h-64 overflow-y-auto space-y-3">
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: msg.isBot ? 0.5 : 0, duration: 0.3 }} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 font-body text-sm ${msg.isBot ? "bg-primary/5 text-foreground border border-primary/5" : "bg-gradient-primary"}`} style={!msg.isBot ? { color: "#fff" } : undefined}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 pt-0 grid grid-cols-2 gap-2">
              {options.map((opt, i) => (
                <button key={i} onClick={() => handleOption(opt)} className="font-body text-xs font-medium text-primary border border-primary/15 rounded-xl px-3 py-2 transition-all hover:bg-primary/10 hover:border-primary/30">
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className="h-14 w-14 rounded-full bg-gradient-primary flex items-center justify-center transition-transform hover:scale-110 glow-primary-strong">
        {open ? <X size={22} style={{ color: "#fff" }} /> : <MessageCircle size={22} style={{ color: "#fff" }} />}
      </button>
    </div>
  );
};

export default ChatBot;
