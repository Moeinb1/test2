import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { useRouter } from 'next/router'
export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone()

    if (url.pathname === '/' || url.pathname === '/login') {
        url.pathname = '/users'
        console.log(url)
        return NextResponse.redirect(url)
    }
}
