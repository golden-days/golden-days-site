import type { Metadata } from "next";
import { en } from "@/content/en";

/** Set NEXT_PUBLIC_SITE_URL once the real domain is known. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.com";

/**
 * Builds the title, description, and social tags for one page.
 *
 * `robots: "noindex"` keeps the draft site out of search results. Remove it
 * here, in this one place, when the site is ready to launch.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = path === "/" ? `${en.site.name} | ${title}` : `${title} | ${en.site.name}`;

  return {
    title,
    description,
    robots: "noindex",
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: en.site.name,
      title: fullTitle,
      description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: en.site.logoAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}
