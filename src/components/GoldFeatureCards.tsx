import { Card } from "@/components/ui/card";
import { IndianRupee, Scale, Shield, Zap, TrendingUp, DollarSign } from "lucide-react";

const GoldFeatureCards = () => {
  const features = [
    {
      icon: IndianRupee,
      title: "24K Gold",
      price: "₹6,123/g",
      change: "+2.5%",
      color: "text-yellow-400",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Scale,
      title: "22K Gold",
      price: "₹5,610/g",
      change: "+2.3%",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Shield,
      title: "18K Gold",
      price: "₹4,592/g",
      change: "+2.1%",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Zap,
      title: "Instant Cash",
      value: "100%",
      subtitle: "Transparent",
      color: "text-blue-400",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      value: "Market",
      subtitle: "Price",
      color: "text-green-400",
      bgColor: "bg-green-50",
    },
    {
      icon: DollarSign,
      title: "No Hidden",
      value: "0%",
      subtitle: "Charges",
      color: "text-purple-400",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Gold Services
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Us
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} rounded-2xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-${feature.color.split('-')[1]}-200 cursor-pointer group`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${feature.bgColor} p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`${feature.color} h-6 w-6 md:h-8 md:w-8`} />
                </div>
                <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">
                  {feature.title}
                </h4>
                {feature.price ? (
                  <>
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                      {feature.price}
                    </p>
                    <p className="text-xs md:text-sm text-green-600 font-semibold flex items-center gap-1 mt-1">
                      <TrendingUp size={12} />
                      {feature.change}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                      {feature.value}
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 mt-1">
                      {feature.subtitle}
                    </p>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoldFeatureCards;
