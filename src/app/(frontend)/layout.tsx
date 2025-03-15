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
                className={`${inter.variable} font-sans bg-black text-white 
          overflow-x-hidden selection:bg-teal-500 selection:text-black scroll-smooth`}
            >
                <div className="relative z-50 flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
