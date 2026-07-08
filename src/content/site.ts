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
  Gauge,
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
    "Hyventur is the compliance-first payment platform for collections teams. Built for modern recovery — not legacy systems — with omnichannel payments, audit-ready workflows, and real-time reporting that works as hard as you do.",
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
    label: "Intelligence",
    items: [
      { label: "Portfolio Risk", href: "portfolio", icon: Gauge },
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
    headline: "Modern platform built for compliant collections.",
    summary:
      "Hyventur gives agencies the omnichannel capabilities (portal, SMS, IVR, phone) and compliance infrastructure (FDCPA/Reg F guidance, audit trails, DNC validation) to streamline operations and improve collections outcomes through better technology.",
    outcomes: [
      "Omnichannel outreach (portal, SMS, IVR, phone, plans)",
      "FDCPA & Reg F compliance built into workflows",
      "Real-time reporting and settlement tracking",
    ],
  },
  {
    slug: "debt-buyers",
    name: "Debt Buyers",
    icon: Banknote,
    headline: "Scale operations with compliance built in.",
    summary:
      "Hyventur enables debt buyers to manage large portfolios through automation (omnichannel outreach, self-service settlement) while maintaining compliance documentation and audit trails that meet regulatory requirements.",
    outcomes: [
      "Automate outreach across portfolios at scale",
      "Self-service settlement within your business rules",
      "Complete audit trail and compliance documentation",
    ],
  },
  {
    slug: "law-firms",
    name: "Collection Law Firms",
    icon: Scale,
    headline: "Modern payment platform for judgment recovery.",
    summary:
      "Hyventur gives law firms the compliance-ready payment infrastructure (multilingual portals, virtual terminals, audit trails) to streamline judgment recovery while maintaining complete documentation for court and regulatory requirements.",
    outcomes: [
      "Multilingual portals and payment processing",
      "Complete audit trail and transaction documentation",
      "Reduces manual payment handling for attorneys",
    ],
  },
  {
    slug: "creditors",
    name: "Creditors & Lenders",
    icon: Building2,
    headline: "Proactive payment options keep accounts current longer.",
    summary:
      "Hyventur enables creditors and lenders to offer flexible payment options (plans, digital portals, omnichannel access) earlier in the delinquency cycle, making it easier for customers to stay current and avoid collections referral.",
    outcomes: [
      "Multiple payment methods and flexible plan options",
      "Digital-first portals reduce customer friction",
      "Better visibility into customer payment capability",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Medical Billing",
    icon: HeartPulse,
    headline: "Modern payments built for patient billing.",
    summary:
      "Hyventur provides healthcare organizations with secure, HIPAA-aware payment portals that accept multiple payment methods (including HSA/FSA), offer flexible plans, and reduce friction in patient billing cycles.",
    outcomes: [
      "HIPAA-compliant secure payment portal",
      "Multiple payment methods including HSA / FSA",
      "Flexible payment plans for patient budgets",
    ],
  },
  {
    slug: "government",
    name: "Government & Municipal",
    icon: Landmark,
    headline: "Secure payments for public agencies.",
    summary:
      "Hyventur enables government and municipal agencies to offer residents secure, accessible payment options (portal, SMS, phone) for taxes, fines, and fees—with SOC 2 certified infrastructure and transparent audit trails.",
    outcomes: [
      "Accessible, multichannel payment options for residents",
      "SOC 2 certified security and transparency",
      "Streamline payment collection and reconciliation",
    ],
  },
  {
    slug: "utilities-telecom",
    name: "Utilities & Telecom",
    icon: Zap,
    headline: "Recurring payments made easy for subscribers.",
    summary:
      "Hyventur provides utilities and telecom companies with automated, convenient payment options that encourage timely payment and reduce involuntary churn—with recurring payment subscriptions and multiple channels.",
    outcomes: [
      "Automated recurring payment options",
      "Multiple payment channels (portal, SMS, IVR, phone)",
      "Reduce collection friction and involuntary churn",
    ],
  },
  {
    slug: "property-management",
    name: "Property Management",
    icon: Home,
    headline: "Modern rent collection and resident payments.",
    summary:
      "Hyventur enables property managers to collect rent, deposits, and past-due balances through convenient digital channels (portal, SMS, phone)—with automated reminders and complete payment documentation.",
    outcomes: [
      "Digital payment options for rent and balances",
      "Automated payment reminders",
      "Complete payment documentation and history",
    ],
  },
  {
    slug: "ecommerce-finance",
    name: "Consumer Finance & eCommerce",
    icon: ShoppingCart,
    headline: "Modern payment infrastructure for fintech.",
    summary:
      "Hyventur provides consumer finance and eCommerce companies with secure, multi-method payment processing (cards, ACH, wallets) backed by SOC 2 and PCI Level 1 infrastructure.",
    outcomes: [
      "Support for cards, ACH, digital wallets, and more",
      "SOC 2 & PCI Level 1 certified security",
      "Fraud prevention and compliance built in",
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
