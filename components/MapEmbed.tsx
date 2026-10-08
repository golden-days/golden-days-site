import DirectionsLink from "@/components/DirectionsLink";
import { getContent, getLocale } from "@/lib/content-server";

export default async function MapEmbed() {
  const t = await getContent();
  const lang = await getLocale();
  const mapQuery = encodeURIComponent(t.contact.addressLines.join(", "));

  return (
    <div>
      <div className="overflow-hidden rounded-xl border-4 border-gold-deep">
        <iframe
          title={t.contact.mapTitle}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed&hl=${lang}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-80 w-full border-0"
        />
      </div>
      <p className="mt-3">
        <DirectionsLink />
      </p>
    </div>
  );
}
