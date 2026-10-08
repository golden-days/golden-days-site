import { NextResponse, type NextRequest } from "next/server";

// Languages other than English keep their prefix (/ru/about). English has no prefix
// (/about), so we quietly serve it from the /en pages. Keep this list in step with
// `locales` in lib/i18n.ts.
const otherLocales = ["ru", "uk", "zh", "es", "vi", "tl"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  // /en/about is the same page as /about, so send people to the short address.
  if (first === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  // /ru/about already names its language.
  if (otherLocales.includes(first)) return NextResponse.next();

  // /about is English.
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next.js files and anything with a file extension (images, icons, the sitemap).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
