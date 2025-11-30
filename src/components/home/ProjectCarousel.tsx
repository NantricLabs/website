"use client"

import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./ProjectCard"

const projects = [
	{
		name: "upalert",
		description: "Uptime monitoring service ensuring 99.9% reliability for critical infrastructure",
		link: "https://upalert.io",
		tags: ["Monitoring", "SaaS", "Real-time"],
	},
	{
		name: "dreamprint",
		description: "Streamlined 3D printing customer order workflow and management system",
		tags: ["E-commerce", "Manufacturing", "Workflow"],
	},
	{
		name: "jouwboeking",
		description: "Comprehensive bed and breakfast reservation and management platform",
		tags: ["Hospitality", "Booking", "Management"],
	},
	{
		name: "geoip",
		description: "IP geolocation service with global coverage and high-precision data",
		link: "https://ip.nantric.com/",
		githubLink: "https://github.com/ThijmenGThN/reflexip",
		tags: ["API", "Geolocation", "Open Source"],
	},
]

export function ProjectCarousel() {
	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)

	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

	useEffect(() => {
		if (!api) return

		setCurrent(api.selectedScrollSnap())
		api.on("select", () => setCurrent(api.selectedScrollSnap()))
	}, [api])

	return (
		<div className="relative h-full flex flex-col">
			{/* Project indicators as tabs */}
			<div className="flex items-center justify-between gap-4 mb-4">
				<h3 className="text-2xl font-semibold">Projects</h3>
				<div className="flex gap-2 overflow-x-auto pb-2">
					{projects.map((project, index) => (
						<button
							key={index}
							onClick={() => api?.scrollTo(index)}
							className={cn(
								"px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
								current === index
									? "bg-primary text-primary-foreground shadow-sm"
									: "bg-muted/50 text-muted-foreground hover:bg-muted"
							)}
						>
							{project.name}
						</button>
					))}
				</div>
			</div>

			{/* Carousel */}
			<div className="flex-1 relative flex flex-col">
				<Carousel
					setApi={setApi}
					plugins={[plugin.current]}
					opts={{ loop: true }}
					className="flex-1 w-full"
					onMouseEnter={() => plugin.current.stop()}
					onMouseLeave={() => plugin.current.play()}
				>
					<CarouselContent className="h-full items-stretch">
						{projects.map((project, index) => (
							<CarouselItem key={index} className="flex w-full">
								<div className="w-full">
									<ProjectCard project={project} />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}
