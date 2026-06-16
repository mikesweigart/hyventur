import { BrandMark } from "@/components/site/logo";
import { MarkCell } from "@/components/site/comparison-table";
import { competitors, comparisonGroups, type Mark } from "@/content/comparison";
import { cn } from "@/lib/utils";

/* Curated rows for the condensed home-page teaser. */
const allRows = comparisonGroups.flatMap((g) => g.rows);
const find = (label: string) => allRows.find((r) => r.label === label)!;

const teaserRows: { label: string; values: Record<string, Mark> }[] = [
  { label: "Built for collections & ARM", values: find("Purpose-built for collections & ARM").values },
  { label: "IVR / pay-by-phone", values: find("IVR / pay-by-phone").values },
  { label: "Self-service settlement", values: find("Self-service settlement & negotiator").values },
  { label: "Omnichannel campaigns", values: find("Omnichannel campaigns (segmentation & triggers)").values },
  {
    label: "Transparent pricing",
    values: { hyventur: "full", tratta: "partial", ezpay365: "partial", channel: "partial", savvy: "partial" },
  },
];

function ourCol(ours?: boolean) {
  return ours ? "bg-crimson-50/50" : "";
}

export function ComparisonTeaser() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-100 bg-white shadow-sm">
      <table className="w-full min-w-[680px] border-collapse text-left">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 w-[34%] bg-white px-5 py-4" />
            {competitors.map((c) => (
              <th
                key={c.key}
                className={cn(
                  "px-3 py-4 text-center align-bottom",
                  c.ours && "rounded-t-xl",
                  ourCol(c.ours),
                )}
              >
                {c.ours ? (
                  <div className="flex flex-col items-center gap-1">
                    <BrandMark className="h-6 w-6" />
                    <span className="font-display text-[0.85rem] font-extrabold text-ink-900">
                      {c.name}
                    </span>
                  </div>
                ) : (
                  <span className="text-[0.82rem] font-semibold text-ink-500">
                    {c.name}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teaserRows.map((row) => (
            <tr key={row.label} className="border-t border-ink-50">
              <th className="sticky left-0 z-10 bg-white px-5 py-3 text-left text-[0.88rem] font-medium text-ink-700">
                {row.label}
              </th>
              {competitors.map((c) => (
                <td key={c.key} className={cn("px-3 py-3 text-center", ourCol(c.ours))}>
                  <span className="inline-flex justify-center">
                    <MarkCell mark={row.values[c.key]} />
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
