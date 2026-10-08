import type { Metadata } from "next";
import type { Content } from "@/content/en";
import { contentFor } from "@/lib/content";
import { defaultLocale, hasLocale, localeInfo, localizeHref, locales, type Locale } from "@/lib/i18n";

/** Set NEXT_PUBLIC_SITE_URL once the real domain is known. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";

/** The address of one page in every language, for search engines. */
export function languageAlternates(path: string) {
  const entries = locales.map((code) => [
    localeInfo[code].htmlLang,
    `${siteUrl}${localizeHref(path, code)}`,
  ]);
  return Object.fromEntries([...entries, ["x-default", `${siteUrl}${localizeHref(path, defaultLocale)}`]]);
}

/**
 * Builds the title, description, and social tags for one page in one language.
 *
 * `robots: "noindex"` keeps the draft site out of search results. Remove it
 * here, in this one place, when the site is ready to launch.
 */
export function pageMetadata({
  lang,
  title,
  description,
  path,
}: {
  lang: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const t = contentFor(lang);
  const url = `${siteUrl}${localizeHref(path, lang)}`;
  const fullTitle = path === "/" ? `${t.site.name} | ${title}` : `${title} | ${t.site.name}`;

  return {
    title,
    description,
    robots: "noindex",
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      locale: localeInfo[lang].ogLocale,
      siteName: t.site.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: t.site.logoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

/** Metadata for a page, using the language in the page's address. */
export async function pageMetadataFor(
  params: Promise<{ lang: string }>,
  path: string,
  pick: (t: Content) => { title: string; description: string },
): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { title, description } = pick(contentFor(lang));
  return pageMetadata({ lang, title, description, path });
}
