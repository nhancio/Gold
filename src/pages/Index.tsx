import HeroSection from "@/components/HeroSection";
import GoldWidget from "@/components/GoldWidget";
import ServicesSection from "@/components/ServicesSection";
import CollapsibleProcessSection from "@/components/CollapsibleProcessSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import FloatingCTA from "@/components/FloatingCTA";
import FloatingContactIcons from "@/components/FloatingContactIcons";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <FloatingNav />
      <FloatingContactIcons />
      
      <main className="w-full overflow-x-hidden">
        {/* 1. HeroPage */}
        <HeroSection />
        
        {/* Floating CTA on Hero Page */}
        <FloatingCTA />
        
        {/* 2. CTA (GoldWidget) */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <GoldWidget />
          </div>
        </section>
        
        {/* 3. Services */}
        <ServicesSection />
        
        {/* 5. CTA (same CTA) */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <GoldWidget />
          </div>
        </section>
        
        {/* 6. Steps (Process) */}
        <CollapsibleProcessSection />
        
        {/* 7. About Us */}
        <AboutSection />
        
        {/* 8. FAQs */}
        <FAQSection />
        
        {/* 9. Contact Us */}
        <ContactSection />
      </main>
      
      {/* 10. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
