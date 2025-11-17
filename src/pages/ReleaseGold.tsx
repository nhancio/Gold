import FloatingNav from "@/components/FloatingNav";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, IndianRupee, Clock, Shield, Key } from "lucide-react";

const ReleaseGold = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <FloatingNav />
      <FloatingContactIcons />
      
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-red-500 via-red-600 to-red-700 pt-24 md:pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Release Pledge Gold
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Regain control of your pledged gold. We offer competitive rates to help you retrieve your valuable assets.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Key className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Release Your Gold</h3>
                <p className="text-gray-600">Get your pledged gold back with our help</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IndianRupee className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
                <p className="text-gray-600">Competitive rates for releasing your gold</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Process</h3>
                <p className="text-gray-600">Fast and efficient release process</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure & Safe</h3>
                <p className="text-gray-600">Trusted and transparent transactions</p>
              </Card>
            </div>

            {/* Process Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                      <p className="text-gray-600">Reach out to us with details about your pledged gold. We'll assess your situation.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Document Verification</h3>
                      <p className="text-gray-600">Provide necessary documents related to your gold pledge for verification.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Get Quote</h3>
                      <p className="text-gray-600">Receive a fair and transparent quote for releasing your gold.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-red-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Release Your Gold</h3>
                      <p className="text-gray-600">Complete the process and get your gold back in your hands.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-500 to-red-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Release Your Gold?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss releasing your pledged gold
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+919030767878">Call: +91 9030 767 878</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-6"
                asChild
              >
                <a href="https://wa.me/919030767878" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReleaseGold;

