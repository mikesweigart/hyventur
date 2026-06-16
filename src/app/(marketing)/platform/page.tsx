import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Plug,
  Lock,
  Banknote,
  Palette,
  Smartphone,
  MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ConsumerPortalDemo } from "@/components/site/consumer-portal-demo";
import { products, paymentMethods } from "@/content/site";

const portalHighlights = [
  {
    icon: Palette,
    title: "Your brand, not ours",
    body: "White-label the portal with your logo, colors, and domain. Try the color switcher above the phone.",
  },
  {
    icon: MousePointerClick,
    title: "No login, no friction",
    body: "Consumers land straight on their balance and pay in a couple of taps — the single biggest lever on completion.",
  },
  {
    icon: Banknote,
    title: "Pay, plan, or settle",
    body: "Full payment, a flexible plan, or a pre-approved settlement — all self-service, all inside your rules.",
  },
  {
    icon: Smartphone,
    title: "Built for the phone",
    body: "Mobile-first by default, because that's where your consumers actually open the link.",
  },
];

export const metadata: Metadata = {
  title: "Platform — One platform, every way to get paid",
  description:
    "The Hyventur platform: consumer portal, IVR, Text2Pay, virtual terminal, payment plans, omnichannel campaigns, settlements, analytics, integrations, and PCI Level 1 security.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The platform"
        title="One platform. Every way to get paid."
        lead="Hyventur unifies everything the best collection and payment tools do — the channels consumers prefer, the controls compliance demands, and the reporting your clients expect — in one modern system."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact">
            Get a demo
            <ArrowRight />
          </Button>
          <Button href="/dashboard" variant="outline">
            See the dashboard
          </Button>
        </div>
      </PageHero>

      {/* ===== Consumer portal showcase ===== */}
      <section
        id="consumer-portal"
        className="scroll-mt-24 border-b border-ink-100 bg-gradient-to-b from-mist to-white py-16 sm:py-24"
      >
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="The consumer experience"
            title="This is exactly what your consumers see."
            lead="The branded, mobile-first portal where a consumer views their balance and pays — in their colors, on their phone, in under a minute. Go ahead and click around."
          />

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[420px_1fr]">
            <Reveal className="flex justify-center">
              <ConsumerPortalDemo />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-5 sm:grid-cols-2">
                {portalHighlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.title}
                      className="rounded-2xl border border-ink-100 bg-white p-5"
                    >
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 text-[1.02rem] font-semibold text-ink-900">
                        {h.title}
                      </h3>
                      <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-500">
                        {h.body}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 rounded-2xl border border-ink-100 bg-ink-950 p-6 text-white">
                <p className="text-[0.95rem] leading-relaxed text-ink-200">
                  <span className="font-semibold text-white">
                    A consumer who wants to pay is the easiest dollar you&apos;ll
                    ever recover.
                  </span>{" "}
                  Every step you remove is a recovery you keep. That&apos;s the whole
                  point of this portal.
                </p>
                <div className="mt-4">
                  <Button href="/contact" size="sm">
                    Get this for your consumers
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Consumer lifestyle image */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container-page">
          <Reveal>
            <Image
              src="/images/platform/consumer-phone.png"
              alt="Consumer making a payment on their phone using Hyventur's portal"
              width={2000}
              height={1333}
              priority={false}
              quality={90}
              className="rounded-2xl border border-ink-100"
            />
          </Reveal>
        </div>
      </section>

      {/* Product detail sections */}
      <div className="bg-white">
        {products
          .filter((p) => p.slug !== "consumer-portal")
          .map((p, i) => {
          const Icon = p.icon;
          const reversed = i % 2 === 1;
          return (
            <section
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 border-b border-ink-100 py-16 sm:py-20"
            >
              <div className="container-page">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <Reveal>
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
                      <Icon className="size-6" />
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                      {p.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-crimson-600">
                      {p.tagline}
                    </p>
                    <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-500">
                      {p.summary}
                    </p>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <div className="card-surface p-7">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-ink-400">
                        What you get
                      </p>
                      <ul className="mt-4 space-y-3.5">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-crimson-600 text-white">
                              <Check className="size-3" />
                            </span>
                            <span className="text-[0.95rem] text-ink-700">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Payment methods */}
      <section className="bg-mist py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Payment methods"
            title="Accept it all. Lose nothing to friction."
            lead="The more ways a consumer can pay, the more of them actually do. Hyventur supports every method that matters."
          />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {paymentMethods.map((m, i) => (
              <Reveal key={m} delay={(i % 4) * 0.05}>
                <div className="flex h-full items-center justify-center rounded-xl border border-ink-100 bg-white px-4 py-5 text-center text-[0.88rem] font-medium text-ink-700">
                  {m}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security band */}
      <section className="bg-ink-950 py-20 text-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Security and compliance, built in.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-300">
                Protecting consumers and your business is the quiet default —
                never the daily worry.
              </p>
              <div className="mt-7">
                <Button href="/platform#security-compliance" variant="light">
                  Security details
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "PCI DSS Level 1",
                    body: "The highest level of payment security certification.",
                  },
                  {
                    icon: Lock,
                    title: "Tokenization & encryption",
                    body: "Card data is replaced with tokens and never stored in your environment.",
                  },
                  {
                    icon: Banknote,
                    title: "FDCPA / Reg F-aware",
                    body: "Disclosures, opt-outs, and audit trails handled by the platform.",
                  },
                  {
                    icon: Plug,
                    title: "Fraud controls",
                    body: "BIN blocking, velocity checks, and duplicate-payment alerts.",
                  },
                ].map((c) => {
                  const Ic = c.icon;
                  return (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                    >
                      <Ic className="size-6 text-crimson-400" />
                      <h3 className="mt-3 font-semibold text-white">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-300">{c.body}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 px-8 py-14 text-center text-white sm:px-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              See the whole platform in action.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
              A 30-minute walkthrough mapped to how your operation actually
              works.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg">
                Get a demo
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
