import {
  Wallet,
  Phone,
  MessageSquareText,
  MonitorSmartphone,
  CalendarSync,
  Send,
  Handshake,
  ChartNoAxesCombined,
  Plug,
  ShieldCheck,
  Building2,
  Scale,
  HeartPulse,
  Landmark,
  Zap,
  Home,
  Banknote,
  ShoppingCart,
  Users,
  LayoutDashboard,
  Settings,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Brand + contact                                                    */
/* ------------------------------------------------------------------ */

export const brand = {
  name: "Hyventur",
  legalName: "Hyventur Payments",
  domain: "hyventur.com",
  tagline: "Make getting paid the easy part.",
  // StoryBrand one-liner — character + problem + solution + success
  oneLiner:
    "Hyventur gives collection and receivables teams a modern payment platform consumers actually want to use — so you recover more, stay compliant, and stop fighting your tools.",
  phone: "(800) 555-0142",
  email: "hello@hyventur.com",
  salesEmail: "sales@hyventur.com",
};

/* ------------------------------------------------------------------ */
/*  Navigation                                                          */
/* ------------------------------------------------------------------ */

export type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

/** Marketing site — conventional top navigation (no left rail). */
export const marketingNav: NavItem[] = [
  { label: "Platform", href: "/platform" },
  { label: "Integrations", href: "/integrations" },
  { label: "Who We Serve", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

/**
 * Product dashboard — the persistent left rail lives ONLY here, inside
 * the in-product experience prospects see when they demo the dashboard.
 * Hrefs are demo section keys (the dashboard is a single skinned page).
 */
export const dashboardNav: NavGroup[] = [
  {
    label: "Workspace",
    items: [
      { label: "Overview", href: "overview", icon: LayoutDashboard },
      { label: "Payments", href: "payments", icon: Wallet },
      { label: "Consumers", href: "consumers", icon: Users },
    ],
  },
  {
    label: "Recovery",
    items: [
      { label: "Campaigns", href: "campaigns", icon: Send },
      { label: "Payment Plans", href: "plans", icon: CalendarSync },
      { label: "Settlements", href: "settlements", icon: Handshake },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Reports", href: "reports", icon: ChartNoAxesCombined },
      { label: "Integrations", href: "integrations", icon: Plug },
      { label: "Settings", href: "settings", icon: Settings },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Products — the unified platform (everything the competitors do)    */
/* ------------------------------------------------------------------ */

export type Product = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  bullets: string[];
};

export const products: Product[] = [
  {
    slug: "consumer-portal",
    name: "Consumer Payment Portal",
    icon: Wallet,
    tagline: "A branded self-service portal consumers actually finish.",
    summary:
      "Give every consumer a clean, mobile-first place to view their balance, choose how to pay, and set up a plan — in their language, on their schedule, without a phone call.",
    bullets: [
      "Your logo, your colors, your domain",
      "Mobile-first, two-minute checkout",
      "Balance lookup, plans, and one-time payments",
      "Multilingual, FDCPA-aware disclosures built in",
    ],
  },
  {
    slug: "ivr-pay-by-phone",
    name: "IVR & Pay-by-Phone",
    icon: Phone,
    tagline: "Let consumers pay 24/7 by phone — no agent required.",
    summary:
      "A secure, multilingual interactive voice system takes payments around the clock, keeps card data out of your call center, and frees your agents for the conversations that matter.",
    bullets: [
      "24/7 automated, multilingual payments",
      "Agent-assisted secure pay (PCI descoping)",
      "Call recording with payment masking",
      "Warm hand-off to a live agent anytime",
    ],
  },
  {
    slug: "text2pay",
    name: "Text2Pay",
    icon: MessageSquareText,
    tagline: "A payment link in their pocket. Paid in two taps.",
    summary:
      "Meet consumers where they already are. Send a compliant, personalized SMS link that opens straight to checkout — the single fastest way to turn a contact into a payment.",
    bullets: [
      "Compliant, opt-in SMS payment links",
      "Personalized balance and plan offers",
      "Two-tap checkout, no login required",
      "Delivery, open, and payment tracking",
    ],
  },
  {
    slug: "virtual-terminal",
    name: "Virtual Terminal",
    icon: MonitorSmartphone,
    tagline: "Take a payment over the phone, the right way.",
    summary:
      "When a consumer calls in, your agent takes the payment in seconds with the disclosures, receipts, and audit trail compliance teams expect — across cards and ACH.",
    bullets: [
      "Agent-entered card and ACH payments",
      "Built-in FDCPA / Reg F disclosures",
      "Automatic receipts and audit trail",
      "Role-based access and permissions",
    ],
  },
  {
    slug: "recurring-plans",
    name: "Recurring & Payment Plans",
    icon: CalendarSync,
    tagline: "Set the plan once. Hyventur keeps it on track.",
    summary:
      "Flexible installment plans with smart retry logic and a card account updater keep payments flowing and reduce the broken promises that drain recovery rates.",
    bullets: [
      "Flexible schedules and down payments",
      "Smart retries on failed payments",
      "Card account updater reduces declines",
      "Self-serve plan management for consumers",
    ],
  },
  {
    slug: "campaigns",
    name: "Omnichannel Campaigns",
    icon: Send,
    tagline: "Reach the right consumer on the right channel.",
    summary:
      "Segment your accounts and orchestrate outreach across phone, text, and email with triggered workflows and settlement offers — so the right message lands at the right moment.",
    bullets: [
      "Segmentation by balance, age, and behavior",
      "Triggered, multi-step workflows",
      "Channel-coordinated phone, text, and email",
      "A/B testing and performance reporting",
    ],
  },
  {
    slug: "settlement",
    name: "Settlement & Negotiator",
    icon: Handshake,
    tagline: "Let consumers settle — inside your rules.",
    summary:
      "A guided, self-service negotiator presents pre-approved settlement and plan options within the guardrails you set, closing accounts without an agent on the line.",
    bullets: [
      "Pre-approved offer matrices and guardrails",
      "Self-serve negotiation, no agent needed",
      "Counter-offer logic you control",
      "Every offer logged for compliance",
    ],
  },
  {
    slug: "analytics",
    name: "Reporting & Analytics",
    icon: ChartNoAxesCombined,
    tagline: "See every payment in real time.",
    summary:
      "Live dashboards, reconciliation, and exports give operators and clients a single source of truth — the kind of clarity you expect from the best payment platforms.",
    bullets: [
      "Real-time payment and settlement dashboards",
      "Reconciliation and deposit reporting",
      "Scheduled exports and client-ready reports",
      "Channel, campaign, and agent performance",
    ],
  },
  {
    slug: "integrations",
    name: "Integrations & API",
    icon: Plug,
    tagline: "Connect the systems you already run on.",
    summary:
      "A modern REST API and a library of pre-built connectors link Hyventur to your collection software, CRM, and accounting stack — so data flows without rekeying.",
    bullets: [
      "Modern REST API and webhooks",
      "120+ pre-built integrations",
      "Connectors for leading collection platforms",
      "Sandbox and developer documentation",
    ],
  },
  {
    slug: "security-compliance",
    name: "Security & Compliance",
    icon: ShieldCheck,
    tagline: "Compliance built in, not bolted on.",
    summary:
      "PCI Level 1 infrastructure, tokenization, and FDCPA / Reg F-aware workflows protect you and your consumers — so security is the quiet default, never the daily worry.",
    bullets: [
      "PCI DSS Level 1 certified infrastructure",
      "Tokenization and end-to-end encryption",
      "FDCPA / Reg F-aware disclosures",
      "Fraud controls, BIN blocking, and alerts",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Payment methods                                                    */
/* ------------------------------------------------------------------ */

export const paymentMethods: string[] = [
  "Credit & debit cards",
  "ACH / eCheck",
  "Apple Pay & Google Pay",
  "HSA / FSA cards",
  "Pay-over-time financing",
  "Bank-to-bank transfer",
  "Recurring & installments",
  "Cash & lockbox reconciliation",
];

/* ------------------------------------------------------------------ */
/*  Solutions — who we serve (covers every competitor's segments)      */
/* ------------------------------------------------------------------ */

export type Solution = {
  slug: string;
  name: string;
  icon: LucideIcon;
  headline: string;
  summary: string;
  outcomes: string[];
};

export const solutions: Solution[] = [
  {
    slug: "collection-agencies",
    name: "Collection Agencies",
    icon: Users,
    headline: "Recover more on every placement.",
    summary:
      "Give consumers a self-service way to pay and settle, automate outreach across channels, and give your clients the reporting they ask for — all in one platform.",
    outcomes: [
      "Higher account coverage and completion",
      "Lower cost per dollar collected",
      "Client-ready reporting on demand",
    ],
  },
  {
    slug: "debt-buyers",
    name: "Debt Buyers",
    icon: Banknote,
    headline: "Maximize liquidation on the portfolios you own.",
    summary:
      "Put intelligent automation and self-service payments to work across large portfolios, lifting liquidation while keeping every touch documented and compliant.",
    outcomes: [
      "Higher liquidation across portfolios",
      "Scalable, automated consumer outreach",
      "Documented, compliant payment trails",
    ],
  },
  {
    slug: "law-firms",
    name: "Collection Law Firms",
    icon: Scale,
    headline: "Compliant payments, without the overhead.",
    summary:
      "Offer consumers a clean way to pay and arrange plans, with multilingual support and the disclosures and audit trails legal teams require.",
    outcomes: [
      "Multilingual, compliant self-service",
      "Complete audit trail on every payment",
      "Less staff time on payment handling",
    ],
  },
  {
    slug: "creditors",
    name: "Creditors & Lenders",
    icon: Building2,
    headline: "Strengthen accounts receivable from day one.",
    summary:
      "Keep more accounts current with flexible plans, proactive reminders, and a payment experience that reflects your brand from first bill to final payment.",
    outcomes: [
      "More accounts kept current",
      "Branded, on-brand payment experience",
      "Fewer accounts rolling to collections",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Billing",
    icon: HeartPulse,
    headline: "A payment experience patients don't dread.",
    summary:
      "Accept HSA/FSA, offer compassionate payment plans, and meet patients on text and phone — reducing bad debt while protecting the patient relationship.",
    outcomes: [
      "HSA / FSA acceptance built in",
      "Compassionate, flexible payment plans",
      "Lower bad debt, better patient experience",
    ],
  },
  {
    slug: "government",
    name: "Government & Municipal",
    icon: Landmark,
    headline: "Collect taxes, fines, and fees with less friction.",
    summary:
      "Give residents a secure, accessible way to pay across every channel, with the reporting and controls public agencies need.",
    outcomes: [
      "Accessible, multichannel resident payments",
      "Secure, auditable, and transparent",
      "Reporting built for public accountability",
    ],
  },
  {
    slug: "utilities-telecom",
    name: "Utilities & Telecom",
    icon: Zap,
    headline: "Keep customers current and connected.",
    summary:
      "Automated reminders, easy plans, and one-tap payments reduce involuntary churn and keep recurring revenue flowing.",
    outcomes: [
      "Fewer disconnections and rejoins",
      "Automated reminders and easy plans",
      "Steadier recurring revenue",
    ],
  },
  {
    slug: "property-management",
    name: "Property Management",
    icon: Home,
    headline: "Make rent and balances easy to pay.",
    summary:
      "Collect rent, deposits, and past-due balances with recurring payments, text links, and a portal residents can use from anywhere.",
    outcomes: [
      "On-time rent with recurring payments",
      "Text-to-pay for past-due balances",
      "One portal for residents and staff",
    ],
  },
  {
    slug: "ecommerce-finance",
    name: "Consumer Finance & eCommerce",
    icon: ShoppingCart,
    headline: "Take every payment, lose none to friction.",
    summary:
      "Support cards, ACH, wallets, and pay-over-time with intelligent routing and fraud controls, so checkout never gets in the way of revenue.",
    outcomes: [
      "Every major payment method supported",
      "Intelligent routing and fraud controls",
      "Higher checkout completion",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Trust / capability stats (capabilities, not outcome claims)        */
/* ------------------------------------------------------------------ */

export const trustStats: { value: string; label: string }[] = [
  { value: "PCI L1", label: "Level 1 certified infrastructure" },
  { value: "120+", label: "Pre-built integrations" },
  { value: "50", label: "States supported" },
  { value: "99.9%", label: "Uptime target" },
];

/* ------------------------------------------------------------------ */
/*  The plan — StoryBrand 3-step                                       */
/* ------------------------------------------------------------------ */

export const planSteps: { step: string; title: string; body: string; icon: LucideIcon }[] = [
  {
    step: "01",
    title: "Connect",
    body: "We integrate with your collection software, CRM, and bank in days — not quarters. Your data flows in without rekeying.",
    icon: Plug,
  },
  {
    step: "02",
    title: "Configure",
    body: "Brand your portal, set your plan and settlement rules, and turn on the channels you want. You stay in control of every guardrail.",
    icon: CalendarSync,
  },
  {
    step: "03",
    title: "Get paid",
    body: "Consumers pay the way they prefer — portal, text, phone, or plan — and you watch completion rates climb in real time.",
    icon: ChartNoAxesCombined,
  },
];
