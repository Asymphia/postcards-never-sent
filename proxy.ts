import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BANNED_BOTS = [/python/i, /curl/i, /wget/i, /go-http-client/i, /node-fetch/i]

export const proxy = (request: NextRequest) => {
    const ua = request.headers.get('user-agent') || ''

    if (BANNED_BOTS.some((bot) => bot.test(ua))) {
        return new NextResponse("Access denied", { status: 403 });
    }

    return NextResponse.next()
}

export const config = {
    matcher: "/((?!_next/static|_next/image|favicon.ico).*)"
}