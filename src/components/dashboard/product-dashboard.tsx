"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Search, Bell, ChevronLeft, Menu, X, ArrowRight, ChevronsUpDown } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { dashboardNav } from "@/content/site";
import { cn } from "@/lib/utils";
import {
  OverviewSection,
  PaymentsSection,
  ConsumersSection,
  CampaignsSection,
  PlansSection,
  SettlementsSection,
  ReportsSection,
  IntegrationsSection,
  SettingsSection,
  type TF,
} from "@/components/dashboard/sections";

const allItems = dashboardNav.flatMap((g) => g.items);
const titleFor = (key: string) => allItems.find((i) => i.href === key)?.label ?? "Overview";

const timeframes: { id: TF; label: string }[] = [
  { id: "7d", label: "7d" },
  { id: "30d", label: "30d" },
  { id: "90d", label: "90d" },
];

function SectionView({ section, tf }: { section: string; tf: TF }) {
  switch (section) {
    case "payments":
      return <PaymentsSection />;
    case "consumers":
      return <ConsumersSection />;
    case "campaigns":
      return <CampaignsSection />;
    case "plans":
      return <PlansSection />;
    case "settlements":
      return <SettlementsSection />;
    case "reports":
      return <ReportsSection tf={tf} />;
    case "integrations":
      return <IntegrationsSection />;
    case "settings":
      return <SettingsSection />;
    default:
      return <OverviewSection tf={tf} />;
  }
}

function SidebarContent({
  section,
  setSection,
}: {
  section: string;
  setSection: (s: string) => void;
}) {
  return (
    <>
      <div className="flex h-16 items-center border-b border-ink-100 px-5">
        <Link href="/" aria-label="Hyventur home">
          <Logo />
        </Link>
      </div>

      {/* workspace switcher */}
      <div className="px-3 pt-4">
        <button className="flex w-full items-center gap-2.5 rounded-lg border border-ink-100 bg-mist px-3 py-2 text-left transition-colors hover:bg-ink-50">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-ink-900 text-[0.7rem] font-bold text-white">
            DA
          </span>
          <span className="flex-1">
            <span className="block text-[0.82rem] font-semibold leading-tight text-ink-900">
              Demo Agency
            </span>
            <span className="block text-[0.68rem] text-ink-400">Workspace</span>
          </span>
          <ChevronsUpDown className="size-3.5 text-ink-400" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-6 overflow-y-auto px-3 py-5">
        {dashboardNav.map((group) => (
          <div key={group.label}>
            <p className="px-2 pb-2 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-ink-400">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = section === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => setSection(item.href)}
                      className={cn(
                        "group relative flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[0.88rem] font-medium transition-colors",
                        active
                          ? "bg-crimson-50 text-crimson-700"
                          : "text-ink-600 hover:bg-mist hover:text-ink-900",
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="dashActive"
                          className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-crimson-600"
                        />
                      )}
                      {Icon && (
                        <Icon
                          className={cn(
                            "size-[18px] shrink-0",
                            active ? "text-crimson-600" : "text-ink-400 group-hover:text-ink-600",
                          )}
                        />
                      )}
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-ink-100 p-3">
        <div className="flex items-center gap-2.5 rounded-lg px-2 py-1.5">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-ink-900 to-ink-700 text-[0.72rem] font-semibold text-white">
            JA
          </span>
          <div className="flex-1 leading-tight">
            <p className="text-[0.8rem] font-semibold text-ink-900">Jordan Avery</p>
            <p className="text-[0.68rem] text-ink-400">Admin</p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-1 flex items-center gap-2 rounded-lg px-2 py-2 text-[0.8rem] font-medium text-ink-500 transition-colors hover:bg-mist hover:text-ink-900"
        >
          <ChevronLeft className="size-4" />
          Back to hyventur.com
        </Link>
      </div>
    </>
  );
}

export function ProductDashboard() {
  const [section, setSection] = useState("overview");
  const [tf, setTf] = useState<TF>("30d");
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();
  const showTimeframe = section === "overview" || section === "reports";

  const pick = (s: string) => {
    setSection(s);
    setMobileOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-mist">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-ink-100 bg-white lg:flex">
        <SidebarContent section={section} setSection={setSection} />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-ink-950/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-white lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="absolute right-3 top-4 inline-flex size-9 items-center justify-center rounded-lg text-ink-500 hover:bg-mist"
              >
                <X className="size-5" />
              </button>
              <SidebarContent section={section} setSection={pick} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-ink-100 bg-white px-4 sm:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="inline-flex size-9 items-center justify-center rounded-lg text-ink-700 hover:bg-mist lg:hidden"
          >
            <Menu className="size-5" />
          </button>

          <div className="min-w-0">
            <h1 className="truncate font-display text-[1.05rem] font-bold tracking-tight text-ink-900">
              {titleFor(section)}
            </h1>
          </div>

          <span className="ml-1 hidden rounded-full bg-crimson-50 px-2 py-0.5 text-[0.66rem] font-semibold text-crimson-700 sm:inline">
            Demo
          </span>

          <div className="ml-auto flex items-center gap-2">
            {showTimeframe && (
              <div className="hidden items-center gap-1 rounded-lg border border-ink-100 bg-mist p-0.5 sm:flex">
                {timeframes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTf(t.id)}
                    className={cn(
                      "rounded-md px-2.5 py-1 text-[0.76rem] font-medium transition-colors",
                      tf === t.id ? "bg-white text-ink-900 shadow-sm" : "text-ink-500 hover:text-ink-800",
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}
            <div className="hidden items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-1.5 md:flex">
              <Search className="size-4 text-ink-400" />
              <input
                placeholder="Search…"
                className="w-28 bg-transparent text-[0.82rem] text-ink-800 outline-none placeholder:text-ink-400"
              />
            </div>
            <button className="relative inline-flex size-9 items-center justify-center rounded-lg text-ink-500 hover:bg-mist">
              <Bell className="size-[18px]" />
              <span className="absolute right-2 top-2 size-1.5 rounded-full bg-crimson-600" />
            </button>
            <Link
              href="/contact"
              className="hidden items-center gap-1.5 rounded-lg bg-crimson-600 px-3 py-2 text-[0.82rem] font-semibold text-white transition-colors hover:bg-crimson-700 sm:inline-flex"
            >
              Get a demo
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </header>

        {/* Demo banner */}
        <div className="flex items-center gap-2 border-b border-crimson-100 bg-crimson-50/60 px-4 py-2 text-[0.8rem] text-crimson-800 sm:px-6">
          <span className="font-semibold">You&apos;re exploring a live demo.</span>
          <span className="hidden text-crimson-700/80 sm:inline">
            Click around the menu — this is exactly what your team sees once you&apos;re in.
          </span>
        </div>

        {/* Section content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-6xl"
            >
              <SectionView section={section} tf={tf} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
