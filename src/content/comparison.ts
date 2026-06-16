/**
 * Five-way competitive comparison.
 *
 * IMPORTANT — accuracy & legal: every value below is based on each provider's
 * PUBLICLY STATED capabilities (their own websites) as of June 2026. We use
 * "full / partial / not advertised" rather than asserting hard negatives we
 * can't verify. Capabilities and pricing change; verify before publishing.
 * Trademarks belong to their respective owners.
 */

export type Mark = "full" | "partial" | "none";

export type Competitor = {
  key: string;
  name: string;
  ours?: boolean;
};

export const competitors: Competitor[] = [
  { key: "hyventur", name: "Hyventur", ours: true },
  { key: "tratta", name: "Tratta" },
  { key: "ezpay365", name: "ezPay365" },
  { key: "channel", name: "Channel Payments" },
  { key: "savvy", name: "Payment Savvy" },
];

export type CompRow = {
  label: string;
  // values keyed by competitor key, in the same order as `competitors`
  values: Record<string, Mark>;
};

export type CompGroup = {
  title: string;
  rows: CompRow[];
};

export const comparisonGroups: CompGroup[] = [
  {
    title: "Built for collections",
    rows: [
      {
        label: "Purpose-built for collections & ARM",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "none", savvy: "full" },
      },
      {
        label: "FDCPA / Reg F-aware workflows",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "none", savvy: "partial" },
      },
      {
        label: "Self-service settlement & negotiator",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "none", savvy: "partial" },
      },
      {
        label: "Collection-software integrations (Finvi, Latitude…)",
        values: { hyventur: "full", tratta: "full", ezpay365: "partial", channel: "none", savvy: "partial" },
      },
    ],
  },
  {
    title: "Every way to pay",
    rows: [
      {
        label: "Branded consumer self-service portal",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "partial", savvy: "full" },
      },
      {
        label: "Text2Pay (SMS payment links)",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "full", savvy: "full" },
      },
      {
        label: "IVR / pay-by-phone",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "none", savvy: "full" },
      },
      {
        label: "Virtual terminal (agent-assisted)",
        values: { hyventur: "full", tratta: "partial", ezpay365: "full", channel: "full", savvy: "full" },
      },
      {
        label: "Recurring & flexible payment plans",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "full", savvy: "full" },
      },
      {
        label: "Cards, ACH, digital wallets & HSA/FSA",
        values: { hyventur: "full", tratta: "partial", ezpay365: "full", channel: "full", savvy: "full" },
      },
    ],
  },
  {
    title: "Modern platform",
    rows: [
      {
        label: "Omnichannel campaigns (segmentation & triggers)",
        values: { hyventur: "full", tratta: "full", ezpay365: "partial", channel: "partial", savvy: "partial" },
      },
      {
        label: "Real-time analytics dashboard",
        values: { hyventur: "full", tratta: "full", ezpay365: "partial", channel: "full", savvy: "partial" },
      },
      {
        label: "REST API & broad integrations",
        values: { hyventur: "full", tratta: "full", ezpay365: "partial", channel: "full", savvy: "partial" },
      },
      {
        label: "PCI DSS Level 1 security",
        values: { hyventur: "full", tratta: "full", ezpay365: "full", channel: "full", savvy: "full" },
      },
    ],
  },
];

/** Pricing row — factual, sourced. No invented figures. */
export const pricingComparison: Record<string, { headline: string; detail: string }> = {
  hyventur: {
    headline: "Custom & transparent",
    detail: "Quoted to your volume — no per-module fees that stack up.",
  },
  tratta: {
    headline: "$500–$10,000/mo + fees",
    detail: "Published tiers plus transaction and campaign add-on fees.",
  },
  ezpay365: {
    headline: "Custom quote",
    detail: "Consultative pricing; rates not published.",
  },
  channel: {
    headline: "Custom quote",
    detail: "Surcharge / zero-fee option; contact sales.",
  },
  savvy: {
    headline: "Custom quote",
    detail: "Convenience-fee model; rates not published.",
  },
};

export const comparisonDisclaimer =
  "Based on publicly available information from each provider's website as of June 2026. Capabilities and pricing vary by plan and change over time — please verify directly. All trademarks are the property of their respective owners. Tratta pricing per tratta.io/pricing.";

/** A short list of rows used for the condensed home-page teaser. */
export const teaserRowLabels = [
  "Purpose-built for collections & ARM",
  "IVR / pay-by-phone",
  "Self-service settlement & negotiator",
  "Omnichannel campaigns (segmentation & triggers)",
  "Transparent pricing",
];
