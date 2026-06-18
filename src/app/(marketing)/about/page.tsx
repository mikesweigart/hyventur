import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Heart, ShieldCheck, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: "About — Built by people who understand collections",
  description:
    "Hyventur is the modern payment platform for collections and receivables, built by people who understand the pressure to recover, the weight of compliance, and the consumer who just wants a simple way to pay.",
};

const values = [
  {
    icon: Heart,
    title: "Respect the consumer",
    body: "Every interaction should feel humane. When paying is simple and dignified, more people resolve their accounts — and your brand is better for it.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance is non-negotiable",
    body: "Security and compliance aren't features we sell — they're the foundation everything else stands on. We build them in so you don't have to worry.",
  },
  {
    icon: Zap,
    title: "Make it effortless",
    body: "The best technology disappears. We obsess over removing every unnecessary step, for your team and the consumers they serve.",
  },
  {
    icon: Users,
    title: "Built for your success",
    body: "We bring dedicated support and work closely with you to optimize your operations. Your success with modern payment technology is our mission.",
  },
];

// Leadership team
const leadership = [
  { name: "Bob Johnson", role: "Founder & CEO", image: "/images/about/leader-1.png" },
  { name: "Rick Jackson", role: "Chief Financial Officer", image: "/images/about/leader-2.png" },
  { name: "Amy Smith", role: "Chief Revenue Officer", image: "/images/about/leader-3.png" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Hyventur"
        title="We make payments the part you never worry about."
        lead="Hyventur exists for a simple reason: getting paid shouldn't be this hard. We bring the channels, the security, and the support so your team can focus on results — and consumers get a way to pay that actually respects them."
      />

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="The tools were the problem."
              />
              <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink-600">
                <p>
                  Across collections and receivables, we kept seeing the same
                  thing: hardworking teams held back by payment software that
                  fought them at every turn. Consumers who wanted to pay
                  couldn&apos;t finish. Compliance felt like a constant risk.
                  Clients asked for reports the system couldn&apos;t produce.
                </p>
                <p>
                  So we built the platform we wished existed — one that brings
                  every channel together, keeps security and compliance quietly
                  in the background, and gives operators the clarity they&apos;ve
                  always wanted. Modern, clean, and built for the way payments
                  actually happen today.
                </p>
                <p>
                  That&apos;s Hyventur. Not another legacy portal — a partner in
                  getting paid.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-4">
                <Image
                  src="/images/about/team-candid.png"
                  alt="Hyventur team collaborating at the office"
                  width={2000}
                  height={1333}
                  priority={false}
                  quality={90}
                  className="rounded-2xl border border-ink-100 object-cover"
                />
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "PCI L1", label: "certified infrastructure" },
                    { value: "120+", label: "integrations" },
                    { value: "50", label: "states supported" },
                    { value: "99.9%", label: "uptime target" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-ink-100 bg-subtle p-6"
                    >
                      <p className="font-display text-3xl font-bold tracking-tight text-ink-900">
                        {s.value}
                      </p>
                      <p className="mt-1 text-sm text-ink-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What we believe"
            title="The principles behind the platform."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 2) * 0.08}>
                  <div className="flex h-full gap-4 rounded-2xl border border-ink-100 bg-white p-6">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900">
                        {v.title}
                      </h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-500">
                        {v.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            title="The people behind Hyventur."
            lead="A team that has lived the problems we solve — across payments, collections, technology, and compliance."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-ink-100 bg-subtle">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>
                  <div className="p-5 text-center">
                    <p className="font-semibold text-ink-900">{p.name}</p>
                    <p className="text-[0.88rem] text-crimson-600">{p.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-950 py-16 text-white">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s make getting paid the easy part.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            See the platform, meet the team, and find out what a modern payment
            experience can do for your recovery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg">
              Get a demo
              <ArrowRight />
            </Button>
            <Button
              href="/platform"
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              Explore the platform
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink-400">
            Or call us at {brand.phone}
          </p>
        </div>
      </section>
    </>
  );
}
