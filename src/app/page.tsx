"use client"

import Image from "next/image"

import { CompanyInfo } from "@/components/home/CompanyInfo"
import { ProjectCarousel } from "@/components/home/ProjectCarousel"

import LogoWhite from "@/assets/logo.white.png"

export default function Page() {
	return (
		<div className="h-screen overflow-hidden bg-background shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]">
			<div className="h-full grid grid-rows-[auto_1fr]">
				<main className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
					{/* Left Panel */}
					<div className="flex flex-col">
						<Image
							src={LogoWhite}
							alt="Nantric"
							height={40}
							className="ml-4 object-contain"
							priority
						/>

						<CompanyInfo />
					</div>

					{/* Right Panel */}
					<div className="min-h-0">
						<ProjectCarousel />
					</div>
				</main>
			</div>
		</div>
	)
}
