"use client";

import { useState, useMemo } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Wallet,
  Smartphone,
  Phone,
  CalendarClock,
  Check,
  RefreshCw,
  Send,
  Mail,
  MessageSquareText,
  Plug,
  Palette,
  Bell,
  UserCog,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { AreaChart, BarChart, Donut } from "@/components/site/charts";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Deterministic helpers (stable across renders / SSR)                */
/* ------------------------------------------------------------------ */

function rng(seed: number) {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const money = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/* ------------------------------------------------------------------ */
/*  Authentic cumulative recovered-volume curves (only climb)          */
/* ------------------------------------------------------------------ */

function cumulative(days: number, seed: number) {
  const out: number[] = [];
  let acc = 0;
  for (let i = 0; i < days; i++) {
    const dow = i % 7;
    const weekend = dow === 5 || dow === 6 ? 0.42 : 1; // quieter weekends
    const trend = 1 + i * 0.01; // gentle upward drift
    const noise = 0.9 + rng(seed + i) * 0.2; // 0.90–1.10
    acc += weekend * trend * noise;
    out.push(acc);
  }
  return out;
}

export type TF = "7d" | "30d" | "90d";

const cumulativeSeries: Record<TF, number[]> = {
  "7d": cumulative(7, 11),
  "30d": cumulative(30, 23),
  "90d": cumulative(90, 47),
};

const kpis: Record<
  TF,
  { recovered: string; completion: string; plans: string; ttp: string; deltas: number[] }
> = {
  "7d": { recovered: "$2,128,440", completion: "74.2%", plans: "8,240", ttp: "2.3 days", deltas: [18.2, 5.4, 7.8, -3.2] },
  "30d": { recovered: "$12,847,920", completion: "76.8%", plans: "31,840", ttp: "1.9 days", deltas: [22.7, 6.8, 14.1, -5.6] },
  "90d": { recovered: "$41,285,200", completion: "77.4%", plans: "89,240", ttp: "1.7 days", deltas: [25.3, 8.2, 18.6, -7.9] },
};

const channelMix = [
  { label: "Consumer Portal", value: 42, color: "#9e1b33", icon: Wallet, volume: "127.5K", rate: "74.2%" },
  { label: "Text2Pay", value: 28, color: "#2e3744", icon: Smartphone, volume: "84.8K", rate: "68.9%" },
  { label: "IVR / Phone", value: 17, color: "#b82a45", icon: Phone, volume: "51.4K", rate: "61.5%" },
  { label: "Payment Plans", value: 13, color: "#76808f", icon: CalendarClock, volume: "39.3K", rate: "58.7%" },
];

const methodMix = [
  { label: "Card (Debit/Credit)", value: 52, color: "#9e1b33", volume: "$6.7M" },
  { label: "ACH / Bank", value: 32, color: "#2e3744", volume: "$4.1M" },
  { label: "Digital Wallet", value: 11, color: "#b82a45", volume: "$1.4M" },
  { label: "Other Methods", value: 5, color: "#76808f", volume: "$640K" },
];

/* ---------- small building blocks ---------- */

function Delta({ value }: { value: number }) {
  const up = value >= 0;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[0.7rem] font-semibold",
        up ? "bg-emerald-50 text-emerald-700" : "bg-crimson-50 text-crimson-700",
      )}
    >
      {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
      {Math.abs(value)}%
    </span>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-ink-100 bg-white p-5", className)}>{children}</div>;
}

