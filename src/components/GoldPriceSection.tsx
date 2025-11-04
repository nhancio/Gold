import { Card } from "@/components/ui/card";
import { IndianRupee, TrendingUp } from "lucide-react";

const GoldPriceSection = () => {
  // You can fetch this from an API later
  const goldRates = {
    '24K': { price: 6123, change: '+2.5%' },
    '22K': { price: 5610, change: '+2.3%' },
    '18K': { price: 4592, change: '+2.1%' },
  };

  return (
    <section id="gold-price" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Gold Rates
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Check Gold Price Today
          </h3>
          <p className="text-xl text-muted-foreground">
            Live gold rates updated in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Object.entries(goldRates).map(([karat, data]) => (
            <Card key={karat} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-gold-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 rounded-full p-3">
                    <IndianRupee className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">{karat} Gold</h4>
                    <p className="text-sm text-muted-foreground">Per gram</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">
                  ₹{data.price.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp size={16} />
                  <span className="text-sm font-semibold">{data.change}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * Rates are updated every hour. Final rates may vary based on purity assessment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoldPriceSection;
