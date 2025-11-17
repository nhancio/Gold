import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function GoldWidget() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#121212] rounded-2xl p-4 md:p-8 w-full max-w-[340px] md:max-w-4xl mx-auto shadow-lg text-white">
      {/* Sell & Release Gold Buttons */}
      <div className="flex gap-2 mb-4 md:mb-6 md:justify-center">
        <button className="flex-1 md:flex-initial md:min-w-[220px] bg-blue-600 hover:bg-blue-700 text-white py-2.5 md:py-4 rounded-lg font-semibold transition text-sm md:text-lg shadow-md hover:shadow-lg">
          Sell Gold
        </button>
        <button className="flex-1 md:flex-initial md:min-w-[220px] bg-white hover:bg-gray-100 text-black py-2.5 md:py-4 rounded-lg font-semibold transition text-sm md:text-lg shadow-md hover:shadow-lg">
          Release Gold
        </button>
      </div>

      {/* Bottom Contact Bar */}
      <div className="bg-[#1e1e1e] rounded-xl flex items-center justify-between p-3 md:p-5">
        <a 
          href="https://wa.me/919030767878" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 rounded-full p-2.5 md:p-4 hover:bg-green-600 transition hover:scale-110"
        >
          <MessageCircle size={18} className="md:w-6 md:h-6 text-white" />
        </a>
        <span className="text-gray-200 text-sm md:text-lg font-medium md:font-semibold">+91 9030 767 878</span>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-red-400 transition"
        >
          <X size={18} className="md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
