'use client'

import { useState } from "react";
import { Shield, MessageCircle, Sprout } from "lucide-react";
import Link from "next/link";

const audiences = {
  families: {
    title: "For Families",
    body: "You know your child best. We meet you with patience, listen carefully, and build a plan around your family's rhythms—no pressure, no jargon.",
  },
  teachers: {
    title: "For Teachers",
    body: "Co-plan with our specialists, share resources, and align classroom strategies with each learner's sensory and communication profile.",
  },
  therapists: {
    title: "For Therapists",
    body: "Collaborate inside a calm, well-equipped learning environment. We coordinate goals so progress translates across home, school, and clinic.",
  },
} as const;

type AudienceKey = keyof typeof audiences;

const values = [
  { icon: Shield, label: "Safety", color: "var(--brand-sky)", desc: "Predictable routines and sensory-aware spaces so every child can settle in." },
  { icon: MessageCircle, label: "Communication", color: "var(--brand-purple)", desc: "We honor every voice—spoken, signed, AAC, or somewhere in between." },
  { icon: Sprout, label: "Growth", color: "var(--brand-green)", desc: "Small, celebrated steps that add up to real independence over time." },
];

export function Hero() {
  const [pick, setPick] = useState<AudienceKey>("families");

  return (
    <section id="top" className="bg-hero relative overflow-hidden">
      {/* Calm floating shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="float-shape absolute -top-10 right-[12%] h-40 w-40 rounded-full opacity-30" style={{ background: "var(--brand-sky)" }} />
        <div className="float-shape delay-1 absolute top-40 left-[8%] h-24 w-24 rounded-3xl opacity-30" style={{ background: "var(--brand-yellow)" }} />
        <div className="float-shape delay-2 absolute bottom-10 right-[30%] h-28 w-28 rounded-full opacity-25" style={{ background: "var(--brand-purple)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-blue shadow-soft">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand-green)" }} aria-hidden="true" />
              Inclusive · Sensory-friendly · Family-led
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-brand-blue">
              Learning that meets every child—
              <span className="text-brand-sky">where they are.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-foreground/80">
             Bridgeway Academy is a calm, welcoming school for students ages 5–18 with autism and
              diverse learning needs. We listen first, plan together, and celebrate progress in every form.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#visit" className="btn-accent rounded-full px-6 py-3 text-base font-semibold shadow-soft">
                Book a Visit
              </a>
              <a href="#programs" className="btn-sky rounded-full px-6 py-3 text-base font-semibold">
                Explore Programs
              </a>
            </div>

            {/* Values strip */}
            <ul className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Our core values">
              {values.map((v) => (
                <li
                  key={v.label}
                  className="group rounded-2xl bg-white/80 p-4 shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `color-mix(in oklab, ${v.color} 18%, white)`, color: v.color }}
                      aria-hidden="true"
                    >
                      <v.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-semibold text-brand-blue">{v.label}</div>
                      <div className="text-xs text-muted-foreground">{v.desc}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Choose Your Path card */}
          <div className="relative">
            <div className="rounded-3xl bg-white/90 p-6 sm:p-8 shadow-lifted border border-border">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-blue">Choose your path</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us who you are and we'll point you to a calm next step.</p>

              <div role="tablist" aria-label="Audience" className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-secondary p-1">
                {(Object.keys(audiences) as AudienceKey[]).map((key) => {
                  const active = pick === key;
                  return (
                    <button
                      key={key}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setPick(key)}
                      className={`rounded-xl px-3 py-2 text-sm font-semibold capitalize transition-colors ${
                        active
                          ? "bg-brand-blue text-white shadow-soft"
                          : "text-foreground/70 hover:text-brand-blue"
                      }`}
                    >
                      {key}
                    </button>
                  );
                })}
              </div>

              <div
                aria-live="polite"
                className="mt-5 rounded-2xl p-5"
                style={{ background: "color-mix(in oklab, var(--brand-sky) 10%, white)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-sky">
                  {audiences[pick].title}
                </div>
                <p className="mt-2 text-foreground/90 leading-relaxed">{audiences[pick].body}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
                >
                  Start the conversation →
                </Link>
              </div>

              <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "1:3", v: "Average ratio" },
                  { k: "12+", v: "Specialists" },
                  { k: "100%", v: "Personalized" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl bg-secondary p-3">
                    <dt className="text-xl font-bold text-brand-blue">{s.k}</dt>
                    <dd className="text-xs text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}