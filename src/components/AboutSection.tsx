import { Shield, TrendingUp, MapPin, Zap, Award, Gem } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Transparent Process",
      description: "Fully transparent valuation process with no hidden charges",
    },
    {
      icon: TrendingUp,
      title: "Best Market Price",
      description: "Get the highest value for your gold based on current market rates",
    },
    {
      icon: MapPin,
      title: "Trusted Service",
      description: "Reliable and trustworthy gold buying service across South India",
    },
    {
      icon: Award,
      title: "Advanced Technology",
      description: "State-of-the-art purity checking equipment for accurate valuation",
    },
    {
      icon: Zap,
      title: "Instant Cash Payment",
      description: "Get cash immediately after gold verification",
    },
    {
      icon: Gem,
      title: "Accept All Gold Types",
      description: "We buy all types of gold jewelry, coins, and bars",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-luxury-white to-luxury-cream relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-4">
            About Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Why Choose OMV Gold Buyers?
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We buy gold and release pledged gold to give you financial freedom. With years of experience, 
            we are a trusted name in the industry. We specialize in buying gold at the best price and 
            helping you release pledged gold, ensuring a fully transparent process and expert valuations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-gold-strong transition-all duration-300 border-2 border-gold-200 hover:border-gold-400 group bg-luxury-white relative overflow-hidden"
            >
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
