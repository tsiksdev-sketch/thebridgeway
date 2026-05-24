'use client'

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Compass,
} from "lucide-react";
import Image from "next/image";



type Reason = "visit" | "admissions" | "support" | "general";

const reasons: { id: Reason; label: string; icon: typeof GraduationCap; hint: string }[] = [
  { id: "visit", label: "Book a campus visit", icon: Compass, hint: "Quiet tour, 45 min, no pressure." },
  { id: "admissions", label: "Ask about admissions", icon: GraduationCap, hint: "Eligibility, fit, next steps." },
  { id: "support", label: "Parent support", icon: HeartHandshake, hint: "Coaching, resources, circles." },
  { id: "general", label: "Something else", icon: Mail, hint: "We read every message." },
];

export default function ContactPage() {
  const [reason, setReason] = useState<Reason>("visit");
  const [form, setForm] = useState({ name: "", email: "", phone: "", child_age: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!form.email.includes("@")) next.email = "A valid email helps us reply.";
    if (!form.message.trim() || form.message.trim().length < 10) next.message = "A short note (10+ characters) helps us prepare.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
    }
  }

  return (
    <div className="min-h-dvh bg-background text-foreground">
    
      <main id="main">
        {/* Hero */}
        <section className="bg-hero">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-[var(--brand-blue)] shadow-soft">
                We reply within 1 school day
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--brand-blue)] leading-tight">
                Let's start a calm conversation.
              </h1>
              <p className="mt-5 text-lg text-foreground/80 max-w-xl">
                Whether you're ready to book a visit or just curious whether Bridgeway is the right fit
                for your child, our family team is here — patient, friendly, and human.
              </p>
              <dl className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
                <a href="tel:+15551234567" className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-soft hover:shadow-lifted transition-shadow">
                  <Phone className="h-5 w-5 text-[var(--brand-sky)] mt-1" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Call</dt>
                    <dd className="font-semibold text-[var(--brand-blue)]">(555) 123-4567</dd>
                  </div>
                </a>
                <a href="mailto:hello@bridgewayacademy.org" className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-soft hover:shadow-lifted transition-shadow">
                  <Mail className="h-5 w-5 text-[var(--brand-green)] mt-1" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Email</dt>
                    <dd className="font-semibold text-[var(--brand-blue)] break-all">hello@bridgewayacademy.org</dd>
                  </div>
                </a>
                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-soft">
                  <MapPin className="h-5 w-5 text-[var(--brand-purple)] mt-1" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Visit</dt>
                    <dd className="font-semibold text-[var(--brand-blue)]">412 Maple Ridge Lane<br />Quiet Meadows, USA</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 shadow-soft">
                  <Clock className="h-5 w-5 text-[var(--brand-yellow)] mt-1" aria-hidden />
                  <div>
                    <dt className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Hours</dt>
                    <dd className="font-semibold text-[var(--brand-blue)]">Mon–Fri · 8am – 4pm<br /><span className="font-normal text-foreground/70">Tours by appointment</span></dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-2">
              <Image
                src='/campus-entrance.jpg'
                alt="The welcoming front entrance of Bridgeway Academy with a wooden bench and soft greenery"
                width={1280}
                height={896}
                className="rounded-3xl shadow-lifted aspect-[3/4] object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 py-20">
          <Card className="p-6 sm:p-10 shadow-soft">
            {sent ? (
              <div role="status" className="text-center py-12">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-green)]/15 text-[var(--brand-green)]">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-[var(--brand-blue)]">Thank you, {form.name.split(" ")[0]}.</h2>
                <p className="mt-3 text-foreground/75 max-w-md mx-auto">
                  Your message is with our family team. We'll reach out by email or phone within one
                  school day — usually much sooner.
                </p>
                <Button
                  type="button"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", child_age: "", message: "" }); }}
                  className="mt-8 rounded-full bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white px-6"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--brand-blue)]">What can we help with?</h2>
                <fieldset className="mt-6">
                  <legend className="sr-only">Reason for contacting</legend>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {reasons.map((r) => {
                      const active = reason === r.id;
                      return (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setReason(r.id)}
                          aria-pressed={active}
                          className={`text-left rounded-2xl border p-4 transition cursor-pointer ${
                            active
                              ? "border-[var(--brand-sky)] bg-secondary shadow-soft"
                              : "border-border bg-card hover:border-[var(--brand-sky)]/60"
                          }`}
                        >
                          <r.icon className={`h-5 w-5 ${active ? "text-[var(--brand-sky)]" : "text-foreground/60"}`} aria-hidden />
                          <p className="mt-2 font-semibold text-[var(--brand-blue)]">{r.label}</p>
                          <p className="text-xs text-foreground/60 mt-1">{r.hint}</p>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <form onSubmit={handleSubmit} noValidate className="mt-8 grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className="h-11" />
                    {errors.name && <p id="name-err" className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className="h-11" />
                    {errors.email && <p id="email-err" className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone <span className="text-foreground/50 font-normal">(optional)</span></Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="child_age">Child's age <span className="text-foreground/50 font-normal">(optional)</span></Label>
                    <Input id="child_age" inputMode="numeric" placeholder="e.g. 9" value={form.child_age}
                      onChange={(e) => setForm({ ...form, child_age: e.target.value })} className="h-11" />
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="message">Tell us a little about your family</Label>
                    <Textarea id="message" rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      aria-invalid={!!errors.message} aria-describedby={errors.message ? "msg-err" : undefined}
                      placeholder="What would be most helpful to talk about?" />
                    {errors.message && <p id="msg-err" className="text-xs text-destructive">{errors.message}</p>}
                  </div>
                  <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                    <p className="text-xs text-foreground/60 max-w-sm">
                      We use your details only to reply. No marketing lists, ever.
                    </p>
                    <Button type="submit" className="h-12 rounded-full bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white px-7">
                      <Send className="h-4 w-4" /> Send message
                    </Button>
                  </div>
                </form>
              </>
            )}
          </Card>
        </section>

        {/* Map / visit info strip */}
        <section className="bg-secondary/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-semibold text-[var(--brand-blue)]">Calm tours</h3>
              <p className="text-sm text-foreground/70 mt-2">45-minute walk-throughs during the school day, small groups only.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--brand-blue)]">Quiet rooms ready</h3>
              <p className="text-sm text-foreground/70 mt-2">Bring your child along. We have sensory retreats available on arrival.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--brand-blue)]">Free parking</h3>
              <p className="text-sm text-foreground/70 mt-2">On-site, step-free entrance, and a shaded bench right by the door.</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}