import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site/reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-crimson-600",
        className,
      )}
    >
      <span className="h-px w-6 bg-crimson-600/50" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn(align === "center" && "flex justify-center")}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-lg leading-relaxed text-ink-500">{lead}</p>
      )}
    </Reveal>
  );
}
