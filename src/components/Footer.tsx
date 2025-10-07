import { AlertTriangle, Star } from "lucide-react";
import { DiamondIcon, CrownIcon, GemIcon, SparkleIcon } from "@/assets/jewelry-icons";

const Footer = () => {
  const partners = [
    "Muthoot Fincorp",
    "Muthoot Finance",
    "Manappuram Gold",
    "Muthoot Gold",
  ];

  return (
    <footer className="bg-gradient-to-b from-secondary to-secondary/95 text-secondary-foreground relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <DiamondIcon className="absolute top-10 left-20 h-6 w-6 text-gold-400 opacity-20 animate-pulse" />
        <CrownIcon className="absolute top-32 right-16 h-5 w-5 text-luxury-red opacity-25 animate-bounce" />
        <GemIcon className="absolute bottom-20 left-16 h-7 w-7 text-gold-300 opacity-20 animate-pulse" />
        <SparkleIcon className="absolute bottom-40 right-20 h-4 w-4 text-gold-400 opacity-30 animate-bounce" />
      </div>
      
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
                    Benaka Gold Company have all the right to reject any transaction at any point of time. 
                    If any customer found suspicious will be reported to the appropriate (Police) Departments.
                  </p>
                  <p className="font-semibold bg-gradient-luxury bg-clip-text text-transparent">
                    We only purchase gold and do not offer gold loan or gold EMI Services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-b border-gold-400/20 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <CrownIcon className="h-5 w-5 text-gold-400" />
              <h4 className="text-lg font-semibold bg-gradient-luxury bg-clip-text text-transparent">Our Trusted Partners</h4>
              <Star className="h-5 w-5 text-luxury-red" />
            </div>
            <p className="text-sm opacity-75">We work with leading financial institutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-lg bg-gradient-gold/10 hover:bg-gradient-gold/20 border border-gold-400/20 hover:border-gold-400/40 transition-all duration-300 group"
              >
                <span className="font-semibold group-hover:text-gold-400 transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CrownIcon className="h-6 w-6 text-gold-400" />
              <h4 className="text-2xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                BENAKA GOLD
              </h4>
              <DiamondIcon className="h-4 w-4 text-luxury-red" />
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              South India's trusted gold buyer with 35+ branches. Get instant cash for your gold with 
              100% transparent process.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold mb-4 bg-gradient-luxury bg-clip-text text-transparent">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all flex items-center gap-1">
                  <GemIcon className="h-3 w-3" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all flex items-center gap-1">
                  <SparkleIcon className="h-3 w-3" />
                  Services
                </a>
              </li>
              <li>
                <a href="#branches" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all flex items-center gap-1">
                  <CrownIcon className="h-3 w-3" />
                  Branches
                </a>
              </li>
              <li>
                <a href="#faqs" className="opacity-75 hover:opacity-100 hover:text-gold-400 transition-all flex items-center gap-1">
                  <DiamondIcon className="h-3 w-3" />
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold mb-4 bg-gradient-luxury bg-clip-text text-transparent">Contact</h5>
            <ul className="space-y-2 text-sm opacity-75">
              <li className="flex items-center gap-2">
                <Star className="h-3 w-3 text-gold-400" />
                Phone: 6366333444
              </li>
              <li className="flex items-center gap-2">
                <GemIcon className="h-3 w-3 text-gold-400" />
                Mon - Sun: 9:30am - 7:00pm
              </li>
              <li className="flex items-center gap-2">
                <SparkleIcon className="h-3 w-3 text-gold-400" />
                www.benakagoldcompany.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-400/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 2024 Benaka Gold Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
