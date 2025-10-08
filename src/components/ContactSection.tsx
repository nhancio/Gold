import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received!",
      description: "We'll contact you shortly to discuss your requirements.",
    });
    setFormData({ name: "", phone: "", service: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Contact Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Best Price Today
          </h3>
          <p className="text-xl text-muted-foreground">
            Call now to get the best price for your gold or release your pledged gold
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-6">Get In Touch</h4>
              <p className="text-muted-foreground mb-8">
                We buy gold and release pledged gold. Get the best rates and financial freedom. 
                Contact us today to get the best value for your gold.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Phone</h5>
                    <p className="text-muted-foreground">+91 9030 767 878</p>
                    <p className="text-sm text-muted-foreground">Mon - Sun: 9:30am - 7:00pm</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Service Area</h5>
                    <p className="text-muted-foreground">Serving across South India</p>
                    <p className="text-sm text-muted-foreground">Karnataka, Telangana, Andhra Pradesh, Tamil Nadu</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Facebook</h5>
                    <a href="https://www.facebook.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      facebook.com/omvgoldbuyers
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Instagram</h5>
                    <a href="https://www.instagram.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      instagram.com/omvgoldbuyers
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="service">Select Service</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Choose service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy-gold">Buy Gold</SelectItem>
                    <SelectItem value="release-pledged">Release Pledged Gold</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" variant="premium" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
