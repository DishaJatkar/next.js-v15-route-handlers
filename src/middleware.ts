import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Middleware with cookies
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("custom-header", "custom-value");

  return response;

  // Matcher config
  //   return NextResponse.redirect(new URL("/", request.url));
  //   if (request.nextUrl.pathname === "/profile") {
  // redirect to /hello when visiting /profile
  // return NextResponse.redirect(new URL("/hello", request.nextUrl));
  // rewrite to /hello when visiting /profile without changing the URL in the browser
  // return NextResponse.rewrite(new URL("/hello", request.url));
  //   }
}

// Matcher config
// export const config = {
//   matcher: "/profile",
// };
