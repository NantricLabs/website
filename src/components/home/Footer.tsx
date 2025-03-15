import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
    return (
        <footer className="pt-20 pb-10 relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 aspect-[4/1] bg-teal-500/20 blur-[120px] rounded-full opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 mb-16">
                    <div className="lg:w-1/3">
                        <div className="mb-6">
                            <Logo />
                        </div>

                        <p className="text-white/60 mb-8 leading-relaxed">
                            Transforming ideas into exceptional digital experiences with custom software development,
                            SaaS products, and reliable hosting solutions.
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40 hover:text-teal-400 hover:border-teal-500/50 transition-colors">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40 hover:text-teal-400 hover:border-teal-500/50 transition-colors">
                                <Github size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40 hover:text-teal-400 hover:border-teal-500/50 transition-colors">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 lg:w-2/3">
                        <div>
                            <h3 className="font-medium text-white mb-6">Services</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">Custom Software</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">SaaS Development</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">Hosting & Cloud</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">UI/UX Design</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">API Integration</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-white mb-6">Company</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">Blog</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">Case Studies</a></li>
                                <li><a href="#" className="text-white/60 hover:text-teal-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-medium text-white mb-6">Contact</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Mail size={16} className="text-teal-400" />
                                    <a href="mailto:info@nantric.com" className="text-white/60 hover:text-teal-400 transition-colors">info@nantric.com</a>
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
                        <a href="#" className="text-white/40 hover:text-teal-400 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/40 hover:text-teal-400 text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-white/40 hover:text-teal-400 text-sm transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};