"use client";

import Image from "next/image";
import {
  ShieldCheck,
  Check,
  Phone,
  MessageSquareText,
  MonitorSmartphone,
  CalendarSync,
  ChartNoAxesCombined,
  Plug,
  Handshake,
  Send,
  ArrowRight,
  Download,
} from "lucide-react";
import { brand } from "@/content/site";

const channels = [
  { icon: MonitorSmartphone, name: "Consumer Payment Portal" },
  { icon: MessageSquareText, name: "Text2Pay" },
  { icon: Phone, name: "IVR & Pay-by-Phone" },
  { icon: MonitorSmartphone, name: "Virtual Terminal" },
  { icon: CalendarSync, name: "Payment Plans" },
  { icon: Send, name: "Omnichannel Campaigns" },
  { icon: Handshake, name: "Settlement Negotiator" },
  { icon: ChartNoAxesCombined, name: "Reporting & Analytics" },
];

const problems = [
  "Customers who want to pay face friction and abandon before completing",
  "Compliance complexity (FDCPA, Reg F, HIPAA) creates operational risk at scale",
  "Disconnected tools create manual overhead and data blind spots",
];

const outcomes = [
  "Modern, mobile-first payment portal customers actually complete",
  "Text2Pay and IVR running compliantly and automatically",
  "Real-time dashboards with every payment and plan in one view",
  "Settlement offers delivered within your business rules",
  "Client-ready reconciliation reports, on demand",
  "Complete audit trail for every customer interaction",
];

const verticals = [
  "Creditors & Lenders",
  "Healthcare & Medical Billing",
  "Collection Agencies",
  "Debt Buyers",
  "Law Firms",
  "Government & Municipal",
  "Utilities & Telecom",
  "Property Management",
];

const trust = [
  { label: "SOC 2 Type II", sub: "Security certified" },
  { label: "PCI Level 1", sub: "Highest payment security" },
  { label: "FDCPA / Reg F", sub: "Compliance-aware workflows" },
  { label: "120+", sub: "Pre-built integrations" },
];

