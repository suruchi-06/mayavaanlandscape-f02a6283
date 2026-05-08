import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Home, TreePine, Hotel, Building2, Sprout, GraduationCap, Apple, Droplets, Layers, Wrench, Trees, ClipboardList, MapPin, Hammer, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Expertise — Mayavaan Landscape" },
      { name: "description", content: "Landscape design & development, lawn installation, plant supply, irrigation and more — for residential, resort and commercial spaces." },
    ],
  }),
  component: Services,
});

const expertise = [
  { icon: Home, title: "Residential Gardens", desc: "Beautiful, low-maintenance home gardens tailored to your space." },
  { icon: TreePine, title: "Farmhouse Landscaping", desc: "Expansive, productive landscapes that complement rural retreats." },
  { icon: Hotel, title: "Resort Landscaping", desc: "Hospitality-grade greenery that elevates guest experience." },
  { icon: Building2, title: "Villa & Bungalow", desc: "Premium landscape design for villas and bungalow estates." },
  { icon: Sprout, title: "Terrace Gardens", desc: "Urban green oases on rooftops and balconies." },
  { icon: GraduationCap, title: "Institutional", desc: "Schools, campuses and corporate green spaces." },
  { icon: Apple, title: "Orchard Planning", desc: "Productive orchards designed for yield and health." },
];

const services = [
  { icon: Layers, title: "Landscape Design & Development", desc: "Concept to completion — site analysis, 3D design, planting plans, hardscape and full execution by our specialists." },
  { icon: Sprout, title: "Lawn Installation & Maintenance", desc: "Premium turf installation and ongoing care to keep lawns thriving year-round." },
  { icon: Trees, title: "Plant Supply", desc: "Curated, healthy nursery stock — native species, ornamentals, palms, shrubs and indoor plants." },
  { icon: Droplets, title: "Irrigation Installation & Care", desc: "Drip and sprinkler systems engineered for water efficiency and plant health." },
  { icon: Wrench, title: "Growing Media Preparation", desc: "Soil amendment and substrate engineering for long-term plant success." },
];

const process = [
  { icon: ClipboardList, title: "Consultation", desc: "Understanding client requirements and site conditions." },
  { icon: MapPin, title: "Site Analysis", desc: "Studying soil, climate, sunlight, and space planning." },
  { icon: Layers, title: "Design Development", desc: "Creating thoughtful landscape design concepts." },
  { icon: Hammer, title: "Execution", desc: "Professional landscaping and plantation by our team." },
  { icon: ShieldCheck, title: "Maintenance", desc: "Ensuring the garden stays healthy and beautiful." },
];

const tabs = [
  { id: "expertise", label: "Expertise" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
] as const;

function Services() {
  const [tab, setTab] = useState<typeof tabs[number]["id"]>("expertise");

  return (
    <>
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What we do" title="A full-service landscape studio">
            From the first sketch to long-term care — every step handled by horticulturists and designers under one roof.
          </SectionHeader>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card p-1.5 rounded-full border border-border shadow-soft">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`px-6 sm:px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    tab === t.id
                      ? "bg-gradient-leaf text-primary-foreground shadow-leaf"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {tab === "expertise" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in duration-500">
              {expertise.map((e) => (
                <div key={e.title} className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-leaf hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4">
                    <e.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "services" && (
            <div className="grid gap-6 md:grid-cols-2 animate-in fade-in duration-500">
              {services.map((s, i) => (
                <div key={s.title} className="group bg-card rounded-2xl p-8 border border-border/60 hover:shadow-leaf transition-all flex gap-5">
                  <div className="shrink-0 h-14 w-14 rounded-xl bg-gradient-leaf flex items-center justify-center text-primary-foreground">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">0{i + 1}</div>
                    <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "process" && (
            <div className="relative max-w-4xl mx-auto animate-in fade-in duration-500">
              <div className="absolute left-8 top-4 bottom-4 w-px bg-border hidden sm:block" />
              <div className="space-y-6">
                {process.map((p, i) => (
                  <div key={p.title} className="relative bg-card p-6 sm:p-7 rounded-2xl border border-border/60 sm:ml-20 hover:shadow-leaf transition-all">
                    <div className="sm:absolute sm:-left-20 sm:top-6 flex items-center gap-4 mb-3 sm:mb-0">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-leaf flex items-center justify-center text-primary-foreground font-display font-bold text-xl shadow-leaf">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <p.icon className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                        <p className="text-muted-foreground mt-1">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-2xl sm:text-3xl italic text-balance text-foreground/80">
            "Each project is designed specifically for the space, climate, and client vision."
          </p>
        </div>
      </section>
    </>
  );
}
