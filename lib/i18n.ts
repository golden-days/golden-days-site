/**
 * Languages the site is available in. Safe to import from server and client code.
 *
 * English is the default and has no prefix in the address (`/about`). Every other
 * language lives under its own prefix (`/ru/about`).
 */
export const locales = ["en", "ru", "uk", "zh", "es", "vi", "pa", "tl", "hmn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** How each language is named in the switcher (always in its own language). */
export const localeInfo: Record<Locale, { label: string; htmlLang: string; ogLocale: string }> = {
  en: { label: "English", htmlLang: "en", ogLocale: "en_US" },
  ru: { label: "Русский", htmlLang: "ru", ogLocale: "ru_RU" },
  uk: { label: "Українська", htmlLang: "uk", ogLocale: "uk_UA" },
  zh: { label: "中文", htmlLang: "zh-Hant", ogLocale: "zh_TW" },
  es: { label: "Español", htmlLang: "es", ogLocale: "es_US" },
  vi: { label: "Tiếng Việt", htmlLang: "vi", ogLocale: "vi_VN" },
  pa: { label: "ਪੰਜਾਬੀ", htmlLang: "pa", ogLocale: "pa_IN" },
  tl: { label: "Tagalog", htmlLang: "tl", ogLocale: "tl_PH" },
  hmn: { label: "Hmoob", htmlLang: "hmn", ogLocale: "hmn_HM" },
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
