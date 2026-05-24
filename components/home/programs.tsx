

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Baby, MessagesSquare, Waves, Users } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";

const programs = [
  {
    id: "early",
    icon: Baby,
    color: "var(--brand-sky)",
    title: "Early Intervention",
    blurb: "Play-based sessions for our youngest learners that build trust, regulation, and joy in connection.",
    bullets: ["Ages 18 months – 5 years", "Parent coaching included", "Naturalistic developmental approach"],
  },
  {
    id: "speech",
    icon: MessagesSquare,
    color: "var(--brand-purple)",
    title: "Speech & Communication Supports",
    blurb: "Every learner has something to say. We support spoken language, AAC devices, signing, and beyond.",
    bullets: ["AAC modeling and setup", "Pragmatic language groups", "Family communication coaching"],
  },
  {
    id: "sensory",
    icon: Waves,
    color: "var(--brand-green)",
    title: "Sensory-Friendly Learning",
    blurb: "Quiet lighting, predictable routines, and movement breaks woven into the whole day.",
    bullets: ["Sensory rooms and tools", "Visual schedules", "Co-regulation strategies"],
  },
  {
    id: "social",
    icon: Users,
    color: "var(--brand-yellow)",
    title: "Social Skills & Independence",
    blurb: "Small-group practice for friendships, flexibility, and the daily life skills that build confidence.",
    bullets: ["Peer-mediated groups", "Life-skills curriculum", "Community outings"],
  },
];

export function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <Reveal as="header" className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-sky)]">Programs</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
          Pathways built around your child
        </h2>
        <p className="mt-3 text-foreground/80">
          Four core programs, blended to fit each learner. Tap a card to see what's inside.
        </p>
      </Reveal>

      <RevealStagger className="mt-10">
        <Accordion type="single" collapsible className="grid gap-4 sm:grid-cols-2">
          {programs.map((p) => (
            <RevealItem key={p.id}>
              <AccordionItem
            key={p.id}
            value={p.id}
            className="rounded-2xl border border-border bg-card shadow-soft data-[state=open]:shadow-lifted transition-shadow"
          >
            <AccordionTrigger className="px-5 py-5 hover:no-underline">
              <div className="flex items-center gap-4 text-left">
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: `color-mix(in oklab, ${p.color} 18%, white)`, color: p.color }}
                  aria-hidden="true"
                >
                  <p.icon className="h-6 w-6" />
                </span>
                <span className="text-lg font-semibold text-[var(--brand-blue)]">{p.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5">
              <p className="text-foreground/80">{p.blurb}</p>
              <ul className="mt-3 space-y-1.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full" style={{ background: p.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </AccordionContent>
              </AccordionItem>
            </RevealItem>
          ))}
        </Accordion>
      </RevealStagger>
    </section>
  );
}