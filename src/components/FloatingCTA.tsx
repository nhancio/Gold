import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        setIsVisible(scrollPosition < heroBottom + 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="bg-white rounded-full shadow-2xl border border-gold-200 p-3 flex gap-3 items-center relative">
        <Button 
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-4 md:px-10 py-2.5 md:py-4 text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          size="lg"
          onClick={() => navigate("/sell-gold")}
        >
          <span className="whitespace-nowrap">Sell Gold</span>
        </Button>
        <Button 
          variant="outline"
          className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold rounded-full px-4 md:px-10 py-2.5 md:py-4 text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          size="lg"
          onClick={() => navigate("/release-gold")}
        >
          <span className="whitespace-nowrap">Release Gold</span>
        </Button>
        {/* Phone Number */}
        <a
          href="tel:+919030767878"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-3 md:px-6 py-2.5 md:py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 font-bold text-xs md:text-base flex-shrink-0"
          aria-label="Call"
        >
          <span className="hidden md:inline">Call</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
