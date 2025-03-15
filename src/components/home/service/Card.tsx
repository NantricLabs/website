"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Database, Server } from 'lucide-react';

export const ServiceCards = () => {
    const services = [
        {
            icon: <Code />,
            title: "Custom Software",
            description: "Tailored solutions built for your specific business needs and growth objectives"
        },
        {
            icon: <Database />,
            title: "SaaS Products",
            description: "Powerful cloud-based applications with robust features and scalable architecture"
        },
        {
            icon: <Server />,
            title: "Hosting Solutions",
            description: "Reliable infrastructure to keep your applications running smoothly and securely"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32">
            {services.map((service, index) => (
                <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    delay={0.1 * (index + 1)}
                />
            ))}
        </div>
    );
};

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            <div className="relative p-1 group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Card className="bg-black/50 backdrop-blur-sm border-white/10 group-hover:border-teal-500/30 transition-all h-full relative shadow-xl shadow-black/5">
                    <CardHeader>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 mb-4 group-hover:border-teal-500/50 group-hover:bg-white/10 transition-colors">
                            <div className="text-teal-400">{React.cloneElement(icon as React.ReactElement)}</div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-teal-400 transition-colors">{title}</CardTitle>
                        <CardDescription className="text-white/50 group-hover:text-white/70 transition-colors">{description}</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </motion.div>
    );
};