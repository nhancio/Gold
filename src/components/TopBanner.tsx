import { Clock, Phone, Mail, Facebook, Instagram } from "lucide-react";

const TopBanner = () => {
  return (
    <div className="bg-red-600 text-white py-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-shine opacity-30"></div>
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm relative z-10">
        <div className="flex items-center gap-6">
          <a href="tel:+919030767878" className="hover:text-white transition-colors flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline font-medium">+91 9030 767 878</span>
          </a>
          <a href="mailto:omvgoldchandanagar@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline font-medium">omvgoldchandanagar@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="hidden md:inline text-white/80">Mon - Sat: 9:30am - 6:30pm</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
