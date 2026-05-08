import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";
import about1 from "@/assets/about-1.jpg";
import w6 from "@/assets/work-6.jpg";
import { Target, Eye, Heart, Leaf } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mayavaan Landscape Pvt. Ltd." },
      { name: "description", content: "Learn about Mayavaan Landscape — a horticulture-driven team designing sustainable indoor and outdoor green spaces across India." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={about1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Our Story</span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold mt-3 max-w-3xl text-balance">
            Rooted in nature.<br />Designed for life.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/85 text-lg">
            Mayavaan Landscape Pvt. Ltd. is a professional landscape design and development company
            dedicated to creating beautiful, sustainable, and functional indoor & outdoor spaces.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <img src={about1} alt="Workers tending an indoor garden" className="rounded-3xl shadow-leaf object-cover w-full aspect-[4/3]" />
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">Who we are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We transform empty land into vibrant green environments through innovative design,
              expert plant selection, and quality execution.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team combines horticultural expertise with creative landscape planning to develop
              gardens, lawns, resorts, farmhouses, and commercial green spaces that enhance both
              aesthetics and environmental value.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Mission", body: "Deliver high-quality, sustainable, customized landscaping solutions that enhance property value and uplift everyday life." },
            { icon: Eye, title: "Vision", body: "To become one of India's most trusted landscape development companies — known for eco-friendly and inspiring outdoor spaces." },
            { icon: Heart, title: "Approach", body: "Every project begins with understanding the site, soil, climate, and plant compatibility — design follows nature." },
          ].map((b) => (
            <div key={b.title} className="bg-card p-8 rounded-2xl shadow-soft border border-border/60">
              <b.icon className="h-9 w-9 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Sustainability" title="Our commitment to the planet">
            We promote environmentally responsible landscaping at every step.
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <img src={w6} alt="Sustainable planter design" className="rounded-3xl shadow-leaf object-cover w-full aspect-[4/3]" loading="lazy" />
            <ul className="space-y-5">
              {[
                "Using native and climate-resilient plants",
                "Encouraging water-efficient irrigation",
                "Supporting biodiversity in every design",
                "Reducing environmental impact through sustainable materials",
                "Promoting horticulture-driven landscape practices",
              ].map((s) => (
                <li key={s} className="flex gap-4 items-start bg-card p-5 rounded-xl border border-border/60">
                  <Leaf className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span className="text-foreground/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">Future Vision</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 text-balance">
            Expanding meaningful greenery across India.
          </h2>
          <p className="mt-6 text-primary-foreground/85 text-lg leading-relaxed">
            We aim to expand our services across India and develop innovative landscape solutions
            that combine beauty, sustainability, and function — for generations to enjoy.
          </p>
        </div>
      </section>
    </>
  );
}
