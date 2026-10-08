import { getContent, getLocale } from "@/lib/content-server";
import { localizeHref } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

/** Structured data so search engines can read the basic business details. */
export default async function LocalBusinessJsonLd() {
  const t = await getContent();
  const lang = await getLocale();

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: t.site.name,
    description: t.home.meta.description,
    url: `${siteUrl}${localizeHref("/", lang)}`,
    inLanguage: lang,
    telephone: "+1-916-371-6011",
    email: t.contact.email,
    image: `${siteUrl}/logo.png`,
    logo: `${siteUrl}/logo.png`,
    foundingDate: "2003",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1215 Merkley Ave",
      addressLocality: "West Sacramento",
      addressRegion: "CA",
      postalCode: "95691",
      addressCountry: "US",
    },
    areaServed: "West Sacramento, CA",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