function SectionTitle({ title, sub, right }: { title: string; sub?: string; right?: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-3">
      <div>
        <h2 className="font-display text-xl font-bold tracking-tight text-ink-900">{title}</h2>
        {sub && <p className="mt-0.5 text-[0.85rem] text-ink-500">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  const [v, setV] = useState(on);
  return (
    <button
      onClick={() => setV((x) => !x)}
      className={cn("relative h-6 w-11 shrink-0 rounded-full transition-colors", v ? "bg-crimson-600" : "bg-ink-200")}
      aria-pressed={v}
    >
      <span className={cn("absolute top-0.5 size-5 rounded-full bg-white shadow transition-all", v ? "left-[22px]" : "left-0.5")} />
    </button>
  );
}

/* ================================================================== */
/*  OVERVIEW                                                            */
/* ================================================================== */

export function OverviewSection({ tf }: { tf: TF }) {
  const k = kpis[tf];
  const cards = [
    { label: "Recovered", value: k.recovered, delta: k.deltas[0] },
    { label: "Completion rate", value: k.completion, delta: k.deltas[1] },
    { label: "Active plans", value: k.plans, delta: k.deltas[2] },
    { label: "Avg. time to pay", value: k.ttp, delta: k.deltas[3] },
  ];
  const activity = [
    { who: "Alexis Morgan", ch: "Portal", amt: "$248.00" },
    { who: "Diego Ramirez", ch: "Text2Pay", amt: "$75.00" },
    { who: "Taylor Brooks", ch: "IVR", amt: "$1,120.00" },
    { who: "Samira Khan", ch: "Plan", amt: "$87.50" },
    { who: "Morgan Lee", ch: "Portal", amt: "$312.40" },
    { who: "Riley Chen", ch: "Text2Pay", amt: "$140.00" },
  ];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map((c) => (
          <Card key={c.label} className="p-4">
            <p className="text-[0.78rem] font-medium text-ink-400">{c.label}</p>
            <p className="mt-1.5 font-display text-2xl font-bold tracking-tight text-ink-900">{c.value}</p>
            <div className="mt-2 flex items-center gap-1.5">
              <Delta value={c.delta} />
              <span className="text-[0.7rem] text-ink-400">vs. prior period</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.8rem] font-medium text-ink-400">Recovered volume · cumulative</p>
              <p className="mt-0.5 font-display text-2xl font-bold tracking-tight text-ink-900">{k.recovered}</p>
            </div>
            <Delta value={k.deltas[0]} />
          </div>
          <AreaChart key={tf} values={cumulativeSeries[tf]} height={150} width={520} className="mt-4" animate />
        </Card>

        <Card>
          <p className="text-[0.8rem] font-medium text-ink-400">Channel mix</p>
          <div className="mt-3 flex items-center gap-4">
            <div className="relative">
              <Donut segments={channelMix} size={120} thickness={16} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-lg font-bold text-ink-900">100%</span>
                <span className="text-[0.6rem] text-ink-400">paid</span>
              </div>
            </div>
            <ul className="flex-1 space-y-1.5">
              {channelMix.map((c) => (
                <li key={c.label} className="flex items-center justify-between text-[0.78rem]">
                  <span className="flex items-center gap-1.5 text-ink-600">
                    <span className="size-2 rounded-full" style={{ background: c.color }} />
                    {c.label}
                  </span>
                  <span className="font-semibold text-ink-900">{c.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>

      <Card className="p-0">
        <div className="border-b border-ink-100 px-5 py-3">
          <p className="text-[0.85rem] font-semibold text-ink-900">Recent activity</p>
        </div>
        <div className="divide-y divide-ink-50">
          {activity.map((a, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-3 hover:bg-mist">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex size-7 items-center justify-center rounded-full bg-crimson-50 text-crimson-600">
                  <Check className="size-3.5" />
                </span>
                <span className="text-[0.85rem] font-medium text-ink-700">
                  {a.who} <span className="text-ink-400">· {a.ch}</span>
                </span>
              </div>
              <span className="text-[0.85rem] font-semibold text-ink-900">{a.amt}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  PAYMENTS — ~55 rows, scrollable                                    */
/* ================================================================== */

type Channel = "Portal" | "Text" | "IVR" | "Plan";
type PayStatus = "Completed" | "Plan active" | "Retrying";

const channelsArr: Channel[] = ["Portal", "Text", "IVR", "Plan"];
const channelIcon = { Portal: Wallet, Text: Smartphone, IVR: Phone, Plan: CalendarClock } as const;
const statusStyle = {
  Completed: { cls: "bg-emerald-50 text-emerald-700", icon: Check },
  "Plan active": { cls: "bg-ink-100 text-ink-600", icon: CalendarClock },
  Retrying: { cls: "bg-amber-50 text-amber-700", icon: RefreshCw },
} as const;

const amountPool = [25, 45, 50, 67.5, 75, 87.5, 95, 107, 120, 140, 150, 214, 225, 248, 312.4, 350, 428, 540, 675, 820, 1050, 1120, 1284];

function timeAgo(i: number) {
  const mins = (i + 1) * 6 + Math.floor(rng(i + 3) * 5);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return days === 1 ? "Yesterday" : `${days}d ago`;
}

const payments = Array.from({ length: 55 }, (_, i) => {
  const ch = channelsArr[Math.floor(rng(i * 7 + 1) * channelsArr.length)];
  const amount = amountPool[Math.floor(rng(i * 7 + 5) * amountPool.length)];
  const r = rng(i * 7 + 9);
  const status: PayStatus = r > 0.86 ? "Retrying" : r > 0.72 ? "Plan active" : "Completed";
  return {
    id: `PAY-${90432 - i}`,
    channel: ch,
    amount: money(amount),
    status,
    time: timeAgo(i),
  };
});

export function PaymentsSection() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"All" | Channel>("All");
  const filtered = useMemo(
    () =>
      payments.filter(
        (p) =>
          (filter === "All" || p.channel === filter) &&
          (query === "" || p.id.toLowerCase().includes(query.toLowerCase()) || p.amount.includes(query)),
      ),
    [query, filter],
  );
  return (
    <div className="space-y-4">
      <SectionTitle
        title="Payments"
        sub="Every payment across every channel, in real time."
        right={
          <span className="hidden text-[0.78rem] text-ink-400 sm:block">
            {filtered.length.toLocaleString()} of 41,820 payments
          </span>
        }
      />
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2">
          <Search className="size-4 text-ink-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ID or amount…"
            className="w-44 bg-transparent text-[0.85rem] text-ink-800 outline-none placeholder:text-ink-400"
          />
        </div>
        {(["All", "Portal", "Text", "IVR", "Plan"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-3 py-1.5 text-[0.78rem] font-medium transition-colors",
              filter === f ? "bg-crimson-600 text-white" : "border border-ink-200 bg-white text-ink-600 hover:bg-mist",
            )}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-ink-100 bg-white">
        <div className="max-h-[480px] overflow-y-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead className="sticky top-0 z-10 bg-white">
              <tr className="border-b border-ink-100 text-[0.72rem] uppercase tracking-wide text-ink-400">
                <th className="px-4 py-2.5 font-semibold">Payment</th>
                <th className="px-4 py-2.5 font-semibold">Channel</th>
                <th className="px-4 py-2.5 font-semibold">Status</th>
                <th className="px-4 py-2.5 text-right font-semibold">Amount</th>
                <th className="hidden px-4 py-2.5 text-right font-semibold sm:table-cell">Time</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const ChIcon = channelIcon[p.channel];
                const st = statusStyle[p.status];
                const StIcon = st.icon;
                return (
                  <tr key={p.id} className="border-b border-ink-50 last:border-0 hover:bg-mist">
                    <td className="px-4 py-3 font-medium text-ink-800">{p.id}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-ink-600">
                        <ChIcon className="size-4 text-ink-400" />
                        {p.channel}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.72rem] font-semibold", st.cls)}>
                        <StIcon className="size-3" />
                        {p.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-ink-900">{p.amount}</td>
                    <td className="hidden px-4 py-3 text-right text-ink-400 sm:table-cell">{p.time}</td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-ink-400">
                    No payments match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  CONSUMERS — ~60 rows, scrollable                                   */
/* ================================================================== */

const firstNames = ["Alexis","Jordan","Taylor","Riley","Samira","Diego","Morgan","Casey","Jamie","Avery","Quinn","Devon","Harper","Reese","Skyler","Cameron","Drew","Elliot","Marlow","Noa","Parker","Rowan","Sage","Toni","Wren","Blair","Emerson","Hayden","Kai","Lennox","Micah","Nico","Oakley","Sasha","Iris","Marcus","Priya","Hugo","Lena","Omar"];
const lastNames = ["Morgan","Avery","Brooks","Chen","Khan","Ramirez","Lee","Nguyen","Patel","Garcia","Hughes","Foster","Bennett","Russo","Coleman","Ford","Hayes","Jenkins","Klein","Lambert","Mejia","Novak","Owens","Pierce","Reyes","Santos","Tran","Underwood","Vance","Walsh","Yates","Zimmerman"];
const cStatuses = ["Paid", "On plan", "In progress", "New"];
const cContacts = ["Portal", "Text", "IVR", "Email", "Phone"];
const consumerStatusCls: Record<string, string> = {
  Paid: "bg-emerald-50 text-emerald-700",
  "On plan": "bg-crimson-50 text-crimson-700",
  "In progress": "bg-amber-50 text-amber-700",
  New: "bg-ink-100 text-ink-600",
};

const consumers = Array.from({ length: 60 }, (_, i) => {
  const fn = firstNames[Math.floor(rng(i * 5 + 1) * firstNames.length)];
  const ln = lastNames[Math.floor(rng(i * 5 + 2) * lastNames.length)];
  const bal = 50 + Math.floor(rng(i * 5 + 3) * 5200);
  const status = cStatuses[Math.floor(rng(i * 5 + 4) * cStatuses.length)];
  const contact = cContacts[Math.floor(rng(i * 5 + 6) * cContacts.length)];
  return {
    name: `${fn} ${ln}`,
    acct: `AC-${48260 - i}`,
    balance: money(bal),
    status,
    contact,
  };
});

export function ConsumersSection() {
  const [query, setQuery] = useState("");
  const filtered = consumers.filter(
    (c) => query === "" || c.name.toLowerCase().includes(query.toLowerCase()) || c.acct.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div className="space-y-4">
      <SectionTitle
        title="Consumers"
        sub="A single view of every account and how they prefer to pay."
        right={
          <span className="hidden text-[0.78rem] text-ink-400 sm:block">
            {filtered.length.toLocaleString()} of 18,640 consumers
          </span>
        }
      />
      <div className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 py-2 sm:w-72">
        <Search className="size-4 text-ink-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search consumers…"
          className="w-full bg-transparent text-[0.85rem] text-ink-800 outline-none placeholder:text-ink-400"
        />
      </div>
      <div className="overflow-hidden rounded-xl border border-ink-100 bg-white">
        <div className="max-h-[480px] overflow-y-auto">
          <table className="w-full text-left text-[0.85rem]">
            <thead className="sticky top-0 z-10 bg-white">
              <tr className="border-b border-ink-100 text-[0.72rem] uppercase tracking-wide text-ink-400">
                <th className="px-4 py-2.5 font-semibold">Consumer</th>
                <th className="hidden px-4 py-2.5 font-semibold sm:table-cell">Account</th>
                <th className="px-4 py-2.5 font-semibold">Status</th>
                <th className="hidden px-4 py-2.5 font-semibold md:table-cell">Preferred</th>
                <th className="px-4 py-2.5 text-right font-semibold">Balance</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.acct} className="border-b border-ink-50 last:border-0 hover:bg-mist">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className="inline-flex size-7 items-center justify-center rounded-full bg-ink-900 text-[0.7rem] font-semibold text-white">
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                      <span className="font-medium text-ink-800">{c.name}</span>
                    </div>
                  </td>
                  <td className="hidden px-4 py-3 text-ink-500 sm:table-cell">{c.acct}</td>
                  <td className="px-4 py-3">
                    <span className={cn("inline-flex rounded-full px-2 py-0.5 text-[0.72rem] font-semibold", consumerStatusCls[c.status])}>
                      {c.status}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-ink-600 md:table-cell">{c.contact}</td>
                  <td className="px-4 py-3 text-right font-semibold text-ink-900">{c.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  CAMPAIGNS                                                          */
/* ================================================================== */

const campaigns = [
  { name: "30-day past due — Text + Email", channel: "Text2Pay", icon: MessageSquareText, sent: "12,480", paid: "3,140", rate: 25.2 },
  { name: "Settlement push — Q2", channel: "Email", icon: Mail, sent: "8,210", paid: "1,620", rate: 19.7 },
  { name: "Plan reminders — recurring", channel: "Omnichannel", icon: Send, sent: "5,940", paid: "2,010", rate: 33.8 },
  { name: "New placements — welcome", channel: "Text2Pay", icon: MessageSquareText, sent: "9,330", paid: "1,880", rate: 20.1 },
];

export function CampaignsSection() {
  return (
    <div className="space-y-4">
      <SectionTitle title="Campaigns" sub="Orchestrated outreach across phone, text, and email." />
      <div className="grid gap-4 sm:grid-cols-2">
        {campaigns.map((c) => {
          const Icon = c.icon;
          return (
            <Card key={c.name}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-[0.92rem] font-semibold text-ink-900">{c.name}</p>
                    <p className="text-[0.78rem] text-ink-400">{c.channel}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.72rem] font-semibold text-emerald-700">
                  <ArrowUpRight className="size-3" />
                  {c.rate}%
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-mist px-3 py-2">
                  <p className="text-[0.7rem] text-ink-400">Sent</p>
                  <p className="text-[0.95rem] font-bold text-ink-900">{c.sent}</p>
                </div>
                <div className="rounded-lg bg-mist px-3 py-2">
                  <p className="text-[0.7rem] text-ink-400">Paid</p>
                  <p className="text-[0.95rem] font-bold text-ink-900">{c.paid}</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ink-100">
                <div className="h-full rounded-full bg-crimson-600" style={{ width: `${c.rate * 2}%` }} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  PAYMENT PLANS                                                      */
/* ================================================================== */

const plans = [
  { name: "Alexis Morgan", total: 1284, paid: 856, next: "Jul 1", per: "$107/mo" },
  { name: "Samira Khan", total: 1050, paid: 350, next: "Jun 28", per: "$87.50/mo" },
  { name: "Morgan Lee", total: 2140, paid: 1605, next: "Jul 5", per: "$178/mo" },
  { name: "Taylor Brooks", total: 3910, paid: 980, next: "Jun 30", per: "$325/mo" },
  { name: "Diego Ramirez", total: 760, paid: 570, next: "Jul 3", per: "$95/mo" },
];

export function PlansSection() {
  return (
    <div className="space-y-4">
      <SectionTitle title="Payment Plans" sub="Plans that stay on track with smart retries and reminders." />
      <div className="grid gap-3">
        {plans.map((p) => {
          const pct = Math.round((p.paid / p.total) * 100);
          return (
            <Card key={p.name} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-ink-900 text-[0.72rem] font-semibold text-white">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-[0.9rem] font-semibold text-ink-900">{p.name}</p>
                  <p className="text-[0.76rem] text-ink-400">{p.per} • next {p.next}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:w-1/2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-ink-100">
                  <div className="h-full rounded-full bg-crimson-600 transition-all" style={{ width: `${pct}%` }} />
                </div>
                <span className="w-28 text-right text-[0.8rem] font-medium text-ink-600">
                  ${p.paid.toLocaleString()} / ${p.total.toLocaleString()}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SETTLEMENTS                                                        */
/* ================================================================== */

const settlements = [
  { acct: "AC-48195", balance: "$3,910.00", offer: "$2,540.00", pct: "65%", status: "Accepted" },
  { acct: "AC-48180", balance: "$2,140.00", offer: "$1,498.00", pct: "70%", status: "Pending" },
  { acct: "AC-48172", balance: "$988.00", offer: "$642.20", pct: "65%", status: "Accepted" },
  { acct: "AC-48168", balance: "$5,200.00", offer: "$3,120.00", pct: "60%", status: "Countered" },
  { acct: "AC-48150", balance: "$1,460.00", offer: "$1,022.00", pct: "70%", status: "Accepted" },
];

const settleStatus: Record<string, string> = {
  Accepted: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Countered: "bg-ink-100 text-ink-600",
};

export function SettlementsSection() {
  return (
    <div className="space-y-4">
      <SectionTitle title="Settlements" sub="Self-service offers, always inside the rules you set." />
      <div className="overflow-hidden rounded-xl border border-ink-100 bg-white">
        <table className="w-full text-left text-[0.85rem]">
          <thead>
            <tr className="border-b border-ink-100 text-[0.72rem] uppercase tracking-wide text-ink-400">
              <th className="px-4 py-2.5 font-semibold">Account</th>
              <th className="px-4 py-2.5 font-semibold">Balance</th>
              <th className="px-4 py-2.5 font-semibold">Offer</th>
              <th className="hidden px-4 py-2.5 font-semibold sm:table-cell">% of balance</th>
              <th className="px-4 py-2.5 text-right font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {settlements.map((s) => (
              <tr key={s.acct} className="border-b border-ink-50 last:border-0 hover:bg-mist">
                <td className="px-4 py-3 font-medium text-ink-800">{s.acct}</td>
                <td className="px-4 py-3 text-ink-600">{s.balance}</td>
                <td className="px-4 py-3 font-semibold text-ink-900">{s.offer}</td>
                <td className="hidden px-4 py-3 text-ink-600 sm:table-cell">{s.pct}</td>
                <td className="px-4 py-3 text-right">
                  <span className={cn("inline-flex rounded-full px-2 py-0.5 text-[0.72rem] font-semibold", settleStatus[s.status])}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  REPORTS — robust analytics                                         */
/* ================================================================== */

const ageBuckets = [
  { bucket: "Current (0–30d)", placed: "$2.10M", recovered: "$1.46M", rate: 69 },
  { bucket: "31–60 days", placed: "$1.40M", recovered: "$812K", rate: 58 },
  { bucket: "61–90 days", placed: "$980K", recovered: "$461K", rate: 47 },
  { bucket: "90+ days", placed: "$1.20M", recovered: "$396K", rate: 33 },
];

export function ReportsSection({ tf }: { tf: TF }) {
  const k = kpis[tf];
  return (
    <div className="space-y-4">
      <SectionTitle title="Reports" sub="Reconciliation and client-ready analytics at a glance." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: "Recovered", value: k.recovered, delta: k.deltas[0] },
          { label: "Completion", value: k.completion, delta: k.deltas[1] },
          { label: "Active plans", value: k.plans, delta: k.deltas[2] },
          { label: "Avg. time to pay", value: k.ttp, delta: k.deltas[3] },
        ].map((c) => (
          <Card key={c.label} className="p-4">
            <p className="text-[0.78rem] font-medium text-ink-400">{c.label}</p>
            <p className="mt-1 font-display text-xl font-bold tracking-tight text-ink-900">{c.value}</p>
            <div className="mt-1.5">
              <Delta value={c.delta} />
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <p className="text-[0.8rem] font-medium text-ink-400">Recovered over time · cumulative</p>
        <AreaChart key={tf} values={cumulativeSeries[tf]} height={150} width={900} className="mt-3" animate />
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <p className="text-[0.8rem] font-medium text-ink-400">Recovered by month</p>
          <BarChart values={[62, 74, 81, 79, 96, 112]} labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} highlightIndex={5} className="mt-4" height={170} />
        </Card>
        <Card>
          <p className="text-[0.8rem] font-medium text-ink-400">Recovery by channel</p>
          <BarChart values={[38, 27, 19, 16]} labels={["Portal", "Text", "IVR", "Plans"]} highlightIndex={0} className="mt-4" height={170} />
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
        {/* Payment method mix */}
        <Card>
          <p className="text-[0.8rem] font-medium text-ink-400">Payment method mix</p>
          <div className="mt-3 flex items-center gap-4">
            <Donut segments={methodMix} size={120} thickness={16} />
            <ul className="flex-1 space-y-1.5">
              {methodMix.map((m) => (
                <li key={m.label} className="flex items-center justify-between text-[0.78rem]">
                  <span className="flex items-center gap-1.5 text-ink-600">
                    <span className="size-2 rounded-full" style={{ background: m.color }} />
                    {m.label}
                  </span>
                  <span className="font-semibold text-ink-900">{m.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Recovery by account age */}
        <Card className="p-0">
          <div className="border-b border-ink-100 px-5 py-3">
            <p className="text-[0.85rem] font-semibold text-ink-900">Recovery by account age</p>
          </div>
          <table className="w-full text-left text-[0.82rem]">
            <thead>
              <tr className="border-b border-ink-100 text-[0.68rem] uppercase tracking-wide text-ink-400">
                <th className="px-5 py-2 font-semibold">Age</th>
                <th className="px-3 py-2 font-semibold">Placed</th>
                <th className="px-3 py-2 font-semibold">Recovered</th>
                <th className="px-5 py-2 text-right font-semibold">Rate</th>
              </tr>
            </thead>
            <tbody>
              {ageBuckets.map((b) => (
                <tr key={b.bucket} className="border-b border-ink-50 last:border-0">
                  <td className="px-5 py-2.5 font-medium text-ink-800">{b.bucket}</td>
                  <td className="px-3 py-2.5 text-ink-500">{b.placed}</td>
                  <td className="px-3 py-2.5 font-semibold text-ink-900">{b.recovered}</td>
                  <td className="px-5 py-2.5">
                    <div className="flex items-center justify-end gap-2">
                      <div className="hidden h-1.5 w-16 overflow-hidden rounded-full bg-ink-100 sm:block">
                        <div className="h-full rounded-full bg-crimson-600" style={{ width: `${b.rate}%` }} />
                      </div>
                      <span className="w-9 text-right font-medium text-ink-700">{b.rate}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      {/* Top campaigns */}
      <Card className="p-0">
        <div className="border-b border-ink-100 px-5 py-3">
          <p className="text-[0.85rem] font-semibold text-ink-900">Top campaigns by conversion</p>
        </div>
        <table className="w-full text-left text-[0.82rem]">
          <thead>
            <tr className="border-b border-ink-100 text-[0.68rem] uppercase tracking-wide text-ink-400">
              <th className="px-5 py-2 font-semibold">Campaign</th>
              <th className="hidden px-3 py-2 font-semibold sm:table-cell">Sent</th>
              <th className="px-3 py-2 font-semibold">Paid</th>
              <th className="px-5 py-2 text-right font-semibold">Conversion</th>
            </tr>
          </thead>
          <tbody>
            {[...campaigns].sort((a, b) => b.rate - a.rate).map((c) => (
              <tr key={c.name} className="border-b border-ink-50 last:border-0">
                <td className="px-5 py-2.5 font-medium text-ink-800">{c.name}</td>
                <td className="hidden px-3 py-2.5 text-ink-500 sm:table-cell">{c.sent}</td>
                <td className="px-3 py-2.5 text-ink-700">{c.paid}</td>
                <td className="px-5 py-2.5 text-right font-semibold text-crimson-600">{c.rate}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

/* ================================================================== */
/*  INTEGRATIONS (in-product)                                          */
/* ================================================================== */

const connectedIntegrations = [
  { name: "Salesforce", cat: "CRM", on: true },
  { name: "Finvi", cat: "Collections", on: true },
  { name: "QuickBooks", cat: "Accounting", on: true },
  { name: "Twilio", cat: "Messaging", on: true },
  { name: "Plaid", cat: "Banking", on: false },
  { name: "Experian", cat: "Data", on: false },
];

export function IntegrationsSection() {
  const [state, setState] = useState(() => connectedIntegrations.map((i) => i.on));
  return (
    <div className="space-y-4">
      <SectionTitle title="Integrations" sub="Connect Hyventur to the systems you already run on." />
      <div className="grid gap-3 sm:grid-cols-2">
        {connectedIntegrations.map((it, i) => (
          <Card key={it.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-mist font-display text-sm font-bold text-ink-700">
                {it.name[0]}
              </span>
              <div>
                <p className="text-[0.9rem] font-semibold text-ink-900">{it.name}</p>
                <p className="text-[0.76rem] text-ink-400">{it.cat}</p>
              </div>
            </div>
            <button
              onClick={() => setState((s) => s.map((v, idx) => (idx === i ? !v : v)))}
              className={cn("relative h-6 w-11 rounded-full transition-colors", state[i] ? "bg-crimson-600" : "bg-ink-200")}
              aria-label={`Toggle ${it.name}`}
            >
              <span className={cn("absolute top-0.5 size-5 rounded-full bg-white shadow transition-all", state[i] ? "left-[22px]" : "left-0.5")} />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SETTINGS — clear, labeled                                          */
/* ================================================================== */

function SettingCard({
  icon,
  title,
  desc,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-crimson-50 text-crimson-600">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[0.95rem] font-semibold text-ink-900">{title}</h3>
          <p className="mt-0.5 text-[0.8rem] leading-relaxed text-ink-500">{desc}</p>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </Card>
  );
}

function SettingRow({ label, desc, control }: { label: string; desc?: string; control: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-ink-50 py-2.5 first:border-0 first:pt-0">
      <div>
        <p className="text-[0.85rem] font-medium text-ink-800">{label}</p>
        {desc && <p className="text-[0.74rem] text-ink-400">{desc}</p>}
      </div>
      {control}
    </div>
  );
}

const portalColors = ["#0E7490", "#4338CA", "#15803D", "#9e1b33"];

export function SettingsSection() {
  return (
    <div className="space-y-4">
      <SectionTitle title="Settings" sub="Configure your workspace, branding, channels, and team." />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Brand & portal */}
        <SettingCard
          icon={<Palette className="size-5" />}
          title="Brand & consumer portal"
          desc="White-label the portal your consumers see — logo, colors, and web address."
        >
          <SettingRow
            label="Portal address"
            desc="Where consumers go to pay"
            control={
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-mist px-2.5 py-1.5 text-[0.78rem] font-medium text-ink-700">
                <Globe className="size-3.5 text-ink-400" />
                pay.riverstonerecovery.com
              </span>
            }
          />
          <SettingRow
            label="Brand color"
            desc="Applied across the portal"
            control={
              <div className="flex items-center gap-1.5">
                {portalColors.map((c, i) => (
                  <span
                    key={c}
                    className={cn("size-5 rounded-full ring-2 ring-offset-1", i === 0 ? "ring-ink-300" : "ring-transparent")}
                    style={{ background: c }}
                  />
                ))}
              </div>
            }
          />
          <SettingRow label="Logo" desc="Shown on every screen" control={<span className="text-[0.78rem] font-medium text-crimson-600">Upload</span>} />
        </SettingCard>

        {/* Channels */}
        <SettingCard
          icon={<Plug className="size-5" />}
          title="Payment channels"
          desc="Turn the ways consumers can pay on or off. Changes apply instantly."
        >
          <SettingRow label="Consumer portal" desc="Self-service web portal" control={<Toggle on />} />
          <SettingRow label="Text2Pay" desc="SMS payment links" control={<Toggle on />} />
          <SettingRow label="IVR / pay-by-phone" desc="24/7 automated phone" control={<Toggle on />} />
          <SettingRow label="Payment plans" desc="Installment scheduling" control={<Toggle on />} />
          <SettingRow label="Settlements" desc="Self-service offers" control={<Toggle on />} />
        </SettingCard>

        {/* Payment methods */}
        <SettingCard
          icon={<Wallet className="size-5" />}
          title="Accepted payment methods"
          desc="Choose which methods consumers can use at checkout."
        >
          <SettingRow label="Credit & debit cards" control={<Toggle on />} />
          <SettingRow label="ACH / bank transfer" control={<Toggle on />} />
          <SettingRow label="Digital wallets" desc="Apple Pay & Google Pay" control={<Toggle on />} />
          <SettingRow label="HSA / FSA cards" control={<Toggle on={false} />} />
        </SettingCard>

        {/* Compliance */}
        <SettingCard
          icon={<ShieldCheck className="size-5" />}
          title="Compliance"
          desc="Guardrails that keep every interaction within the rules."
        >
          <SettingRow label="FDCPA disclosures" desc="Shown on every payment screen" control={<Toggle on />} />
          <SettingRow label="Reg F quiet hours" desc="No outreach 9pm–8am local" control={<Toggle on />} />
          <SettingRow label="Call recording masking" desc="Card data removed from recordings" control={<Toggle on />} />
        </SettingCard>

        {/* Notifications */}
        <SettingCard
          icon={<Bell className="size-5" />}
          title="Notifications"
          desc="Decide what your team hears about, and when."
        >
          <SettingRow label="Daily recovery summary" desc="Emailed each morning" control={<Toggle on />} />
          <SettingRow label="Failed-payment alerts" desc="Real-time" control={<Toggle on />} />
          <SettingRow label="New settlement requests" control={<Toggle on={false} />} />
        </SettingCard>

        {/* Team */}
        <SettingCard
          icon={<UserCog className="size-5" />}
          title="Team & roles"
          desc="Who has access, and what they can do."
        >
          <div className="space-y-2">
            {[
              { name: "Jordan Avery", role: "Admin" },
              { name: "Samira Khan", role: "Manager" },
              { name: "Diego Ramirez", role: "Agent" },
            ].map((m) => (
              <div key={m.name} className="flex items-center justify-between border-t border-ink-50 py-2 first:border-0 first:pt-0">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex size-7 items-center justify-center rounded-full bg-ink-900 text-[0.68rem] font-semibold text-white">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span className="text-[0.85rem] font-medium text-ink-800">{m.name}</span>
                </div>
                <span className="rounded-full bg-mist px-2 py-0.5 text-[0.72rem] font-medium text-ink-600">{m.role}</span>
              </div>
            ))}
            <button className="mt-1 text-[0.78rem] font-medium text-crimson-600">+ Invite teammate</button>
          </div>
        </SettingCard>
      </div>
    </div>
  );
}
