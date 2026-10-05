import { en } from "@/content/en";

const mapQuery = encodeURIComponent(
  `${en.contact.addressLines.join(", ").replace(/ \[PLACEHOLDER\]/g, "")}`,
);

export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-xl border-4 border-gold-deep">
      <iframe
        title={en.contact.mapTitle}
        src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-80 w-full border-0"
      />
    </div>
  );
}
