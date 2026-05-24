import { Reveal, RevealItem, RevealStagger } from "./reveal";

const staff = [
  {
    name: "Ms. Amara Okafor",
    role: "Special Education Teacher",
    initials: "AO",
    color: "var(--brand-sky)",
    bio: "Amara designs joyful, structured lessons that make new skills feel doable. Families love her steady, patient energy.",
    focus: ["Literacy & numeracy", "Visual supports", "IEP planning"],
  },
  {
    name: "Dr. Lila Chen",
    role: "Speech-Language Pathologist",
    initials: "LC",
    color: "var(--brand-purple)",
    bio: "Lila believes every child has a voice. She specializes in AAC and bridging communication between home and school.",
    focus: ["AAC systems", "Early language", "Pragmatic skills"],
  },
  {
    name: "Mr. Diego Rivera",
    role: "Behavioral Support Specialist",
    initials: "DR",
    color: "var(--brand-green)",
    bio: "Diego leads our positive behavior support program—strengths-first, never punitive, always grounded in connection.",
    focus: ["Co-regulation", "PBS plans", "Family coaching"],
  },
  {
    name: "Ms. Priya Shah",
    role: "Occupational Therapist",
    initials: "PS",
    color: "var(--brand-yellow)",
    bio: "Priya turns sensory needs into superpowers, building tools and routines that travel from our rooms to yours.",
    focus: ["Sensory profiles", "Fine motor skills", "Daily living"],
  },
];

export function Staff() {
  return (
    <section id="staff" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <Reveal as="header" className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-green)]">Meet our team</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">
          Specialists who lead with warmth
        </h2>
        <p className="mt-3 text-foreground/80">
          A small, multidisciplinary team that collaborates closely—so your child feels known by everyone in the building.
        </p>
      </Reveal>

      <RevealStagger as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {staff.map((m) => (
          <RevealItem
            as="li"
            key={m.name}
            className="group rounded-2xl bg-card p-6 shadow-soft border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-lifted"
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold"
              style={{
                background: `color-mix(in oklab, ${m.color} 22%, white)`,
                color: "var(--brand-blue)",
              }}
              aria-hidden="true"
            >
              {m.initials}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--brand-blue)]">{m.name}</h3>
            <p className="text-sm font-medium" style={{ color: m.color }}>{m.role}</p>
            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{m.bio}</p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What we focus on</p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {m.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full px-2.5 py-1 text-xs"
                    style={{ background: `color-mix(in oklab, ${m.color} 14%, white)`, color: "var(--brand-blue)" }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}