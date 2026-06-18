import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Zap,
  Phone,
  MessageSquareText,
  CalendarSync,
  ChartNoAxesCombined,
  Plug,
  MonitorSmartphone,
  Handshake,
  Send,
  AlertTriangle,
  CheckCircle2,
  Users,
  Scale,
  HeartPulse,
  Banknote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "Platform Overview — Hyventur",
  description:
    "The modern payment platform for accounts receivable, billing, and collections. See how Hyventur helps creditors, agencies, healthcare organizations, and law firms get paid — compliantly, at scale.",
};

const problems = [
  {
    icon: X,
    title: "Customers abandon before they pay",
    body: "Login friction, broken mobile experiences, and limited payment options send customers away before completing payment — revenue your business already earned, lost to poor technology.",
  },
  {
    icon: X,
    title: "Compliance complexity slows everything down",
    body: "FDCPA, Regulation F, HIPAA, and state-specific billing rules create operational risk. Patchwork tools can't enforce these requirements consistently at scale.",
  },
  {
    icon: X,
    title: "Your AR team is fighting software, not driving results",
    body: "Manual reconciliation, broken payment plans, and clients asking for reports your system can't produce. The tools should work for your team — not the other way around.",
  },
  {
    icon: X,
    title: "Disconnected vendors create blind spots",
    body: "Multiple tools for billing, outreach, payments, and reporting mean no single source of truth. Gaps between systems cost time, create risk, and erode confidence in your data.",
  },
];

const channels = [
  { icon: MonitorSmartphone, name: "Consumer Payment Portal", desc: "Branded, mobile-first self-service" },
  { icon: MessageSquareText, name: "Text2Pay", desc: "Payment links delivered by SMS" },
  { icon: Phone, name: "IVR & Pay-by-Phone", desc: "24/7 automated phone payments" },
  { icon: MonitorSmartphone, name: "Virtual Terminal", desc: "Agent-assisted, compliant intake" },
  { icon: CalendarSync, name: "Payment Plans", desc: "Smart retry, auto-updating cards" },
  { icon: Send, name: "Omnichannel Campaigns", desc: "Segmented, triggered outreach" },
  { icon: Handshake, name: "Settlement Negotiator", desc: "Self-serve, within your guardrails" },
  { icon: ChartNoAxesCombined, name: "Reporting & Analytics", desc: "Real-time dashboards & exports" },
];

const differentiators = [
  {
    legacy: "Compliance bolted on after the fact",
    hyventur: "FDCPA & Reg F built into every workflow",
  },
  {
    legacy: "Separate vendors for portal, SMS, IVR, and plans",
    hyventur: "Every channel in a single, unified platform",
  },
  {
    legacy: "Batch reporting hours after the fact",
    hyventur: "Real-time dashboards your team and clients trust",
  },
  {
    legacy: "Months-long implementations and expensive rip-and-replace",
    hyventur: "Most teams are live in weeks, not quarters",
  },
  {
    legacy: "Per-module fees and hidden costs",
    hyventur: "Transparent pricing, no per-seat or per-module surprises",
  },
];

const successItems = [
  "A modern portal consumers actually complete — on any device, without a login wall",
  "Text2Pay and IVR running compliantly and automatically across your account base",
  "Real-time dashboards with every payment, plan, and campaign in one place",
  "Settlement offers delivered within your business rules — no agent required",
  "Client-ready reports on demand, not after hours of manual exports",
  "A compliance-ready audit trail for every consumer interaction",
];

const failureItems = [
  "Consumers who want to pay — but can't figure out how",
  "Compliance gaps your team discovers only after a complaint",
  "Manual reconciliation eating hours your team doesn't have",
  "Clients who lose confidence in your reporting",
];

const whoWeServe = [
  { icon: Users, name: "Creditors & Lenders", desc: "Keep accounts current before charge-off" },
  { icon: HeartPulse, name: "Healthcare & Billing", desc: "HIPAA-aware patient payment portals" },
  { icon: Banknote, name: "Collection Agencies", desc: "Omnichannel recovery at portfolio scale" },
  { icon: Scale, name: "Law Firms & Legal", desc: "Judgment recovery with full documentation" },
];

const planSteps = [
  {
    step: "01",
    title: "Connect",
    body: "We integrate with your collection software, CRM, and banking infrastructure. Most integrations are live in days. Your existing data flows in — no manual rekeying.",
    detail: "Supports Finvi, Latitude, CollectMax, Salesforce, NetSuite, and 120+ more",
  },
  {
    step: "02",
    title: "Configure",
    body: "Brand your portal with your logo and colors. Set your compliance guardrails, payment plan rules, and settlement offer parameters. You control every policy.",
    detail: "FDCPA/Reg F-aware workflows, DNC validation, state-specific disclosures built in",
  },
  {
    step: "03",
    title: "Get Paid",
    body: "Consumers pay the way they prefer — portal, text, phone, or plan. Your team has real-time visibility. Your clients get the reports they ask for, on demand.",
    detail: "Real-time dashboards, reconciliation reports, and client-ready exports included",
  },
];

