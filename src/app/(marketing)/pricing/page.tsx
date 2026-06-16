import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ComparisonTable } from "@/components/site/comparison-table";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing — Transparent, built around your volume",
  description:
    "Hyventur pricing is transparent and built around your volume — no hidden fees, no surprises. Explore Essentials, Growth, and Enterprise plans and talk to our team.",
};

const tiers = [
  {
    name: "Essentials",
    tagline: "For teams getting started with modern payments.",
    highlight: false,
    features: [
      "Branded Consumer Payment Portal",
      "Text2Pay payment links",
      "Virtual Terminal for agents",
      "Cards & ACH acceptance",
      "Standard reporting",
      "PCI Level 1 security",
      "Email & chat support",
    ],
  },
  {
    name: "Growth",
    tagline: "For operations scaling recovery across channels.",
    highlight: true,
    features: [
      "Everything in Essentials",
      "IVR & Pay-by-Phone",
      "Omnichannel Campaigns",
      "Recurring & Payment Plans",
      "Settlement & Negotiator",
      "Advanced analytics dashboard",
      "120+ integrations & API",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For high-volume and multi-entity organizations.",
    highlight: false,
    features: [
      "Everything in Growth",
      "Custom integrations & workflows",
      "Dedicated implementation team",
      "SSO & advanced permissions",
      "Custom SLAs & uptime guarantees",
      "Named account manager",
      "White-glove onboarding",
    ],
  },
];

const faqs = [
  {
    q: "How is Hyventur priced?",
    a: "Payment pricing depends on your volume, channel mix, and the methods you accept, so we build a transparent quote around your operation — typically interchange-plus with no hidden monthly surprises. Tell us your numbers and we'll show you exactly what it looks like.",
  },
  {
    q: "Is there a long-term contract?",
    a: "We earn your business with results, not lock-in. We'll walk you through terms during your demo and tailor them to your needs.",
  },
  {
    q: "How long does implementation take?",
    a: "Most teams are live in days to a few weeks, not quarters. We integrate with your existing collection software and bank, brand your portal, and configure your rules with you.",
  },
  {
    q: "Do you support consumer-paid convenience fees?",
    a: "Where permitted and compliant for your industry and state, we support a range of fee models. We'll help you choose an approach that's both compliant and consumer-friendly.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing, built around your volume."
        lead="No hidden fees. No surprises. Just a clear quote shaped around how your operation actually runs — and a plan that grows with you."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border p-7",
                    tier.highlight
                      ? "border-crimson-200 bg-white shadow-xl ring-1 ring-crimson-100"
                      : "border-ink-100 bg-subtle",
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-crimson-600 px-3 py-1 text-[0.72rem] font-semibold text-white">
                      <Sparkles className="size-3.5" />
                      Most popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-ink-900">{tier.name}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-500">
                    {tier.tagline}
                  </p>
                  <div className="mt-5 border-y border-ink-100 py-4">
                    <p className="font-display text-3xl font-bold tracking-tight text-ink-900">
                      Custom
                    </p>
                    <p className="text-[0.82rem] text-ink-400">
                      Quoted to your volume
                    </p>
                  </div>
                  <ul className="mt-5 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-crimson-600" />
                        <span className="text-[0.9rem] text-ink-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7">
                    <Button
                      href="/contact"
                      variant={tier.highlight ? "primary" : "outline"}
                      className="w-full"
                    >
                      {tier.highlight ? "Get a demo" : "Talk to sales"}
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-8 text-center text-[0.85rem] text-ink-400">
              All plans include PCI Level 1 security, tokenization, and FDCPA /
              Reg F-aware workflows. Plan names and inclusions are illustrative —
              your quote is built around your operation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section
        id="compare"
        className="scroll-mt-20 border-t border-ink-100 bg-white py-16 sm:py-20"
      >
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title="One platform that does it all — at a price that makes sense."
            lead="See how Hyventur stacks up against the other payment platforms built for collections. We bring the full set together, and quote it transparently to your volume."
          />
          <Reveal className="mt-12">
            <ComparisonTable />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Questions"
            title="What you're probably wondering."
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="rounded-2xl border border-ink-100 bg-white p-6">
                  <h3 className="text-[1.02rem] font-semibold text-ink-900">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
