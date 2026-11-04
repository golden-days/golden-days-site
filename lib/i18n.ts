/**
 * Languages the site is available in. Safe to import from server and client code.
 *
 * English is the default and has no prefix in the address (`/about`). Every other
 * language lives under its own prefix (`/ru/about`).
 */
// Ukrainian, Spanish, Vietnamese and Tagalog (`content/uk.ts`, `es.ts`, `vi.ts`, `tl.ts`)
// are written but switched off, because no one answers the phone in those languages
// (Spanish, Vietnamese and Tagalog switched off Nov 2026). To turn one back on, add it
// here, add its `localeInfo` entry, import it in `lib/content.ts`, add it to
// `otherLocales` in `proxy.ts`, and remove it from `retiredLocales` there.
export const locales = ["en", "ru", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** How each language is named in the switcher (always in its own language). */
export const localeInfo: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  en: { label: "English", htmlLang: "en", ogLocale: "en_US" },
  ru: { label: "Русский", htmlLang: "ru", ogLocale: "ru_RU" },
  zh: { label: "中文", htmlLang: "zh-Hant", ogLocale: "zh_TW" },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Turns a site link such as "/about" or "/contact#tour" into the link for one language. */
export function localizeHref(href: string, lang: Locale): string {
  if (lang === defaultLocale || !href.startsWith("/") || href.startsWith("//")) return href;
  if (href === "/") return `/${lang}`;
  if (href.startsWith("/#")) return `/${lang}${href.slice(1)}`;
  return `/${lang}${href}`;
}

/** Splits "/ru/about" into the language and the page path ("/about"). */
export function splitLocalePath(pathname: string): { lang: Locale; path: string } {
  const [, first = "", ...rest] = pathname.split("/");
  if (hasLocale(first)) return { lang: first, path: `/${rest.join("/")}` };
  return { lang: defaultLocale, path: pathname || "/" };
}
