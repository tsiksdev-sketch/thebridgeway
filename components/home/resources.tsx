'use client' 

import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download, FileText } from "lucide-react";

const categories = ["Getting Started", "Communication", "Sensory Tools", "Routines & Behavior"] as const;
type Cat = typeof categories[number];

const resources: { id: string; cat: Cat; title: string; desc: string; body: string }[] = [
  { id: "r1", cat: "Getting Started", title: "First Visit Guide", desc: "What to expect, what to bring, and how to prepare your child.", body: "A short, gentle walkthrough covering arrival, the sensory room, our greeters, and how the first 30 minutes typically go." },
  { id: "r2", cat: "Getting Started", title: "Family Intake Workbook", desc: "Capture your child's strengths, preferences, and triggers.", body: "A printable workbook with prompts about favorite activities, soothing strategies, food preferences, and communication style." },
  { id: "r3", cat: "Communication", title: "AAC Starter Pack", desc: "Core board, modeling tips, and parent-friendly videos.", body: "Includes a printable 40-icon core board, 3 short modeling videos, and a one-page how-to for caregivers." },
  { id: "r4", cat: "Communication", title: "Visual Choice Cards", desc: "Printable cards to support daily decisions and routines.", body: "Color-coded, low-clutter cards for meals, activities, breaks, and transitions—designed to reduce overwhelm." },
  { id: "r5", cat: "Sensory Tools", title: "Build a Calm Corner", desc: "Set up a low-cost regulation space at home.", body: "A checklist of inexpensive items, layout tips, and how to introduce the space without overwhelm." },
  { id: "r6", cat: "Sensory Tools", title: "Sensory Diet Template", desc: "A daily rhythm of input that supports regulation.", body: "Customizable template you can co-create with our OT during your assessment visit." },
  { id: "r7", cat: "Routines & Behavior", title: "Morning Routine Visual", desc: "Reduce friction with a clear, predictable start.", body: "Printable strip with editable steps. Pairs well with a first-then board and a soft timer." },
  { id: "r8", cat: "Routines & Behavior", title: "Co-Regulation Cheat Sheet", desc: "What to do in the moment, and what to avoid.", body: "A two-page reference covering breathing prompts, sensory swaps, and language that calms rather than escalates." },
];

export function Resources() {
  const [active, setActive] = useState<Cat | "All">("All");
  const [open, setOpen] = useState<string | null>(null);

  const list = useMemo(
    () => (active === "All" ? resources : resources.filter((r) => r.cat === active)),
    [active],
  );

  const current = resources.find((r) => r.id === open) ?? null;

  return (
    <section id="resources" className="bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-yellow)]">Resources for families</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">Tools you can take home today</h2>
          <p className="mt-3 text-foreground/80">Browse by topic. Preview any resource, save it for later.</p>
        </header>

        <div role="tablist" aria-label="Resource categories" className="mt-8 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  isActive
                    ? "bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]"
                    : "bg-card text-foreground/80 border-border hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <li key={r.id}>
              <button
                onClick={() => setOpen(r.id)}
                className="block w-full text-left rounded-2xl bg-card p-5 shadow-soft border border-border hover:-translate-y-0.5 hover:shadow-lifted transition-transform"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--brand-sky)_15%,white)] text-[var(--brand-blue)]" aria-hidden="true">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-sky)]">{r.cat}</p>
                    <h3 className="mt-1 font-semibold text-[var(--brand-blue)]">{r.title}</h3>
                    <p className="mt-1 text-sm text-foreground/75">{r.desc}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <Dialog open={!!current} onOpenChange={(o) => !o && setOpen(null)}>
          <DialogContent className="max-w-lg">
            {current && (
              <>
                <DialogHeader>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-sky)]">{current.cat}</p>
                  <DialogTitle className="text-[var(--brand-blue)]">{current.title}</DialogTitle>
                  <DialogDescription>{current.desc}</DialogDescription>
                </DialogHeader>
                <p className="text-sm text-foreground/85 leading-relaxed">{current.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="btn-accent inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                    <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
                  </button>
                  <button
                    onClick={() => setOpen(null)}
                    className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}