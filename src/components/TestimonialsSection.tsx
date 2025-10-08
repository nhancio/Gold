import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { DiamondIcon, CrownIcon, SparkleIcon } from "@/assets/jewelry-icons";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "OMV Gold Buyers gave me the best price for my gold jewelry. The process was so smooth and I got instant cash. Highly recommended!",
      service: "Buy Gold"
    },
    {
      name: "Rajesh Kumar",
      location: "Chennai",
      rating: 5,
      text: "I was struggling with EMI payments for my pledged gold. OMV helped me release it and gave me a better deal than continuing the loan.",
      service: "Release Pledged Gold"
    },
    {
      name: "Sunita Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Trustworthy and transparent process. They explained everything clearly and gave me the market rate. Will definitely use their services again.",
      service: "Buy Gold"
    },
    {
      name: "Vikram Singh",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! They helped me release my pledged gold quickly and I got financial freedom. No more EMI burden.",
      service: "Release Pledged Gold"
    },
    {
      name: "Anita Patel",
      location: "Pune",
      rating: 5,
      text: "Professional team with fair pricing. The gold assessment was accurate and I received instant payment. Great experience!",
      service: "Buy Gold"
    },
    {
      name: "Suresh Nair",
      location: "Kochi",
      rating: 5,
      text: "OMV Gold Buyers saved me from high interest rates. They helped me release my pledged gold and gave me a better financial solution.",
      service: "Release Pledged Gold"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-luxury-white to-luxury-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DiamondIcon className="absolute top-20 left-10 h-12 w-12 text-gold-200 opacity-30 animate-pulse" />
        <CrownIcon className="absolute top-40 right-20 h-8 w-8 text-gold-300 opacity-25 animate-bounce" />
        <SparkleIcon className="absolute bottom-20 left-1/4 h-10 w-10 text-luxury-red opacity-20 animate-pulse" />
        <DiamondIcon className="absolute bottom-40 right-10 h-9 w-9 text-gold-200 opacity-30 animate-bounce" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-gold-500" />
            <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
              Customer Testimonials
            </h2>
            <Star className="h-6 w-6 text-luxury-red" />
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            What Our Customers Say
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-luxury-white border-gold-200 hover:shadow-gold-strong transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              
              <div className="relative mb-4">
                <Quote className="h-8 w-8 text-gold-300 absolute -top-2 -left-2 opacity-50" />
                <p className="text-muted-foreground italic pl-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="px-3 py-1 bg-gradient-gold text-luxury-white text-xs font-semibold rounded-full">
                  {testimonial.service}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gradient-gold text-luxury-white px-8 py-4 rounded-full shadow-gold">
            <Star className="h-6 w-6" />
            <span className="text-lg font-semibold">4.9/5 Average Rating</span>
            <Star className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
