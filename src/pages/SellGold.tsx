import FloatingNav from "@/components/FloatingNav";
import FloatingContactIcons from "@/components/FloatingContactIcons";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, IndianRupee, Clock, Shield, TrendingUp } from "lucide-react";

const SellGold = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <FloatingNav />
      <FloatingContactIcons />
      
      <main className="w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 pt-24 md:pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Sell Gold For Cash
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Get instant cash for your gold at the best market rates. Quick, secure, and transparent transactions.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IndianRupee className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Rates</h3>
                <p className="text-gray-600">Competitive prices based on live market rates</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Cash</h3>
                <p className="text-gray-600">Get paid immediately after assessment</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Process</h3>
                <p className="text-gray-600">Safe and transparent transactions</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all">
                <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Scale className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Certified Testing</h3>
                <p className="text-gray-600">Accurate purity assessment</p>
              </Card>
            </div>

            {/* Process Section */}
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Visit Our Store</h3>
                      <p className="text-gray-600">Bring your gold items to any of our branches with valid ID proof.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Gold Assessment</h3>
                      <p className="text-gray-600">Our certified appraisers test your gold for purity and weight using advanced equipment.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Get Best Offer</h3>
                      <p className="text-gray-600">Receive a transparent quote based on current market rates and your gold's purity.</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Instant Payment</h3>
                      <p className="text-gray-600">Accept the offer and walk out with cash in hand immediately.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Sell Your Gold?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to get the best price for your gold
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+919030767878">Call: +91 9030 767 878</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 text-lg px-8 py-6"
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

export default SellGold;

