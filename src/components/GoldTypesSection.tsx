import { Card } from "@/components/ui/card";

const GoldTypesSection = () => {
  const goldTypes = [
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Gold Coins & Bars",
      description: "We buy all types of gold coins, bars, and bullion at the best market rates.",
      features: ["Gold coins", "Gold bars", "Bullion", "Investment gold"]
    },
    {
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Gold Ornaments",
      description: "Sell your gold jewelry including necklaces, earrings, bracelets, and rings.",
      features: ["Necklaces", "Earrings", "Bracelets", "Rings"]
    },
    {
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      title: "Gold Biscuits",
      description: "Get the best price for your gold biscuits and ingots with instant payment.",
      features: ["Gold biscuits", "Gold ingots", "Gold blocks", "Pure gold"]
    },
    {
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Women's Gold Jewelry",
      description: "Elegant gold jewelry for women - we offer premium rates for all designs.",
      features: ["Traditional designs", "Modern jewelry", "Antique pieces", "Custom designs"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-luxury-cream to-luxury-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-gold-600 uppercase tracking-wider mb-4">
            Types of Gold We Buy
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
            All Types of Gold Accepted
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We buy all types of gold items at the best market rates. From coins to ornaments, 
            we offer competitive prices for your precious gold.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {goldTypes.map((type, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-gold-strong transition-all duration-300 border-gold-200 bg-luxury-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">{type.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm">{type.description}</p>
                <ul className="space-y-1">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-gold shadow-sm" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-gradient-gold text-luxury-white px-8 py-4 rounded-full shadow-gold">
            <span className="text-lg font-semibold">Best Price Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldTypesSection;
