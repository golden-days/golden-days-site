"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { splitLocalePath } from "@/lib/i18n";
import LocaleLink from "./LocaleLink";
import { useT } from "./LocaleProvider";

export default function SiteHeader() {
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = splitLocalePath(usePathname()).path;

  return (
    <header className="z-40 md:sticky md:top-0 border-b-4 border-gold bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <LocaleLink href="/" className="shrink-0 no-underline" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt={t.site.logoAlt}
            width={1200}
            height={792}
            priority
            sizes="(min-width: 768px) 110px, 86px"
            className="h-14 w-auto md:h-18"
          />
        </LocaleLink>

        <nav aria-label={t.nav.ariaLabel} className="hidden xl:block">
          <ul className="flex list-none items-center gap-6">
            {t.nav.links.map((link) => {
              const isCurrent = currentPath === link.href;
              const isMainAction = link.href === "/qualify";
              return (
                <li key={link.href}>
                  <LocaleLink
                    href={link.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`inline-flex min-h-12 min-w-12 items-center whitespace-nowrap text-lg font-semibold text-navy hover:text-navy-dark ${
                      isMainAction
                        ? "rounded-lg border-2 border-gold-deep bg-cream px-4 no-underline hover:bg-gold"
                        : "underline decoration-2 underline-offset-4"
                    } ${isCurrent ? "underline decoration-gold-deep decoration-4 underline-offset-4" : ""}`}
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={t.contact.phoneHref}
            className="hidden min-h-12 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-navy px-5 py-3 text-lg font-semibold text-white no-underline hover:bg-navy-dark lg:inline-flex"
          >
            <PhoneIcon />
            <span>{t.contact.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex min-h-12 items-center gap-2 rounded-lg border-2 border-navy bg-white px-5 py-2 text-lg font-semibold text-navy hover:bg-cream xl:hidden"
          >
            <MenuIcon open={menuOpen} />
            {menuOpen ? t.nav.closeLabel : t.nav.menuLabel}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t-2 border-gold bg-white xl:hidden">
          <nav aria-label={t.nav.ariaLabel} className="mx-auto w-full max-w-7xl px-4 py-2 sm:px-6">
            <ul className="list-none">
              {t.nav.links.map((link) => (
                <li key={link.href} className="border-b border-cream last:border-b-0">
                  <LocaleLink
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={currentPath === link.href ? "page" : undefined}
                    className={`flex min-h-14 items-center text-lg font-semibold text-navy ${
                      link.href === "/qualify"
                        ? "no-underline before:mr-3 before:h-6 before:w-1.5 before:rounded-full before:bg-gold-deep"
                        : "underline decoration-2 underline-offset-4"
                    }`}
                  >
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
    </svg>
  );
}
