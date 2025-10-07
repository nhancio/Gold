import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";

const BranchesSection = () => {
  const locations = [
    {
      state: "Telangana",
      branches: [
        {
          name: "HO Office Ameerpet",
          address: "No.6-3-864/4/B, B/1, 5th Floor, Opposite to Green Park Hotel, Ameerpet, Hyderabad",
          timing: "Mon - Sat: 9:00 AM - 7:00 PM",
        },
        {
          name: "Kukatpally Branch",
          address: "Shop No 3, Sai Nath Plaza, Near Chiraan Hospital, Bhavani Nagar Colony, Kukatpally, Hyderabad",
          timing: "Mon - Sat: 9:00 AM - 7:00 PM",
        },
      ],
    },
    {
      state: "Karnataka",
      branches: [
        {
          name: "Customer Service Point",
          address: "Multiple locations across Karnataka",
          timing: "Mon - Sat: 9:00 AM - 7:00 PM",
        },
      ],
    },
    {
      state: "Andhra Pradesh",
      branches: [
        {
          name: "Customer Service Point",
          address: "Multiple locations across Andhra Pradesh",
          timing: "Mon - Sat: 9:00 AM - 7:00 PM",
        },
      ],
    },
    {
      state: "Tamil Nadu",
      branches: [
        {
          name: "Customer Service Point",
          address: "Multiple locations across Tamil Nadu",
          timing: "Mon - Sat: 9:00 AM - 7:00 PM",
        },
      ],
    },
  ];

  return (
    <section id="branches" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Branches
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Nearest Branch
          </h3>
          <p className="text-xl text-muted-foreground">
            With 35+ locations across South India, we're always nearby
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {locations.map((location, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold">{location.state}</h4>
              </div>

              <div className="space-y-4">
                {location.branches.map((branch, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-muted/50">
                    <h5 className="font-semibold mb-2 text-primary">{branch.name}</h5>
                    <p className="text-sm text-muted-foreground mb-2">{branch.address}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{branch.timing}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="premium" size="lg" asChild>
            <a href="tel:6366333444">
              <Phone className="h-5 w-5" />
              Call Now to Find Nearest Branch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
