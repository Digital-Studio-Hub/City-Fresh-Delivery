import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import applesImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.59_1771579161425.jpeg";
import grapesImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.58_1771579161424.jpeg";
import plumImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.59_(1)_1771579161424.jpeg";
import bananaImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.59_(2)_1771579161425.jpeg";
import banana2Img from "@assets/WhatsApp_Image_2026-02-18_at_16.47.00_1771579161426.jpeg";
import apricotImg from "@assets/WhatsApp_Image_2026-02-18_at_16.47.01_1771579161426.jpeg";
import fruitBoxImg from "@assets/WhatsApp_Image_2026-02-18_at_16.46.57_1771579161423.jpeg";

const WHATSAPP_URL = "https://wa.me/27693193534?text=Hi%20CityFresh%2C%20I%27d%20like%20to%20order%20some%20fresh%20fruit!";

const produceCategories = [
  {
    title: "Seasonal Fruits",
    desc: "Enjoy the best fruit of each season, sourced at peak ripeness for maximum flavour and nutrition. Our seasonal selection changes with the harvest calendar.",
    items: [
      { img: plumImg, name: "Plums", desc: "Sweet, juicy plums perfect for snacking" },
      { img: apricotImg, name: "Apricots", desc: "Golden apricots bursting with flavour" },
      { img: grapesImg, name: "Grapes", desc: "Crisp table grapes in red and green varieties" },
    ]
  },
  {
    title: "Everyday Essentials",
    desc: "Fresh staples available year-round to keep your kitchen stocked with healthy options.",
    items: [
      { img: applesImg, name: "Apples", desc: "Crisp, fresh apples in multiple varieties" },
      { img: bananaImg, name: "Bananas", desc: "Perfect ripeness, great for the whole family" },
      { img: banana2Img, name: "Tropical Selection", desc: "A taste of the tropics, delivered fresh" },
    ]
  },
  {
    title: "Bulk Supply",
    desc: "For restaurants, caterers, offices and events. We supply quality fruit in bulk at competitive prices with reliable delivery.",
    items: [
      { img: fruitBoxImg, name: "Mixed Fruit Boxes", desc: "Curated boxes with a variety of seasonal fruit" },
    ]
  },
  {
    title: "Custom Orders",
    desc: "Need something specific? We tailor orders to your exact requirements. Simply let us know what you need via WhatsApp.",
    items: []
  },
];

export default function Produce() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24" data-testid="section-produce-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-produce-title">Our Fresh Produce</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From seasonal favourites to everyday essentials, CityFresh delivers the freshest fruit to your door in Somerset West and Cape Town.
            </p>
          </div>
        </div>
      </section>

      {produceCategories.map((cat, ci) => (
        <section
          key={ci}
          className={`py-16 md:py-20 ${ci % 2 === 0 ? 'bg-background' : 'bg-card'}`}
          data-testid={`section-produce-${ci}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{cat.title}</h2>
              <p className="text-muted-foreground text-lg max-w-3xl">{cat.desc}</p>
            </div>

            {cat.items.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="group rounded-lg overflow-hidden bg-background shadow-sm border border-border/50" data-testid={`card-produce-${ci}-${ii}`}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="gap-2 font-medium">
                          Order Now
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-primary/5 rounded-lg p-8 text-center max-w-lg">
                <p className="text-muted-foreground mb-4">Tell us exactly what you need and we'll put together a custom order for you.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2 font-medium" data-testid="button-custom-order">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Request Custom Order
                  </Button>
                </a>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
