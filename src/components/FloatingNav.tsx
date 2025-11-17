import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const FloatingNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services", hasDropdown: true },
  ];

  return (
    <div className="sticky md:fixed top-0 left-0 right-0 z-40 w-full">
      <div className="w-full max-w-full px-0 md:px-4 overflow-x-hidden">
      <div className="bg-red-600 rounded-none md:rounded-2xl shadow-2xl border-0 md:border border-gray-100 px-4 md:px-8 py-3 md:py-4 w-full max-w-full">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile: Logo on Left - Double Size */}
          <div className="lg:hidden flex-shrink-0">
            <a href="#home" className="flex items-center group">
              <img 
                src="/logo white copy.png" 
                alt="OMV Gold Buyers Logo" 
                className="h-28 w-auto group-hover:scale-105 transition-transform"
              />
            </a>
          </div>

          {/* Desktop: Left Navigation */}
          <nav className="hidden lg:flex items-center gap-4 flex-1">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 md:text-white hover:text-gold-600 md:hover:text-gold-300 font-medium text-sm md:text-base transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop: Logo - Center (Larger) */}
          <div className="hidden lg:block flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="flex items-center group">
              <img 
                src="/logo white copy.png" 
                alt="OMV Gold Buyers Logo" 
                className="h-28 md:h-36 w-auto group-hover:scale-105 transition-transform z-10"
              />
            </a>
          </div>

          {/* Desktop: Right Navigation */}
          <nav className="hidden lg:flex items-center gap-4 flex-1 justify-end">
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-3 ml-auto lg:ml-0">
            <Button 
              className="hidden md:flex bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
              asChild
            >
              <a href="#contact" className="flex items-center gap-1">
                CONTACT US
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            
            {/* Mobile: Hamburger on Right - White */}
            <button
              className="lg:hidden p-2 text-white hover:text-gray-200 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/30">
            <nav className="flex flex-col gap-2">
              {leftNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-300 font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 mt-2 w-full"
                asChild
              >
                <a href="#contact" className="flex items-center justify-center gap-1">
                  CONTACT US
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default FloatingNav;
