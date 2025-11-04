import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

const FloatingNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Branches", href: "#branches" },
    { name: "Contact", href: "#contact" },
  ];

  const rightNavItems = [
    { name: "Owner's Message", href: "#owner-message" },
    { name: "Blogs", href: "#blogs" },
  ];

  return (
    <div className="fixed top-[40px] md:top-[36px] left-0 right-0 z-50 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-4 flex-1">
            {leftNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-gold-600 font-medium text-sm md:text-base transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </a>
            ))}
          </nav>

          {/* Logo - Center (Larger) */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="flex items-center group">
              <img 
                src="/logo white copy.png" 
                alt="OMV Gold Buyers Logo" 
                className="h-16 md:h-24 w-auto group-hover:scale-105 transition-transform z-10"
              />
            </a>
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center gap-4 flex-1 justify-end">
            {rightNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-gold-600 font-medium text-sm md:text-base transition-colors"
              >
                {item.name}
              </a>
            ))}
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
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900 hover:text-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-red-600" /> : <Menu className="h-6 w-6 text-red-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-gold-600 font-medium py-2 transition-colors flex items-center gap-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {'hasDropdown' in item && item.hasDropdown && <ChevronDown className="h-4 w-4" />}
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
