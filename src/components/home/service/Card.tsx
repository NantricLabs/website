"use client"

import { motion } from "framer-motion"
import { Code, Database, Server } from "lucide-react"
import React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const ServiceCards = () => {
	const services = [
		{
			icon: <Code />,
			title: "Custom Software",
			description:
				"Tailored solutions built for your specific business needs and growth objectives",
		},
		{
			icon: <Database />,
			title: "SaaS Products",
			description:
				"Powerful cloud-based applications with robust features and scalable architecture",
		},
		{
			icon: <Server />,
			title: "Hosting Solutions",
			description:
				"Reliable infrastructure to keep your applications running smoothly and securely",
		},
	]

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
			{services.map((service, index) => (
				<ServiceCard
					key={index}
					icon={service.icon}
					title={service.title}
					description={service.description}
					delay={0.1 * (index + 1)}
				/>
			))}
		</div>
	)
}

interface ServiceCardProps {
	icon: React.ReactNode
	title: string
	description: string
	delay: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
			viewport={{ once: true }}
			whileHover={{ y: -5 }}
		>
			<div className="relative p-1 group">
				<div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
				<Card className="bg-white backdrop-blur-sm border-gray-200 group-hover:border-teal-400 group-hover:shadow-teal-500/10 transition-all h-full relative shadow-lg shadow-gray-300/30">
					<CardHeader>
						<div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-50 backdrop-blur-sm border border-teal-200 mb-4 group-hover:border-teal-500 group-hover:bg-teal-100 transition-colors">
							<div className="text-teal-600">{React.cloneElement(icon as React.ReactElement)}</div>
						</div>
						<CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors">
							{title}
						</CardTitle>
						<CardDescription className="text-gray-600 group-hover:text-gray-700 transition-colors">
							{description}
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</motion.div>
	)
}
