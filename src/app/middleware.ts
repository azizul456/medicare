import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'

export function middleware(request: any) {
    const { pathname } = request.nextUrl;
    if (!pathname.startsWith("/site") && pathname.split('/').length > 1) {
        return NextResponse.rewrite(new URL(`/site${pathname}`, request.url));
    }

    return NextResponse.next();
}
export const config = {
    matcher: '/site/*',
};