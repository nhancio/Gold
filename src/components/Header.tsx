import { Phone, MapPin, Menu, X, Star, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DiamondIcon, CrownIcon, SparkleIcon } from "@/assets/jewelry-icons";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Branches", href: "#branches" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-luxury-white via-luxury-cream to-luxury-white/95 backdrop-blur-md border-b border-gold-200 shadow-gold">
      {/* Top Bar */}
      <div className="bg-gradient-gold text-luxury-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-shine opacity-30"></div>
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm relative z-10">
          <div className="flex items-center gap-4">
            <a href="tel:6366333444" className="flex items-center gap-2 hover:text-luxury-white transition-colors group">
              <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline font-medium">6366333444</span>
            </a>
            <span className="hidden md:inline text-luxury-white/80">Mon - Sun: 9:30am - 7:00pm</span>
          </div>
          <div className="flex items-center gap-2">
            <SparkleIcon className="h-4 w-4 text-luxury-white animate-pulse" />
            <span className="text-luxury-white font-semibold animate-pulse">We Are Hiring !!!</span>
            <Star className="h-4 w-4 text-luxury-white animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <CrownIcon className="h-8 w-8 text-gold-500 group-hover:text-gold-600 transition-colors" />
              <DiamondIcon className="h-3 w-3 text-luxury-red absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
              BENAKA GOLD
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-gold-600 transition-colors font-medium relative group"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              className="bg-gradient-gold hover:bg-gradient-gold-dark text-luxury-white border-0 shadow-gold hover:shadow-gold-strong transition-all duration-300 group" 
              size="lg" 
              asChild
            >
              <a href="#branches">
                <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Find Nearest Branch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold-200 bg-gradient-to-b from-luxury-white to-luxury-cream">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-gold-600 transition-colors font-medium px-2 py-1 relative group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <div className="absolute left-0 top-0 w-0 h-full bg-gradient-gold group-hover:w-1 transition-all duration-300"></div>
                </a>
              ))}
              <Button 
                className="mt-2 bg-gradient-gold hover:bg-gradient-gold-dark text-luxury-white border-0 shadow-gold" 
                asChild
              >
                <a href="#branches">
                  <MapPin className="h-4 w-4" />
                  Find Nearest Branch
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
