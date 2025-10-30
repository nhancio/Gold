import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const FloatingCTA = () => {
  return (
<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white rounded-full shadow-2xl border border-gold-200 p-2 flex gap-2">
        <Button 
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          Sell Gold
        </Button>
        <Button 
          variant="outline"
          className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          Release Gold
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
