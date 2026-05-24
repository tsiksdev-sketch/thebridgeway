'use client'


import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HeartHandshake,
  Users,
  BookOpen,
  Calendar,
  MessageCircle,
  Headphones,
  Download,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";


const pillars = [
  { icon: HeartHandshake, title: "1:1 Family Coaching", body: "Monthly sessions with your child's lead teacher and a family specialist to align home and school.", color: "var(--brand-sky)" },
  { icon: Users, title: "Peer Circles", body: "Small, facilitated groups of 6–8 parents who meet twice a month. Childcare provided on campus.", color: "var(--brand-purple)" },
  { icon: BookOpen, title: "Resource Library", body: "Visual schedules, social stories, transition guides, IEP templates — free for every Bridgeway family.", color: "var(--brand-green)" },
  { icon: Headphones, title: "Warm Line", body: "Text or call our family team Monday–Friday. We aim to reply within one school day, always with care.", color: "var(--brand-yellow)" },
];

const workshops = {
  weekly: [
    { day: "Mon", title: "Morning Coffee & Coaching", time: "8:30 – 9:30 am", who: "All families · drop-in" },
    { day: "Wed", title: "Communication Tools at Home", time: "6:00 – 7:00 pm", who: "AAC & speech focus" },
    { day: "Fri", title: "Sensory Saturday Prep", time: "3:30 – 4:30 pm", who: "Families of ages 5–10" },
  ],
  monthly: [
    { day: "1st Tue", title: "IEP Deep Dive Workshop", time: "6:30 – 8:00 pm", who: "New & returning families" },
    { day: "2nd Sat", title: "Sibling Saturday", time: "10:00 am – 12:00 pm", who: "Brothers & sisters welcome" },
    { day: "3rd Thu", title: "Teen Transition Lab", time: "6:00 – 7:30 pm", who: "Families of ages 14–18" },
  ],
  seasonal: [
    { day: "Aug", title: "Back-to-School Soft Launch", time: "Full week, by appointment", who: "All returning students" },
    { day: "Jan", title: "Mid-Year Family Conference", time: "Two-day event", who: "All families" },
    { day: "May", title: "Summer Bridge Planning", time: "Workshop series", who: "All ages" },
  ],
};

const resources = [
  { title: "Visual Morning Routine", type: "Printable PDF", size: "1.2 MB" },
  { title: "First-Day Social Story", type: "Editable template", size: "640 KB" },
  { title: "Sensory Toolkit Checklist", type: "Printable PDF", size: "320 KB" },
  { title: "IEP Meeting Prep Worksheet", type: "Editable PDF", size: "480 KB" },
  { title: "Calm-Down Card Deck", type: "Printable cards", size: "2.1 MB" },
  { title: "Teen Independence Tracker", type: "Editable template", size: "560 KB" },
];

const faqs = [
  { q: "Do I have to attend everything?", a: "Not at all. Most families pick one peer circle and one workshop a month. We meet you where you are." },
  { q: "Is parent support included in tuition?", a: "Yes. Coaching, circles, the warm line, and all resources are included for every enrolled family at no extra cost." },
  { q: "Can grandparents or caregivers join?", a: "Absolutely. Anyone in your child's circle of care is welcome — we'll add them to the family portal." },
  { q: "What if I prefer to meet 1:1 instead of in a group?", a: "We always offer a 1:1 path. Many families start there and join a circle when they feel ready." },
  { q: "Do you offer sessions in other languages?", a: "We currently host sessions in English and Spanish, and arrange interpreters for other languages on request." },
];

