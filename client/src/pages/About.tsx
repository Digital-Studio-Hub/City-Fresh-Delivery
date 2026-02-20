import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Award, Users, Leaf } from "lucide-react";
import mainLogo from "@assets/Main_Logo_1771579834678.png";

const WHATSAPP_URL = "https://wa.me/27693193534?text=Hi%20CityFresh%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services!";

const values = [
  { icon: Leaf, title: "Freshness First", desc: "We prioritise freshness above all else. Our fruit is carefully selected and delivered promptly to ensure peak quality." },
  { icon: Award, title: "Quality Guaranteed", desc: "Every piece of fruit we deliver meets our rigorous quality standards. We stand behind everything we supply." },
  { icon: Users, title: "Customer Focused", desc: "Your satisfaction drives everything we do. We listen, adapt, and deliver to exceed your expectations." },
  { icon: Heart, title: "Locally Trusted", desc: "Proudly serving Somerset West and the wider Cape Town area. We're part of the community we serve." },
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">About CityFresh</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a passionate fruit supply and delivery service based in Somerset West, Cape Town. Our mission is simple: deliver the freshest, highest-quality fruit straight to your door.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-about-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CityFresh was born from a simple belief: everyone deserves access to fresh, quality fruit without the hassle. Based in the heart of Somerset West, we saw an opportunity to bridge the gap between local farms and your table.
                </p>
                <p>
                  What started as a small operation has grown into a trusted fruit delivery service for households, restaurants, offices, and events across the Western Cape. We carefully select each piece of fruit, ensuring only the best reaches you.
                </p>
                <p>
                  Our commitment to freshness, quality, and reliable service has made us a favourite among Somerset West residents and businesses. Whether you need a weekly household pack or bulk supply for your restaurant, we've got you covered.
                </p>
              </div>
              <div className="mt-8">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 font-semibold" data-testid="button-about-contact">
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-primary/5 rounded-2xl p-12 flex items-center justify-center">
                <img src={mainLogo} alt="CityFresh Logo" className="w-64 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card" data-testid="section-about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Everything we do is guided by these core principles.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <Card key={i} className="p-6" data-testid={`card-value-${i}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary" data-testid="section-about-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Experience CityFresh?</h2>
          <p className="text-white/80 text-lg mb-8">Join hundreds of happy customers who trust us for their fresh fruit needs.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary font-semibold gap-2 text-base no-default-hover-elevate no-default-active-elevate px-8" data-testid="button-about-order">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Order on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
