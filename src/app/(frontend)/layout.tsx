
import { Inter } from 'next/font/google'

import '@/styles/globals.css'
import { Header } from '@/components/home/Header';
import { Footer } from '@/components/home/Footer';

export const metadata = {
    title: 'Nantric - Modern Software Solutions',
    description: 'Custom software development, SaaS development, and web development services by Nantric.',
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans bg-white text-black`}>
                <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-teal-500 selection:text-black">
                    <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>

                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
