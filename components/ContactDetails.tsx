import { en } from "@/content/en";

/** Address, hours, phone, and email, shown the same way on every page. */
export default function ContactDetails() {
  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      <div>
        <dt className="font-serif text-lg font-bold text-navy">{en.contact.addressLabel}</dt>
        <dd className="mt-1">
          <address className="not-italic">
            {en.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </dd>
      </div>

      <div>
        <dt className="font-serif text-lg font-bold text-navy">{en.contact.hoursLabel}</dt>
        <dd className="mt-1">
          {en.contact.hours}
          <span className="block">{en.contact.programHours}</span>
          <span className="block">{en.contact.hoursNote}</span>
        </dd>
      </div>

      <div>
        <dt className="font-serif text-lg font-bold text-navy">{en.contact.phoneLabel}</dt>
        <dd className="mt-1">
          <a
            href={en.contact.phoneHref}
            className="inline-flex min-h-12 min-w-12 items-center font-semibold text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {en.contact.phoneDisplay}
          </a>
        </dd>
      </div>

      <div>
        <dt className="font-serif text-lg font-bold text-navy">{en.contact.emailLabel}</dt>
        <dd className="mt-1">
          <a
            href={en.contact.emailHref}
            className="inline-flex min-h-12 min-w-12 items-center break-words text-navy underline decoration-2 underline-offset-4 hover:text-navy-dark"
          >
            {en.contact.email}
          </a>
        </dd>
      </div>
    </dl>
  );
}
