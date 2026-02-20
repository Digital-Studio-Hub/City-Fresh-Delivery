import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, ClipboardCheck, Package, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/27693193534?text=Hi%20CityFresh%2C%20I%27d%20like%20to%20order%20some%20fresh%20fruit!";

const steps = [
  {
    icon: MessageCircle,
    num: "1",
    title: "Contact Us on WhatsApp",
    desc: "Send us a message on WhatsApp with your fruit preferences, quantity needed, and delivery address. Our friendly team will assist you immediately.",
    details: ["Tell us what fruit you'd like", "Mention quantities or pack sizes", "Share your delivery address"],
  },
  {
    icon: ClipboardCheck,
    num: "2",
    title: "Confirm Your Order",
    desc: "We'll confirm availability, suggest alternatives if needed, and agree on the delivery time that suits you best.",
    details: ["We check availability for you", "Confirm pricing and quantities", "Schedule your delivery slot"],
  },
  {
    icon: Package,
    num: "3",
    title: "Fresh Delivery to Your Door",
    desc: "Sit back and relax! We carefully pack and deliver your fresh fruit directly to your doorstep, on time and in perfect condition.",
    details: ["Carefully packed for freshness", "Delivered on schedule", "Quality guaranteed every time"],
  },
];

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24" data-testid="section-hiw-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-hiw-title">How It Works</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ordering fresh fruit from CityFresh is simple, fast, and convenient. Here's how to get started in just three easy steps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-hiw-steps">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <Card key={i} className="p-6 md:p-8" data-testid={`card-step-${i}`}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start gap-4 md:w-1/2">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-white">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 md:border-l md:border-border/50 md:pl-6">
                    <ul className="space-y-2.5">
                      {step.details.map((d, di) => (
                        <li key={di} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-lg mb-6">Ready to get started? It only takes a minute.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 font-semibold text-base px-8" data-testid="button-hiw-order">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card" data-testid="section-hiw-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What is the minimum order?", a: "There is no strict minimum order for our primary delivery zone in Somerset West. For extended delivery areas, please contact us to confirm." },
              { q: "How quickly can you deliver?", a: "Most orders in our primary zone are delivered within 24 hours. We'll confirm the exact delivery time when you place your order." },
              { q: "Do you deliver to businesses?", a: "Absolutely! We supply fruit to restaurants, offices, caterers, and event planners. We offer bulk pricing and regular delivery schedules." },
              { q: "Can I set up a recurring order?", a: "Yes! Many of our customers have weekly or bi-weekly standing orders. Just let us know your preference and we'll handle the rest." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-border/50 pb-5" data-testid={`faq-${i}`}>
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
