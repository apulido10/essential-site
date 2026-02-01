import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/lib/getDictionary";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if locale is already in the path
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to default locale
  const locale = i18n.defaultLocale;
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ["/", "/((?!api|_next|images|favicon.ico).*)"],
};
