import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { solutions } from "@/content/site";

export const metadata: Metadata = {
  title: "Who We Serve — Payments for every receivables operation",
  description:
    "Hyventur serves collection agencies, debt buyers, law firms, creditors, healthcare, government, utilities, property management, and consumer finance — one platform, adapted to how your industry works.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we serve"
        title="Built for everyone who needs to get paid."
        lead="Different industries, same goal: recover more with less friction, while keeping every consumer interaction compliant and respectful. Here's how Hyventur adapts to yours."
      >
        <Button href="/contact">
          Talk to us about your operation
          <ArrowRight />
        </Button>
        <div className="mt-12 rounded-2xl border border-ink-100 overflow-hidden">
          <Image
            src="/images/solutions/operators.png"
            alt="Hyventur team managing operations and customer interactions"
            width={2400}
            height={1350}
            priority={true}
            quality={90}
            className="w-full h-auto"
          />
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-5 lg:grid-cols-2">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                  <div
                    id={s.slug}
                    className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-ink-100 bg-subtle p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink-900 text-white">
                        <Icon className="size-6" />
                      </span>
                      <div>
                        <h2 className="text-lg font-bold text-ink-900">
                          {s.name}
                        </h2>
                        <p className="text-[0.9rem] font-medium text-crimson-600">
                          {s.headline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-500">
                      {s.summary}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 size-4 shrink-0 text-crimson-600" />
                          <span className="text-[0.9rem] text-ink-700">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-ink-900 to-ink-800 px-8 py-14 text-center text-white sm:px-12">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Don&apos;t see your industry?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
              If you collect payments from consumers, Hyventur can help. Let&apos;s
              talk through your workflow.
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
