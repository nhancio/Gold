import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of gold does Benaka Gold Company buy?",
      answer: "We buy all types of gold including old jewelry, coins, bars, and any form of gold regardless of purity. We accept 22K, 18K, and other gold purities.",
    },
    {
      question: "Can I get immediate cash for my gold?",
      answer: "Yes! We provide instant cash payment immediately after the gold verification process. You can walk out with cash in hand the same day.",
    },
    {
      question: "Can I sell pledged gold through Benaka Gold?",
      answer: "Yes, we help you release pledged gold from any loan provider. Bring your pledge receipt, and we'll handle the process to release and purchase your gold.",
    },
    {
      question: "How long does the evaluation process take?",
      answer: "Our gold evaluation process is quick and efficient. It typically takes 15-30 minutes depending on the quantity and type of gold. We use advanced purity-checking technology for accurate results.",
    },
    {
      question: "What documents are needed to sell gold?",
      answer: "You need to bring a valid government-issued ID proof (Aadhaar, PAN, Passport, or Driver's License) and address proof. If you have the original purchase bill, that's helpful but not mandatory.",
    },
    {
      question: "Do you charge any service fees?",
      answer: "No hidden charges! We offer a completely transparent process. The price we quote is what you receive. We only charge for actual services if any gold refinement is needed.",
    },
    {
      question: "How do you determine the gold price?",
      answer: "We follow current market rates and assess the purity of your gold using government-certified equipment. Our certified appraisers ensure you get the best possible price based on weight and purity.",
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            FAQ
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-muted-foreground">
            Find quick answers to common questions about our services and products
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 rounded-lg px-6 data-[state=open]:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
