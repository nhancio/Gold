import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true); // Show immediately
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact Us", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 50); // Show after minimal scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/30 px-8 py-3" 
           style={{
             background: 'rgba(255, 255, 255, 0.9)',
             backdropFilter: 'blur(20px)',
             WebkitBackdropFilter: 'blur(20px)',
             border: '1px solid rgba(255, 255, 255, 0.3)',
             boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
           }}>
        <div className="flex items-center gap-4">
          {/* Desktop Navigation - Left */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.slice(0, 2).map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="rounded-full hover:bg-gray-100 hover:text-gray-900 text-gray-900 font-semibold text-base transition-all duration-300"
                asChild
              >
                <a href={item.href}>
                  {item.name}
                </a>
              </Button>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center group">
              <img 
                src="/logo white copy.png" 
                alt="OMV Gold Buyers Logo" 
                className="h-16 w-auto group-hover:scale-105 transition-transform"
              />
            </a>
          </div>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.slice(2).map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className="rounded-full hover:bg-gray-100 hover:text-gray-900 text-gray-900 font-semibold text-base transition-all duration-300"
                asChild
              >
                <a href={item.href}>
                  {item.name}
                </a>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900 hover:text-gray-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 py-2"
               style={{
                 background: 'rgba(255, 255, 255, 0.9)',
                 backdropFilter: 'blur(20px)',
                 WebkitBackdropFilter: 'blur(20px)',
                 border: '1px solid rgba(255, 255, 255, 0.3)',
                 boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
               }}>
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="justify-start rounded-none hover:bg-gray-100 text-gray-900 hover:text-gray-700 font-semibold text-base"
                  onClick={() => setMobileMenuOpen(false)}
                  asChild
                >
                  <a href={item.href}>
                    {item.name}
                  </a>
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingNav;
