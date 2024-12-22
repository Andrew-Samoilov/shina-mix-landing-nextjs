import { NextResponse } from 'next/server';

export function middleware(request: Request) {
    // const theme = request.cookies.get('theme')?.value || 'light';

    const url = new URL(request.url);
    if (url.searchParams.has('theme')) {
        const newTheme = url.searchParams.get('theme');
        const response = NextResponse.next();
        response.cookies.set('theme', newTheme ?? 'light', { path: '/' });
        return response;
    }

    return NextResponse.next();
}
