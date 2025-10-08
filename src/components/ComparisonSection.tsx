import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      loan: "60-70% Value of Gold",
      sell: "100% Value of Gold",
      highlight: true,
    },
    {
      loan: "Monthly Interest",
      sell: "No Interest",
    },
    {
      loan: "Harassment to Pay Interest",
      sell: "No Harassment",
    },
    {
      loan: "No Money to Release, Otherwise Consider it to be Sold at Almost Half of the price",
      sell: "You Can Buy New Gold Any Time at your Convenience",
    },
    {
      loan: "Lots of Paper Work & Formality",
      sell: "No Paper Works, Just Submit your ID, Address Proof & Bill",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't Trap Yourself - <span className="text-primary">Think Twice</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Don't Pledge Your Gold - Choose Freedom
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden border-2">
          <div className="grid md:grid-cols-2">
            {/* Gold Loan Column */}
            <div className="bg-destructive/10 p-8 border-r-2 border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-destructive/20">
                  <X className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Loan Against Gold</h3>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg bg-background/50 ${
                      item.highlight ? "border-2 border-destructive/30" : ""
                    }`}
                  >
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.loan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sell Gold Column */}
            <div className="bg-primary/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Sell Gold</h3>
              </div>
              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg bg-background/50 ${
                      item.highlight ? "border-2 border-primary" : ""
                    }`}
                  >
                    <p className="text-sm font-medium">
                      {item.sell}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-accent p-6 text-center">
            <p className="text-secondary font-semibold text-lg">
              At OMV Gold Company, we offer a transparent and hassle-free platform for selling your gold.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ComparisonSection;
