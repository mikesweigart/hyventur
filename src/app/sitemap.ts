import type { MetadataRoute } from "next";
import { articles } from "@/content/insights";
import { brand } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${brand.domain}`;

  const staticRoutes = [
    "",
    "/platform",
    "/solutions",
    "/integrations",
    "/pricing",
    "/insights",
    "/about",
    "/contact",
    "/overview",
    "/dashboard",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
