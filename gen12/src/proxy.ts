import { NextResponse, type NextRequest } from "next/server";

// Private client pages live in public/p/<slug>/ (see next.config.ts).
// /p/<slug>  -> 308 to /p/<slug>/  (so relative assets resolve in the folder)
// /p/<slug>/ -> serves public/p/<slug>/index.html (404 if it doesn't exist)
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/p\/[^/]+(\/?)$/);
  if (!match) return NextResponse.next();

  // Plain URL, not nextUrl.clone(): NextURL drops the trailing slash when
  // serialized, which would make the redirect point back to itself.
  const { search } = request.nextUrl;
  if (!match[1]) {
    return NextResponse.redirect(new URL(`${pathname}/${search}`, request.url), 308);
  }
  return NextResponse.rewrite(new URL(`${pathname}index.html${search}`, request.url));
}

export const config = { matcher: "/p/:path*" };
