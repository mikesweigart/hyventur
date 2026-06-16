import { Fragment } from "react";
import { Check, Minus } from "lucide-react";
import { BrandMark } from "@/components/site/logo";
import {
  competitors,
  comparisonGroups,
  pricingComparison,
  comparisonDisclaimer,
  type Mark,
} from "@/content/comparison";
import { cn } from "@/lib/utils";

export function MarkCell({ mark }: { mark: Mark }) {
  if (mark === "full") {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full bg-crimson-600 text-white">
        <Check className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  if (mark === "partial") {
    return (
      <span className="inline-flex size-6 items-center justify-center rounded-full border border-ink-200 text-ink-400">
        <Minus className="size-3.5" strokeWidth={3} />
      </span>
    );
  }
  return <span className="text-lg leading-none text-ink-300">–</span>;
}

/** Highlight styling for the Hyventur column cells. */
function ourCol(ours?: boolean) {
  return ours ? "bg-crimson-50/50" : "";
}

export function ComparisonTable() {
  return (
    <div>
      <div className="overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-sm">
        <table className="w-full min-w-[760px] border-collapse text-left">
          {/* Header */}
          <thead>
            <tr>
              <th className="sticky left-0 z-10 w-[40%] bg-white px-5 py-5 align-bottom" />
              {competitors.map((c) => (
                <th
                  key={c.key}
                  className={cn(
                    "px-3 py-5 text-center align-bottom",
                    c.ours && "rounded-t-xl",
                    ourCol(c.ours),
                  )}
                >
                  {c.ours ? (
                    <div className="flex flex-col items-center gap-1.5">
                      <BrandMark className="h-7 w-7" />
                      <span className="font-display text-[0.95rem] font-extrabold text-ink-900">
                        {c.name}
                      </span>
                      <span className="rounded-full bg-crimson-600 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-white">
                        Recommended
                      </span>
                    </div>
                  ) : (
                    <span className="text-[0.9rem] font-semibold text-ink-500">
                      {c.name}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {comparisonGroups.map((group) => (
              <Fragment key={group.title}>
                {/* Group subheader */}
                <tr>
                  <td
                    colSpan={competitors.length + 1}
                    className="border-t border-ink-100 bg-mist px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-500"
                  >
                    {group.title}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label} className="border-t border-ink-50">
                    <th className="sticky left-0 z-10 bg-white px-5 py-3.5 text-left text-[0.9rem] font-medium text-ink-700">
                      {row.label}
                    </th>
                    {competitors.map((c) => (
                      <td
                        key={c.key}
                        className={cn("px-3 py-3.5 text-center", ourCol(c.ours))}
                      >
                        <span className="inline-flex justify-center">
                          <MarkCell mark={row.values[c.key]} />
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}

            {/* Pricing row */}
            <tr>
              <td
                colSpan={competitors.length + 1}
                className="border-t border-ink-100 bg-mist px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-500"
              >
                Pricing
              </td>
            </tr>
            <tr className="border-t border-ink-50">
              <th className="sticky left-0 z-10 bg-white px-5 py-4 text-left text-[0.9rem] font-medium text-ink-700">
                Pricing model
              </th>
              {competitors.map((c) => {
                const p = pricingComparison[c.key];
                return (
                  <td
                    key={c.key}
                    className={cn(
                      "px-3 py-4 text-center align-top",
                      c.ours && "rounded-b-xl",
                      ourCol(c.ours),
                    )}
                  >
                    <p
                      className={cn(
                        "text-[0.82rem] font-bold",
                        c.ours ? "text-crimson-700" : "text-ink-800",
                      )}
                    >
                      {p.headline}
                    </p>
                    <p className="mt-1 text-[0.72rem] leading-snug text-ink-400">
                      {p.detail}
                    </p>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem] text-ink-500">
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex size-5 items-center justify-center rounded-full bg-crimson-600 text-white">
            <Check className="size-3" strokeWidth={3} />
          </span>
          Full
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-flex size-5 items-center justify-center rounded-full border border-ink-200 text-ink-400">
            <Minus className="size-3" strokeWidth={3} />
          </span>
          Limited / partial
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="text-base leading-none text-ink-300">–</span>
          Not advertised
        </span>
      </div>

      {/* Disclaimer */}
      <p className="mt-4 text-[0.74rem] leading-relaxed text-ink-400">
        {comparisonDisclaimer}
      </p>
    </div>
  );
}
