/**
 * Integration catalog. `logo` is a filename in /public/integrations when we
 * have a real brand mark; otherwise the UI renders a branded monogram tile.
 * Researched against the collections / ARM + payments ecosystem and the
 * systems large payment processors and agencies actually run on.
 */

export type Integration = {
  name: string;
  logo?: string;
  blurb?: string;
};

export type IntegrationCategory = {
  slug: string;
  name: string;
  description: string;
  items: Integration[];
};

export const integrationCategories: IntegrationCategory[] = [
  {
    slug: "collections-arm",
    name: "Collections & ARM Platforms",
    description:
      "Sync placements, balances, and payment results with the collection systems your agency already runs.",
    items: [
      { name: "Finvi (Ontario Systems)", blurb: "Artiva & Katabat" },
      { name: "Latitude by Genesys" },
      { name: "Quantrax RMEx" },
      { name: "DAKCS Beyond ARM" },
      { name: "InterProse ACE" },
      { name: "C&R Software Debt Manager" },
      { name: "CollectMax" },
      { name: "Simplicity Collection Software" },
    ],
  },
  {
    slug: "crm-sales",
    name: "CRM & Sales",
    description:
      "Keep customer records, activity, and payment status in lockstep with your CRM.",
    items: [
      { name: "Salesforce", logo: "salesforce.svg" },
      { name: "HubSpot", logo: "hubspot.svg" },
      { name: "Microsoft Dynamics 365", logo: "microsoft.png" },
      { name: "Zoho CRM", logo: "zoho.svg" },
      { name: "Pipedrive" },
      { name: "SugarCRM" },
      { name: "Intercom", logo: "intercom.svg" },
    ],
  },
  {
    slug: "accounting-erp",
    name: "Accounting & ERP",
    description:
      "Reconcile every payment and deposit straight into your books and ERP.",
    items: [
      { name: "QuickBooks", logo: "quickbooks.png" },
      { name: "NetSuite", logo: "netsuite.png" },
      { name: "Sage Intacct", logo: "sage.svg" },
      { name: "Xero", logo: "xero.svg" },
      { name: "SAP", logo: "sap.svg" },
    ],
  },
  {
    slug: "payments-banking",
    name: "Payments & Banking",
    description:
      "Process and verify across the rails and networks that move the money.",
    items: [
      { name: "Stripe", logo: "stripe.svg" },
      { name: "Plaid" },
      { name: "Visa", logo: "visa.svg" },
      { name: "Mastercard", logo: "mastercard.svg" },
      { name: "American Express", logo: "americanexpress.svg" },
      { name: "Discover", logo: "discover.svg" },
      { name: "Fiserv" },
      { name: "FIS" },
      { name: "Nacha ACH Network" },
    ],
  },
  {
    slug: "communications",
    name: "Communications & Contact Center",
    description:
      "Power omnichannel outreach across text, email, voice, and the contact center.",
    items: [
      { name: "Twilio", logo: "twilio.svg" },
      { name: "SendGrid", logo: "sendgrid.svg" },
      { name: "Mailchimp", logo: "mailchimp.svg" },
      { name: "Five9" },
      { name: "Genesys Cloud" },
      { name: "RingCentral" },
    ],
  },
  {
    slug: "identity-compliance",
    name: "Identity, Data & Compliance",
    description:
      "Verify identity, enrich data, and keep a clean, compliant audit trail.",
    items: [
      { name: "Experian" },
      { name: "TransUnion" },
      { name: "Equifax" },
      { name: "LexisNexis" },
      { name: "Okta", logo: "okta.svg" },
      { name: "DocuSign", logo: "docusign.png" },
    ],
  },
  {
    slug: "productivity",
    name: "Productivity & Storage",
    description:
      "Connect the everyday tools your team already works in.",
    items: [
      { name: "Slack", logo: "slack.svg" },
      { name: "Microsoft Teams", logo: "microsoft.png" },
      { name: "Google Workspace", logo: "googlecloud.svg" },
      { name: "Zapier", logo: "zapier.svg" },
      { name: "Box", logo: "box.png" },
    ],
  },
];

export const allIntegrations = integrationCategories.flatMap((c) =>
  c.items.map((i) => ({ ...i, category: c.name, categorySlug: c.slug })),
);

export const integrationCount = allIntegrations.length;
