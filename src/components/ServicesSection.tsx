import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import goldAssessment from "@/assets/gold-assessment.jpg";
import instantCash from "@/assets/instant-cash.jpg";

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      title: "Sell Gold For Cash",
      description: "Get instant cash for your gold. We offer competitive prices based on live market rates. Sell your gold today for the best value.",
      image: goldAssessment,
      link: "/sell-gold",
    },
    {
      title: "Release Pledge Gold",
      description: "Release your pledged gold and regain financial control. We offer competitive rates to help you retrieve your valuable assets.",
      image: instantCash,
      link: "/release-gold",
    },
  ];

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section id="services" className="py-20 bg-red-600 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Navigation Arrows */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Services We Are <span className="text-yellow-300">Offering</span>
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevService}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 flex items-center justify-center transition-all duration-300"
              aria-label="Previous service"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>
            <button
              onClick={nextService}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/30 border border-white/30 flex items-center justify-center transition-all duration-300"
              aria-label="Next service"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Service Card Carousel */}
        <div className="max-w-md md:max-w-4xl mx-auto">
          <Card className="bg-white rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Service Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                {services[currentIndex].title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                {services[currentIndex].description}
              </p>

              {/* Know More Button */}
              <div className="relative">
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-red-600 font-bold rounded-xl py-3 md:py-4 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate(services[currentIndex].link)}
                >
                  Know More
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-yellow-300 w-8 md:w-10' : 'bg-white/30'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
