import LocaleLink from "./LocaleLink";
import { getContent } from "@/lib/content-server";

export default async function SiteFooter() {
  const t = await getContent();
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-navy-dark text-white">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl font-bold text-white">{t.footer.aboutHeading}</h2>
          <p className="mt-3 text-lg">{t.footer.aboutText}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-white">{t.footer.contactHeading}</h2>
          <address className="mt-3 text-lg not-italic">
            {t.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-2 block">
              <a
                href={t.contact.phoneHref}
                className="inline-flex min-h-12 min-w-12 items-center font-semibold text-white underline decoration-2 underline-offset-4"
              >
                {t.contact.phoneDisplay}
              </a>
            </span>
            <span className="block">
              <a
                href={t.contact.emailHref}
                className="inline-flex min-h-12 min-w-12 items-center break-words text-white underline decoration-2 underline-offset-4"
              >
                {t.contact.email}
              </a>
            </span>
          </address>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-white">{t.footer.hoursHeading}</h2>
          <p className="mt-3 text-lg">{t.contact.hours}</p>
          <p className="text-lg">{t.contact.programHours}</p>
          <p className="mt-2 text-lg">{t.contact.hoursNote}</p>
        </div>
      </div>

      <div className="border-t border-white/30">
        <ul className="mx-auto flex w-full max-w-5xl list-none flex-col gap-2 px-4 py-6 text-lg sm:px-6 md:flex-row md:flex-wrap md:gap-x-8">
          {t.nav.links.map((link) => (
            <li key={link.href}>
              <LocaleLink
                href={link.href}
                className="inline-flex min-h-12 min-w-12 items-center text-white underline decoration-2 underline-offset-4"
              >
                {link.label}
              </LocaleLink>
            </li>
          ))}
          <li>
            <LocaleLink
              href="/privacy"
              className="inline-flex min-h-12 min-w-12 items-center text-white underline decoration-2 underline-offset-4"
            >
              {t.footer.privacyLabel}
            </LocaleLink>
          </li>
          <li>
            <LocaleLink
              href="/enrollment#faq"
              className="inline-flex min-h-12 min-w-12 items-center text-white underline decoration-2 underline-offset-4"
            >
              {t.enrollment.faq.heading}
            </LocaleLink>
          </li>
        </ul>
      </div>

      <div className="border-t border-white/30">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-lg sm:px-6">
          <p>
            &copy; {year} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
