import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Truck, ShieldCheck, Clock, ArrowRight, Star } from "lucide-react";
import fruitBoxImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.57_1771579161423.jpeg";
import applesImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.59_1771579161425.jpeg";
import grapesImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.58_1771579161424.jpeg";
import plumImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.59_(1)_1771579161424.jpeg";
import bananaImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.59_(2)_1771579161425.jpeg";
import apricotImg from "@assets/WhatsApp_Image_2026-02-18_at_16.47.01_1771579161426.jpeg";

const WHATSAPP_URL = "https://wa.me/27693193534?text=Hi%20CityFresh%2C%20I%27d%20like%20to%20order%20some%20fresh%20fruit!";

const features = [
  { icon: Leaf, title: "Farm Fresh", desc: "Sourced directly for maximum freshness and flavour" },
  { icon: Truck, title: "Reliable Delivery", desc: "Consistent, on-time delivery to your door" },
  { icon: ShieldCheck, title: "Quality Guaranteed", desc: "Hand-selected fruit, every time" },
  { icon: Clock, title: "Convenient Ordering", desc: "Simply order via WhatsApp, hassle-free" },
];

const categories = [
  { img: applesImg, title: "Seasonal Fruits", desc: "The best of each season, picked at peak ripeness" },
  { img: grapesImg, title: "Bulk Supply", desc: "Perfect for restaurants, offices and events" },
  { img: bananaImg, title: "Household Packs", desc: "Weekly family fruit boxes delivered fresh" },
  { img: plumImg, title: "Custom Orders", desc: "Tailored selections to suit your needs" },
];

const steps = [
  { num: "01", title: "Send a Message", desc: "Contact us on WhatsApp with your fruit preferences" },
  { num: "02", title: "Confirm Your Order", desc: "We'll confirm availability, quantity and delivery details" },
  { num: "03", title: "Fresh Delivery", desc: "Receive quality fruit delivered straight to your door" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0">
          <img src={apricotImg} alt="Fresh fruit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-white/90 text-sm font-medium">Somerset West &middot; Cape Town</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6" data-testid="text-hero-title">
              Fresh Fruit Delivered to Your Door
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-lg" data-testid="text-hero-subtitle">
              Quality produce, reliable service, and convenient delivery for households and businesses in the Western Cape.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-[#25D366] text-white border-[#25D366] font-semibold gap-2 text-base no-default-hover-elevate no-default-active-elevate px-6" data-testid="button-hero-whatsapp">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Order on WhatsApp
                </Button>
              </a>
              <Link href="/produce">
                <Button size="lg" variant="outline" className="text-white border-white/30 bg-white/5 backdrop-blur-sm font-semibold gap-2 text-base no-default-hover-elevate no-default-active-elevate px-6" data-testid="button-hero-produce">
                  View Our Produce
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose CityFresh?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We bring the freshest fruit straight from the farm to your table, with service you can count on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Card key={i} className="p-6 text-center group" data-testid={`card-feature-${i}`}>
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-primary/15">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Produce */}
      <section className="py-16 md:py-24 bg-card" data-testid="section-produce-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Fresh Produce</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From seasonal favourites to bulk supply, we have everything you need.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <div key={i} className="group rounded-lg overflow-hidden bg-background shadow-sm border border-border/50" data-testid={`card-category-${i}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-1.5">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full gap-2 bg-primary text-primary-foreground font-medium">
                      Order Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/produce">
              <Button variant="outline" size="lg" className="gap-2 font-medium" data-testid="button-view-all-produce">
                View All Produce
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Getting fresh fruit delivered is as simple as 1-2-3.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center" data-testid={`step-${i}`}>
                <div className="text-5xl md:text-6xl font-bold text-primary/15 mb-3">{step.num}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freshness Image Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden" data-testid="section-freshness">
        <div className="absolute inset-0">
          <img src={fruitBoxImg} alt="Fresh fruit box" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Freshness You Can Taste</h2>
            <p className="text-lg text-white/80 mb-8">We source the best quality fruit and deliver it with care, so you always enjoy nature's best.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#25D366] text-white border-[#25D366] font-semibold gap-2 text-base no-default-hover-elevate no-default-active-elevate px-8" data-testid="button-cta-whatsapp">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Start Your Order Today
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Somerset West</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Households and businesses rely on CityFresh for quality and convenience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { quote: "The freshest fruit I've ever had delivered. CityFresh never disappoints!", name: "Sarah M.", role: "Household Customer" },
              { quote: "We use CityFresh for our restaurant weekly. Quality is always top notch.", name: "James K.", role: "Restaurant Owner" },
              { quote: "Ordering via WhatsApp is so convenient. Our office loves the fruit packs!", name: "Tanya V.", role: "Office Manager" },
            ].map((t, i) => (
              <Card key={i} className="p-6" data-testid={`card-testimonial-${i}`}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
