import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2 } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "./reveal";

const steps = [
  { n: "01", title: "Referral", body: "A short call to learn about your child and answer your questions—no paperwork to start." },
  { n: "02", title: "Assessment", body: "Gentle, play-based observation across communication, sensory, and learning profiles." },
  { n: "03", title: "Personalized Plan", body: "We co-design goals with your family and care team. You always have a say." },
  { n: "04", title: "Progress", body: "Visible milestones, monthly check-ins, and plans that flex as your child grows." },
];

const tabs = {
  sensory: {
    label: "Sensory Support",
    items: ["Quiet rooms & movement breaks", "Noise-reducing headphones available", "Visual schedules in every classroom"],
  },
  behavior: {
    label: "Behavior Support",
    items: ["Strengths-based, trauma-informed", "Positive behavior support plans", "Co-regulation over compliance"],
  },
  communication: {
    label: "Communication Support",
    items: ["AAC devices and core boards", "Sign and gesture modeling", "Social stories for transitions"],
  },
  individualized: {
    label: "Individualized Learning",
    items: ["IEP-aligned goals", "Small group + 1:1 blocks", "Flexible pacing and assessment"],
  },
} as const;

export function Supports() {
  return (
    <section id="supports" className="bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <Reveal as="header" className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-purple)]">How support works</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">A clear, gentle path forward</h2>
          <p className="mt-3 text-foreground/80">
            From the first call to long-term progress, you're never figuring it out alone.
          </p>
        </Reveal>

        {/* Timeline */}
        <RevealStagger as="ol" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <RevealItem as="li" key={s.n} className="relative rounded-2xl bg-card p-5 shadow-soft border border-border">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[var(--brand-yellow)]">{s.n}</span>
                <span className="text-base font-semibold text-[var(--brand-blue)]">{s.title}</span>
              </div>
              <p className="mt-2 text-sm text-foreground/80">{s.body}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-1/2 -right-2 h-0.5 w-4"
                  style={{ background: "var(--brand-sky)" }}
                />
              )}
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Tabs */}
        <Reveal className="mt-14 rounded-3xl bg-card p-6 sm:p-8 shadow-soft border border-border">
          <Tabs defaultValue="sensory">
            <TabsList className="flex flex-wrap h-auto bg-secondary p-1 rounded-xl">
              {Object.entries(tabs).map(([k, t]) => (
                <TabsTrigger
                  key={k}
                  value={k}
                  className="rounded-lg px-4 py-2 text-sm font-semibold data-[state=active]:bg-[var(--brand-blue)] data-[state=active]:text-white"
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(tabs).map(([k, t]) => (
              <TabsContent key={k} value={k} className="mt-6">
                <ul className="grid gap-3 sm:grid-cols-3">
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 rounded-xl bg-secondary p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-green)]" aria-hidden="true" />
                      <span className="text-foreground/85">{it}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}