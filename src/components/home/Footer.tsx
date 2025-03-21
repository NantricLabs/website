import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Github, Linkedin, Mail, MapPin } from 'lucide-react'

import { Separator } from "@/components/ui/separator"

import aLogo from '@/assets/logo.png'

export const Footer = () => {
    return (
        <footer className="pt-20 pb-10 relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 aspect-[4/1] bg-teal-500/20 blur-[120px] rounded-full opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 mb-16">
                    <div className="lg:w-1/3">
                        <div className="mb-6 -ml-5 -my-10">
                            <Image src={aLogo} alt="Nantric Logo" className='h-20 w-auto' />
                        </div>

                        <p className="text-white/60 mb-8 leading-relaxed">
                            Transforming ideas into exceptional digital experiences with custom software development,
                            SaaS products, and reliable hosting solutions.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/NantricLabs"
                                target="_blank"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center 
                border border-white/10 text-white/40 hover:text-teal-400 
                hover:border-teal-500/50 transition-colors"
                            >
                                <Github size={16} />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 lg:w-2/3">
                        <div>
                            <h3 className="font-medium text-white mb-6">Services</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/wip" className="text-white/60 hover:text-teal-400 transition-colors">Custom Software</Link>
                                </li>
                                <li>
                                    <Link href="/wip" className="text-white/60 hover:text-teal-400 transition-colors">SaaS Development</Link>
                                </li>
                                <li>
                                    <Link href="/wip" className="text-white/60 hover:text-teal-400 transition-colors">Hosting &amp; Cloud</Link>
                                </li>
                                <li>
                                    <Link href="/wip" className="text-white/60 hover:text-teal-400 transition-colors">API Integration</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-white mb-6">Company</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/wip" className="text-white/60 hover:text-teal-400 transition-colors">About Us</Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-white/60 hover:text-teal-400 transition-colors">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/wip" className="text-white/60 hover:text-teal-400 transition-colors">Blog</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-white mb-6">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Mail size={16} className="text-teal-400" />
                                    <Link
                                        href="mailto:info@nantric.com"
                                        className="text-white/60 hover:text-teal-400 transition-colors"
                                    >
                                        info@nantric.com
                                    </Link>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="text-teal-400 mt-1" />
                                    <span className="text-white/60">
                                        Keulenstraat 12<br />
                                        Deventer, 7418 ET<br />
                                        The Netherlands
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/5 my-10" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} Nantric. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link
                            href="/wip"
                            className="text-white/40 hover:text-teal-400 text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/wip"
                            className="text-white/40 hover:text-teal-400 text-sm transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/wip"
                            className="text-white/40 hover:text-teal-400 text-sm transition-colors"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
