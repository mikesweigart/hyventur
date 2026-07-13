"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Loader2, ArrowRight } from "lucide-react";
import { solutions } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "done";

const fieldClass =
  "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-[0.92rem] text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-crimson-400 focus:ring-2 focus:ring-crimson-100";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // No backend in this build — simulate a successful submit.
    setTimeout(() => setStatus("done"), 900);
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-ink-100 bg-subtle p-10 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-crimson-600 text-white">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-500">
          A member of our team will reach out within one business day to set up
          your walkthrough. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            First name
          </label>
          <input required name="firstName" className={fieldClass} placeholder="Jordan" />
        </div>
        <div>
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            Last name
          </label>
          <input required name="lastName" className={fieldClass} placeholder="Avery" />
        </div>
        <div>
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            Work email
          </label>
          <input
            required
            type="email"
            name="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            Mobile phone
          </label>
          <input
            type="tel"
            name="phone"
            className={fieldClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            Company
          </label>
          <input required name="company" className={fieldClass} placeholder="Company name" />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            Industry
          </label>
          <select name="industry" className={cn(fieldClass, "appearance-none")}>
            <option value="">Select your industry…</option>
            {solutions.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-[0.82rem] font-semibold text-ink-700">
            What would you like to solve?
          </label>
          <textarea
            name="message"
            rows={4}
            className={cn(fieldClass, "resize-none")}
            placeholder="Tell us a bit about your operation and what you're hoping to improve…"
          />
        </div>
      </div>

      {/* A2P 10DLC-compliant SMS opt-in — explicit, optional, not pre-checked */}
      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-lg border border-ink-100 bg-subtle p-4">
        <input
          type="checkbox"
          name="smsConsent"
          value="yes"
          className="mt-0.5 size-4 shrink-0 rounded border-ink-300 text-crimson-600 focus:ring-crimson-200"
        />
        <span className="text-[0.78rem] leading-relaxed text-ink-500">
          I agree to receive recurring automated text messages (such as demo
          scheduling and account updates) from Hyventur at the mobile number
          provided. Consent is not a condition of purchase. Message frequency
          varies. Message &amp; data rates may apply. Reply STOP to opt out or
          HELP for help. See our{" "}
          <Link href="/privacy" className="font-medium text-crimson-600 underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="font-medium text-crimson-600 underline underline-offset-2">
            Terms &amp; Conditions
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-crimson-600 px-5 py-3 text-[0.95rem] font-semibold text-white transition-colors hover:bg-crimson-700 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Request a demo
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-[0.78rem] text-ink-400">
        By submitting, you agree to be contacted about Hyventur. We respect your
        inbox and never sell your information.
      </p>
    </form>
  );
}
