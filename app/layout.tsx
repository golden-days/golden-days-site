import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import MobileCallBar from "@/components/MobileCallBar";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { en } from "@/content/en";
import { siteUrl } from "@/lib/seo";

// Cyrillic is included now so a Russian version can be added without changing fonts.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: en.site.name,
    template: `%s | ${en.site.name}`,
  },
  description: en.home.meta.description,
  robots: "noindex",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-3 focus:text-white"
        >
          {en.site.skipToContent}
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <div className="h-20 bg-navy-dark lg:hidden" aria-hidden="true" />
        <MobileCallBar />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
