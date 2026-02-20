export default function Privacy() {
  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-privacy-title">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 2026</p>

          <div className="prose prose-sm max-w-none text-foreground/80 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p className="leading-relaxed">When you contact us through our website or WhatsApp, we may collect your name, phone number, email address, delivery address, and order details. This information is provided voluntarily by you for the purpose of processing your order.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="leading-relaxed">We use your personal information to process and deliver your orders, communicate with you about your orders, improve our services, and send relevant updates about our products (with your consent).</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information Sharing</h2>
              <p className="leading-relaxed">We do not sell, trade, or otherwise transfer your personal information to third parties. Your information may only be shared with delivery partners for the purpose of completing your order.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
              <p className="leading-relaxed">We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p className="leading-relaxed">In accordance with the Protection of Personal Information Act (POPIA), you have the right to access, correct, or delete your personal information. Contact us at info@cityfresh.co.za to exercise these rights.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies</h2>
              <p className="leading-relaxed">Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions about this Privacy Policy, please contact us at info@cityfresh.co.za or call us on 069 319 3534.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