export default function ParentSupportPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">

      <main id="main">
        {/* Hero */}
        <section className="bg-hero">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--brand-blue)] shadow-soft">
                <Sparkles className="h-3.5 w-3.5" /> Parent Support · Ages 5–18
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--brand-blue)] leading-tight">
                You don't have to figure this out alone.
              </h1>
              <p className="mt-5 text-lg text-foreground/80 max-w-xl">
                Coaching, peer circles, workshops, and a warm line — built by educators and parents
                who have walked this road. Every Bridgeway family is supported, free of charge.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#workshops" className="btn-sky rounded-full px-6 py-3 font-semibold">See this week's workshops</a>
                <Link href="/contact" className="btn-accent rounded-full px-6 py-3 font-semibold">Talk with our family team</Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src='/parent-child.jpg'
                alt="A parent and child smiling together inside a Bridgeway classroom"
                width={1280}
                height={896}
                className="rounded-3xl shadow-lifted aspect-[4/3] object-cover w-full"
              />
              <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white px-5 py-4 shadow-soft border border-border max-w-xs">
                <p className="text-sm font-semibold text-[var(--brand-blue)]">98% of parents</p>
                <p className="text-xs text-foreground/70">say they feel "more confident" after their first month with us.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">Four ways we walk with you</h2>
          <p className="mt-3 text-foreground/70 max-w-2xl">Pick what fits this season of your family's life. You can always add more later.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <Card key={p.title} className="p-6 hover:shadow-lifted transition-shadow">
                <span
                  aria-hidden
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in oklab, ${p.color} 18%, white)`, color: p.color }}
                >
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--brand-blue)]">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{p.body}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Workshops with tabs */}
        <section id="workshops" className="bg-secondary/50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
            <Image
              src='/parent-circle.jpg'
              alt="A small group of parents meeting in a sunlit support circle"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-3xl shadow-soft aspect-[4/3] object-cover w-full"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">Workshops & circles</h2>
              <p className="mt-3 text-foreground/70">Free for every Bridgeway family. Walk in, dial in, or catch the recording.</p>
              <Tabs defaultValue="weekly" className="mt-6">
                <TabsList className="bg-white/70">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
                </TabsList>
                {(["weekly", "monthly", "seasonal"] as const).map((k) => (
                  <TabsContent key={k} value={k} className="mt-4 space-y-3">
                    {workshops[k].map((w) => (
                      <div key={w.title} className="flex items-start gap-4 rounded-xl bg-white p-4 border border-border hover:border-[var(--brand-sky)] transition-colors">
                        <span className="inline-flex h-12 w-14 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-blue)] text-white text-xs font-bold">{w.day}</span>
                        <div className="min-w-0">
                          <p className="font-semibold text-[var(--brand-blue)]">{w.title}</p>
                          <p className="text-sm text-foreground/70 flex items-center gap-2 mt-1"><Calendar className="h-3.5 w-3.5" /> {w.time}</p>
                          <p className="text-xs text-foreground/60 mt-0.5">{w.who}</p>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Resource library */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">Free resource library</h2>
              <p className="mt-3 text-foreground/70 max-w-xl">Printables, templates, and toolkits made by our teachers and therapists.</p>
            </div>
            <span className="text-sm text-foreground/60">{resources.length} resources · updated monthly</span>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((r) => (
              <li key={r.title}>
                <button
                  type="button"
                  className="w-full text-left rounded-2xl border border-border bg-card p-5 hover:border-[var(--brand-sky)] hover:shadow-soft transition group cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-[var(--brand-blue)] group-hover:underline">{r.title}</p>
                      <p className="text-xs text-foreground/60 mt-1">{r.type} · {r.size}</p>
                    </div>
                    <Download className="h-5 w-5 text-[var(--brand-sky)] shrink-0" />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="bg-soft py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)] text-center">Common questions</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`f-${i}`} className="bg-white/80 rounded-xl mb-3 px-4 border-0">
                  <AccordionTrigger className="text-left font-semibold text-[var(--brand-blue)] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/75 leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20">
          <Card className="p-8 sm:p-10 text-center shadow-soft">
            <MessageCircle className="mx-auto h-10 w-10 text-[var(--brand-sky)]" aria-hidden />
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[var(--brand-blue)]">Get the monthly family letter</h2>
            <p className="mt-3 text-foreground/70 max-w-md mx-auto">
              One short, calm email each month: upcoming workshops, new resources, and a note from our family team.
            </p>
            {subscribed ? (
              <p role="status" className="mt-6 inline-flex items-center gap-2 text-[var(--brand-green)] font-semibold">
                <CheckCircle2 className="h-5 w-5" /> You're on the list — see you next month.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes("@")) setSubscribed(true);
                }}
                className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="news-email" className="sr-only">Email address</label>
                <Input
                  id="news-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@family.com"
                  className="h-12"
                />
                <Button type="submit" className="h-12 px-6 rounded-md bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white">
                  Subscribe
                </Button>
              </form>
            )}
          </Card>
        </section>
      </main>
   
    </div>
  );
}