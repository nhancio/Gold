import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);

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
      <div className="bg-white rounded-full shadow-2xl border border-gold-200 p-3 flex gap-3">
        <Button 
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          Sell Gold
        </Button>
        <Button 
          variant="outline"
          className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          Release Gold
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
