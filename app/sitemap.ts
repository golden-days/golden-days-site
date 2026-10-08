import type { MetadataRoute } from "next";
import { contentFor } from "@/lib/content";
import { defaultLocale, locales, localizeHref } from "@/lib/i18n";
import { languageAlternates, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Every page, once per language, each pointing to its translations.
  return contentFor(defaultLocale).nav.links.flatMap((link) =>
    locales.map((lang) => ({
      url: `${siteUrl}${localizeHref(link.href, lang)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: link.href === "/" ? 1 : 0.8,
      alternates: { languages: languageAlternates(link.href) },
    })),
  );
}
