"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { localizeHref } from "@/lib/i18n";
import { useLang } from "./LocaleProvider";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/** A link to another page on this site that keeps the visitor in their language. */
export default function LocaleLink({ href, ...props }: Props) {
  const lang = useLang();
  return <Link href={localizeHref(href, lang)} {...props} />;
}
