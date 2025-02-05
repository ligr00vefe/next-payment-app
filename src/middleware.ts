import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
export { default } from 'next-auth/middleware';

// export const config = { matcher: ["/admin/:path*", "/user"] } 

export async function middleware(req: NextRequest) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET });
    const pathname = req.nextUrl.pathname;
  
    // console.log('session: ', session);
    // console.log('req.nextUrl.pathname: ', req.nextUrl.pathname);
  
    // 로그인된 유저만 접근 가능
    if (req.nextUrl.pathname.startsWith("/user") && !session) {
      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }
  
    // 어드민 유저만 접근 가능
    if (pathname.startsWith("/admin") && (session?.role === "Admin")) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  
    // 로그인된 유저는 로그인, 회원가입 페이지에 접근 X
    if (pathname.startsWith("/login") && pathname.startsWith("/register") && pathname.startsWith("/reset") && session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  
    // 모두 해당하지 않을 경우
    return NextResponse.next();
}
  