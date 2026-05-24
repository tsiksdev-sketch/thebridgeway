import Link from "next/link";
import {
  HeartHandshake,
  Compass,
  Users,
  Sparkles,
  ShieldCheck,
  Ear,
  Leaf,
  GraduationCap,
  
} from "lucide-react";



const pillars = [
  {
    icon: HeartHandshake,
    title: "Relationship first",
    body: "Trust is the curriculum. Before any goal is set, we get to know each child—their interests, signals, joys, and what helps them feel safe.",
    color: "var(--brand-sky)",
  },
  {
    icon: Compass,
    title: "Individualized plans",
    body: "Every learner gets a plan written for them—pace, communication style, sensory profile, and family priorities all shape the path.",
    color: "var(--brand-purple)",
  },
  {
    icon: Ear,
    title: "Every voice counts",
    body: "Spoken, signed, AAC, gestural—we honor every form of communication and build supports around what works for the child today.",
    color: "var(--brand-green)",
  },
  {
    icon: Leaf,
    title: "Sensory-friendly spaces",
    body: "Soft lighting, predictable routines, regulation tools, and quiet retreats. The environment is part of the teaching team.",
    color: "var(--brand-yellow)",
  },
];

const stages = [
  {
    age: "Ages 5–10",
    title: "Foundations",
    body: "Play-based learning, early communication, daily routines, and joyful social practice. We grow confidence alongside skills.",
  },
  {
    age: "Ages 11–14",
    title: "Middle years",
    body: "Functional academics, self-advocacy, friendship skills, and sensory regulation strategies for a changing body and world.",
  },
  {
    age: "Ages 15–18",
    title: "Transition & life skills",
    body: "Vocational readiness, community access, independent living skills, and bridges to post-secondary or supported employment.",
  },
];

const principles = [
  { icon: ShieldCheck, label: "Predictable & calm", desc: "No flashing visuals, no surprise transitions—just steady, visual routines." },
  { icon: Users, label: "Family partnership", desc: "Caregivers are co-designers of the plan, not visitors to it." },
  { icon: Sparkles, label: "Strengths-based", desc: "We start from what a child loves and what they can already do." },
  { icon: GraduationCap, label: "Lifelong skills", desc: "Independence, regulation, and connection—skills that matter beyond school." },
];

export default function AboutPage() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-[var(--brand-blue)] focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
    
      <main id="main">
        {/* Hero */}
        <section className="bg-hero relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="float-shape absolute -top-6 right-[10%] h-36 w-36 rounded-full opacity-25" style={{ background: "var(--brand-purple)" }} />
            <div className="float-shape delay-2 absolute bottom-6 left-[6%] h-24 w-24 rounded-3xl opacity-25" style={{ background: "var(--brand-yellow)" }} />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-16 pb-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--brand-blue)] shadow-soft">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--brand-green)" }} aria-hidden="true" />
              Our Approach
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[var(--brand-blue)]">
              A calm, strengths-based school for ages <span className="text-[var(--brand-sky)]">5–18</span>.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-lg text-foreground/80">
              Bridgeway Academy was built around a simple idea: every child deserves to learn in a
              place that understands how they think, feel, and communicate. Here is how we do it.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
              Learning that meets the child—never the other way around.
            </h2>
            <div className="space-y-4 text-lg text-foreground/85 leading-relaxed">
              <p>
                We support students with autism and diverse learning needs from kindergarten through
                the transition into adult life. Our team blends special education, speech and
                language, occupational therapy, and behavior support inside one calm campus.
              </p>
              <p>
                Progress at Bridgeway is measured the way it should be: in confidence, communication,
                connection, and the small daily wins that add up to real independence.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)] text-center">
              Four pillars of our approach
            </h2>
            <p className="mt-3 text-center text-foreground/75 max-w-2xl mx-auto">
              These are the commitments that shape every classroom, plan, and conversation.
            </p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-2xl bg-white p-6 shadow-soft border border-border"
                >
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: `color-mix(in oklab, ${p.color} 18%, white)`, color: p.color }}
                    aria-hidden="true"
                  >
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--brand-blue)]">{p.title}</h3>
                  <p className="mt-2 text-foreground/80 leading-relaxed">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Age stages */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
            Learning at every stage
          </h2>
          <p className="mt-3 max-w-2xl text-foreground/75">
            From early elementary to the threshold of adulthood, our programs grow with each student.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {stages.map((s, i) => (
              <li
                key={s.age}
                className="relative rounded-2xl bg-white p-6 shadow-soft border border-border"
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-3 left-6 inline-flex h-7 items-center rounded-full px-3 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ background: "var(--brand-blue)" }}
                >
                  Stage {i + 1}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-sky)]">
                  {s.age}
                </div>
                <h3 className="mt-1 text-xl font-semibold text-[var(--brand-blue)]">{s.title}</h3>
                <p className="mt-2 text-foreground/80 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Principles */}
        <section className="bg-secondary/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)] text-center">
              What you can count on
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((p) => (
                <li key={p.label} className="rounded-2xl bg-white p-5 shadow-soft border border-border">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[var(--brand-blue)]"
                    style={{ background: "color-mix(in oklab, var(--brand-sky) 16%, white)" }}
                  >
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-semibold text-[var(--brand-blue)]">{p.label}</h3>
                  <p className="mt-1 text-sm text-foreground/75">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20">
          <div className="rounded-3xl bg-soft p-8 sm:p-12 shadow-lifted text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
              Want to see it in person?
            </h2>
            <p className="mt-3 mx-auto max-w-xl text-foreground/80">
              The best way to understand Bridgeway is to walk through it. Book a calm, unhurried
              tour with our admissions team.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-accent rounded-full px-6 py-3 text-base font-semibold shadow-soft">
                Book a Visit
              </Link>
              <Link href="/parent-support" className="btn-sky rounded-full px-6 py-3 text-base font-semibold">
                Parent Support
              </Link>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  );
}