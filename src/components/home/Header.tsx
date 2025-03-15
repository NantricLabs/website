"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronRight, Clock, Cuboid, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import Link from 'next/link';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    // True OLED background (pure black) with subtle opacity changes
    const headerBgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 0.97]);
    const headerBlur = useTransform(scrollYProgress, [0, 0.1], [0, 8]);
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

    const menuItemVariants = {
        closed: { opacity: 0, y: 10 },
        open: (i: any) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } })
    };

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-teal-400 z-50"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%", opacity: progressBarOpacity }}
            />

            {/* Header */}
            <motion.header
                className="fixed top-0 w-full z-40 transition-all duration-300"
            >
                <motion.div
                    className="absolute inset-0 border-b border-teal-900/30"
                    style={{
                        opacity: headerBgOpacity,
                        backdropFilter: `blur(${headerBlur}px)`,
                        backgroundColor: 'rgba(0, 0, 0, 0.9)'
                    }}
                ></motion.div>

                <div className="container mx-auto px-4 sm:px-6 py-4 relative flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center"
                    >
                        <Link href="#home">
                            <Logo />
                        </Link>
                    </motion.div>


                    <div className="flex items-center gap-4">
                        <Link href="/login" className="flex items-center text-white/70 hover:text-white hover:bg-teal-950/30 rounded-full px-4">
                            <p>
                                Login
                            </p>
                        </Link>
                        <Link href="mailto:info@nantric.com" className="flex items-center bg-teal-500 hover:bg-teal-400 text-black font-medium px-5 h-10 rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-400/30">
                            <p>
                                Get in touch
                            </p>
                        </Link>
                    </div>
                </div>
            </motion.header>
        </>
    );
};