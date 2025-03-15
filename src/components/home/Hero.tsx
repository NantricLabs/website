"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ServiceCards } from './service/Card';
import { AnimatedDevelopmentVisual } from './Animation';

export const HeroSection = () => {
    return (
        <section className="relative flex items-center pt-32 pb-20" id="home">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15),transparent_50%)]" />
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,184,166,0.1),transparent_50%)]" />
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>
                {/* Abstract Elements */}
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10 mt-10">
                <div className="grid grid-cols-1 h-[625px] lg:grid-cols-2 gap-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-medium mb-8 backdrop-blur-xl">
                                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                                Software Development Experts
                            </div>

                            <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-[1.1] tracking-tight">
                                <span className="block text-white mb-2">Transforming</span>
                                <span className="block">Ideas Into</span>
                                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-400 to-white animate-gradient">
                                    Digital Reality
                                </span>
                            </h1>

                            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-lg">
                                We build custom software, SaaS products, and hosting solutions that drive growth
                                and create exceptional user experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-y-4">
                                <Link
                                    href="#contact"
                                    className="flex items-center bg-teal-500 hover:bg-teal-400 text-black py-6 text-md font-medium h-14 rounded-full shadow-md shadow-teal-500/20 mx-auto sm:ml-0 sm:mr-4 px-16 sm:px-8"
                                >
                                    Contact us
                                </Link>
                                <Link
                                    href="#projects"
                                    className="flex items-center border-white/10 bg-transparent text-white hover:bg-white/5 hover:text-teal-400 py-6 text-md font-medium h-14 rounded-full mx-auto sm:ml-0 sm:mr-4 px-16 sm:px-8"
                                >
                                    Our Projects
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Animated Development Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="absolute -inset-10 bg-teal-500/10 blur-3xl rounded-full opacity-20" />

                        <div className="relative border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-4 bg-white/5 shadow-xl shadow-black/20">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                            {/* Animated Development Process Visual */}
                            <AnimatedDevelopmentVisual />
                        </div>
                    </motion.div>
                </div>

                <ServiceCards />
            </div>
        </section>
    );
};