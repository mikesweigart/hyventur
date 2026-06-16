"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { integrationCategories, type Integration } from "@/content/integrations";
import { cn } from "@/lib/utils";

function monogram(name: string) {
  const words = name.replace(/[^a-zA-Z0-9 ]/g, "").trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function IntegrationLogo({ item }: { item: Integration }) {
  if (item.logo) {
    return (
      <Image
        src={`/integrations/${item.logo}`}
        alt={item.name}
        width={120}
        height={40}
        className="h-9 w-auto max-w-[7.5rem] object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
      />
    );
  }
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mist font-display text-sm font-bold text-ink-600 transition-colors group-hover:bg-crimson-50 group-hover:text-crimson-700">
      {monogram(item.name)}
    </span>
  );
}

export function IntegrationsExplorer() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");

  const filtered = useMemo(() => {
    return integrationCategories
      .filter((c) => activeCat === "all" || c.slug === activeCat)
      .map((c) => ({
        ...c,
        items: c.items.filter((i) =>
          i.name.toLowerCase().includes(query.toLowerCase()),
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query, activeCat]);

  const totalShown = filtered.reduce((n, c) => n + c.items.length, 0);

  return (
    <div>
      {/* Controls */}
      <div className="sticky top-16 z-30 -mx-1 mb-10 bg-white/80 px-1 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-3 shadow-sm">
          <Search className="size-5 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations…"
            className="w-full bg-transparent text-[0.95rem] text-ink-900 outline-none placeholder:text-ink-400"
          />
          {query && (
            <span className="shrink-0 text-[0.78rem] text-ink-400">
              {totalShown} result{totalShown === 1 ? "" : "s"}
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCat("all")}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors",
              activeCat === "all"
                ? "bg-ink-900 text-white"
                : "border border-ink-200 bg-white text-ink-600 hover:bg-mist",
            )}
          >
            All
          </button>
          {integrationCategories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCat(c.slug)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors",
                activeCat === c.slug
                  ? "bg-ink-900 text-white"
                  : "border border-ink-200 bg-white text-ink-600 hover:bg-mist",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-14">
        {filtered.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-40">
            <div className="max-w-2xl">
              <h2 className="font-display text-xl font-bold tracking-tight text-ink-900">
                {cat.name}
              </h2>
              <p className="mt-1 text-[0.92rem] text-ink-500">
                {cat.description}
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group flex h-28 flex-col items-center justify-center gap-2.5 rounded-2xl border border-ink-100 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson-200 hover:shadow-md"
                >
                  <IntegrationLogo item={item} />
                  <div>
                    <p className="text-[0.85rem] font-semibold leading-tight text-ink-800">
                      {item.name}
                    </p>
                    {item.blurb && (
                      <p className="text-[0.7rem] text-ink-400">{item.blurb}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-ink-100 bg-mist py-16 text-center">
            <p className="font-semibold text-ink-900">No integrations match “{query}”.</p>
            <p className="mt-1 text-[0.9rem] text-ink-500">
              We build custom connectors too — tell us what you need.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
