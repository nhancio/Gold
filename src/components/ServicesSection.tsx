import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Buy Gold",
      subtitle: "Sell Your Gold at Best Price Today",
      description: "Get the highest market rates for your gold with instant cash payment. No waiting, no hassle.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Best market rates",
        "Instant payment",
        "All types of gold accepted",
        "No paperwork required",
      ],
    },
    {
      title: "Release Pledged Gold",
      subtitle: "Get Financial Freedom",
      description: "Release your gold from pledges and get financial freedom. Better than paying loan interest.",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-4">
            Our Services
          </h2>
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
                <div className="absolute bottom-6 left-6 right-6">
                  <div>
                    <h4 className="text-2xl font-bold text-secondary-foreground">
                      {service.title}
                    </h4>
                    <p className="text-gold-500 font-semibold">{service.subtitle}</p>
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
                  className="w-full bg-gradient-gold hover:bg-gradient-gold-dark text-luxury-white border-0 shadow-gold hover:shadow-gold-strong transition-all duration-300" 
                >
                  Learn More
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
