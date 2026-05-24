
const items = [
  { src:"/hero-classroom.jpg", alt: "Sunlit classroom with plants, soft rugs, and natural wood furniture", label: "Calm classrooms", w: 1280, h: 960, span: "lg:col-span-2 lg:row-span-2" },
  { src: "/sensory-room.jpg", alt: "Cozy sensory corner with weighted blanket and fidget tools on a wooden shelf", label: "Sensory corners", w: 1024, h: 768, span: "" },
  { src: "/learning-hands.jpg", alt: "Children's hands sorting colorful wooden letter blocks on a light wood table", label: "Hands-on learning", w: 1024, h: 768, span: "" },
  { src: "/reading-nook.jpg", alt: "Bright reading nook with floor cushions, picture books, and a soft canopy by a window", label: "Quiet reading nooks", w: 1024, h: 768, span: "lg:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-sky)]">A glimpse inside</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
          Spaces designed to settle, not overwhelm
        </h2>
        <p className="mt-3 text-foreground/80">
          Soft lighting, natural materials, predictable layouts, and quiet corners always within reach.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {items.map((it) => (
          <figure
            key={it.label}
            className={`group relative overflow-hidden rounded-3xl shadow-soft border border-border bg-card ${it.span}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              width={it.w}
              height={it.h}
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--brand-blue)] shadow-soft">
              {it.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}