import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Plug,
  Headphones,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMock } from "@/components/site/hero-mock";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading, Eyebrow } from "@/components/site/section-heading";
import { ComparisonTeaser } from "@/components/site/comparison-teaser";
import {
  products,
  solutions,
  planSteps,
  paymentMethods,
  brand,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 70% 0%, rgba(158,27,51,0.06), transparent)",
          }}
        />
        <div className="container-page relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-mist px-3 py-1 text-[0.78rem] font-medium text-ink-600">
                <Sparkles className="size-3.5 text-crimson-600" />
                Compliance-first payment platform for modern collections
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
                Replace legacy tools. Recover{" "}
                <span className="text-gradient-brand">more.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
                Legacy collection portals lose payments at every step. Hyventur
                is built for modern collections teams — compliance first, security
                built in. Your consumers get a clean way to pay (portal, text,
                phone, or plan). You recover more and stay audit-ready.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href="/contact" size="lg">
                  Get a demo
                  <ArrowRight />
                </Button>
                <Button href="/platform" size="lg" variant="outline">
                  Explore the platform
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.82rem] font-medium text-ink-400">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-crimson-600" />
                  SOC 2 &amp; PCI Level 1 Certified
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="size-4 text-emerald-600" />
                  Built with FDCPA &amp; Reg F compliance
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Plug className="size-4 text-crimson-600" />
                  120+ integrations included
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pl-6">
            <HeroMock />
          </Reveal>
        </div>

        {/* payment methods marquee */}
        <div className="border-y border-ink-100 bg-mist">
          <div className="container-page py-5">
            <p className="text-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
              Every way your consumers want to pay
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              {paymentMethods.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-ink-100 bg-white px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-600"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ PROBLEM (stakes) ============================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="The problem"
            title="Getting paid shouldn't be this hard."
            lead="A consumer who wants to pay you is the easiest dollar you'll ever recover. Yet legacy tools throw up walls at every step — and quietly cost you the recoveries you already earned."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Consumers give up at checkout",
                body: "Login walls, broken mobile pages, and no plan option send ready-to-pay consumers away before they finish.",
              },
              {
                title: "Compliance feels like a minefield",
                body: "FDCPA and Reg F change how you reach people. Patchwork tools make every campaign a risk instead of a routine.",
              },
              {
                title: "Your team fights the software",
                body: "Agents key in payments by hand, plans break silently, and clients ask for reports the system can't produce.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-ink-100 bg-subtle p-6">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-crimson-50 text-crimson-600">
                    <X className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ GUIDE + trust ============================ */}
      <section className="bg-ink-950 py-20 text-white sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <Eyebrow className="text-crimson-300">
                <span className="text-crimson-300">Built for compliance. Built for speed.</span>
              </Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Compliance isn&apos;t a feature. It&apos;s the foundation.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">
                Hyventur was built by people who live the collections compliance reality — Regulation F, FDCPA, SOC 2, HIPAA. Every workflow, every touchpoint, every report is compliance-first. So you recover more, stay audit-ready, and your team can focus on results instead of regulatory risk.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/about" variant="light">
                  Why Hyventur
                  <ArrowRight />
                </Button>
                <Button
                  href="/platform"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  See the platform
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "PCI L1", label: "certified infrastructure" },
                  { value: "120+", label: "pre-built integrations" },
                  { value: "50", label: "states supported" },
                  { value: "99.9%", label: "uptime target" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                  >
                    <p className="font-display text-3xl font-bold tracking-tight text-white">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-ink-300">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ THE PLAN ============================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="The plan"
            title="Deployed fast. Optimized continuously."
            lead="Most teams launch in weeks, not quarters. Your platform is ready immediately — then we optimize channels, workflows, and strategy continuously based on your results."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {planSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.step} delay={i * 0.1}>
                  <div className="relative h-full rounded-2xl border border-ink-100 bg-subtle p-7">
                    <span className="font-display text-5xl font-bold text-ink-100">
                      {step.step}
                    </span>
                    <span className="absolute right-7 top-7 inline-flex size-11 items-center justify-center rounded-xl bg-ink-900 text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-ink-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-500">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ PLATFORM grid ============================ */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The platform"
              title="One platform. Every way to get paid."
              lead="Everything the best collection and payment tools do — unified, modern, and built to work together."
            />
            <Reveal>
              <Button href="/platform" variant="outline">
                See all capabilities
                <ArrowRight />
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/platform#${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-crimson-200 hover:shadow-lg"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600 transition-colors group-hover:bg-crimson-600 group-hover:text-white">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink-900">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 flex-1 text-[0.88rem] leading-relaxed text-ink-500">
                      {p.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-[0.82rem] font-semibold text-crimson-600">
                      Learn more
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ INTEGRATIONS teaser ============================ */}
      <section className="border-y border-ink-100 bg-white py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Integrations</Eyebrow>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Plugs into the systems you already run.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-500">
              Keep your collection software, CRM, accounting, and communication
              tools. Hyventur connects to 45+ platforms — so nothing has to
              change for everything to get better.
            </p>
          </Reveal>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-7">
            {[
              { src: "salesforce.svg", alt: "Salesforce" },
              { src: "hubspot.svg", alt: "HubSpot" },
              { src: "stripe.svg", alt: "Stripe" },
              { src: "twilio.svg", alt: "Twilio" },
              { src: "quickbooks.png", alt: "QuickBooks" },
              { src: "netsuite.png", alt: "NetSuite" },
              { src: "sage.svg", alt: "Sage" },
              { src: "slack.svg", alt: "Slack" },
              { src: "mailchimp.svg", alt: "Mailchimp" },
              { src: "okta.svg", alt: "Okta" },
            ].map((logo) => (
              <Image
                key={logo.src}
                src={`/integrations/${logo.src}`}
                alt={logo.alt}
                width={110}
                height={32}
                className="h-7 w-auto max-w-[6.5rem] object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/integrations" variant="outline">
              Explore all integrations
              <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* ============================ DASHBOARD teaser ============================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <Eyebrow>Reporting &amp; analytics</Eyebrow>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                The clarity you expect from the best payment platforms.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                See every payment, channel, and plan in real time. Reconcile in
                a glance, give clients reports they trust, and finally know
                what&apos;s working — all in a dashboard that feels familiar
                from the first click.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real-time recovery and settlement dashboards",
                  "Channel and campaign performance side by side",
                  "Reconciliation and client-ready exports",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-5 shrink-0 text-crimson-600" />
                    <span className="text-[0.95rem] text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/dashboard">
                  Explore the live dashboard
                  <ArrowRight />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <HeroMock />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================ SOLUTIONS ============================ */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Who we serve"
            title="Built for everyone who needs to get paid."
            lead="From agencies and debt buyers to healthcare, government, and utilities — Hyventur adapts to how your industry works."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/solutions#${s.slug}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all hover:border-crimson-200 hover:shadow-md"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-white">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-[0.98rem] font-semibold text-ink-900">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-[0.85rem] leading-relaxed text-ink-500">
                        {s.headline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ COMPARISON teaser ============================ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="How we compare"
            title="The whole toolkit — in one platform."
            lead="Others do pieces of it. Hyventur brings every channel, the collections-specific tools, and transparent pricing together in one place."
          />
          <Reveal className="mx-auto mt-12 max-w-5xl">
            <ComparisonTeaser />
          </Reveal>
          <Reveal className="mt-8 flex justify-center">
            <Button href="/pricing#compare" variant="outline">
              See the full comparison
              <ArrowRight />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ============================ SUCCESS + final CTA ============================ */}
      <section className="bg-ink-950 py-20 text-white sm:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center text-crimson-300">
              <span className="text-crimson-300">The payoff</span>
            </Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Imagine a month where getting paid just{" "}
              <span className="text-crimson-400">works.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              Consumers pay the way they prefer. Plans stay on track. Compliance
              runs quietly in the background. Your clients see the numbers and
              your team finally has the tools to match their ambition. That&apos;s
              the month Hyventur is built to deliver.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Get a demo
                <ArrowRight />
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                See pricing
              </Button>
            </div>
            <p className="mt-6 text-sm text-ink-400">
              Talk to a real person at {brand.phone}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
