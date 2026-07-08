import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import {
  articles,
  getArticle,
  relatedArticles,
  type Block,
} from "@/content/insights";
import { brand } from "@/content/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  const description = article.metaDescription ?? article.excerpt;
  return {
    title: article.title,
    description,
    keywords: article.keywords,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      title: article.title,
      description,
      type: "article",
      url: `https://${brand.domain}/insights/${article.slug}`,
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/* ---- inline [[slug|label]] cross-link parser ---- */
function renderRichText(text: string) {
  const parts: React.ReactNode[] = [];
  const re = /\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, slug, label] = m;
    parts.push(
      <Link
        key={`lnk-${i++}`}
        href={`/insights/${slug}`}
        className="font-medium text-crimson-600 underline decoration-crimson-200 underline-offset-2 transition-colors hover:text-crimson-700 hover:decoration-crimson-500"
      >
        {label}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-ink-900">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-5 text-[1.05rem] leading-[1.75] text-ink-600">
          {renderRichText(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-crimson-600" />
              <span className="text-[1.05rem] leading-[1.7] text-ink-600">
                {renderRichText(item)}
              </span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-4 border-crimson-600 bg-mist py-4 pl-6 pr-4">
          <p className="font-display text-xl font-medium italic leading-relaxed text-ink-800">
            &ldquo;{block.text}&rdquo;
          </p>
        </blockquote>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = relatedArticles(article, 3);
  const midpoint = Math.ceil(article.body.length / 2);
  const firstHalf = article.body.slice(0, midpoint);
  const secondHalf = article.body.slice(midpoint);

  // JSON-LD: Article + optional FAQPage
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription ?? article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: brand.name },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: `https://${brand.domain}`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://${brand.domain}/insights/${article.slug}`,
    },
    keywords: article.keywords?.join(", "),
  };

  const faqSchema =
    article.faq && article.faq.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="bg-white">
        {/* Header */}
        <header className="border-b border-ink-100 bg-mist">
          <div className="container-page py-14">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-ink-500 transition-colors hover:text-crimson-600"
            >
              <ArrowLeft className="size-4" />
              All insights
            </Link>
            <div className="mt-6 max-w-3xl">
              <span className="text-[0.8rem] font-semibold uppercase tracking-wide text-crimson-600">
                {article.category}
              </span>
              <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                {article.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-[0.85rem] text-ink-400">
                <span className="font-medium text-ink-600">{article.author}</span>
                <span>{formatDate(article.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="size-3.5" />
                  {article.readingMinutes} min read
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-ink-900 to-ink-800">
          <Image
            src="/images/about/featured.png"
            alt={article.title}
            fill
            className="object-cover opacity-60"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Body */}
        <div className="container-page py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-medium leading-relaxed text-ink-700">
              {article.excerpt}
            </p>

            <div className="mt-2">
              {firstHalf.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>

            {/* Mid-article booking CTA */}
            <div className="my-10 flex flex-col gap-4 rounded-2xl border border-crimson-100 bg-crimson-50 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-crimson-600 text-white">
                  <CalendarCheck className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-ink-900">
                    See how this works for your operation
                  </p>
                  <p className="mt-0.5 text-[0.9rem] text-ink-600">
                    Book a 20-minute strategy call with a Hyventur specialist.
                  </p>
                </div>
              </div>
              <Button href="/contact" className="shrink-0">
                Book a call
                <ArrowRight />
              </Button>
            </div>

            <div>
              {secondHalf.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>

            {/* FAQ */}
            {article.faq && article.faq.length > 0 && (
              <div className="mt-14">
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
                  Frequently asked questions
                </h2>
                <div className="mt-6 divide-y divide-ink-100 rounded-2xl border border-ink-100">
                  {article.faq.map((f, i) => (
                    <div key={i} className="p-5">
                      <p className="font-semibold text-ink-900">{f.q}</p>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-600">
                        {f.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* End CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-white">
              <h3 className="font-display text-xl font-bold">
                Ready to recover more, with less friction?
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-300">
                Give consumers a payment experience they&apos;ll actually finish
                — and give your team the clarity to see it working. Talk to a
                Hyventur specialist about your receivables operation.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href="/contact">
                  Book a strategy call
                  <ArrowRight />
                </Button>
                <Button
                  href="/platform"
                  variant="ghost"
                  className="text-white hover:bg-white/10 hover:text-white"
                >
                  Explore the platform
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="border-t border-ink-100 bg-mist py-14">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink-900">
            Keep reading
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-crimson-200 hover:shadow-md"
                >
                  <span className="text-[0.74rem] font-semibold uppercase tracking-wide text-crimson-600">
                    {a.category}
                  </span>
                  <h3 className="mt-2.5 text-[1rem] font-bold leading-snug text-ink-900">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-crimson-600">
                    Read
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
