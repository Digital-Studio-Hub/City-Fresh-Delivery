import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      await apiRequest("POST", "/api/send-mail", form);
      setSubmitted(true);
      toast({ title: "Message sent successfully!", description: "We'll get back to you shortly." });
    } catch {
      toast({ title: "Failed to send message", description: "Please try WhatsApp or call us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-contact-title">Contact Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you. Get in touch via WhatsApp for the fastest response, or send us a message below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              {submitted ? (
                <Card className="p-8 text-center" data-testid="contact-success">
                  <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                  <Button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", message: "" }); }} variant="outline" data-testid="button-send-another">
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1.5"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="mt-1.5"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email (optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1.5"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what you need..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1.5 resize-none"
                      data-testid="input-message"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full font-semibold" disabled={loading} data-testid="button-submit-contact">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <Card className="p-5" data-testid="card-contact-whatsapp">
                <a
                  href="https://wa.me/27693193534?text=Hi%20CityFresh%2C%20I%27d%20like%20to%20get%20in%20touch!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                  data-testid="link-contact-whatsapp"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">069 319 3534 - Fastest response</p>
                  </div>
                </a>
              </Card>

              <Card className="p-5" data-testid="card-contact-phone">
                <a href="tel:+27693193534" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">069 319 3534</p>
                  </div>
                </a>
              </Card>

              <Card className="p-5" data-testid="card-contact-email">
                <a href="mailto:info@cityfresh.co.za" className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@cityfresh.co.za</p>
                  </div>
                </a>
              </Card>

              <Card className="p-5" data-testid="card-contact-address">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">25 Dirkie Uys Street, Somerset West, Cape Town</p>
                  </div>
                </div>
              </Card>

              <Card className="p-5" data-testid="card-contact-hours">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon - Fri: 07:00 - 17:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
