import { useState } from "react";
import { IndianRupee, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const LiveGoldRatePopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  // You can fetch this from an API later
  const goldRates = {
    '24K': 6123,
    '22K': 5610,
    '18K': 4592,
  };

  return (
    <Card className="fixed bottom-4 left-4 z-50 bg-[#121212] border-[#2a2a2a] shadow-2xl max-w-[280px]">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="bg-yellow-500 rounded-full p-2">
              <IndianRupee className="text-black" size={20} />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">TODAY'S 24K GOLD RATE</h4>
              <p className="text-yellow-400 font-semibold text-lg">₹{goldRates['24K']}/g</p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex justify-between">
            <span>22K Gold:</span>
            <span className="text-yellow-400 font-semibold">₹{goldRates['22K']}/g</span>
          </div>
          <div className="flex justify-between">
            <span>18K Gold:</span>
            <span className="text-yellow-400 font-semibold">₹{goldRates['18K']}/g</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LiveGoldRatePopup;
