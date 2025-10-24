"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Cuboid } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project/Card"

export const ProjectsSection = () => {
	const projects = [
		{
			id: "01",
			title: "Dreamprint",
			tag: "3D Printing",
			description:
				"A comprehensive platform where users can upload 3D models, customize specifications, and order physical parts with just a few clicks. Features real-time pricing, status tracking, and multiple material options.",
			technologies: ["3D Printing", "Manufacturing", "Prototyping", "Design"],
			icon: <Cuboid size={100} className="text-teal-400/50" strokeWidth={1} />,
			reverse: false,
		},
		{
			id: "02",
			title: "UpAlert",
			tag: "Monitoring",
			description:
				"An advanced uptime monitoring system that tracks website and service availability with deep analytical insights. Features instant notifications, historical data analysis, and customizable reporting.",
			technologies: ["Realtime", "Tracking", "Monitoring", "Statuspages", "Dashboard"],
			icon: <Clock size={100} className="text-teal-400/50" strokeWidth={1} />,
			reverse: true,
		},
	]

	return (
		<section className="py-32 relative bg-gradient-to-b from-white to-gray-50" id="projects">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
				<div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 aspect-square bg-teal-400/10 rounded-full blur-3xl opacity-50" />
				<div className="absolute top-3/4 -translate-y-1/2 left-0 w-1/4 aspect-square bg-teal-400/10 rounded-full blur-3xl opacity-30" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
					<div>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-medium mb-5 backdrop-blur-sm">
							Featured Work
						</div>
						<h2 className="text-3xl md:text-4xl font-bold max-w-md leading-tight">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
								Projects
							</span>{" "}
							<span className="text-gray-900">with Impact</span>
						</h2>
					</div>
					<p className="text-gray-600 max-w-md md:text-right">
						Discover some of our innovative solutions that have helped businesses transform and
						grow.
					</p>
				</div>

				<div className="space-y-32">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}
