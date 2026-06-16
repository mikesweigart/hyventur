"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Building2,
  Check,
  ChevronLeft,
  CalendarClock,
  HandCoins,
  Wallet,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { BrandMark } from "@/components/site/logo";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Demo data                                                          */
/* ------------------------------------------------------------------ */

const BALANCE = 1284.0;
const SETTLE = 834.0;
const SETTLE_SAVE = BALANCE - SETTLE;
const SETTLE_PCT = Math.round((SETTLE_SAVE / BALANCE) * 100);

const PLAN_OPTIONS = [3, 6, 12] as const;

const BRAND_COLORS = [
  { name: "Teal", value: "#0E7490" },
  { name: "Indigo", value: "#4338CA" },
  { name: "Forest", value: "#15803D" },
  { name: "Slate", value: "#334155" },
];

const money = (n: number) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/* Build a few upcoming installment date labels (client-side). */
function scheduleLabels(count: number): string[] {
  const now = new Date();
  const labels: string[] = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, now.getDate());
    labels.push(i === 0 ? "Today" : `${MONTHS[d.getMonth()]} ${d.getDate()}`);
  }
  return labels;
}

type Step = "balance" | "plan" | "settle" | "method" | "done";
type PayType = "full" | "plan" | "settle";

/* ------------------------------------------------------------------ */
/*  UI helpers                                                         */
/* ------------------------------------------------------------------ */

function PrimaryButton({
  children,
  onClick,
  brand,
}: {
  children: React.ReactNode;
  onClick: () => void;
  brand: string;
}) {
  return (
    <button
      onClick={onClick}
      style={{ background: brand }}
      className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[0.95rem] font-semibold text-white shadow-sm transition-transform active:translate-y-px"
    >
      {children}
    </button>
  );
}

function OptionRow({
  icon,
  title,
  desc,
  onClick,
  brand,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
  brand: string;
}) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 text-left transition-all hover:-translate-y-px hover:shadow-md"
      style={{ borderColor: undefined }}
    >
      <span
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-white"
        style={{ background: brand }}
      >
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-[0.9rem] font-semibold text-slate-900">
          {title}
        </span>
        <span className="block text-[0.78rem] text-slate-500">{desc}</span>
      </span>
      <ChevronLeft className="size-4 rotate-180 text-slate-300 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  The phone-framed portal                                            */
/* ------------------------------------------------------------------ */

