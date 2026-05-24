'use client'

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "What should we expect on our first visit?",
    a: "A calm, unhurried welcome. You'll meet a specialist, tour the sensory room, and chat in a quiet space. Your child can explore at their own pace—there's no pressure to participate.",
  },
  {
    q: "Is the environment sensory-friendly?",
    a: "Yes. Soft, natural lighting; rugs and acoustic panels; predictable visual schedules; and quiet rooms available at any time. Noise-canceling headphones are always within reach.",
  },
  {
    q: "How do you communicate with families?",
    a: "However works for you: weekly notes, a shared journal, video updates, or short calls. We co-create the rhythm together at intake.",
  },
];

type Errors = { name?: string; email?: string; time?: string };

export function Visit() {
  const [form, setForm] = useState({ name: "", email: "", time: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please share your name.";
    if (!form.email.trim()) e.email = "We need an email to reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "That email doesn't look right.";
    if (!form.time.trim()) e.time = "Pick a day or time that works for you.";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", time: "", message: "" });
    }
  }

  return (
    <section id="visit" className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <Reveal as="header" className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--brand-sky)]">Plan your visit</p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[var(--brand-blue)]">A calm welcome, on your terms</h2>
        <p className="mt-3 text-foreground/80">
          Have questions? Want a callback? We'll meet you where you are.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* FAQ */}
        <Reveal className="rounded-3xl bg-card p-6 sm:p-8 shadow-soft border border-border">
          <h3 className="text-lg font-semibold text-[var(--brand-blue)]">Common questions</h3>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f${i}`}>
                <AccordionTrigger className="text-left text-[var(--brand-blue)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl bg-card p-6 sm:p-8 shadow-soft border border-border"
          aria-labelledby="callback-title"
        >
          <h3 id="callback-title" className="text-lg font-semibold text-[var(--brand-blue)]">
            Request a callback
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">No forms to fill on the call. Just a friendly conversation.</p>

          {submitted && (
            <div role="status" className="mt-4 rounded-xl p-3 text-sm" style={{ background: "color-mix(in oklab, var(--brand-green) 16%, white)", color: "#23351a" }}>
              Thank you—we'll be in touch within one business day.
            </div>
          )}

          <div className="mt-5 grid gap-4">
            <Field
              label="Your name"
              id="name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              error={errors.name}
              required
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              error={errors.email}
              required
            />
            <Field
              label="Preferred day or time"
              id="time"
              placeholder="e.g. Thursday afternoons"
              value={form.time}
              onChange={(v) => setForm({ ...form, time: v })}
              error={errors.time}
              required
            />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--brand-blue)]">
                Anything you'd like us to know? <span className="font-normal text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground"
                placeholder="Your child's age, interests, or any context that would help us prepare."
              />
            </div>

            <button type="submit" className="btn-accent mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold">
              Request a callback
            </button>
          </div>
        </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--brand-blue)]">
        {label} {required && <span aria-hidden="true" className="text-[var(--brand-yellow)]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1.5 w-full rounded-xl border bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground ${
          error ? "border-destructive" : "border-input"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-1 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}