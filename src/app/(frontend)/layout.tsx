// src/app/(frontend)/layout.tsx

import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/home/Header'
import { Footer } from '@/components/home/Footer'

export const metadata = {
    title: 'Nantric - Modern Software Solutions',
    description: 'Custom software development, SaaS development, and web development services by Nantric.',
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                // Put your color, text, selection, and overflow styles on <body>
                className={`${inter.variable} font-sans bg-black text-white 
                    overflow-x-hidden selection:bg-teal-500 selection:text-black`}
            >
                {/* The "fixed inset-0" overlay you had in the <div> can move here */}
                <div
                    className="fixed inset-0 z-40 pointer-events-none 
                     opacity-[0.015] bg-[url('data:image/svg+xml;base64,...')]"
                />

                {/* If you want the footer pinned at the bottom unless content is taller, 
            wrap everything in a flex container with min-h-screen. */}
                <div className="flex flex-col min-h-screen relative z-50">
                    <Header />
                    {/* Make main flex-1 to fill leftover vertical space */}
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
