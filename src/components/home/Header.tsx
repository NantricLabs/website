"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image'
import { Logo } from './Logo';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    // Light theme with white background and subtle opacity changes
    const headerBgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.98]);
    const headerBlur = useTransform(scrollYProgress, [0, 0.1], [0, 12]);
    const progressBarOpacity = useTransform(scrollYProgress, [0, 0.02, 0.1], [0, 1, 1]);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500 z-50 shadow-lg shadow-teal-500/20"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%", opacity: progressBarOpacity }}
            />

            {/* Header */}
            <motion.header
                className="fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-sm"
            >
                <motion.div
                    className="absolute inset-0 border-b border-gray-200"
                    style={{
                        opacity: headerBgOpacity,
                        backdropFilter: `blur(${headerBlur}px)`,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)'
                    }}
                />
                <div className="container mx-auto px-4 sm:px-6 py-4 relative flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <Link href="/">
                            <Logo />
                        </Link>
                    </motion.div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/wip"
                            className="flex items-center py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full px-4 transition-colors"
                        >
                            <p>Login</p>
                        </Link>
                        <Link
                            href="#contact"
                            className="flex items-center bg-teal-500 hover:bg-teal-600 text-white font-medium px-5 h-10 rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-600/30"
                        >
                            <p>Get in Touch</p>
                        </Link>
                    </div>
                </div>
            </motion.header>
        </>
    );
};
