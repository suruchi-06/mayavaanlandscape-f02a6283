import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Mayavaan Landscape" },
      { name: "description", content: "What our clients say about working with Mayavaan Landscape across residential, resort and commercial projects." },
    ],
  }),
  component: Reviews,
});

const reviews = [
  { name: "Anjali Mehta", role: "Resort Owner, Goa", rating: 5, text: "Mayavaan transformed our resort into a living, breathing oasis. Every plant feels intentional — and after two years, the gardens have only grown more beautiful." },
  { name: "Rajeev Singh", role: "Homeowner, Patna", rating: 5, text: "From soil testing to final plantation, the team treated our garden like their own. Professional, knowledgeable, and incredibly passionate about their craft." },
  { name: "Sunita Kapoor", role: "Architect, Delhi", rating: 5, text: "I've collaborated with many landscape contractors. Mayavaan stands apart — they think like horticulturists, not just installers. Highly recommended." },
  { name: "Arvind Reddy", role: "Farmhouse Owner, Hyderabad", rating: 5, text: "Our farmhouse landscape is a work of art. The team's attention to climate-appropriate plant selection saved us so much on maintenance." },
  { name: "Priya Banerjee", role: "Interior Designer", rating: 5, text: "Their indoor installations are stunning. The lobby garden they built is now the most photographed corner of the building." },
  { name: "Mohammed Iqbal", role: "Project Manager, Township", rating: 5, text: "Reliable, on-time, and execution quality is top notch. The greenway they delivered changed how the entire neighbourhood feels." },
];

const stats = [
  { n: "50+", l: "Happy Clients" },
  { n: "4.9/5", l: "Average Rating" },
  { n: "100%", l: "Project Completion" },
  { n: "5+", l: "States Served" },
];

function Reviews() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Testimonials" title="Loved by clients across India">
            Real words from people who trusted us with their land.
          </SectionHeader>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.l} className="text-center bg-card border border-border/60 rounded-2xl py-6">
                <div className="font-display text-3xl sm:text-4xl font-bold text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card rounded-2xl p-7 border border-border/60 shadow-soft hover:shadow-leaf hover:-translate-y-1 transition-all relative">
                <Quote className="absolute top-5 right-5 h-8 w-8 text-accent/30" />
                <div className="flex items-center gap-0.5 text-accent mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/85 leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="h-11 w-11 rounded-full bg-gradient-leaf flex items-center justify-center text-primary-foreground font-display font-bold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
