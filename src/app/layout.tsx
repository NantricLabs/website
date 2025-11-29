import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"

import ConvexClientProvider from "@/components/ConvexClientProvider"

import "@/styles/globals.css"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
	title: "next-leaflet",
	description: "An optimized tech stack for efficiency.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ConvexClientProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						{children}
					</ThemeProvider>
				</ConvexClientProvider>
				<Toaster />
			</body>
		</html>
	)
}
