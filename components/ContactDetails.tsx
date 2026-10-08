import { getContent } from "@/lib/content-server";

/** Address, hours, phone, and email, shown the same way on every page. */
export default async function ContactDetails() {
  const t = await getContent();
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      <div>
        <dt className="font-serif text-lg font-bold text-navy">{t.contact.addressLabel}</dt>
        <dd className="mt-1">
          <address className="not-italic">
            {t.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </dd>
      </div>

      <div>
        <dt className="font-serif text-lg font-bold text-navy">{t.contact.hoursLabel}</dt>
        <dd className="mt-1">
          {t.contact.hours}
          <span className="block">{t.contact.programHours}</span>
          <span className="block">{t.contact.hoursNote}</span>
        </dd>
      </div>

      <div>
        <dt className="font-serif text-lg font-bold text-navy">{t.contact.phoneLabel}</dt>
        <dd className="mt-1">
          <a
            href={t.contact.phoneHref}
            className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {t.contact.phoneDisplay}
          </a>
        </dd>
      </div>

      <div>
        <dt className="font-serif text-lg font-bold text-navy">{t.contact.emailLabel}</dt>
        <dd className="mt-1">
          <a
            href={t.contact.emailHref}
            className="inline-flex min-h-12 min-w-12 items-center break-words text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {t.contact.email}
          </a>
        </dd>
      </div>
    </dl>
  );
}
