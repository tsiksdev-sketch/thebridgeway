'use client'

import { useMemo, useState } from "react";
import PagesHero from "./PagesHero";


type Category = "Reforestation" | "Fruit Trees" | "Community Farms" | "Rewilding" | "Volunteers";

const items: { src: string; alt: string; category: Category; caption: string }[] = [
  { src: 'gallery-reforest.jpg', alt: "Misty reforested woodland", category: "Reforestation", caption: "Misty pine restoration, Cascadia" },
  { src:'/gallery-orchard.jpg', alt: "Apple orchard rows", category: "Fruit Trees", caption: "Heritage apple orchard, Galicia" },
  { src: '/gallery-farm.jpg', alt: "Community vegetable farm at sunrise", category: "Community Farms", caption: "Sunrise harvest, Rift Valley" },
  { src: '/gallery-community.jpg', alt: "Children planting a sapling", category: "Volunteers", caption: "School planting day" },
  { src: '/gallery-citrus.jpg', alt: "Ripe oranges on a branch", category: "Fruit Trees", caption: "Citrus agroforestry, Andalusia" },
  { src: '/gallery-rewild.jpg', alt: "Wildflower meadow with butterflies", category: "Rewilding", caption: "Rewilded meadow, Highlands" },
  { src: '/aerial-forest.jpg', alt: "Aerial forest canopy", category: "Reforestation", caption: "Atlantic Forest mosaic" },
  { src: '/canopy.jpg', alt: "Sunlight through canopy", category: "Rewilding", caption: "Restored canopy, Borneo" },
  { src: '/sapling-hands.jpg', alt: "Hands holding a sapling", category: "Volunteers", caption: "First leaves, first hope" },
  { src: '/volunteers.jpg', alt: "Volunteers planting trees", category: "Community Farms", caption: "Agroforestry training day" },
  { src: '/hero-planting.jpg', alt: "Planting a young tree", category: "Reforestation", caption: "A new line of native oaks" },
];

const filters: ("All" | Category)[] = ["All", "Reforestation", "Fruit Trees", "Community Farms", "Rewilding", "Volunteers"];

export default function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active],
  );

  return (
    <div>
     
      <PagesHero subtitle="Gallery" title="Moments from the field." description=" From freshly planted saplings to thriving orchards — explore our work by project type."/>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => {
            const isActive = f === active;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={
                  "rounded-full px-5 py-2 text-sm font-medium transition-all " +
                  (isActive
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/70")
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:balance]">
          {filtered.map((it, idx) => (
            <figure
              key={`${it.src}-${idx}`}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="overflow-hidden">
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span className="text-sm text-foreground">{it.caption}</span>
                <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {it.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">No images in this category yet.</p>
        )}
      </section>
    </div>
  );
}
