import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NumbersSection from "@/components/NumbersSection";
import PainSection from "@/components/PainSection";
import CasesSection from "@/components/CasesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SeoSection from "@/components/SeoSection";
import IncludesSection from "@/components/IncludesSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => (
  <div className="bg-main min-h-screen">
    <Navbar />
    <HeroSection />
    <NumbersSection />
    <PainSection />
    <CasesSection />
    <HowItWorksSection />
    <SeoSection />
    <IncludesSection />
    <CtaSection />
    <FaqSection />
    <FinalCtaSection />
    <Footer />
    <ChatBot />
  </div>
);

export default Index;
