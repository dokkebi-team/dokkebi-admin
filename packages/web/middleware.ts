import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/comingsoon", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/", "/comingsoon", "/archive"],
};
