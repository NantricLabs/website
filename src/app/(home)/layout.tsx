import { Header } from '@/components/home/Header'
import { Footer } from '@/components/home/Footer'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative z-50 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 overflow-x-hidden">{children}</main>
            <Footer />
        </div>
    )
}
