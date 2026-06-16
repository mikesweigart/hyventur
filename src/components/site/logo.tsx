import { cn } from "@/lib/utils";

/**
 * BrandMark — inline SVG echoing the Hyventur logo: charcoal bars
 * (the "H") crossed by a rising crimson growth arrow (the "N").
 * Uses fixed brand colors so it reads on both light and dark surfaces.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7 shrink-0", className)}
      aria-hidden="true"
    >
      {/* Clean "H" in charcoal */}
      <rect x="4" y="6" width="3" height="28" rx="1.5" fill="#0a1628" />
      <rect x="33" y="6" width="3" height="28" rx="1.5" fill="#0a1628" />
      <rect x="4" y="19" width="32" height="2" rx="1" fill="#0a1628" />

      {/* Rising arrow accent in crimson */}
      <path d="M 8 28 L 14 22 L 20 26 L 32 12" stroke="#c71e34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M 28 10 L 32 10 L 32 14" stroke="#c71e34" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

/**
 * Logo — brand mark + "Hyventur" wordmark.
 * tone="dark" → ink text (for light backgrounds, the default)
 * tone="light" → white text (for dark backgrounds, e.g. footer)
 */
export function Logo({
  className,
  tone = "dark",
  showWord = true,
}: {
  className?: string;
  tone?: "dark" | "light";
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className="h-8 w-8 shrink-0" />
      {showWord && (
        <span
          className={cn(
            "font-display text-[1.35rem] font-extrabold tracking-tight leading-none",
            tone === "light" ? "text-white" : "text-ink-900",
          )}
        >
          Hyventur
        </span>
      )}
    </span>
  );
}
