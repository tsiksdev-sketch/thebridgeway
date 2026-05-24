import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PhoneCall,
  ClipboardList,
  Coffee,
  Users2,
  FileCheck2,
  Sparkles,
  CalendarDays,
  HeartHandshake,
} from "lucide-react";




const steps = [
  {
    icon: PhoneCall,
    title: "Say hello",
    summary: "A friendly call or email—no pressure, no paperwork.",
    detail:
      "Share as little or as much as you'd like. We listen first, answer questions, and help you decide if a visit feels right.",
  },
  {
    icon: ClipboardList,
    title: "Family intake",
    summary: "A short, optional questionnaire to understand your child.",
    detail:
      "We ask about strengths, sensory profile, communication style, routines, and what 'a good day' looks like for your family.",
  },
  {
    icon: Coffee,
    title: "Calm campus visit",
    summary: "Tour our spaces at your child's pace.",
    detail:
      "Quiet hours available. Meet a specialist, see the sensory room, and let your child explore without expectations.",
  },
  {
    icon: Users2,
    title: "Learner discovery day",
    summary: "A relaxed half-day with our team.",
    detail:
      "Your child spends time with peers and specialists doing things they enjoy. We observe, connect, and take notes—no testing pressure.",
  },
  {
    icon: FileCheck2,
    title: "Plan together",
    summary: "We co-create a draft Individualized Learning Plan.",
    detail:
      "Goals, supports, communication style, and the rhythm of your week—all shaped with you before anything is finalized.",
  },
  {
    icon: Sparkles,
    title: "Welcome week",
    summary: "A gentle, phased start to the school year.",
    detail:
      "Short days, familiar faces, a social story prepared in advance. We build comfort first—academics follow naturally.",
  },
];

const eligibility = [
  { age: "Ages 5–10", focus: "Foundations: language, play, sensory regulation, early literacy and numeracy." },
  { age: "Ages 11–14", focus: "Bridge years: communication, friendships, self-advocacy, project-based learning." },
  { age: "Ages 15–18", focus: "Transitions: life skills, vocational pathways, community participation, independence." },
];

const faqs = [
  {
    q: "When can we apply?",
    a: "Rolling admissions year-round. We hold a small number of mid-year spots to support families whose current placement isn't the right fit.",
  },
  {
    q: "Do you require a diagnosis?",
    a: "No. A formal diagnosis is welcome but not required. We work from the child in front of us, not a label.",
  },
  {
    q: "What does it cost?",
    a: "Tuition is shared transparently after your first call. Sliding-scale support and scholarship pathways are available—please ask.",
  },
  {
    q: "How long does the process take?",
    a: "Usually 2–4 weeks from first call to welcome week, but we move at your family's pace—faster or slower is fine.",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main>
        {/* Hero */}
        <section className="bg-hero relative overflow-hidden">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20 pb-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)] shadow-soft">
                  <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
                  Admissions · Ages 5–18
                </span>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[var(--brand-blue)]">
                  An unhurried path to your child's
                  <span className="text-[var(--brand-sky)]"> first day.</span>
                </h1>
                <p className="mt-5 max-w-xl text-lg text-foreground/80">
                  Six calm steps, no pop quizzes, no surprise paperwork. We move at the pace
                  that feels right for your family.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-accent rounded-full px-6 py-3 text-base font-semibold shadow-soft">
                    Start with a call
                  </Link>
                  <Link href="/about" className="btn-sky rounded-full px-6 py-3 text-base font-semibold">
                    Read our approach
                  </Link>
                </div>
              </div>
              <figure className="relative overflow-hidden rounded-3xl shadow-lifted border border-border">
                <Image
                  src='/hero-classroom.jpg'
                  alt="A sunlit Bridgeway classroom with plants, soft rugs, and natural wood furniture"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* Process timeline */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-sky)]">How it works</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">The Bridgeway admissions journey</h2>
            <p className="mt-3 text-foreground/80">
              Each step is designed to build trust before anything else. You can pause, repeat, or skip ahead at any time.
            </p>
          </header>

          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="group relative rounded-3xl bg-card p-6 shadow-soft border border-border transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                    style={{
                      background: "color-mix(in oklab, var(--brand-sky) 18%, white)",
                      color: "var(--brand-blue)",
                    }}
                  >
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[var(--brand-blue)]">{s.title}</h3>
                <p className="mt-1 font-medium text-foreground/90">{s.summary}</p>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Eligibility */}
        <section className="bg-soft">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <figure className="relative overflow-hidden rounded-3xl shadow-lifted border border-border">
                <Image
                  src='/reading-nook.jpg'
                  alt="A welcoming reading nook with cushions, picture books, and soft natural light"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover aspect-[4/3]"
                />
              </figure>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-blue)]">Who we serve</p>
                <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
                  Students ages 5 to 18, met where they are
                </h2>
                <p className="mt-3 text-foreground/80">
                  We support autistic learners and students with diverse cognitive, communication,
                  and sensory profiles. A formal diagnosis is welcome but never required.
                </p>
                <ul className="mt-6 grid gap-3">
                  {eligibility.map((e) => (
                    <li key={e.age} className="rounded-2xl bg-white/90 p-4 shadow-soft border border-border">
                      <div className="text-sm font-semibold text-[var(--brand-sky)]">{e.age}</div>
                      <div className="mt-1 text-foreground/85">{e.focus}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What to bring + FAQ */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl bg-card p-6 sm:p-8 shadow-soft border border-border">
              <h2 className="text-2xl font-bold text-[var(--brand-blue)]">What to bring (only if you have it)</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Nothing is required. These help us prepare a welcoming first visit.
              </p>
              <ul className="mt-5 grid gap-3">
                {[
                  { icon: CalendarDays, text: "A recent school report or IEP, if available" },
                  { icon: ClipboardList, text: "Notes about sensory preferences and triggers" },
                  { icon: HeartHandshake, text: "A few things your child loves—books, toys, topics" },
                  { icon: FileCheck2, text: "Any therapy reports you'd like to share" },
                ].map((b) => (
                  <li key={b.text} className="flex items-start gap-3 rounded-2xl bg-secondary p-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "white", color: "var(--brand-blue)" }}
                    >
                      <b.icon className="h-5 w-5" />
                    </span>
                    <span className="text-foreground/90">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-card p-6 sm:p-8 shadow-soft border border-border">
              <h2 className="text-2xl font-bold text-[var(--brand-blue)]">Admissions FAQ</h2>
              <Accordion type="single" collapsible className="mt-4">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`a${i}`}>
                    <AccordionTrigger className="text-left text-[var(--brand-blue)] hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
          <div
            className="rounded-3xl p-8 sm:p-12 text-center shadow-lifted"
            style={{ background: "var(--gradient-soft)" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
              Ready when you are
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-foreground/80">
              The first step is just a conversation. We'll listen, answer questions, and help you decide what comes next.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-accent rounded-full px-6 py-3 text-base font-semibold shadow-soft">
                Book a visit
              </Link>
              <Link href="/parent-support" className="btn-sky rounded-full px-6 py-3 text-base font-semibold">
                Parent support
              </Link>
            </div>
          </div>
        </section>
      </main>
  
    </div>
  );
}