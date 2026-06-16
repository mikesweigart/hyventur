import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/favicon.png"
      alt="Hyventur"
      width={32}
      height={32}
      className={cn("h-8 w-8 shrink-0", className)}
      priority
    />
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
