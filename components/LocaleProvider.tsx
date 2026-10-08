"use client";

import { createContext, useContext } from "react";
import type { Content } from "@/content/en";
import type { Locale } from "@/lib/i18n";

/** The slice of the text that interactive (client) components need. */
export type ClientContent = Pick<
  Content,
  "site" | "nav" | "contact" | "buttons" | "form" | "qualify" | "language"
>;

const LocaleContext = createContext<{ lang: Locale; t: ClientContent } | null>(null);

export function LocaleProvider({
  lang,
  t,
  children,
}: {
  lang: Locale;
  t: ClientContent;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ lang, t }}>{children}</LocaleContext.Provider>;
}

function useLocaleContext() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("LocaleProvider is missing from the page layout.");
  return value;
}

/** The language of the current page. */
export function useLang(): Locale {
  return useLocaleContext().lang;
}

/** The text for the current page's language. */
export function useT(): ClientContent {
  return useLocaleContext().t;
}
