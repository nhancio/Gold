import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CalculatorSection from "@/components/CalculatorSection";
import ServicesSection from "@/components/ServicesSection";
import CollapsibleProcessSection from "@/components/CollapsibleProcessSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import FloatingCTA from "@/components/FloatingCTA";
import TopBanner from "@/components/TopBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBanner />
      <FloatingNav />
      <FloatingCTA />
      <main>
        <HeroSection />
        <AboutSection />
        <CalculatorSection />
        <ServicesSection />
        <CollapsibleProcessSection />
        <ComparisonSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
