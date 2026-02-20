import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import mainLogo from "@assets/Main_Logo_1771579834678.png";
import lekkerLogo from "@assets/lekkerlogo_1771579185913.png";
import badgeImg from "@assets/Badge_Level_1_1771579175551.png";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1a] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4" data-testid="link-footer-logo">
              <img src={mainLogo} alt="CityFresh" className="h-16 w-auto brightness-110" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Fresh fruit delivered to your door in Somerset West and Cape Town. Quality produce, reliable service.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/produce", label: "Our Produce" },
                { href: "/delivery-areas", label: "Delivery Areas" },
                { href: "/how-it-works", label: "How It Works" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-white text-sm transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-white/60 text-sm">25 Dirkie Uys Street, Somerset West, Cape Town</span>
              </li>
              <li>
                <a href="tel:+27693193534" className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors" data-testid="link-footer-phone">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  069 319 3534
                </a>
              </li>
              <li>
                <a href="mailto:info@cityfresh.co.za" className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors" data-testid="link-footer-email">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  info@cityfresh.co.za
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors" data-testid="link-footer-terms">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">Verified Badge</h3>
            <a
              href="https://lekker.network/the-lekker-network-verified"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              data-testid="link-badge-verified"
            >
              <img src={badgeImg} alt="Certified by Lekker Network - Level 1" className="w-24 h-24 object-contain" />
            </a>
            <span className="text-white/60 text-xs mt-2 text-center">Lekker Network Verified</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-xs" data-testid="text-copyright">
              &copy; {new Date().getFullYear()} CityFresh
            </p>

            <div className="flex flex-col items-center gap-2" data-testid="lekker-network-footer">
              <a
                href="https://lekker.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                data-testid="link-lekker-network"
              >
                <img src={lekkerLogo} alt="Lekker Network" className="h-8 w-auto" />
              </a>
              <span className="text-white/50 text-xs">Powered by Lekker Network</span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <Link href="/terms" className="text-white/50 hover:text-white/80 transition-colors" data-testid="link-bottom-terms">
                Terms of Service
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/privacy" className="text-white/50 hover:text-white/80 transition-colors" data-testid="link-bottom-privacy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
