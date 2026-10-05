import type { MetadataRoute } from "next";
import { en } from "@/content/en";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return en.nav.links.map((link) => ({
    url: `${siteUrl}${link.href === "/" ? "" : link.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
