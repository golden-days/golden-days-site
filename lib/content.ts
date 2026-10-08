import { en, type Content } from "@/content/en";
import { ru } from "@/content/ru";
import { uk } from "@/content/uk";
import { zh } from "@/content/zh";
import { es } from "@/content/es";
import { vi } from "@/content/vi";
import { tl } from "@/content/tl";
import type { Locale } from "@/lib/i18n";

const contentByLocale: Record<Locale, Content> = { en, ru, uk, zh, es, vi, tl };

/** The text for one language. Works anywhere, because the language is passed in. */
export function contentFor(locale: Locale): Content {
  return contentByLocale[locale];
}
