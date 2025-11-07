import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
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
