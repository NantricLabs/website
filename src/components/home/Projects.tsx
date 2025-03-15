"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Cuboid, Clock } from 'lucide-react';
import { ProjectCard } from './project/Card';

export const ProjectsSection = () => {
    const projects = [
        {
            id: "01",
            title: "Dreamprint",
            tag: "3D Printing",
            description: "A comprehensive platform where users can upload 3D models, customize specifications, and order physical parts with just a few clicks. Features real-time pricing, status tracking, and multiple material options.",
            technologies: ["NextJS", "Three.js", "AWS", "3D Rendering"],
            icon: <Cuboid size={100} className="text-teal-400/50" strokeWidth={1} />,
            reverse: false
        },
        {
            id: "02",
            title: "UpAlert",
            tag: "Monitoring",
            description: "An advanced uptime monitoring system that tracks website and service availability with deep analytical insights. Features instant notifications, historical data analysis, and customizable reporting.",
            technologies: ["React", "Node.js", "GraphQL", "TimescaleDB"],
            icon: <Clock size={100} className="text-teal-400/50" strokeWidth={1} />,
            reverse: true
        }
    ];

    return (
        <section className="py-32 relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-5 backdrop-blur-sm">
                            Featured Work
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold max-w-md leading-tight">
                            Projects with Impact
                        </h2>
                    </div>
                    <p className="text-white/60 max-w-md md:text-right">
                        Discover some of our innovative solutions that have helped businesses transform and grow.
                    </p>
                </div>

                <div className="space-y-32">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
