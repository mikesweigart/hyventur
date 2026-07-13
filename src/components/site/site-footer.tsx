import Link from "next/link";
import { ShieldCheck, Lock, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { brand, products, solutions } from "@/content/site";

const footerCols = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/platform" },
      { label: "Live Dashboard", href: "/dashboard" },
      { label: "Integrations", href: "/integrations" },
      ...products.slice(0, 3).map((p) => ({
        label: p.name,
        href: `/platform#${p.slug}`,
      })),
    ],
  },
  {
    title: "Who We Serve",
    links: solutions.slice(0, 6).map((s) => ({
      label: s.name,
      href: `/solutions#${s.slug}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              {brand.oneLiner}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a
                href={`tel:${brand.phone.replace(/[^\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-crimson-400" />
                {brand.phone}
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="inline-flex items-center gap-2 text-ink-300 transition-colors hover:text-white"
              >
                <Mail className="size-4 text-crimson-400" />
                {brand.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-800 pt-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-300">
            <ShieldCheck className="size-4 text-crimson-400" />
            PCI DSS Level 1
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-300">
            <Lock className="size-4 text-crimson-400" />
            256-bit encryption &amp; tokenization
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-300">
            <ShieldCheck className="size-4 text-crimson-400" />
            FDCPA / Reg F-aware workflows
          </span>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
