import { Shield, TrendingUp, MapPin, Zap, Award, Gem, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DiamondIcon, CrownIcon, GemIcon, SparkleIcon, RingIcon, HeartIcon } from "@/assets/jewelry-icons";

const AboutSection = () => {
  const benefits = [
    {
      icon: Shield,
      jewelryIcon: DiamondIcon,
      title: "100% Transparent Process",
      description: "Fully transparent valuation process with no hidden charges",
    },
    {
      icon: TrendingUp,
      jewelryIcon: CrownIcon,
      title: "Best Market Price",
      description: "Get the highest value for your gold based on current market rates",
    },
    {
      icon: MapPin,
      jewelryIcon: GemIcon,
      title: "Convenient Locations",
      description: "35+ branches across South India for easy access",
    },
    {
      icon: Award,
      jewelryIcon: SparkleIcon,
      title: "Advanced Technology",
      description: "State-of-the-art purity checking equipment for accurate valuation",
    },
    {
      icon: Zap,
      jewelryIcon: RingIcon,
      title: "Instant Cash Payment",
      description: "Get cash immediately after gold verification",
    },
    {
      icon: Gem,
      jewelryIcon: HeartIcon,
      title: "Accept All Gold Types",
      description: "We buy all types of gold jewelry, coins, and bars",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-luxury-white to-luxury-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DiamondIcon className="absolute top-10 left-20 h-8 w-8 text-gold-200 opacity-20 animate-pulse" />
        <CrownIcon className="absolute top-32 right-16 h-6 w-6 text-luxury-red opacity-25 animate-bounce" />
        <GemIcon className="absolute bottom-20 left-16 h-7 w-7 text-gold-300 opacity-20 animate-pulse" />
        <SparkleIcon className="absolute bottom-40 right-20 h-5 w-5 text-gold-400 opacity-30 animate-bounce" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CrownIcon className="h-6 w-6 text-gold-500" />
            <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
              About Us
            </h2>
            <Star className="h-6 w-6 text-luxury-red" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Why Choose Benaka Gold?
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            If you need to sell gold for cash, Benaka Gold Company is the best place to sell your gold. 
            With years of experience, we are a trusted name in the industry. We specialize in buying old 
            gold jewellery and provide instant cash, ensuring a fully transparent process and expert valuations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-gold-strong transition-all duration-300 border-2 border-gold-200 hover:border-gold-400 group bg-luxury-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <benefit.jewelryIcon className="h-8 w-8 text-gold-400" />
              </div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 rounded-lg bg-gradient-gold shadow-gold group-hover:shadow-gold-strong transition-all duration-300">
                  <benefit.icon className="h-6 w-6 text-luxury-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
