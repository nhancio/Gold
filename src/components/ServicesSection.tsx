import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Coins, Key, ArrowRight, Star } from "lucide-react";
import goldAssessment from "@/assets/gold-assessment.jpg";
import instantCash from "@/assets/instant-cash.jpg";
import { DiamondIcon, CrownIcon, GemIcon, SparkleIcon, RingIcon, NecklaceIcon } from "@/assets/jewelry-icons";

const ServicesSection = () => {
  const services = [
    {
      icon: DiamondIcon,
      jewelryIcon: RingIcon,
      title: "Sell Gold",
      subtitle: "At Today's Best Price",
      description: "Get 100% value of your gold with instant cash payment. No waiting, no hassle.",
      image: instantCash,
      features: [
        "Best market rates",
        "Instant payment",
        "All types of gold accepted",
        "No paperwork required",
      ],
    },
    {
      icon: CrownIcon,
      jewelryIcon: NecklaceIcon,
      title: "Release Pledged Gold",
      subtitle: "Simple & Fast Process",
      description: "Release your pledged gold from any loan provider and get the best value immediately.",
      image: goldAssessment,
      features: [
        "No EMI burden",
        "Quick verification",
        "Transparent process",
        "Better than loan interest",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-luxury-cream to-luxury-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <GemIcon className="absolute top-20 left-10 h-12 w-12 text-gold-200 opacity-30 animate-pulse" />
        <SparkleIcon className="absolute top-40 right-20 h-8 w-8 text-luxury-red opacity-20 animate-bounce" />
        <DiamondIcon className="absolute bottom-20 left-1/4 h-10 w-10 text-gold-300 opacity-25 animate-pulse" />
        <CrownIcon className="absolute bottom-40 right-10 h-9 w-9 text-gold-200 opacity-30 animate-bounce" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <GemIcon className="h-6 w-6 text-gold-500" />
            <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
              Our Services
            </h2>
            <Star className="h-6 w-6 text-luxury-red" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Experience Trusted Services
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-gold-strong transition-all duration-300 border-gold-200 bg-luxury-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="p-2 rounded-full bg-gradient-gold shadow-gold">
                    <service.jewelryIcon className="h-5 w-5 text-luxury-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-gradient-gold shadow-gold">
                      <service.icon className="h-6 w-6 text-luxury-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-secondary-foreground">
                        {service.title}
                      </h4>
                      <p className="text-gold-500 font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-2 w-2 rounded-full bg-gradient-gold shadow-sm" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full group bg-gradient-gold hover:bg-gradient-gold-dark text-luxury-white border-0 shadow-gold hover:shadow-gold-strong transition-all duration-300" 
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
