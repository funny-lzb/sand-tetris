import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales } from "./i18n/locale";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({
... routing
});

export default function middleware(request: NextRequest) {
  // 添加重定向逻辑：如果访问根路径，重定向到 /en
  // if (request.nextUrl.pathname === '/') {
  //   return NextResponse.redirect(new URL('/en', request.url), 302);
  // }

  const requestHeaders = new Headers(request.headers);
  
  // 修改 header 名称，移除重复的前缀
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-url", request.url);


  const response = intlMiddleware(request);

  if (response) {
    const newResponse = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.headers.forEach((value, key) => {
      newResponse.headers.set(key, value);
    });

    return newResponse;
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    // 匹配所有路径
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // 匹配所有非英语的语言路径
    "/(zh|de|sv|fr|es)/:path*"
  ],
};