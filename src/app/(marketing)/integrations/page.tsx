import type { Metadata } from "next";
import { ArrowRight, Code2, Webhook, ShieldCheck, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { IntegrationsExplorer } from "@/components/site/integrations-explorer";
import { integrationCount } from "@/content/integrations";

export const metadata: Metadata = {
  title: "Integrations — Works with the stack you already run",
  description:
    "Hyventur connects to the collection platforms, CRMs, accounting systems, payment rails, and communication tools you already use — Finvi, Salesforce, QuickBooks, Stripe, Twilio, and 120+ more — plus a modern REST API.",
};

const capabilities = [
  {
    icon: Code2,
    title: "Modern REST API",
    body: "Clean, well-documented endpoints to build exactly what you need.",
  },
  {
    icon: Webhook,
    title: "Real-time webhooks",
    body: "Get notified the instant a payment, plan, or settlement changes.",
  },
  {
    icon: Boxes,
    title: "Pre-built connectors",
    body: "Turn-key links to the platforms agencies and creditors run on.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    body: "Tokenized data and scoped access keys on every connection.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Works with the stack you already run."
        lead="Modernizing payments shouldn't mean ripping out the systems your team depends on. Hyventur plugs into your collection software, CRM, accounting, payment rails, and communication tools — so your data flows without rekeying, and you keep everything you already trust."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">
            Talk to our team
            <ArrowRight />
          </Button>
          <Button href="#collections-arm" variant="outline">
            Browse integrations
          </Button>
        </div>
      </PageHero>

      {/* Capability band */}
      <section className="border-b border-ink-100 bg-white py-12">
        <div className="container-page">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={(i % 4) * 0.06}>
                  <div className="flex h-full items-start gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-semibold text-ink-900">
                        {c.title}
                      </h3>
                      <p className="mt-0.5 text-[0.85rem] leading-relaxed text-ink-500">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explorer */}
      <section className="bg-white py-14">
        <div className="container-page">
          <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
                {integrationCount}+ and counting
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink-900">
                Find your systems
              </h2>
            </div>
          </div>
          <IntegrationsExplorer />
        </div>
      </section>

      {/* Custom connector CTA */}
      <section className="bg-mist py-16">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 px-8 py-14 text-center text-white sm:px-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Don&apos;t see your system?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
              Our REST API and webhooks connect to almost anything — and our team
              builds custom connectors for the platforms that matter to you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg">
                Request an integration
                <ArrowRight />
              </Button>
              <Button
                href="/platform#integrations"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                See platform details
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
