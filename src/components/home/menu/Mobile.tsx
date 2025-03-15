"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

interface MobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden absolute inset-0 top-0 min-h-screen bg-black z-40 pt-20"
                >
                    <div className="container mx-auto px-6 py-10 flex flex-col">
                        <div className="space-y-6 text-xl font-light">
                            <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">Home</a>
                            <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">Services</a>
                            <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">Projects</a>
                            <a href="#" className="block py-3 hover:text-teal-400 transition-colors border-b border-white/5">About</a>
                            <a href="#" className="block py-3 hover:text-teal-400 transition-colors">Contact</a>
                        </div>

                        <div className="mt-10 space-y-6">
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
                        </div>

                        <div className="mt-auto pt-10">
                            <Button className="w-full bg-white hover:bg-white/90 text-black hover:text-black font-medium h-12 rounded-full">
                                Get in touch
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};