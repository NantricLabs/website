"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Cuboid } from 'lucide-react';

interface ProjectProps {
    project: {
        id: string;
        title: string;
        tag: string;
        description: string;
        technologies: string[];
        icon: React.ReactNode;
        reverse: boolean;
    };
}

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    const { id, title, tag, description, technologies, icon, reverse } = project;

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-12 ${reverse ? 'direction-rtl' : ''}`}>
            <motion.div
                initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${reverse ? 'order-1' : 'order-2 lg:order-1'}`}
            >
                <div className="text-xs font-medium text-white/40 tracking-wider mb-2">{id} / PROJECT</div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    {title}
                    <div className="inline-flex items-center px-2 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs font-medium">
                        {tag}
                    </div>
                </h3>

                <p className="text-white/60 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {technologies.map((tech, index) => (
                        <span key={index} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-teal-500/30 hover:text-teal-400 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>

                <Button variant="outline" className="group border-white/20 bg-transparent hover:border-teal-500/50 text-white hover:text-teal-400 rounded-full pl-6 pr-5 py-6 h-auto shadow-lg shadow-black/5">
                    <span className="mr-3">View Case Study</span>
                    <span className="p-2 rounded-full bg-white/10 group-hover:bg-teal-500/20 transition-colors">
                        <ArrowRight size={14} />
                    </span>
                </Button>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={`relative ${reverse ? 'order-2' : 'order-1 lg:order-2'}`}
            >
                {project.title === "Dreamprint" ? (
                    <DreamPrintMockup />
                ) : (
                    <UpAlertMockup />
                )}
            </motion.div>
        </div>
    );
};

const DreamPrintMockup = () => {
    return (
        <>
            <div className="absolute -inset-10 bg-teal-500/5 blur-3xl rounded-full"></div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-xl shadow-black/30">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
                <div className="absolute inset-6 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        {/* 3D Model Preview Mockup */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Cuboid size={100} className="text-teal-400/50" strokeWidth={1} />
                        </div>
                        {/* Controls */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 bg-gradient-to-t from-black/40 to-transparent">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                </div>
                            </div>
                            <div className="py-2 px-3 rounded-full bg-white/10 backdrop-blur-sm text-xs">
                                Studio
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const UpAlertMockup = () => {
    return (
        <>
            <div className="absolute -inset-10 bg-teal-500/5 blur-3xl rounded-full"></div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-xl shadow-black/30">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]"></div>
                <div className="absolute inset-8 flex flex-col">
                    {/* Dashboard Mockup */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="text-sm font-medium">Server Status Dashboard</div>
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                            <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        </div>
                    </div>

                    {/* Status panels */}
                    <div className="flex-1 grid grid-cols-6 gap-3">
                        <div className="col-span-4 rounded-lg bg-white/5 p-3 flex flex-col hover:bg-white/10 transition-colors">
                            <div className="text-xs text-white/40 mb-2">Uptime</div>
                            <div className="flex-1 flex items-end space-x-1">
                                {[65, 85, 95, 75, 100, 85, 90, 95].map((height, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-gradient-to-t from-teal-500/80 to-teal-500/20 rounded-sm"
                                        style={{ height: `${height}%` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-2 rounded-lg bg-white/5 p-3 flex flex-col hover:bg-white/10 transition-colors">
                            <div className="text-xs text-white/40 mb-2">Status</div>
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                                </div>
                                <div className="text-xs mt-2 text-center text-teal-400">Online</div>
                            </div>
                        </div>
                        <div className="col-span-3 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors">
                            <div className="text-xs text-white/40 mb-2">Response Time</div>
                            <div className="text-2xl font-bold text-teal-400">42ms</div>
                            <div className="text-xs text-white/40">AVG</div>
                        </div>
                        <div className="col-span-3 rounded-lg bg-white/5 p-3 hover:bg-white/10 transition-colors">
                            <div className="text-xs text-white/40 mb-2">Reliability</div>
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-xs text-white/40">Last 90 days</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};