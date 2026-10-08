import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Noto_Sans_Gurmukhi, Noto_Sans_TC, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import LanguageBar from "@/components/LanguageBar";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import { LocaleProvider } from "@/components/LocaleProvider";
import MobileCallBar from "@/components/MobileCallBar";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { contentFor } from "@/lib/content";
import { hasLocale, localeInfo, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

// Cyrillic covers Russian and Ukrainian; Vietnamese needs its own set of accented letters.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext", "vietnamese", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

// Chinese characters. The browser only downloads the pieces of this font that a page
// actually uses, so English, Russian and Ukrainian pages do not load it.
const notoSansTC = Noto_Sans_TC({
  variable: "--font-script",
  weight: ["400", "600", "700"],
  preload: false,
  display: "swap",
});

const notoSansGurmukhi = Noto_Sans_Gurmukhi({
  variable: "--font-script",
  weight: ["400", "600", "700"],
  subsets: ["gurmukhi"],
  preload: false,
  display: "swap",
});

/** Fonts for languages whose letters Source Sans does not have. */
const scriptFonts: Partial<Record<string, string>> = {
  zh: notoSansTC.variable,
  pa: notoSansGurmukhi.variable,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = contentFor(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.site.name,
      template: `%s | ${t.site.name}`,
    },
    description: t.home.meta.description,
    robots: "noindex",
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = contentFor(lang);

  // Only the text that interactive components need is sent to the browser.
  const clientText = {
    site: t.site,
    nav: t.nav,
    contact: t.contact,
    buttons: t.buttons,
    form: t.form,
    qualify: t.qualify,
    language: t.language,
  };

  return (
    <html
      lang={localeInfo[lang].htmlLang}
      className={`${sourceSans.variable} ${sourceSerif.variable} ${scriptFonts[lang] ?? ""} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <LocaleProvider lang={lang} t={clientText}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-3 focus:text-white"
          >
            {t.site.skipToContent}
          </a>
          <LanguageBar />
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <div className="h-20 bg-navy-dark lg:hidden" aria-hidden="true" />
          <MobileCallBar />
          <LocalBusinessJsonLd />
        </LocaleProvider>
      </body>
    </html>
  );
}
