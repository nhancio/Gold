import { Phone } from "lucide-react";

const FloatingContactIcons = () => {
  return (
    <div className="fixed bottom-4 md:bottom-24 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Icon - Using WA.png */}
      <a
        href="https://wa.me/919030767878"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <img 
          src="/images/WA.png" 
          alt="WhatsApp" 
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </a>
      
      {/* Call Icon */}
      <a
        href="tel:+919030767878"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 md:p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Call"
      >
        <Phone size={24} className="md:w-6 md:h-6" />
      </a>
    </div>
  );
};

export default FloatingContactIcons;
