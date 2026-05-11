import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";
import w7 from "@/assets/work-7.jpg";
import w8 from "@/assets/work-8.jpg";
import w9 from "@/assets/work-9.jpg";
import w10 from "@/assets/work-10.jpg";
import w11 from "@/assets/work-11.jpg";
import w12 from "@/assets/work-12.jpg";
import w13 from "@/assets/work-13.jpg";
import w14 from "@/assets/work-14.jpg";
import w15 from "@/assets/work-15.jpg";
import w16 from "@/assets/work-16.jpg";
import wRooftop from "@/assets/work-rooftop.jpg";
import wGreenwall from "@/assets/work-greenwall.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Work by Mayavaan Landscape" },
      { name: "description", content: "Selected landscape projects by Mayavaan — indoor gardens, resort grounds, pathways, urban greening and more." },
    ],
  }),
  component: Portfolio,
});

type Cat = "All" | "Indoor" | "Outdoor" | "Commercial" | "Pathways" | "Rooftop" | "Green Walls";

const works: { src: string; title: string; cat: Exclude<Cat, "All">; desc: string }[] = [
  { src: wRooftop, title: "Skyline Rooftop Garden", cat: "Rooftop", desc: "Layered rooftop plantation with corten planters and walking path." },
  { src: wGreenwall, title: "Living Green Wall", cat: "Green Walls", desc: "Floor-to-ceiling vertical garden with mixed tropical foliage." },
  { src: w5, title: "Lobby Water Garden", cat: "Indoor", desc: "Tropical indoor installation with cascading water feature." },
  { src: w7, title: "Statement Planter Wall", cat: "Indoor", desc: "Spotlit palm planters in a luxury interior." },
  { src: w6, title: "Curved Foliage Planter", cat: "Indoor", desc: "Sculpted planter against textured brick." },
  { src: w1, title: "Statue Garden Niche", cat: "Outdoor", desc: "Integrated hardscape with lush greenery." },
  { src: w2, title: "Garden Bed Plantation", cat: "Outdoor", desc: "Hands-on plantation by our horticulturists." },
  { src: w3, title: "Curved Pathway Garden", cat: "Pathways", desc: "Stone path lined with layered plantings." },
  { src: w4, title: "Bed Preparation", cat: "Outdoor", desc: "Soil work and growing media for new plantings." },
  { src: w8, title: "Township Greenway", cat: "Commercial", desc: "Roadside avenue plantation and landscaping." },
  { src: w9, title: "Grass-paver Walkway", cat: "Pathways", desc: "Long pedestrian path with green pavers." },
  { src: w10, title: "Stone Path Lawn", cat: "Pathways", desc: "Mixed stone-and-grass walkway." },
  { src: w11, title: "Mayaavan Roundabout", cat: "Commercial", desc: "Branded landscaped roundabout." },
  { src: w12, title: "Public Realm", cat: "Commercial", desc: "Civic landscape execution." },
  { src: w13, title: "Site Execution", cat: "Outdoor", desc: "On-site landscape build." },
  { src: w14, title: "Plantation Detail", cat: "Outdoor", desc: "Field plantation in progress." },
  { src: w15, title: "Garden Detail", cat: "Outdoor", desc: "Garden bed detail and finish." },
  { src: w16, title: "Landscape Detail", cat: "Outdoor", desc: "Layered planting composition." },
];

const cats: Cat[] = ["All", "Indoor", "Outdoor", "Rooftop", "Green Walls", "Pathways", "Commercial"];

function Portfolio() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? works : works.filter((w) => w.cat === cat);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Work" title="Landscapes that live and breathe">
          A curated selection from our recent projects — indoor installations, civic greenways, garden estates and more.
        </SectionHeader>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary shadow-leaf"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((w) => (
            <article key={w.title} className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-leaf transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={w.src} alt={w.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="text-primary-foreground translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs uppercase tracking-widest text-accent">{w.cat}</div>
                  <h3 className="font-display text-xl font-semibold mt-1">{w.title}</h3>
                  <p className="text-sm text-primary-foreground/85 mt-1">{w.desc}</p>
                </div>
              </div>
              <div className="p-5 group-hover:opacity-0 transition-opacity">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{w.cat}</div>
                <h3 className="font-display text-lg font-semibold mt-1">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
