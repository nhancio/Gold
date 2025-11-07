import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {

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

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold mb-6">Get In Touch</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Call</h5>
                    <p className="text-muted-foreground">9030767878</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email</h5>
                    <p className="text-muted-foreground">omvgoldchandanagar@gmail.com</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
