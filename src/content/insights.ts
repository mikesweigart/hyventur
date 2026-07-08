import generated from "./insights-generated.json";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type FAQItem = { q: string; a: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string; // ISO
  readingMinutes: number;
  author: string;
  body: Block[];
  keywords?: string[];
  metaDescription?: string;
  faq?: FAQItem[];
  related?: string[];
};

const CTA: Block = {
  type: "p",
  text: "Hyventur was built to make this the easy part. If you're ready to give consumers a payment experience they'll actually finish — and give your team the clarity to see it working — book a demo and we'll walk you through it.",
};

const existingArticles: Article[] = [
  {
    slug: "why-consumers-abandon-your-payment-portal",
    title: "Why Consumers Abandon Your Payment Portal — and How to Win Them Back",
    category: "Consumer Experience",
    excerpt:
      "A consumer who wants to pay you is the easiest dollar you'll ever recover. So why do so many give up at checkout? Here's where portals lose people, and how to stop it.",
    date: "2026-05-28",
    readingMinutes: 6,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "Here's a frustrating truth about collections: the consumer who lands on your payment page is already on your side. They opened the message. They clicked the link. They intend to pay. And then, far too often, they leave — not because they changed their mind, but because the experience got in the way.",
      },
      {
        type: "p",
        text: "Every abandoned session is a recovery you had in hand and let slip. The good news is that abandonment is rarely about willingness. It's about friction. And friction is fixable.",
      },
      { type: "h2", text: "Where portals lose people" },
      {
        type: "ul",
        items: [
          "A login wall before anyone can see their balance",
          "A layout that breaks or zooms awkwardly on a phone",
          "Too many fields, asking for information the consumer doesn't have on hand",
          "No payment plan option, so a consumer who can't pay in full simply leaves",
          "A design that looks dated or insecure enough to make people hesitate",
        ],
      },
      {
        type: "p",
        text: "Each of these is a small ask. Stacked together, they add up to a checkout most people won't finish — especially on a phone, where the majority of payments now happen.",
      },
      { type: "h2", text: "What a portal people finish looks like" },
      {
        type: "p",
        text: "The highest-completing portals share a few traits. They open straight to the balance, no login gymnastics required. They're built mobile-first, because that's where consumers are. They offer a plan in the same breath as the full balance, so 'I can't pay all of it' becomes 'I can pay some of it today.' And they look modern and secure, because trust is part of the transaction.",
      },
      {
        type: "quote",
        text: "Reducing payment friction isn't a design nicety. It's one of the most direct levers you have on recovery.",
      },
      {
        type: "p",
        text: "When you remove the steps that don't need to be there, you don't just improve a metric — you change the outcome for a consumer who wanted to resolve their account and now actually can.",
      },
      CTA,
    ],
  },
  {
    slug: "reg-f-digital-collections-rules",
    title: "Reg F and the New Rules of Digital Collections",
    category: "Compliance",
    excerpt:
      "Regulation F changed how and when you can reach consumers digitally. Here's a plain-English look at what it means for your payment and outreach flows.",
    date: "2026-05-14",
    readingMinutes: 7,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "Regulation F, the CFPB's rule implementing the Fair Debt Collection Practices Act, brought debt collection firmly into the digital era — and set clear expectations for how you use email, text, and other electronic channels. For agencies that get it right, it's an opportunity. For those who treat compliance as an afterthought, it's a risk.",
      },
      {
        type: "p",
        text: "This isn't legal advice, and your counsel should always have the final word. But understanding the shape of the rules helps you build outreach and payment flows that are compliant by design rather than by patch.",
      },
      { type: "h2", text: "The themes that matter for payments" },
      {
        type: "ul",
        items: [
          "Consumers must have a clear, working way to opt out of a given channel",
          "Electronic communications need reasonable procedures around timing and frequency",
          "Required disclosures must travel with the communication, not live somewhere else",
          "Every touch should be documented in a way you can produce later",
        ],
      },
      {
        type: "p",
        text: "Notice how each of these is as much an operational question as a legal one. Can your text platform honor an opt-out instantly? Do your payment pages carry the right disclosures automatically? Can you produce a complete history of what a consumer was sent and when?",
      },
      { type: "h2", text: "Compliance as a feature, not a tax" },
      {
        type: "p",
        text: "The agencies that thrive under Reg F are the ones who stopped treating compliance as a brake on outreach and started treating it as a built-in property of their tools. When disclosures, opt-outs, and audit trails are handled by the platform, your team is free to focus on recovery — and your compliance officer sleeps better.",
      },
      {
        type: "quote",
        text: "The safest compliance posture is the one your team doesn't have to think about, because the system handles it every time.",
      },
      CTA,
    ],
  },
  {
    slug: "text2pay-highest-converting-channel",
    title: "Text2Pay: Why SMS Has Become the Highest-Converting Channel in Collections",
    category: "Channels",
    excerpt:
      "People ignore calls and skim email. But a text gets read in minutes. Here's why a compliant payment link by SMS is the most direct path from contact to payment.",
    date: "2026-04-30",
    readingMinutes: 5,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "Think about your own phone. A call from an unknown number goes to voicemail. An email waits until later, then gets buried. But a text? You read it almost immediately. Your consumers are no different — and that simple behavioral fact is reshaping how the best collection operations reach people.",
      },
      { type: "h2", text: "Why the link matters as much as the channel" },
      {
        type: "p",
        text: "A text that just says 'please call us' still puts the burden back on the consumer. The breakthrough is the payment link: a compliant, opt-in SMS that opens straight to a checkout pre-filled with the consumer's balance and plan options. No login. No phone tree. Two taps and it's done.",
      },
      {
        type: "ul",
        items: [
          "Opens directly to a balance the consumer recognizes",
          "Offers a plan right next to the full amount",
          "Requires no account creation or password",
          "Works the moment the message is read — often within minutes",
        ],
      },
      { type: "h2", text: "Done right, it's a relationship — not a blast" },
      {
        type: "p",
        text: "SMS only works when it respects the consumer. That means clear opt-in, honored opt-outs, sensible timing, and personalization that feels like a service rather than a chase. Get that balance right and Text2Pay becomes the single most efficient way to turn a moment of attention into a completed payment.",
      },
      {
        type: "quote",
        text: "The best channel is the one your consumer already has open. For most of them, that's their messages.",
      },
      CTA,
    ],
  },
  {
    slug: "real-cost-of-clunky-payment-experience",
    title: "The Real Cost of a Clunky Payment Experience",
    category: "Strategy",
    excerpt:
      "A dated portal doesn't just look bad. It quietly drains recovery, burns agent hours, and pushes consumers away. Here's how to count what it's costing you.",
    date: "2026-04-16",
    readingMinutes: 6,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "It's easy to tolerate a clunky payment system. It still works, mostly. Payments still come in, mostly. But 'mostly' has a price, and it's larger than most operations realize — because the cost shows up as things that don't happen rather than things that do.",
      },
      { type: "h2", text: "The hidden line items" },
      {
        type: "ul",
        items: [
          "Recoveries lost to abandoned checkouts you never see",
          "Agent hours spent keying in payments a portal could have taken",
          "Plans that break because there's no smart retry or card updater",
          "Consumers who won't return after one frustrating attempt",
          "Clients who churn because the reporting never told a clear story",
        ],
      },
      {
        type: "p",
        text: "None of these show up as a single alarming number. They leak out a little at a time, which is exactly why they're so easy to ignore — and so expensive to keep.",
      },
      { type: "h2", text: "What changes when you fix it" },
      {
        type: "p",
        text: "Replace friction with a clean, modern experience and the same volume of accounts produces more completed payments, fewer agent hours per dollar, and plans that actually stay on track. The work didn't get harder. The tools just stopped fighting you.",
      },
      {
        type: "quote",
        text: "You rarely notice the cost of a bad payment experience as a bill. You notice it as a ceiling on what your operation can do.",
      },
      CTA,
    ],
  },
  {
    slug: "self-service-settlements",
    title: "Self-Service Settlements: Resolving Accounts on the Consumer's Terms",
    category: "Recovery",
    excerpt:
      "Not every account closes with a phone call. Self-service settlement lets consumers resolve what they owe inside your rules — often at the moment they're ready.",
    date: "2026-04-02",
    readingMinutes: 6,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "Many consumers want to resolve a debt but never pick up the phone to negotiate. The conversation feels intimidating, the hours don't line up, or they'd simply rather handle it themselves. Self-service settlement meets them exactly there.",
      },
      { type: "h2", text: "How guided settlement works" },
      {
        type: "p",
        text: "Instead of an agent on the line, the consumer sees pre-approved options — a settlement amount, a payment plan, or a combination — presented within guardrails you define. They explore, they choose, and the account closes, all without anyone manually working the file.",
      },
      {
        type: "ul",
        items: [
          "You set the offer matrix and the floors you'll accept",
          "Consumers negotiate within your rules, at their own pace",
          "Counter-offer logic handles the back-and-forth automatically",
          "Every offer and acceptance is logged for compliance",
        ],
      },
      { type: "h2", text: "Why it lifts recovery" },
      {
        type: "p",
        text: "Self-service settlement captures the consumer in the window when they're ready to act — which is often outside business hours and rarely on a call. It also frees your agents to spend their time where a human conversation genuinely changes the outcome.",
      },
      {
        type: "quote",
        text: "The account you close at 11pm on a Sunday is one no agent had to chase on Monday.",
      },
      CTA,
    ],
  },
  {
    slug: "pci-compliance-plain-english",
    title: "PCI Compliance for Collection Agencies: A Plain-English Guide",
    category: "Compliance",
    excerpt:
      "PCI DSS sounds intimidating, but the core idea is simple: keep card data out of harm's way. Here's what it means for an agency — and how the right platform shrinks the burden.",
    date: "2026-03-19",
    readingMinutes: 7,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "PCI DSS — the Payment Card Industry Data Security Standard — governs how any business that touches card data must protect it. For a collection agency taking payments across portal, phone, and text, that obligation is real. But the underlying principle is refreshingly simple: the less card data you touch, the less you have to protect.",
      },
      { type: "h2", text: "The concept that makes it manageable" },
      {
        type: "p",
        text: "The single most useful idea in PCI is 'scope reduction.' Every place card data flows through your people, systems, and call recordings is 'in scope' and must be secured. Tokenization and a properly designed payment platform let you handle payments without that data ever landing in your environment — dramatically shrinking what you have to defend and document.",
      },
      {
        type: "ul",
        items: [
          "Tokenization replaces card numbers with meaningless stand-ins",
          "IVR and secure agent flows keep card data out of call recordings",
          "A Level 1 platform handles the heaviest controls on your behalf",
          "Less scope means a simpler, cheaper annual assessment",
        ],
      },
      { type: "h2", text: "What to look for in a partner" },
      {
        type: "p",
        text: "When you evaluate a payment platform, ask where card data actually lives, whether it's tokenized, how phone payments avoid capturing card numbers in recordings, and what level of PCI certification the provider carries. The right answers turn a daunting obligation into a quiet, well-handled default.",
      },
      {
        type: "quote",
        text: "The best way to protect card data is to never hold it in the first place.",
      },
      CTA,
    ],
  },
  {
    slug: "payment-plans-people-keep",
    title: "Building Payment Plans That People Actually Keep",
    category: "Recovery",
    excerpt:
      "A payment plan is a promise. Too many break in the first 60 days. Here's how to design plans — and the technology behind them — so consumers stay on track.",
    date: "2026-03-05",
    readingMinutes: 5,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "Setting up a payment plan feels like a win. The consumer agreed, the first payment cleared, the account is on a path. Then the second payment fails, the third never comes, and you're back where you started — except now you've spent effort getting nowhere. Broken plans are one of the quietest drains on recovery there is.",
      },
      { type: "h2", text: "Why plans break" },
      {
        type: "ul",
        items: [
          "A card expires and nothing updates it",
          "A single failed charge isn't retried, so the plan just stops",
          "The schedule didn't fit the consumer's real cash flow",
          "There was no easy way to adjust the plan when life changed",
        ],
      },
      { type: "h2", text: "Designing for follow-through" },
      {
        type: "p",
        text: "Plans that hold share a pattern. They start with a realistic schedule the consumer chose. They lean on a card account updater so an expired card doesn't end the relationship. They retry failed payments intelligently rather than giving up. And they let consumers adjust the plan themselves instead of forcing a call that may never happen.",
      },
      {
        type: "p",
        text: "Most of this is invisible to the consumer — which is the point. The technology quietly does the work of keeping a promise on track, so a missed card doesn't become a missed recovery.",
      },
      {
        type: "quote",
        text: "A plan isn't successful when it's signed. It's successful when the last payment clears.",
      },
      CTA,
    ],
  },
  {
    slug: "omnichannel-collections",
    title: "Omnichannel Collections: Meeting Consumers Where They Already Are",
    category: "Strategy",
    excerpt:
      "No single channel reaches everyone. The operations that recover the most orchestrate phone, text, and email together — and let the consumer choose how to respond.",
    date: "2026-02-19",
    readingMinutes: 6,
    author: "Hyventur Team",
    body: [
      {
        type: "p",
        text: "One consumer always answers a text. Another only checks email at night. A third still prefers a phone call. Treat them all the same and you'll reach some and miss the rest. Omnichannel collections is simply the discipline of meeting each consumer on the channel that works for them — and making it effortless to act once you do.",
      },
      { type: "h2", text: "Coordination beats volume" },
      {
        type: "p",
        text: "Omnichannel isn't about sending more messages. It's about sending the right message on the right channel at the right time, and stopping the moment a consumer responds. A coordinated sequence — a text, then an email, then a call, each aware of the others — outperforms a louder, blunter approach every time.",
      },
      {
        type: "ul",
        items: [
          "Segment accounts by balance, age, and past behavior",
          "Sequence channels so they reinforce rather than repeat",
          "Stop outreach automatically when a consumer pays or responds",
          "Honor channel preferences and opt-outs across the board",
        ],
      },
      { type: "h2", text: "The thread that ties it together" },
      {
        type: "p",
        text: "What makes omnichannel work is a single view of the consumer — one place where every touch, on every channel, is recorded and coordinated. Without that thread, you get noise. With it, you get a conversation that gently, respectfully, leads to a payment.",
      },
      {
        type: "quote",
        text: "Reaching everyone the same way is the surest way to reach no one in particular.",
      },
      CTA,
    ],
  },
];

// 20 SEO/LLM-optimized articles generated into insights-generated.json,
// merged newest-first ahead of the original set.
const generatedArticles = generated as unknown as Article[];

export const articles: Article[] = [...generatedArticles, ...existingArticles];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(article: Article, count = 3): Article[] {
  const bySlug = new Map(articles.map((a) => [a.slug, a]));
  const picked: Article[] = [];
  for (const slug of article.related ?? []) {
    const a = bySlug.get(slug);
    if (a && a.slug !== article.slug) picked.push(a);
  }
  if (picked.length < count) {
    for (const a of articles) {
      if (picked.length >= count) break;
      if (a.slug !== article.slug && !picked.includes(a)) picked.push(a);
    }
  }
  return picked.slice(0, count);
}

export const categories = Array.from(new Set(articles.map((a) => a.category)));
