import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mayavaan Landscape Pvt. Ltd." },
      { name: "description", content: "Get in touch with Mayavaan Landscape Pvt. Ltd. — phone, email, and office address. Request a consultation today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Get in touch" title="Let's design something that grows with you">
          Tell us about your space, your dream, and your timeline. We'll respond within 24 hours.
        </SectionHeader>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, title: "Call us", body: "+91 60013 19693\n+91 94522 58324", href: "tel:+916001319693" },
              { icon: Mail, title: "Email us", body: "mayavaanlandscape@gmail.com", href: "mailto:mayavaanlandscape@gmail.com" },
              { icon: MapPin, title: "Visit us", body: "Ajwa, Patna\nBihar, India" },
            ].map((c) => (
              <a key={c.title} href={c.href} className="block bg-card p-6 rounded-2xl border border-border/60 shadow-soft hover:shadow-leaf hover:-translate-y-1 transition-all">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-leaf flex items-center justify-center text-primary-foreground shrink-0">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary font-semibold">{c.title}</div>
                    <div className="font-display text-lg mt-1 whitespace-pre-line">{c.body}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 bg-card p-8 sm:p-10 rounded-3xl border border-border/60 shadow-soft"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-gradient-leaf mx-auto flex items-center justify-center text-primary-foreground mb-4">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">Thank you!</h3>
                <p className="text-muted-foreground">We've received your message and will reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold mb-6">Request a consultation</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <div className="sm:col-span-2"><Field label="Email" name="email" type="email" required /></div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block">Project Type</label>
                    <select required className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition">
                      <option value="">Select a project type</option>
                      <option>Residential Garden</option>
                      <option>Farmhouse Landscaping</option>
                      <option>Resort / Hospitality</option>
                      <option>Villa / Bungalow</option>
                      <option>Terrace Garden</option>
                      <option>Institutional / Commercial</option>
                      <option>Orchard Planning</option>
                      <option>Maintenance Only</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block">Tell us about your space</label>
                    <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none" placeholder="Location, size, vision, timeline…" />
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-leaf text-primary-foreground font-semibold shadow-leaf hover:scale-[1.01] transition">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium mb-1.5 block">{label}</label>
      <input id={name} name={name} type={type} required={required}
        className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
      />
    </div>
  );
}
