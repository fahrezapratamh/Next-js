import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLogin = true;
  if(!isLogin){
    return NextResponse.redirect(new URL("/login", req.url))
  }
}

export const config = {
  mathcer: ["/dashboard/:path*","/about:path*"],
};
