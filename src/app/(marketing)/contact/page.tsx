import type { Metadata } from "next";
import { Phone, Mail, Clock, ShieldCheck, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Get a demo of Hyventur",
  description:
    "Talk to the Hyventur team. Request a 30-minute walkthrough of the platform mapped to how your collections or receivables operation actually works.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a demo"
        title="Let's make getting paid the easy part."
        lead="Tell us a little about your operation and we'll set up a 30-minute walkthrough — mapped to your channels, your industry, and the outcomes you care about."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
            {/* Left: info */}
            <Reveal>
              <div className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
                    Talk to a real person.
                  </h2>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink-500">
                    No bots, no runaround. You&apos;ll talk with someone who
                    understands collections and can answer your questions
                    straight.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-subtle p-4 transition-colors hover:border-crimson-200"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-crimson-50 text-crimson-600">
                      <Phone className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.78rem] font-medium text-ink-400">
                        Call us
                      </p>
                      <p className="font-semibold text-ink-900">{brand.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${brand.salesEmail}`}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-subtle p-4 transition-colors hover:border-crimson-200"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-crimson-50 text-crimson-600">
                      <Mail className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.78rem] font-medium text-ink-400">
                        Email us
                      </p>
                      <p className="font-semibold text-ink-900">
                        {brand.salesEmail}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 rounded-xl border border-ink-100 bg-subtle p-4">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-crimson-50 text-crimson-600">
                      <Clock className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.78rem] font-medium text-ink-400">
                        Response time
                      </p>
                      <p className="font-semibold text-ink-900">
                        Within one business day
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-ink-100 bg-ink-950 p-5 text-white">
                  <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold text-crimson-300">
                    <ShieldCheck className="size-4" />
                    What to expect
                  </span>
                  <ul className="mt-3 space-y-2">
                    {[
                      "A walkthrough mapped to your operation",
                      "Straight answers on pricing and compliance",
                      "No pressure, no obligation",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[0.88rem] text-ink-200"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-crimson-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
