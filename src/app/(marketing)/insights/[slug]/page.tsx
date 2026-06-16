import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { articles, getArticle, type Block } from "@/content/insights";

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
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
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
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-crimson-600" />
              <span className="text-[1.05rem] leading-[1.7] text-ink-600">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-4 border-crimson-600 bg-mist py-4 pl-6 pr-4">
          <p className="font-display text-xl font-medium italic leading-relaxed text-ink-800">
            “{block.text}”
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

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
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
                <span className="font-medium text-ink-600">
                  {article.author}
                </span>
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
              {article.body.map((block, i) => (
                <BlockRenderer key={i} block={block} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 p-8 text-white">
              <h3 className="font-display text-xl font-bold">
                See Hyventur in action
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-300">
                Give consumers a payment experience they&apos;ll actually finish
                — and give your team the clarity to see it working.
              </p>
              <div className="mt-5">
                <Button href="/contact">
                  Get a demo
                  <ArrowRight />
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