export default function OnePagerPage() {
  return (
    <>
      {/* ── PRINT / DOWNLOAD CONTROLS (hidden when printing) ── */}
      <div className="print:hidden sticky top-0 z-50 border-b border-ink-100 bg-white px-6 py-3 flex items-center justify-between">
        <p className="text-[0.85rem] text-ink-500">
          Sales one-pager — print or save as PDF
        </p>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-[0.85rem] font-semibold text-white hover:bg-ink-800 transition-colors"
        >
          <Download className="size-4" />
          Download PDF
        </button>
      </div>

      {/* ── DOCUMENT ── */}
      <div
        className="mx-auto bg-white print:mx-0 print:shadow-none"
        style={{ maxWidth: "816px" }} /* 8.5in at 96dpi */
      >

        {/* PAGE 1 */}
        <div className="min-h-[1056px] flex flex-col print:min-h-screen p-10 print:p-8">

          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-ink-900 pb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/favicon.png"
                alt="Hyventur"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <div>
                <p className="text-[1.4rem] font-extrabold tracking-tight text-ink-900 leading-none">
                  Hyventur
                </p>
                <p className="text-[0.72rem] font-medium text-ink-400 mt-0.5 uppercase tracking-widest">
                  Payment Platform
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[0.8rem] font-bold text-crimson-600 uppercase tracking-wider">
                Platform Overview
              </p>
              <p className="text-[0.72rem] text-ink-400 mt-0.5">
                hyventur.vercel.app
              </p>
            </div>
          </div>

          {/* Hero statement */}
          <div className="mt-7 rounded-xl bg-ink-950 p-7 text-white relative overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(158,27,51,0.5), transparent)",
              }}
            />
            <p className="relative text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-crimson-300 mb-3">
              The modern receivables & collections payment platform
            </p>
            <h1 className="relative text-[1.65rem] font-extrabold leading-tight tracking-tight">
              Your customers want to pay you.
              <br />
              <span className="text-crimson-400">We make sure nothing gets in the way.</span>
            </h1>
            <p className="relative mt-3 text-[0.88rem] leading-relaxed text-ink-300 max-w-lg">
              Hyventur unifies every payment channel — portal, text, phone, and
              plans — in one compliance-first platform built for accounts
              receivable, billing, and collections teams across every industry.
            </p>
          </div>

          {/* Two-column body */}
          <div className="mt-6 grid grid-cols-2 gap-6 flex-1">

            {/* Left column */}
            <div className="flex flex-col gap-6">

              {/* The Problem */}
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-crimson-600 border-b border-crimson-100 pb-1.5 mb-3">
                  The Problem
                </p>
                <ul className="space-y-2.5">
                  {problems.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 size-3.5 shrink-0 rounded-full border-2 border-ink-300" />
                      <span className="text-[0.82rem] leading-snug text-ink-600">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform Capabilities */}
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-crimson-600 border-b border-crimson-100 pb-1.5 mb-3">
                  Platform Capabilities
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {channels.map((c) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.name}
                        className="flex items-center gap-1.5 rounded-lg bg-mist px-2.5 py-2"
                      >
                        <Icon className="size-3 shrink-0 text-crimson-600" />
                        <span className="text-[0.75rem] font-medium text-ink-800 leading-tight">
                          {c.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Who We Serve */}
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-crimson-600 border-b border-crimson-100 pb-1.5 mb-3">
                  Who We Serve
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {verticals.map((v) => (
                    <span
                      key={v}
                      className="rounded-full border border-ink-200 px-2.5 py-1 text-[0.72rem] font-medium text-ink-600"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-6">

              {/* With Hyventur */}
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-crimson-600 border-b border-crimson-100 pb-1.5 mb-3">
                  With Hyventur, Your Team Has
                </p>
                <ul className="space-y-2.5">
                  {outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                      <span className="text-[0.82rem] leading-snug text-ink-700">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* How It Works */}
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-crimson-600 border-b border-crimson-100 pb-1.5 mb-3">
                  How It Works
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { n: "01", title: "Connect", body: "We integrate with your existing systems — collection software, CRM, banking. Most integrations live in days." },
                    { n: "02", title: "Configure", body: "Set your compliance guardrails, payment rules, and branding. You stay in full control of every policy." },
                    { n: "03", title: "Get Paid", body: "Customers pay how they prefer. Your team sees everything in real time. Reports are always ready." },
                  ].map((s) => (
                    <div key={s.n} className="flex gap-3 rounded-lg border border-ink-100 p-3">
                      <span className="font-display text-2xl font-extrabold text-ink-100 leading-none mt-0.5 shrink-0">
                        {s.n}
                      </span>
                      <div>
                        <p className="text-[0.8rem] font-bold text-ink-900">{s.title}</p>
                        <p className="mt-0.5 text-[0.75rem] leading-snug text-ink-500">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="rounded-xl border border-ink-100 bg-mist p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-ink-500 mb-2">
                  Integrates With
                </p>
                <p className="text-[0.78rem] text-ink-600 leading-snug">
                  Finvi · Latitude · CollectMax · Salesforce · NetSuite ·
                  QuickBooks · Twilio · HubSpot · Okta · Stripe · Zapier
                  <span className="text-ink-400"> + 110 more</span>
                </p>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="mt-6 grid grid-cols-4 gap-3 border-t border-ink-100 pt-5">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2">
                <ShieldCheck className="size-4 shrink-0 text-crimson-600" />
                <div>
                  <p className="text-[0.78rem] font-bold text-ink-900">{t.label}</p>
                  <p className="text-[0.68rem] text-ink-400">{t.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer / CTA */}
          <div className="mt-5 flex items-center justify-between rounded-xl bg-crimson-600 px-6 py-4 text-white">
            <div>
              <p className="text-[0.8rem] font-bold">Ready to see it in action?</p>
              <p className="text-[0.75rem] text-crimson-100 mt-0.5">
                Schedule a live demo at{" "}
                <span className="font-semibold text-white">
                  hyventur.vercel.app/contact
                </span>
              </p>
            </div>
            <div className="text-right text-[0.75rem] text-crimson-100 space-y-0.5">
              <p className="font-semibold text-white">{brand.phone}</p>
              <p>{brand.salesEmail}</p>
            </div>
          </div>

        </div>
        {/* /PAGE 1 */}

      </div>

      {/* ── PRINT STYLES ── */}
      <style jsx global>{`
        @media print {
          @page {
            size: letter;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          header, footer, nav, .print\\:hidden {
            display: none !important;
          }
          .bg-ink-950 {
            background-color: #11151b !important;
          }
          .bg-crimson-600 {
            background-color: #9e1b33 !important;
          }
          .bg-mist {
            background-color: #f6f8fb !important;
          }
        }
      `}</style>
    </>
  );
}
