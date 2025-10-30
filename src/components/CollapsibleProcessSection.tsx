import { useState } from 'react';
import { MapPin, FileCheck, Scale, BadgeCheck, Banknote, ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const CollapsibleProcessSection = () => {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const steps = [
    {
      icon: MapPin,
      title: "Contact Us",
      description: "Call us or visit our service center",
      detailedDescription: "Reach out to us through phone, WhatsApp, or visit any of our 35+ branches across South India. Our friendly team is ready to assist you with your gold selling needs.",
      step: "01",
    },
    {
      icon: FileCheck,
      title: "Carry ID Proof",
      description: "Bring your valid ID and address proof for verification",
      detailedDescription: "Please bring a valid government-issued ID (Aadhaar, PAN, Driving License) and address proof. This is mandatory for all transactions as per RBI guidelines.",
      step: "02",
    },
    {
      icon: Scale,
      title: "Gold Assessment",
      description: "Our certified appraisers check gold purity using advanced technology",
      detailedDescription: "Our certified gold appraisers use advanced testing equipment to determine the exact purity and weight of your gold. We provide complete transparency in the assessment process.",
      step: "03",
    },
    {
      icon: BadgeCheck,
      title: "Get a Fair Offer",
      description: "Receive the best market price with complete transparency",
      detailedDescription: "Based on current market rates and your gold's purity, we provide you with the best possible offer. Our pricing is completely transparent with no hidden charges.",
      step: "04",
    },
    {
      icon: Banknote,
      title: "Receive Instant Cash",
      description: "Walk out with cash in hand immediately after agreement",
      detailedDescription: "Once you accept our offer, you receive instant cash payment. No waiting, no delays - complete your transaction in minutes and walk out with cash in hand.",
      step: "05",
    },
  ];

  const toggleStep = (stepIndex: number) => {
    setExpandedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(index => index !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4">
            Working Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            Simple Steps to Get Instant Cash
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Follow these easy steps to sell your gold securely
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden">
              <div 
                className="p-6 cursor-pointer hover:bg-secondary-foreground/5 transition-all duration-300"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-luxury-white font-bold text-xl shadow-gold-strong relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-shine opacity-30"></div>
                      <span className="relative z-10">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 rounded-lg bg-gradient-gold shadow-gold">
                        <step.icon className="h-6 w-6 text-luxury-white" />
                      </div>
                      <div className="flex-1">
                      <h4 className="text-xl font-semibold text-black">{step.title}</h4>
                      <p className="opacity-90 text-black/80">{step.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedSteps.includes(index) ? (
                          <ChevronUp className="h-6 w-6 text-gold-400" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gold-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedSteps.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-gold-400/20">
                    <p className="text-black/80 leading-relaxed">
                      {step.detailedDescription}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollapsibleProcessSection;
