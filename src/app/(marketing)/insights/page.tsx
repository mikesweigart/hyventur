import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { articles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights — The collections payments playbook",
  description:
    "Practical articles on modern collections payments: consumer experience, compliance (FDCPA / Reg F), Text2Pay, payment plans, settlements, PCI, and omnichannel strategy.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="The collections payments playbook."
        lead="Practical thinking on getting paid in the modern era — consumer experience, compliance, channels, and the strategy behind a receivables operation that works."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          {/* Featured */}
          <Reveal>
            <Link
              href={`/insights/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-ink-100 bg-subtle transition-all hover:border-crimson-200 hover:shadow-lg lg:grid-cols-2"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden lg:aspect-auto">
                <Image
                  src="/images/about/featured.png"
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-crimson-300">
                      Featured
                    </span>
                    <p className="mt-3 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                      {featured.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <span className="text-[0.78rem] font-semibold uppercase tracking-wide text-crimson-600">
                  {featured.category}
                </span>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-900">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-ink-500">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-[0.82rem] text-ink-400">
                  <span>{formatDate(featured.date)}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {featured.readingMinutes} min read
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-crimson-600">
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-crimson-200 hover:shadow-md"
                >
                  <span className="text-[0.74rem] font-semibold uppercase tracking-wide text-crimson-600">
                    {a.category}
                  </span>
                  <h3 className="mt-2.5 text-[1.05rem] font-bold leading-snug text-ink-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.88rem] leading-relaxed text-ink-500">
                    {a.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-[0.76rem] text-ink-400">
                    <span>{formatDate(a.date)}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" />
                      {a.readingMinutes} min
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
