import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, Droplets, Sun, Recycle, Star, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import w1 from "@/assets/work-1.jpg";
import w3 from "@/assets/work-3.jpg";
import w5 from "@/assets/work-5.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";
import w9 from "@/assets/work-9.jpg";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mayavaan Landscape — Sustainable Garden & Landscape Design" },
      { name: "description", content: "We transform empty land into vibrant, sustainable green spaces. Residential, resort, farmhouse and commercial landscaping across India." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Sprout, title: "Horticulture-Driven", desc: "Plant science and soil expertise behind every design." },
  { icon: Droplets, title: "Water Efficient", desc: "Smart irrigation that conserves and nourishes." },
  { icon: Sun, title: "Climate Resilient", desc: "Native species chosen to thrive year-round." },
  { icon: Recycle, title: "Sustainable", desc: "Biodiversity-first, low-impact landscaping." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Lush landscaped garden at golden hour" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-primary-foreground">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold uppercase tracking-widest mb-6">
            Mayavaan Landscape Pvt. Ltd.
          </span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl text-balance">
            Where Land<br />Becomes <span className="italic text-accent">Living Art.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg sm:text-xl text-primary-foreground/90 leading-relaxed">
            We transform empty land into vibrant green environments — through innovative design,
            expert plant selection, and thoughtful, sustainable execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-leaf hover:scale-[1.03] transition">
              Start Your Project <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary-foreground/40 backdrop-blur-sm hover:bg-primary-foreground/10 font-semibold transition">
              View Our Work
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[["50+", "Projects"], ["7+", "Service Areas"], ["100%", "Sustainable"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl sm:text-4xl font-bold text-accent">{n}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What sets us apart" title="More than landscaping — a living legacy">
            We combine horticulture expertise, plant science, and modern landscape techniques so your green spaces don't just look beautiful — they thrive for years.
          </SectionHeader>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-leaf hover:-translate-y-1 transition-all border border-border/60">
                <div className="h-12 w-12 rounded-xl bg-gradient-leaf flex items-center justify-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION + IMAGE */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Our Mission</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6 text-balance">
              Meaningful greenery, designed for modern life.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Mayavaan Landscape combines horticultural expertise with creative landscape planning
              to develop gardens, lawns, resorts, farmhouses, and commercial green spaces that
              enhance both aesthetics and environmental value.
            </p>
            <ul className="space-y-3">
              {[
                "Deliver high-quality landscaping solutions",
                "Promote sustainable design",
                "Provide customized landscape solutions",
                "Enhance property value through professional landscaping",
              ].map((m) => (
                <li key={m} className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  <span className="text-foreground/85">{m}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all">
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={w5} alt="Indoor waterfall garden" className="rounded-2xl shadow-leaf object-cover h-72 w-full" loading="lazy" />
            <img src={w7} alt="Tropical planters" className="rounded-2xl shadow-leaf object-cover h-72 w-full mt-12" loading="lazy" />
            <img src={w3} alt="Curved garden pathway" className="rounded-2xl shadow-leaf object-cover h-72 w-full -mt-6" loading="lazy" />
            <img src={w1} alt="Landscape with plants and statue" className="rounded-2xl shadow-leaf object-cover h-72 w-full mt-6" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Selected Work</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 max-w-xl">From small terraces to city-scale greenways.</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-[1.03] transition">
              See full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              [w8, "Township Landscaping", "Public infrastructure greening"],
              [w9, "Pathway & Hardscape", "Grass-paver walkways"],
              [w5, "Indoor Water Feature", "Lobby installation"],
            ].map(([img, title, sub]) => (
              <div key={title as string} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img src={img as string} alt={title as string} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <div className="text-xs uppercase tracking-widest text-accent">{sub}</div>
                  <div className="font-display text-xl font-semibold">{title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL HIGHLIGHT */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
          <p className="font-display text-2xl sm:text-3xl leading-snug text-balance">
            "Mayavaan transformed our resort into a living, breathing oasis. Every plant feels
            intentional — and after two years, the gardens have only grown more beautiful."
          </p>
          <div className="mt-8 flex items-center justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <div className="mt-3 text-sm text-muted-foreground">Anjali Mehta · Resort Owner, Goa</div>
          <Link to="/reviews" className="inline-flex items-center gap-2 mt-8 text-primary font-semibold">
            Read all reviews <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-leaf p-12 sm:p-16 text-primary-foreground shadow-leaf">
            <div className="relative z-10 max-w-2xl">
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-balance">Ready to grow something beautiful?</h2>
              <p className="text-primary-foreground/85 text-lg mb-8">Tell us about your space — we'll design a landscape that lasts.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold hover:scale-[1.03] transition">
                Request a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />
          </div>
        </div>
      </section>
    </>
  );
}
