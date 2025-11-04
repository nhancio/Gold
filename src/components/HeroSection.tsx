import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Woman wearing elegant gold jewelry - OMV Gold Buyers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/70" />
        <div className="absolute inset-0 bg-gradient-shine opacity-20"></div>
      </div>


      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-gold border border-gold-300 rounded-full shadow-gold">
            <span className="text-luxury-white font-semibold">
              We Buy Gold & Release Pledged Gold
            </span>
          </div>
          
          <div className="mb-6 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
              <TypingEffect 
                texts={[
                  "Instantly release your pledged gold"
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={3000}
                className="text-white"
              />
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight">
              <TypingEffect 
                texts={[
                  "Turn your gold into cash"
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={3000}
                className="text-white"
                delay={2000}
              />
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Get the best rates for your gold with instant cash payment. Release your pledged gold and achieve financial freedom.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-gradient-luxury hover:bg-gradient-red-gold text-luxury-white border-0 shadow-gold-strong hover:shadow-red transition-all duration-300" 
              size="lg" 
              asChild
            >
              <a href="#contact">
                Get Best Price
              </a>
            </Button>
            <Button 
              className="bg-luxury-white/10 backdrop-blur-sm border-gold-300 text-luxury-white hover:bg-gold-500 hover:text-luxury-white transition-all duration-300" 
              size="lg" 
              asChild
            >
              <a href="tel:+919030767878">
                Call Now: +91 9030 767 878
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="text-secondary-foreground group">
              <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">100%</div>
              <div className="text-sm opacity-90">Trusted Service</div>
            </div>
            <div className="text-secondary-foreground group">
              <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">100%</div>
              <div className="text-sm opacity-90">Transparent Process</div>
            </div>
            <div className="text-secondary-foreground group">
              <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">Instant</div>
              <div className="text-sm opacity-90">Cash Payment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
