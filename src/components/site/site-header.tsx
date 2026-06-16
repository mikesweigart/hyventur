"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { marketingNav, products, brand } from "@/content/site";
import { cn } from "@/lib/utils";

function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/* ---------- Platform mega-dropdown ---------- */
function PlatformMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/platform"
        className={cn(
          "group inline-flex items-center gap-1 px-1 py-2 text-[0.92rem] font-medium transition-colors",
          active ? "text-ink-900" : "text-ink-600 hover:text-ink-900",
        )}
      >
        Platform
        <ChevronDown
          className={cn(
            "size-3.5 text-ink-400 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
        <span
          className={cn(
            "absolute -bottom-px left-0 h-0.5 rounded-full bg-crimson-600 transition-all duration-300",
            active ? "w-full" : "w-0 group-hover:w-full",
          )}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 pt-3"
          >
            <div className="card-surface grid grid-cols-2 gap-1 p-3">
              {products.map((p) => {
                const Icon = p.icon;
                return (
                  <Link
                    key={p.slug}
                    href={`/platform#${p.slug}`}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist"
                  >
                    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-crimson-50 text-crimson-600 transition-colors group-hover:bg-crimson-600 group-hover:text-white">
                      <Icon className="size-[18px]" />
                    </span>
                    <span>
                      <span className="block text-[0.88rem] font-semibold text-ink-900">
                        {p.name}
                      </span>
                      <span className="mt-0.5 block text-[0.78rem] leading-snug text-ink-500">
                        {p.tagline}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Plain nav link with animated underline ---------- */
function NavLink({ item }: { item: { label: string; href: string } }) {
  const pathname = usePathname();
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative px-1 py-2 text-[0.92rem] font-medium transition-colors",
        active ? "text-ink-900" : "text-ink-600 hover:text-ink-900",
      )}
    >
      {item.label}
      <span
        className={cn(
          "absolute -bottom-px left-0 h-0.5 rounded-full bg-crimson-600 transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </Link>
  );
}

export function SiteHeader() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-100 bg-white/80 backdrop-blur-xl"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="Hyventur home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          <PlatformMenu active={pathname.startsWith("/platform")} />
          {marketingNav
            .filter((i) => i.href !== "/platform")
            .map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/dashboard" variant="ghost" size="sm">
            View dashboard
          </Button>
          <Button href="/contact" size="sm">
            Get a demo
            <ArrowRight />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="inline-flex size-10 items-center justify-center rounded-lg text-ink-700 hover:bg-mist lg:hidden"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 z-40 border-b border-ink-100 bg-white lg:hidden"
          >
            <nav className="container-page flex flex-col py-4">
              {marketingNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between border-b border-ink-50 py-3.5 text-[1rem] font-medium text-ink-800"
                >
                  {item.label}
                  <ArrowRight className="size-4 text-ink-300" />
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button href="/dashboard" variant="outline" className="w-full">
                  View the dashboard
                </Button>
                <Button href="/contact" className="w-full">
                  Get a demo
                  <ArrowRight />
                </Button>
              </div>
              <a
                href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
                className="mt-4 text-center text-[0.85rem] font-medium text-ink-400"
              >
                {brand.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
