import { AreaChart, BarChart, Donut } from "@/components/site/charts";
import { ArrowUpRight, TrendingUp, Users, Zap, MessageSquareText, ShieldCheck } from "lucide-react";

const channelMetrics = [
  { channel: "Consumer Portal", volume: 42800, rate: 74.2, color: "#9e1b33" },
  { channel: "Text2Pay", volume: 31200, rate: 68.9, color: "#2e3744" },
  { channel: "IVR / Phone", volume: 19400, rate: 61.5, color: "#b82a45" },
  { channel: "Payment Plans", volume: 18600, rate: 58.7, color: "#76808f" },
];

export function HeroMock() {
  // Enterprise-scale metrics for collections companies processing millions
  const monthlyRecovered = 12847920;
  const accountsProcessed = 284000;
  const avgRecoveryRate = 71.4;

  return (
    <div className="relative">
      {/* Example data disclaimer */}
      <div className="mb-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
        <p className="text-[0.75rem] font-medium text-amber-900">
          Example dashboard — illustrative metrics for enterprise-scale operations
        </p>
      </div>

      {/* Main dashboard card */}
      <div className="card-surface overflow-hidden">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-ink-100 bg-mist px-4 py-3">
          <span className="size-2.5 rounded-full bg-ink-200" />
          <span className="size-2.5 rounded-full bg-ink-200" />
          <span className="size-2.5 rounded-full bg-ink-200" />
          <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white px-3 text-[0.7rem] font-medium text-ink-400">
            dashboard.hyventur.com — Collections Intelligence
          </div>
        </div>

        {/* body */}
        <div className="p-6">
          {/* KPI header row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-400">
                Recovered (MTD)
              </p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900">
                ${(monthlyRecovered / 1000000).toFixed(1)}M
              </p>
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-700">
                <TrendingUp className="size-3" />
                +22.7%
              </span>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-400">
                Accounts Touched
              </p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900">
                {(accountsProcessed / 1000).toFixed(0)}K
              </p>
              <span className="mt-1 text-[0.68rem] font-medium text-ink-500">
                +18,400 this month
              </span>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-400">
                Collection Rate
              </p>
              <p className="mt-2 font-display text-2xl font-bold tracking-tight text-ink-900">
                {avgRecoveryRate}%
              </p>
              <span className="mt-1 text-[0.68rem] font-medium text-ink-500">
                vs 64% industry avg
              </span>
            </div>
          </div>

          {/* Chart */}
          <div className="mb-6 pb-6 border-b border-ink-100">
            <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-ink-400 mb-3">
              Recovery Trend (30 days)
            </p>
            <AreaChart
              values={[28, 35, 31, 44, 41, 52, 48, 62, 58, 71, 76, 92, 88, 108, 105, 128, 124, 148, 152, 171, 178, 201, 198, 224, 232, 257, 264, 289, 301, 328]}
              height={90}
              width={520}
              className="mt-2"
              animate
            />
          </div>

          {/* Channel performance grid */}
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-wide text-ink-400 mb-3">
              Channel Performance
            </p>
            <div className="grid grid-cols-2 gap-3">
              {channelMetrics.map((ch) => (
                <div key={ch.channel} className="rounded-lg border border-ink-100 bg-mist/40 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[0.8rem] font-semibold text-ink-900">
                      {ch.channel}
                    </span>
                    <span
                      className="inline-flex items-center justify-center size-6 rounded-full text-[0.65rem] font-bold text-white"
                      style={{ background: ch.color }}
                    >
                      {ch.rate}%
                    </span>
                  </div>
                  <p className="mt-2 text-[0.72rem] text-ink-500">
                    <span className="font-semibold text-ink-700">{(ch.volume / 1000).toFixed(0)}K</span> payments processed
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating text-to-pay performance card */}
      <div
        className="card-surface absolute -bottom-6 -left-6 hidden w-60 p-4 sm:block"
        style={{ animation: "floatIn 0.7s ease-out 0.4s both" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-ink-900 text-white">
            <Zap className="size-4" />
          </span>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-ink-400">
              Text2Pay Performance
            </p>
            <p className="text-[0.8rem] font-semibold text-ink-900">
              68.9% conversion
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-mist p-2.5 text-[0.72rem] leading-snug text-ink-600 space-y-1">
          <p><span className="font-semibold">31.2K</span> messages delivered</p>
          <p><span className="font-semibold">Avg response</span> 4.2 min</p>
        </div>
      </div>

      {/* Floating enterprise compliance badge */}
      <div
        className="card-surface absolute -right-4 -top-4 hidden flex-col items-start gap-2 px-4 py-3 sm:flex"
        style={{ animation: "floatIn 0.7s ease-out 0.6s both" }}
      >
        <div className="flex items-center gap-2">
          <ShieldCheck className="size-4 text-crimson-600" />
          <span className="text-[0.75rem] font-semibold text-ink-800">
            Enterprise Ready
          </span>
        </div>
        <div className="text-[0.65rem] text-ink-600 space-y-0.5">
          <p>• PCI Level 1 / SOC 2</p>
          <p>• FDCPA / Reg F Compliant</p>
          <p>• Audit-Ready Operations</p>
        </div>
      </div>
    </div>
  );
}
