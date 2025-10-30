import { AlertTriangle, Phone, Facebook, Instagram } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
      
      {/* Warning Section */}
      <div className="border-b border-gold-400/20 relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-gradient-red-gold shadow-red">
                <AlertTriangle className="h-6 w-6 text-luxury-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent">IMPORTANT WARNING</h3>
                <div className="space-y-3 text-sm opacity-90 leading-relaxed">
                  <p>
                    Selling of Stolen / Theft Items is a <strong>Punishable Criminal Offense</strong>. 
                    One should produce required documents for transaction.
                  </p>
                  <p>
                    We do not accept any transaction from minors under any circumstances. Customers from 
                    age 18 to 23 years must have their family members' consent for transaction. 
                    Verification will be done if necessary.
                  </p>
                  <p>
                    OMV Gold Buyers have all the right to reject any transaction at any point of time. 
                    If any customer found suspicious will be reported to the appropriate (Police) Departments.
                  </p>
                  <p className="font-semibold bg-gradient-luxury bg-clip-text text-transparent">
                    We buy gold and release pledged gold. We do not offer gold loan or gold EMI Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4">
              OMV GOLD BUYERS
            </h4>
            <p className="text-sm opacity-75 leading-relaxed">
              We buy gold and release pledged gold. Get the best price for your gold and achieve financial freedom 
              with our transparent process.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 bg-gradient-luxury bg-clip-text text-transparent">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faqs" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4 bg-gradient-luxury bg-clip-text text-transparent">Contact</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                Phone: +91 9030 767 878
              </li>
              <li>
                Mon - Sun: 9:30am - 7:00pm
              </li>
              <li>
                <a href="https://www.facebook.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  facebook.com/omvgoldbuyers
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/omvgoldbuyers" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  instagram.com/omvgoldbuyers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-400/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 2024 OMV Gold Buyers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
