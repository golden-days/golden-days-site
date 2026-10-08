import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { contentFor } from "@/lib/content";
import { hasLocale, type Locale } from "@/lib/i18n";

/** The language of the page being rendered. Server components only. */
export async function getLocale(): Promise<Locale> {
  const current = await lang();
  if (!hasLocale(current)) notFound();
  return current;
}

/** The text for the page being rendered. Server components only. */
export async function getContent() {
  return contentFor(await getLocale());
}
