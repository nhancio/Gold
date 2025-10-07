import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Star, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-gold.jpg";
import { DiamondIcon, CrownIcon, GemIcon, SparkleIcon } from "@/assets/jewelry-icons";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Benaka Gold Company - Trusted Gold Buyers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/70" />
        <div className="absolute inset-0 bg-gradient-shine opacity-20"></div>
      </div>

      {/* Floating Jewelry Icons */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <DiamondIcon className="absolute top-20 left-10 h-8 w-8 text-gold-400 animate-pulse opacity-60" />
        <CrownIcon className="absolute top-40 right-20 h-6 w-6 text-gold-300 animate-bounce opacity-50" />
        <GemIcon className="absolute bottom-40 left-20 h-7 w-7 text-gold-500 animate-pulse opacity-70" />
        <SparkleIcon className="absolute top-60 left-1/4 h-5 w-5 text-luxury-red animate-pulse opacity-80" />
        <Star className="absolute bottom-60 right-1/4 h-6 w-6 text-gold-400 animate-bounce opacity-60" />
        <DiamondIcon className="absolute top-1/3 right-10 h-4 w-4 text-gold-300 animate-pulse opacity-50" />
        <GemIcon className="absolute bottom-1/3 left-1/3 h-5 w-5 text-luxury-red animate-bounce opacity-70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-6 py-3 bg-gradient-gold border border-gold-300 rounded-full shadow-gold">
            <span className="text-luxury-white font-semibold flex items-center gap-2">
              <CrownIcon className="h-4 w-4" />
              Govt Certified Gold Appraiser
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-foreground mb-6 leading-tight">
            Get <span className="bg-gradient-luxury bg-clip-text text-transparent relative">
              Instant Cash
              <SparkleIcon className="absolute -top-2 -right-2 h-6 w-6 text-luxury-red animate-pulse" />
            </span> for Your Gold
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 leading-relaxed">
            Selling your gold shouldn't be complicated. As trusted Gold Buyers, Benaka Gold Company offers a simple, secure, and transparent process.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-gradient-luxury hover:bg-gradient-red-gold text-luxury-white border-0 shadow-gold-strong hover:shadow-red transition-all duration-300 group" 
              size="lg" 
              asChild
            >
              <a href="#contact">
                <GemIcon className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                Get Special Offer
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              className="bg-luxury-white/10 backdrop-blur-sm border-gold-300 text-luxury-white hover:bg-gold-500 hover:text-luxury-white transition-all duration-300 group" 
              size="lg" 
              asChild
            >
              <a href="tel:6366333444">
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now: 6366333444
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="text-secondary-foreground group">
              <div className="flex items-center gap-2 mb-1">
                <DiamondIcon className="h-5 w-5 text-gold-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">35+</div>
              </div>
              <div className="text-sm opacity-90">Branches Across South India</div>
            </div>
            <div className="text-secondary-foreground group">
              <div className="flex items-center gap-2 mb-1">
                <CrownIcon className="h-5 w-5 text-gold-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">100%</div>
              </div>
              <div className="text-sm opacity-90">Transparent Process</div>
            </div>
            <div className="text-secondary-foreground group">
              <div className="flex items-center gap-2 mb-1">
                <SparkleIcon className="h-5 w-5 text-luxury-red group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">Instant</div>
              </div>
              <div className="text-sm opacity-90">Cash Payment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
