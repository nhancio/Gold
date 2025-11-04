import { MessageCircle, Phone } from "lucide-react";

const FloatingContactIcons = () => {
  return (
    <div className="fixed bottom-20 md:bottom-24 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919030767878"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      
      {/* Call Icon */}
      <a
        href="tel:+919030767878"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Call"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingContactIcons;
