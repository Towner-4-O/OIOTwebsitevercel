import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname } = url;
  const token = request.cookies.get('access_token')?.value;
 
  const authRoutes = ['/rider-auth/login', '/rider-auth/signup', '/rider-auth/verify'];
  const publicRoutes = ['/', '/about', '/openData'];
  const protectedRoutes = ['/userspace'];

  console.log('Middleware - Path:', pathname, 'Has Token:', !!token);

  if (token) {
    if (authRoutes.some(route => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/userspace/profile', request.url));
    }
  }

  if (!token && protectedRoutes.some(route => pathname.startsWith(route))) {
    console.log('Redirecting to login - no token found');
    return NextResponse.redirect(new URL('/rider-auth/verify', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/rider-auth/:path*',
    '/userspace/:path*'
  ]
};