function PortalScreen({
  brand,
  step,
  setStep,
  payType,
  setPayType,
  planMonths,
  setPlanMonths,
  method,
  setMethod,
  reduce,
}: {
  brand: string;
  step: Step;
  setStep: (s: Step) => void;
  payType: PayType;
  setPayType: (p: PayType) => void;
  planMonths: number;
  setPlanMonths: (m: number) => void;
  method: "card" | "bank";
  setMethod: (m: "card" | "bank") => void;
  reduce: boolean | null;
}) {
  const monthly = BALANCE / planMonths;
  const dueNow =
    payType === "full" ? BALANCE : payType === "settle" ? SETTLE : monthly;

  const variants = {
    initial: reduce ? { opacity: 0 } : { opacity: 0, x: 24 },
    animate: { opacity: 1, x: 0 },
    exit: reduce ? { opacity: 0 } : { opacity: 0, x: -24 },
  };

  return (
    <div className="flex h-full flex-col">
      {/* Branded header */}
      <div className="px-5 pb-4 pt-5 text-white" style={{ background: brand }}>
        <div className="flex items-center gap-2">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-white/20 text-[0.7rem] font-bold">
            RR
          </span>
          <span className="text-[0.92rem] font-semibold">Riverstone Recovery</span>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="relative flex-1 overflow-hidden bg-slate-50">
        <AnimatePresence mode="wait" initial={false}>
          {/* ----- BALANCE ----- */}
          {step === "balance" && (
            <motion.div
              key="balance"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-y-auto p-5"
            >
              <p className="text-[0.8rem] text-slate-500">Account #RR-48201</p>
              <p className="mt-1 text-[0.82rem] text-slate-600">
                Hi Alex — here&apos;s your balance.
              </p>
              <p className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900">
                {money(BALANCE)}
              </p>
              <p className="mt-1 text-[0.8rem] text-slate-500">
                Choose how you&apos;d like to resolve it. No account needed.
              </p>

              <div className="mt-5 space-y-2.5">
                <OptionRow
                  brand={brand}
                  icon={<Wallet className="size-5" />}
                  title="Pay in full"
                  desc={`Pay ${money(BALANCE)} today`}
                  onClick={() => {
                    setPayType("full");
                    setStep("method");
                  }}
                />
                <OptionRow
                  brand={brand}
                  icon={<CalendarClock className="size-5" />}
                  title="Set up a payment plan"
                  desc="Split it into smaller payments"
                  onClick={() => {
                    setPayType("plan");
                    setStep("plan");
                  }}
                />
                <OptionRow
                  brand={brand}
                  icon={<HandCoins className="size-5" />}
                  title="See a settlement offer"
                  desc={`Resolve for less than you owe`}
                  onClick={() => {
                    setPayType("settle");
                    setStep("settle");
                  }}
                />
              </div>
            </motion.div>
          )}

          {/* ----- PLAN ----- */}
          {step === "plan" && (
            <motion.div
              key="plan"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-y-auto p-5"
            >
              <button
                onClick={() => setStep("balance")}
                className="mb-3 inline-flex items-center gap-1 text-[0.8rem] font-medium text-slate-500"
              >
                <ChevronLeft className="size-4" /> Back
              </button>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Build your plan
              </h3>
              <p className="mt-1 text-[0.8rem] text-slate-500">
                Pick what fits your budget. You can adjust it anytime.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {PLAN_OPTIONS.map((m) => {
                  const active = planMonths === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setPlanMonths(m)}
                      className={cn(
                        "rounded-xl border p-3 text-center transition-all",
                        active
                          ? "text-white shadow-sm"
                          : "border-slate-200 bg-white text-slate-700",
                      )}
                      style={active ? { background: brand, borderColor: brand } : undefined}
                    >
                      <span className="block text-base font-bold">{m}</span>
                      <span className="block text-[0.66rem] opacity-80">months</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-baseline justify-between">
                  <span className="text-[0.82rem] text-slate-500">Monthly payment</span>
                  <span className="font-display text-2xl font-bold text-slate-900">
                    {money(monthly)}
                  </span>
                </div>
                <div className="mt-3 space-y-1.5 border-t border-slate-100 pt-3">
                  {scheduleLabels(Math.min(3, planMonths)).map((label, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-[0.8rem]"
                    >
                      <span className="text-slate-500">
                        {i === 0 ? "First payment" : `Payment ${i + 1}`} · {label}
                      </span>
                      <span className="font-medium text-slate-800">{money(monthly)}</span>
                    </div>
                  ))}
                  {planMonths > 3 && (
                    <p className="pt-1 text-[0.72rem] text-slate-400">
                      + {planMonths - 3} more monthly payments
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <PrimaryButton brand={brand} onClick={() => setStep("method")}>
                  Continue · {money(monthly)} today
                </PrimaryButton>
              </div>
            </motion.div>
          )}

          {/* ----- SETTLE ----- */}
          {step === "settle" && (
            <motion.div
              key="settle"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-y-auto p-5"
            >
              <button
                onClick={() => setStep("balance")}
                className="mb-3 inline-flex items-center gap-1 text-[0.8rem] font-medium text-slate-500"
              >
                <ChevronLeft className="size-4" /> Back
              </button>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-white"
                style={{ background: brand }}
              >
                <Sparkles className="size-3.5" /> Limited-time offer
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-slate-900">
                Settle your account
              </h3>
              <p className="mt-1 text-[0.82rem] text-slate-600">
                Pay <span className="font-semibold">{money(SETTLE)}</span> today and
                consider this balance resolved in full.
              </p>

              <div className="mt-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center justify-between text-[0.85rem]">
                  <span className="text-slate-500">Current balance</span>
                  <span className="text-slate-400 line-through">{money(BALANCE)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[0.85rem] font-medium text-slate-700">
                    Settlement price
                  </span>
                  <span className="font-display text-2xl font-bold text-slate-900">
                    {money(SETTLE)}
                  </span>
                </div>
                <div
                  className="mt-3 rounded-lg px-3 py-2 text-center text-[0.8rem] font-semibold text-white"
                  style={{ background: brand }}
                >
                  You save {money(SETTLE_SAVE)} ({SETTLE_PCT}% off)
                </div>
              </div>

              <div className="mt-4">
                <PrimaryButton brand={brand} onClick={() => setStep("method")}>
                  Accept &amp; pay {money(SETTLE)}
                </PrimaryButton>
              </div>
            </motion.div>
          )}

          {/* ----- METHOD ----- */}
          {step === "method" && (
            <motion.div
              key="method"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-y-auto p-5"
            >
              <button
                onClick={() =>
                  setStep(payType === "full" ? "balance" : payType === "plan" ? "plan" : "settle")
                }
                className="mb-3 inline-flex items-center gap-1 text-[0.8rem] font-medium text-slate-500"
              >
                <ChevronLeft className="size-4" /> Back
              </button>

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Payment details
                </h3>
                <span className="font-display text-lg font-bold" style={{ color: brand }}>
                  {money(dueNow)}
                </span>
              </div>

              {/* method toggle */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                {([
                  { id: "card", label: "Card", icon: CreditCard },
                  { id: "bank", label: "Bank", icon: Building2 },
                ] as const).map((m) => {
                  const active = method === m.id;
                  const Icon = m.icon;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id)}
                      className={cn(
                        "flex items-center justify-center gap-2 rounded-xl border py-2.5 text-[0.85rem] font-medium transition-all",
                        active ? "text-white" : "border-slate-200 bg-white text-slate-600",
                      )}
                      style={active ? { background: brand, borderColor: brand } : undefined}
                    >
                      <Icon className="size-4" />
                      {m.label}
                    </button>
                  );
                })}
              </div>

              {/* sample fields */}
              <div className="mt-3 space-y-2.5">
                {method === "card" ? (
                  <>
                    <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                      <p className="text-[0.66rem] text-slate-400">Card number</p>
                      <p className="text-[0.92rem] font-medium tracking-wider text-slate-800">
                        4242 4242 4242 4242
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                        <p className="text-[0.66rem] text-slate-400">Expiry</p>
                        <p className="text-[0.92rem] font-medium text-slate-800">09 / 28</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                        <p className="text-[0.66rem] text-slate-400">CVC</p>
                        <p className="text-[0.92rem] font-medium text-slate-800">•••</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                      <p className="text-[0.66rem] text-slate-400">Routing number</p>
                      <p className="text-[0.92rem] font-medium tracking-wider text-slate-800">
                        110000000
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-3.5 py-2.5">
                      <p className="text-[0.66rem] text-slate-400">Account number</p>
                      <p className="text-[0.92rem] font-medium tracking-wider text-slate-800">
                        ••••••6789
                      </p>
                    </div>
                  </>
                )}
              </div>

              <p className="mt-3 flex items-start gap-1.5 text-[0.68rem] leading-snug text-slate-400">
                <ShieldCheck className="mt-0.5 size-3.5 shrink-0" />
                Riverstone Recovery is a debt collector. This is an attempt to collect a
                debt. Secured by Hyventur · PCI Level 1.
              </p>

              <div className="mt-3">
                <PrimaryButton brand={brand} onClick={() => setStep("done")}>
                  <Lock className="size-4" /> Pay {money(dueNow)}
                </PrimaryButton>
              </div>
            </motion.div>
          )}

          {/* ----- DONE ----- */}
          {step === "done" && (
            <motion.div
              key="done"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 overflow-y-auto p-5"
            >
              <div className="flex flex-col items-center pt-4 text-center">
                <motion.span
                  initial={reduce ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 14, stiffness: 220 }}
                  className="inline-flex size-16 items-center justify-center rounded-full text-white"
                  style={{ background: brand }}
                >
                  <Check className="size-8" strokeWidth={3} />
                </motion.span>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                  You&apos;re all set.
                </h3>
                <p className="mt-1 text-[0.82rem] text-slate-500">
                  {payType === "plan"
                    ? "Your plan is active. Nice work."
                    : payType === "settle"
                      ? "Your account is resolved in full."
                      : "Your balance is paid in full."}
                </p>
              </div>

              <div className="mt-5 rounded-xl bg-white p-4 text-[0.82rem] shadow-sm ring-1 ring-slate-100">
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Confirmation</span>
                  <span className="font-medium text-slate-800">HV-7F3K9</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Paid today</span>
                  <span className="font-medium text-slate-800">{money(dueNow)}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Method</span>
                  <span className="font-medium text-slate-800">
                    {method === "card" ? "Card •••• 4242" : "Bank •••• 6789"}
                  </span>
                </div>
                {payType === "plan" && (
                  <div className="mt-2 border-t border-slate-100 pt-2 text-[0.78rem] text-slate-500">
                    Next payment {money(BALANCE / planMonths)} on{" "}
                    {scheduleLabels(2)[1]}.
                  </div>
                )}
              </div>

              <p className="mt-3 text-center text-[0.78rem] text-slate-500">
                A receipt is on its way to j•••@email.com
              </p>

              <button
                onClick={() => {
                  setStep("balance");
                  setPayType("full");
                }}
                className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2.5 text-[0.85rem] font-medium text-slate-600"
              >
                <RotateCcw className="size-4" /> Replay the demo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Powered-by footer */}
      <div className="flex items-center justify-center gap-1.5 border-t border-slate-100 bg-white py-2.5 text-[0.68rem] font-medium text-slate-400">
        <BrandMark className="h-3.5 w-3.5" />
        Secured by Hyventur
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Public component — phone frame + brand switcher                    */
/* ------------------------------------------------------------------ */

export function ConsumerPortalDemo() {
  const reduce = useReducedMotion();
  const [brand, setBrand] = useState(BRAND_COLORS[0].value);
  const [step, setStep] = useState<Step>("balance");
  const [payType, setPayType] = useState<PayType>("full");
  const [planMonths, setPlanMonths] = useState<number>(6);
  const [method, setMethod] = useState<"card" | "bank">("card");

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Brand color switcher */}
      <div className="flex items-center gap-3 rounded-full border border-ink-100 bg-white px-4 py-2 shadow-sm">
        <span className="text-[0.78rem] font-medium text-ink-500">See it in your colors</span>
        <div className="flex items-center gap-1.5">
          {BRAND_COLORS.map((c) => (
            <button
              key={c.value}
              onClick={() => setBrand(c.value)}
              aria-label={c.name}
              className={cn(
                "size-6 rounded-full ring-2 ring-offset-2 transition-all",
                brand === c.value ? "ring-ink-300" : "ring-transparent",
              )}
              style={{ background: c.value }}
            />
          ))}
        </div>
      </div>

      {/* Phone frame */}
      <div className="relative">
        <div className="relative h-[640px] w-[320px] rounded-[2.6rem] border-[10px] border-ink-900 bg-ink-900 shadow-2xl">
          {/* notch */}
          <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink-900" />
          {/* screen */}
          <div className="h-full w-full overflow-hidden rounded-[1.9rem] bg-white">
            <PortalScreen
              brand={brand}
              step={step}
              setStep={setStep}
              payType={payType}
              setPayType={setPayType}
              planMonths={planMonths}
              setPlanMonths={setPlanMonths}
              method={method}
              setMethod={setMethod}
              reduce={reduce}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
