import { en } from "@/content/en";
import { siteUrl } from "@/lib/seo";

const stripMarker = (value: string) => value.replace(/ \[PLACEHOLDER\]/g, "");

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: en.site.name,
  description: stripMarker(en.home.meta.description),
  url: siteUrl,
  telephone: "+1-916-371-6011",
  email: "info@example.com",
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

/** Structured data so search engines can read the basic business details. */
export default function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
