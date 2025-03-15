"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    className="md:hidden fixed inset-0 top-0 min-h-screen bg-black/95 backdrop-blur-xl z-40 pt-20"
                >
                    <div className="container mx-auto px-6 py-10 flex flex-col h-[calc(100vh-80px)]">
                        <div className="space-y-6 text-xl font-light">
                            <motion.div variants={itemVariants}>
                                <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">Home</a>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">Services</a>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">Projects</a>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">About</a>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <a href="#" className="block py-3 hover:text-teal-400 transition-colors">Contact</a>
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 space-y-6"
                        >
                            <div className="text-lg text-white/50">Our projects</div>
                            <a href="#" className="block p-4 rounded-2xl border border-white/10 hover:border-teal-500/50 bg-white/5 transition-all group">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium group-hover:text-teal-400 transition-colors">Dreamprint</span>
                                    <ChevronRight size={18} className="text-white/30 group-hover:text-teal-400 transition-colors" />
                                </div>
                                <p className="text-sm text-white/50 mt-1">3D printing on demand platform</p>
                            </a>
                            <a href="#" className="block p-4 rounded-2xl border border-white/10 hover:border-teal-500/50 bg-white/5 transition-all group">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium group-hover:text-teal-400 transition-colors">UpAlert</span>
                                    <ChevronRight size={18} className="text-white/30 group-hover:text-teal-400 transition-colors" />
                                </div>
                                <p className="text-sm text-white/50 mt-1">Advanced uptime monitoring system</p>
                            </a>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-auto pt-10"
                        >
                            <Button className="w-full bg-teal-500 hover:bg-teal-400 text-black hover:text-black font-medium h-12 rounded-full shadow-lg shadow-teal-500/20">
                                Get in touch
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};