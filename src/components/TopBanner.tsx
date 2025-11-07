import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const TopBanner = () => {
  return (
    <>
      {/* Mobile: Red Strip with Mobile Number */}
      <div className="md:hidden bg-red-600 text-white py-2 px-4 text-center sticky top-0 z-50">
        <a href="tel:+919030767878" className="hover:text-white transition-colors flex items-center justify-center gap-2">
          <Phone className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm font-medium">+91 9030 767 878</span>
        </a>
      </div>

      {/* Desktop: Full Banner */}
      <div className="hidden md:block bg-red-600 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-shine opacity-30"></div>
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm relative z-10">
          <div className="flex items-center gap-3 md:gap-6 flex-wrap">
            <a href="tel:+919030767878" className="hover:text-white transition-colors flex items-center gap-1 md:gap-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium">+91 9030 767 878</span>
            </a>
            <a href="mailto:omvgoldchandanagar@gmail.com" className="hover:text-white transition-colors flex items-center gap-1 md:gap-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="hidden sm:inline text-xs md:text-sm font-medium">omvgoldchandanagar@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://www.facebook.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a href="https://www.instagram.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
