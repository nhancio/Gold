import { MapPin, FileCheck, Scale, BadgeCheck, Banknote, Star } from "lucide-react";
import { DiamondIcon, CrownIcon, GemIcon, SparkleIcon, RingIcon } from "@/assets/jewelry-icons";

const ProcessSection = () => {
  const steps = [
    {
      icon: MapPin,
      jewelryIcon: DiamondIcon,
      title: "Find the Nearest Branch",
      description: "Locate any of our 35+ branches across South India",
      step: "01",
    },
    {
      icon: FileCheck,
      jewelryIcon: CrownIcon,
      title: "Carry ID Proof",
      description: "Bring your valid ID and address proof for verification",
      step: "02",
    },
    {
      icon: Scale,
      jewelryIcon: GemIcon,
      title: "Gold Assessment",
      description: "Our certified appraisers check gold purity using advanced technology",
      step: "03",
    },
    {
      icon: BadgeCheck,
      jewelryIcon: SparkleIcon,
      title: "Get a Fair Offer",
      description: "Receive the best market price with complete transparency",
      step: "04",
    },
    {
      icon: Banknote,
      jewelryIcon: RingIcon,
      title: "Receive Instant Cash",
      description: "Walk out with cash in hand immediately after agreement",
      step: "05",
    },
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DiamondIcon className="absolute top-20 left-10 h-10 w-10 text-gold-400 opacity-20 animate-pulse" />
        <CrownIcon className="absolute top-40 right-20 h-8 w-8 text-luxury-red opacity-25 animate-bounce" />
        <GemIcon className="absolute bottom-20 left-20 h-9 w-9 text-gold-300 opacity-20 animate-pulse" />
        <SparkleIcon className="absolute bottom-40 right-10 h-6 w-6 text-gold-400 opacity-30 animate-bounce" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <RingIcon className="h-6 w-6 text-gold-400" />
            <h2 className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
              Working Process
            </h2>
            <Star className="h-6 w-6 text-luxury-red" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Simple Steps to Get Instant Cash
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Follow these easy steps to sell your gold securely
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                {/* Step Number */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center text-luxury-white font-bold text-2xl shadow-gold-strong relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-shine opacity-30"></div>
                    <span className="relative z-10">{step.step}</span>
                    <div className="absolute -top-1 -right-1">
                      <step.jewelryIcon className="h-4 w-4 text-luxury-red animate-pulse" />
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-full left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-gold opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-secondary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-gold-400/20 hover:border-gold-400/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-gold shadow-gold group-hover:shadow-gold-strong transition-all duration-300">
                      <step.icon className="h-6 w-6 text-luxury-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-secondary-foreground">{step.title}</h4>
                      <p className="opacity-90 text-secondary-foreground/80">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden w-1 h-8 bg-gradient-gold opacity-50 mx-auto mb-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
