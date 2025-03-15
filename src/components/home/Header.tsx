"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronRight, Clock, Cuboid } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './menu/Mobile';

export const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    // Changed to start with full opacity and adjust background opacity instead
    const headerBgOpacity = useTransform(scrollYProgress, [0, 0.05], [0.5, 0.8]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-teal-500 to-transparent z-50"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />

            {/* Header */}
            <motion.header
                className="fixed top-0 w-full z-40 transition-all duration-300"
            >
                <motion.div
                    className="absolute inset-0 bg-black backdrop-blur-xl border-b border-white/5"
                    style={{ opacity: headerBgOpacity }}
                ></motion.div>
                <div className="container mx-auto px-6 py-4 relative flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Logo />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-1">
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    Services
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5">
                                    Projects
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 w-[400px] shadow-xl shadow-black/50">
                                    <div className="grid grid-cols-1 gap-3">
                                        <div className="p-3 hover:bg-white/5 rounded-xl transition-colors group">
                                            <div className="flex items-center justify-between">
                                                <div className="font-medium text-white group-hover:text-teal-400 transition-colors flex items-center gap-2">
                                                    <Cuboid size={16} /> Dreamprint
                                                </div>
                                                <ChevronRight size={16} className="text-white/30 group-hover:text-teal-400 transition-colors" />
                                            </div>
                                            <div className="text-sm text-white/50 mt-1">3D printing on demand platform</div>
                                        </div>
                                        <div className="p-3 hover:bg-white/5 rounded-xl transition-colors group">
                                            <div className="flex items-center justify-between">
                                                <div className="font-medium text-white group-hover:text-teal-400 transition-colors flex items-center gap-2">
                                                    <Clock size={16} /> UpAlert
                                                </div>
                                                <ChevronRight size={16} className="text-white/30 group-hover:text-teal-400 transition-colors" />
                                            </div>
                                            <div className="text-sm text-white/50 mt-1">Advanced uptime monitoring system</div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="hidden md:flex items-center gap-6">
                        <div className="h-5 w-[1px] bg-white/10"></div>
                        <Button className="bg-teal-500 hover:bg-teal-400 text-black hover:text-black font-medium px-5 h-10 rounded-full shadow-md shadow-teal-500/20">
                            Get in touch
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2 md:hidden text-white/70 hover:text-white relative z-50"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <MobileMenu isOpen={menuOpen} />
            </motion.header>
        </>
    );
};