"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeInfo, locales, localizeHref, splitLocalePath } from "@/lib/i18n";
import { useLang, useT } from "./LocaleProvider";

/**
 * A strip at the very top of every page with one link per language. Each link
 * opens the same page in that language, and the names are written in their own
 * language so people can find theirs.
 */
export default function LanguageBar() {
  const pathname = usePathname();
  const lang = useLang();
  const t = useT();
  const { path } = splitLocalePath(pathname);

  return (
    <nav aria-label={t.language.label} className="border-b-2 border-gold bg-cream">
      <ul className="mx-auto flex w-full max-w-7xl list-none flex-wrap items-center justify-center gap-x-1 px-4 sm:justify-end sm:px-6">
        <li aria-hidden="true" className="flex items-center pr-1 text-navy">
          <GlobeIcon />
        </li>
        {locales.map((code) => {
          const isCurrent = code === lang;
          return (
            <li key={code}>
              <Link
                href={localizeHref(path, code)}
                lang={localeInfo[code].htmlLang}
                hrefLang={localeInfo[code].htmlLang}
                aria-current={isCurrent ? "true" : undefined}
                className={`inline-flex min-h-12 min-w-12 items-center justify-center px-2.5 text-lg font-semibold text-navy hover:text-navy-dark ${
                  isCurrent
                    ? "underline decoration-gold-deep decoration-4 underline-offset-4"
                    : "underline decoration-2 underline-offset-4"
                }`}
              >
                {localeInfo[code].label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
    </svg>
  );
}