const nextSteps = [
  {
    number: "1",
    title: "Get a Live Demo",
    desc: "See the platform in action with your specific use case. We'll walk through your channels, compliance requirements, and integrations — no generic slide deck.",
    cta: "Schedule a Demo",
    href: "/contact",
    primary: true,
  },
  {
    number: "2",
    title: "Explore the Dashboard",
    desc: "Take a self-guided tour of the real-time reporting dashboard, consumer payment portal, and campaign management tools. No login required.",
    cta: "View the Dashboard",
    href: "/dashboard",
    primary: false,
  },
  {
    number: "3",
    title: "Talk to Our Team",
    desc: "Have questions about integrations, compliance, or how Hyventur fits your specific operation? Start with a direct conversation.",
    cta: "Contact Us",
    href: "/contact",
    primary: false,
  },
];

export default function OverviewPage() {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-ink-950 py-20 text-white sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 60% at 60% 0%, rgba(158,27,51,0.18), transparent)",
          }}
        />
        <div className="container-page relative max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.78rem] font-medium text-ink-300">
              <ShieldCheck className="size-3.5 text-crimson-400" />
              SOC 2 &amp; PCI Level 1 Certified · FDCPA &amp; Reg F Compliant
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-[2.8rem] font-extrabold leading-[1.05] tracking-tight sm:text-[3.8rem]">
              Your customers want to pay you.
              <br />
              <span className="text-crimson-400">
                We make sure nothing gets in the way.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-ink-300">
              Hyventur is the modern payment platform built for accounts receivable,
              billing, and collections teams — where compliance is the foundation,
              not an afterthought, and every payment channel is unified in one place.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Get a Live Demo
                <ArrowRight />
              </Button>
              <Button
                href="/dashboard"
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Explore the Platform
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-10">
              {[
                { value: "PCI Level 1", label: "Certified Infrastructure" },
                { value: "SOC 2", label: "Security Certified" },
                { value: "120+", label: "Pre-built Integrations" },
                { value: "50 States", label: "Supported" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-0.5 text-[0.8rem] text-ink-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page max-w-5xl">
          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
              The problem
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Outdated payment tools are quietly costing you revenue.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              Most accounts receivable and billing teams are held back not by
              effort — but by tools that weren&apos;t designed for the regulatory
              complexity and consumer expectations of 2026.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {problems.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.07}>
                  <div className="flex h-full gap-4 rounded-2xl border border-ink-100 bg-mist p-6">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-crimson-50 text-crimson-600">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink-900">{p.title}</h3>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-500">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE GUIDE ────────────────────────────────────────────────── */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-page max-w-4xl text-center">
          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
              There is a better way
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              We built Hyventur because AR and billing teams
              <br className="hidden sm:block" /> deserve tools that work as hard as they do.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              Not another legacy portal with a new logo. Not a patchwork of
              disconnected tools. A modern, unified payment platform built for
              the regulatory complexity and operational demands of accounts
              receivable, billing, and collections — across every industry.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: "Compliance-first architecture" },
                { icon: Zap, label: "Omnichannel in one platform" },
                { icon: ChartNoAxesCombined, label: "Real-time visibility" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-white p-5"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-[0.85rem] font-semibold text-ink-700">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page max-w-5xl">
          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
              Who we serve
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Built for every team that needs to get paid.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              Hyventur was designed for the operational realities, regulatory
              requirements, and consumer dynamics of accounts receivable,
              billing, and collections — not adapted from a generic payment tool.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeServe.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={w.name} delay={i * 0.07}>
                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-mist p-6 text-center">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink-900 text-white">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-semibold text-ink-900">{w.name}</h3>
                    <p className="text-[0.84rem] leading-snug text-ink-500">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-8 text-center text-[0.88rem] text-ink-400">
              Also serving: Debt Buyers · Government &amp; Municipal · Utilities &amp; Telecom · Property Management · Consumer Finance
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── HOW WE'RE DIFFERENT ──────────────────────────────────────── */}
      <section className="bg-ink-950 py-20 text-white sm:py-24">
        <div className="container-page max-w-4xl">
          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-300">
              How we&apos;re different
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Modern platform. Legacy replaced.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-300">
              Here&apos;s how Hyventur compares to the legacy approach your team is
              probably living with today.
            </p>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            {/* Header row */}
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/5 px-6 py-3">
              <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-ink-400">
                Legacy Approach
              </p>
              <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-crimson-300">
                Hyventur
              </p>
            </div>
            {differentiators.map((d, i) => (
              <div
                key={i}
                className="grid grid-cols-2 border-b border-white/10 last:border-0"
              >
                <div className="flex items-start gap-3 px-6 py-5">
                  <X className="mt-0.5 size-4 shrink-0 text-ink-500" />
                  <span className="text-[0.92rem] text-ink-400">{d.legacy}</span>
                </div>
                <div className="flex items-start gap-3 border-l border-white/10 bg-white/[0.03] px-6 py-5">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  <span className="text-[0.92rem] text-white">{d.hyventur}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PLATFORM ─────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page max-w-5xl">
          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
              The platform
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Every channel. Every workflow. One platform.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              Instead of stitching together five vendors, Hyventur gives you
              everything collections teams need — unified, compliant, and
              reporting in real time.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.name} delay={i * 0.05}>
                  <div className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-mist p-5">
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-crimson-50 text-crimson-600">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-[0.88rem] font-semibold text-ink-900">{c.name}</p>
                      <p className="mt-0.5 text-[0.8rem] text-ink-500">{c.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex items-center justify-between rounded-2xl border border-ink-100 bg-ink-900 p-6 text-white">
              <div className="flex items-center gap-4">
                <Plug className="size-6 text-crimson-400" />
                <div>
                  <p className="font-semibold">120+ integrations included</p>
                  <p className="text-[0.85rem] text-ink-300">
                    Finvi, Latitude, CollectMax, Salesforce, NetSuite, QuickBooks, Twilio, and more
                  </p>
                </div>
              </div>
              <Button href="/integrations" variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white shrink-0">
                View all
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PLAN ─────────────────────────────────────────────────── */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-page max-w-5xl">
          <Reveal>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
              How it works
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Three steps. No year-long project.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
              Hyventur is designed to deploy and integrate quickly. You stay in
              full control of your compliance rules, workflows, and business
              policies from day one.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {planSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-ink-100 bg-white p-7">
                  <span className="font-display text-5xl font-extrabold text-ink-100">
                    {s.step}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-ink-900">{s.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">
                    {s.body}
                  </p>
                  <p className="mt-4 text-[0.8rem] font-medium text-crimson-600 border-t border-ink-100 pt-4">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SUCCESS LOOKS LIKE ──────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-page max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
                What success looks like
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                Imagine your operation with the right platform.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">
                When every channel is unified, compliance is enforced
                automatically, and reporting is real-time — your team can focus on
                what they actually do best.
              </p>

              <ul className="mt-8 space-y-4">
                {successItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                    <span className="text-[0.97rem] leading-relaxed text-ink-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-crimson-100 bg-crimson-50 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="size-5 text-crimson-600" />
                  <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600">
                    What stays broken without it
                  </span>
                </div>
                <ul className="space-y-4">
                  {failureItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X className="mt-0.5 size-5 shrink-0 text-crimson-500" />
                      <span className="text-[0.95rem] leading-relaxed text-ink-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-[0.85rem] leading-relaxed text-crimson-700">
                  Every day a customer can&apos;t complete a payment is revenue
                  your business already earned — lost to friction and outdated
                  technology.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS ───────────────────────────────────────────────── */}
      <section className="bg-ink-950 py-20 text-white sm:py-28">
        <div className="container-page max-w-5xl">
          <Reveal className="text-center">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-300">
              Next steps
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Here&apos;s how we work together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-300">
              Choose the path that makes sense for where you are. No pressure,
              no generic demos, no long sales cycles.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {nextSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-2xl border p-7 ${
                    step.primary
                      ? "border-crimson-500 bg-crimson-600"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <span
                    className={`inline-flex size-9 items-center justify-center rounded-full text-sm font-bold ${
                      step.primary
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-ink-300"
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-3 flex-1 text-[0.92rem] leading-relaxed ${
                      step.primary ? "text-crimson-100" : "text-ink-300"
                    }`}
                  >
                    {step.desc}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={step.href}
                      className={`inline-flex items-center gap-2 text-[0.92rem] font-semibold transition-colors ${
                        step.primary
                          ? "text-white hover:text-crimson-100"
                          : "text-ink-300 hover:text-white"
                      }`}
                    >
                      {step.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Contact line */}
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-10 text-[0.88rem] text-ink-400">
              <span>Questions? Reach us directly:</span>
              <a
                href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
                className="font-medium text-white hover:text-crimson-300"
              >
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.salesEmail}`}
                className="font-medium text-white hover:text-crimson-300"
              >
                {brand.salesEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRINT / SHARE BAR ────────────────────────────────────────── */}
      <div className="border-t border-ink-100 bg-mist py-5 print:hidden">
        <div className="container-page flex flex-wrap items-center justify-between gap-4">
          <p className="text-[0.85rem] text-ink-400">
            Share this page with your team or prospects →{" "}
            <span className="font-mono font-medium text-ink-600">
              hyventur.vercel.app/overview
            </span>
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="text-[0.85rem] font-medium text-crimson-600 hover:text-crimson-700"
            >
              Schedule a Demo →
            </Link>
            <span className="text-ink-200">|</span>
            <Link
              href="/"
              className="text-[0.85rem] font-medium text-ink-400 hover:text-ink-600"
            >
              Explore the full site →
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
