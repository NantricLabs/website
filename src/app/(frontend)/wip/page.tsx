"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Construction, Home, Code, ArrowLeft, Hammer, Workflow, Loader2 } from 'lucide-react';

export const UnderConstructionPage = () => {
    // Animation for the code lines
    const [codeLines, setCodeLines] = React.useState<any>([]);
    const [dotCount, setDotCount] = React.useState<any>(0);

    useEffect(() => {
        // Generate code lines for animation
        const lines: any = [];
        for (let i = 0; i < 6; i++) {
            const width = Math.random() * 60 + 40; // Random width between 40% and 100%
            lines.push({ width: `${width}%`, delay: i * 0.1 });
        }
        setCodeLines(lines);

        // Animate the loading dots
        const interval = setInterval(() => {
            setDotCount((prev: any) => (prev >= 3 ? 0 : prev + 1));
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
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
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-medium mb-6 backdrop-blur-xl">
                            <Construction size={14} className="text-teal-400" />
                            Work in Progress
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            This Page Is{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-400 to-white animate-gradient">
                                Under Construction
                            </span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            We&apos;re working hard to bring you something amazing. Please check back soon
                            or return to our homepage.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-16"
                    >
                        <div className="relative border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-6 bg-white/5 shadow-xl shadow-black/20">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                            {/* Mock code editor and construction animation */}
                            <div className="flex flex-col">
                                <div className="flex items-center bg-white/5 px-4 py-2 rounded-t-lg border-b border-white/10 mb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="ml-4 text-xs font-mono text-white/60">page.tsx</div>
                                    <div className="ml-auto flex items-center gap-2">
                                        <Code size={14} className="text-teal-400" />
                                        <span className="text-xs">React</span>
                                    </div>
                                </div>

                                {/* Animated code lines */}
                                <div className="space-y-3 p-4 font-mono text-xs">
                                    {codeLines.map((line: any, index: any) => (
                                        <motion.div
                                            key={index}
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{ width: line.width, opacity: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: line.delay,
                                                ease: "easeInOut"
                                            }}
                                            className="h-4 bg-white/10 rounded-sm"
                                        ></motion.div>
                                    ))}
                                </div>

                                {/* Construction animation */}
                                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 py-4">
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10">
                                        <motion.div
                                            animate={{
                                                rotate: [0, 20, 0, -20, 0],
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                repeatType: "loop",
                                                duration: 2,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <Hammer size={40} className="text-teal-400" />
                                        </motion.div>
                                    </div>

                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold mb-2">Building in Progress</h3>
                                        <div className="flex items-center text-white/60">
                                            <span>Compiling components</span>
                                            <span className="inline-block w-16 text-left ml-1">
                                                {'.'.repeat(dotCount)}
                                            </span>
                                        </div>
                                        <div className="mt-4 flex items-center gap-2">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5,
                                                    ease: "linear"
                                                }}
                                            >
                                                <Loader2 size={16} className="text-teal-400" />
                                            </motion.div>
                                            <div className="h-1.5 bg-white/10 rounded-full w-36 overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-teal-500 to-teal-400"
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "65%" }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                        ease: "easeInOut"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 text-md font-medium rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-400/30"
                        >
                            <ArrowLeft size={18} />
                            Return to Homepage
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default UnderConstructionPage;