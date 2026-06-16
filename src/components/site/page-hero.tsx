import { Eyebrow } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-ink-100 bg-mist",
        className,
      )}
    >
      {/* subtle grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(26,32,40,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,32,40,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="container-page relative py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
              {lead}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}
