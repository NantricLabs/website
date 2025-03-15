"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ServiceCards } from './service/Card';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(17,153,158,0.15),transparent_50%)]"></div>
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(17,153,158,0.1),transparent_50%)]"></div>

                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="h-full w-full" style={{
                        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '80px 80px'
                    }}></div>
                </div>

                {/* Abstract Elements */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-medium mb-8 backdrop-blur-xl">
                                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                                Software Development Experts
                            </div>

                            <h1 className="text-5xl font-bold mb-8 leading-[1.1] tracking-tight">
                                <span className="block text-white/80 mb-2">Transforming</span>
                                <span className="block">Ideas Into</span>
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-400 to-white bg-[size:400%] animate-[gradient_8s_ease-in-out_infinite]">Digital Reality</span>
                            </h1>

                            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
                                We build custom software, SaaS products, and hosting solutions that drive growth
                                and create exceptional user experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Button className="bg-white hover:bg-white/90 text-black hover:text-black px-8 py-6 text-md font-medium h-14 rounded-full">
                                    Our Services
                                </Button>
                                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-8 py-6 text-md font-medium h-14 rounded-full">
                                    View Projects
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-10 bg-teal-500/10 blur-3xl rounded-full opacity-20"></div>

                        <div className="relative border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-4 bg-white/5">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
                            <div className="grid grid-cols-12 gap-4 aspect-[4/3]">
                                {/* Top Left Panel */}
                                <div className="col-span-8 rounded-xl border border-white/10 bg-white/5 p-4 flex flex-col">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-sm font-medium">Server Status</div>
                                        <div className="text-xs text-white/40">Live</div>
                                    </div>
                                    <div className="grid grid-cols-4 gap-3 flex-1">
                                        {[...Array(12)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="rounded-lg border border-white/10 bg-white/5 flex items-center justify-center aspect-square text-xs"
                                            >
                                                <div className={`w-2 h-2 rounded-full mr-1 ${i % 4 === 0 ? 'bg-teal-400' : 'bg-white/40'}`}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Top Right Panel */}
                                <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-sm font-medium">Load</div>
                                        <div className="text-xs text-teal-400">42%</div>
                                    </div>
                                    <div className="space-y-2 h-full flex flex-col justify-evenly">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r from-teal-500 to-white/30`}
                                                    style={{ width: `${75 - (i * 15)}%` }}
                                                ></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Left Panel */}
                                <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="text-sm font-medium mb-2">Uptime</div>
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">99.9%</div>
                                    <div className="text-xs text-white/40 mt-1">Last 30 days</div>
                                </div>

                                {/* Bottom Right Panel */}
                                <div className="col-span-8 rounded-xl border border-white/10 bg-white/5 p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-sm font-medium">Traffic</div>
                                        <div className="text-xs text-white/40">Real-time</div>
                                    </div>
                                    <div className="h-24 flex items-end space-x-1">
                                        {[45, 80, 30, 55, 60, 95, 70, 35, 85, 65, 40, 75, 50, 90, 55, 60].map((height, i) => (
                                            <div
                                                key={i}
                                                className="flex-1 bg-gradient-to-t from-teal-500/50 to-teal-500/10 rounded-sm"
                                                style={{ height: `${height}%` }}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <ServiceCards />
            </div>
        </section>
    );
};