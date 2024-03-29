import { NextRequest, NextResponse } from "next/server";

export function middleward(request: NextRequest) {
    console.log('미들웨어가 실행 되고 있음');
    if (request.nextUrl.pathname.startsWith('/products/1004')) {
         console.log("미들웨어 - 경로를 리다이렉팅함");
        return NextResponse.redirect(new URL('/products',request.url))
    }
}

export const config = {
    matcher: [
        '/products/:path*'
    ]
}