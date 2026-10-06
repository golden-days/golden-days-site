import Link from "next/link";
import { en } from "@/content/en";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-navy bg-navy-dark text-white">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-serif text-xl font-bold text-white">{en.footer.aboutHeading}</h2>
          <p className="mt-3 text-lg">{en.footer.aboutText}</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-white">{en.footer.contactHeading}</h2>
          <address className="mt-3 text-lg not-italic">
            {en.contact.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="mt-2 block">
              <a
                href={en.contact.phoneHref}
                className="inline-flex min-h-12 min-w-12 items-center font-semibold text-white underline decoration-2 underline-offset-4"
              >
                {en.contact.phoneDisplay}
              </a>
            </span>
            <span className="block">
              <a
                href={en.contact.emailHref}
                className="inline-flex min-h-12 min-w-12 items-center break-words text-white underline decoration-2 underline-offset-4"
              >
                {en.contact.email}
              </a>
            </span>
          </address>
        </div>

        <div>
          <h2 className="font-serif text-xl font-bold text-white">{en.footer.hoursHeading}</h2>
          <p className="mt-3 text-lg">{en.contact.hours}</p>
          <p className="text-lg">{en.contact.programHours}</p>
          <p className="mt-2 text-lg">{en.contact.hoursNote}</p>
        </div>
      </div>

      <div className="border-t border-white/30">
        <ul className="mx-auto flex w-full max-w-5xl list-none flex-col gap-2 px-4 py-6 text-lg sm:px-6 md:flex-row md:flex-wrap md:gap-x-8">
          {en.nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-12 min-w-12 items-center text-white underline decoration-2 underline-offset-4"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-white/30">
        <div className="mx-auto w-full max-w-5xl px-4 py-6 text-lg sm:px-6">
          <p>
            &copy; {year} {en.footer.copyright}
          </p>
          <p className="mt-2 text-white/80">{en.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
