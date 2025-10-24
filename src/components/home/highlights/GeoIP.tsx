"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe, Layers, Map, Network, Pin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import MapAsset from "@/assets/map.png"

export const GeoIPSection = () => {
	return (
		<section className="py-32 relative bg-gray-50" id="geoip">
			{/* Background Elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
				<div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.08),transparent_50%)]" />

				{/* Grid Lines */}
				<div className="absolute inset-0 opacity-[0.4]">
					<div
						className="h-full w-full"
						style={{
							backgroundImage:
								"linear-gradient(to right, rgba(20, 184, 166, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.05) 1px, transparent 1px)",
							backgroundSize: "80px 80px",
						}}
					/>
				</div>

				{/* Abstract Elements */}
				<div className="absolute top-1/3 -left-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-medium mb-6 backdrop-blur-xl">
							<Map size={14} className="text-teal-500" />
							Featured Tool
						</div>

						<h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
							Compare{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 animate-gradient">
								GeoIP Providers
							</span>{" "}
							in Real-Time
						</h2>

						<p className="text-lg text-gray-600 mb-8 leading-relaxed">
							Our free tool allows you to compare multiple IP to location providers side by side.
							See which service gives you the most accurate geolocation data for any IP address.
						</p>

						<div className="space-y-4 mb-8">
							<div className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
									<Layers size={14} className="text-teal-600" />
								</div>
								<div>
									<h3 className="text-gray-900 font-medium">Multiple Providers</h3>
									<p className="text-gray-600">
										Compare results from leading GeoIP databases in one view
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
									<Globe size={14} className="text-teal-600" />
								</div>
								<div>
									<h3 className="text-gray-900 font-medium">Visual Mapping</h3>
									<p className="text-gray-600">
										See location discrepancies visually plotted on a world map
									</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-1">
									<Pin size={14} className="text-teal-600" />
								</div>
								<div>
									<h3 className="text-gray-900 font-medium">Accuracy Analysis</h3>
									<p className="text-gray-600">
										Determine which provider offers the most precise geolocation data
									</p>
								</div>
							</div>
						</div>

						<a
							href="https://ip.nantric.com"
							target="_blank"
							className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-md font-medium rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-600/30"
							rel="noopener"
						>
							Try GeoIP Tool <ArrowRight size={18} className="ml-2" />
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.03 }}
						className="relative"
					>
						<div className="absolute -inset-10 bg-teal-500/10 blur-3xl rounded-full" />
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-gray-400/20">
							<div className="absolute inset-0 bg-grid-gray-200/[0.5] bg-[length:30px_30px]" />

							{/* Interactive GeoIP Visualization */}
							<div className="absolute inset-6">
								<div className="relative w-full h-full flex flex-col">
									{/* Mock Tool Interface */}
									<div className="bg-white/80 rounded-lg border border-gray-200 p-4 mb-4 backdrop-blur-sm">
										<div className="flex items-center mb-4">
											<div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mr-3 border border-teal-200">
												<Network size={20} className="text-teal-600" />
											</div>
											<div>
												<div className="text-sm font-medium text-gray-900">
													IP Geolocation Comparison
												</div>
												<div className="text-xs text-gray-500">
													Compare multiple providers at once
												</div>
											</div>
										</div>

										<a
											href="https://ip.nantric.com"
											target="_blank"
											className="flex bg-gray-50 rounded-md border border-gray-200 p-2 mb-4"
											rel="noopener"
										>
											<input
												type="text"
												readOnly
												value="8.8.8.8"
												className="flex-1 bg-transparent text-gray-900 border-none focus:outline-none text-sm px-2"
											/>
											<div className="px-3 py-1 rounded-md bg-teal-500 text-white text-xs font-medium">
												Compare
											</div>
										</a>
									</div>

									{/* World Map Visualization */}
									<div className="flex-1 bg-white/80 rounded-lg border border-gray-200 p-4 relative overflow-hidden backdrop-blur-sm">
										{/* Simplified World Map */}
										<Image
											src={MapAsset}
											alt="World Map"
											className="w-full h-full object-cover rounded-lg opacity-70"
										/>

										{/* Result Panel */}
										<div className="absolute bottom-4 right-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-md p-3">
											<div className="grid grid-cols-3 gap-2 text-xs">
												<div>
													<div className="flex items-center mb-1">
														<div className="w-2 h-2 rounded-full bg-teal-500 mr-2" />
														<span className="text-gray-700">ipinfo.io</span>
													</div>
													<div className="text-gray-500">Mountain View, CA</div>
												</div>
												<div>
													<div className="flex items-center mb-1">
														<div className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
														<span className="text-gray-700">ip2location.io</span>
													</div>
													<div className="text-gray-500">Palo Alto, CA</div>
												</div>
												<div>
													<div className="flex items-center mb-1">
														<div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />
														<span className="text-gray-700">ip-api.com</span>
													</div>
													<div className="text-gray-500">San Jose, CA</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
