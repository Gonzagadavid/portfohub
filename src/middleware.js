import { NextResponse } from "next/server";
import { Routes, RoutesInfo } from "./constants/routes";
import { auth } from "./app/api/auth/auth";
import { validateExp } from "./utils/validateExp";

const outPages = new Set([Routes.REGISTER, Routes.HOME]);

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const session = await auth();

  if (session && outPages.has(pathname)) {
    return NextResponse.redirect(new URL(Routes.DASHBOARD, request.url));
  }

  if (
    RoutesInfo?.[pathname] &&
    RoutesInfo[pathname].isPriv &&
    (!session || !validateExp(session.expires))
  ) {
    return NextResponse.redirect(new URL(Routes.LOGIN, request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
};
