
export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative z-50 flex flex-col min-h-screen">
			<main className="flex-1 overflow-x-hidden">
				{children}
			</main>
		</div>
	)
}
