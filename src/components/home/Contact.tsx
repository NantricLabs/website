"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';
import Link from 'next/link';

export const ContactPage = () => {
    return (
        <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white" id="contact">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.08),transparent_50%)]" />
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,184,166,0.05),transparent_50%)]" />
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.4]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, rgba(20, 184, 166, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(20, 184, 166, 0.05) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>
                {/* Abstract Elements */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-600 text-xs font-medium mb-6 backdrop-blur-xl">
                            <Mail size={14} className="text-teal-500" />
                            Get in Touch
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-900">
                            Let&apos;s Start a{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 animate-gradient">
                                Conversation
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Have a project in mind or need assistance with your digital solutions? We&apos;re here to help.
                            Fill out the form below and our team will get back to you promptly.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 mb-auto"
                    >
                        <div className="border border-gray-200 rounded-2xl overflow-hidden backdrop-blur-sm p-6 bg-white shadow-xl shadow-gray-400/15 h-full relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                            <h3 className="text-xl font-bold mb-6 text-gray-900">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-50 backdrop-blur-sm border border-teal-200">
                                        <Mail size={18} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-1">Email</h4>
                                        <Link
                                            href="mailto:info@nantric.com"
                                            className="text-gray-600 hover:text-teal-600 transition-colors"
                                        >
                                            info@nantric.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-50 backdrop-blur-sm border border-teal-200">
                                        <MapPin size={18} className="text-teal-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-700 mb-1">Office</h4>
                                        <p className="text-gray-600">
                                            Keulenstraat 12<br />
                                            Deventer, 7418 ET<br />
                                            The Netherlands
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactForm = () => {
    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden backdrop-blur-sm p-6 bg-white shadow-xl shadow-gray-400/15 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name <span className="text-teal-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-white border border-gray-300 focus:border-teal-500/50 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email <span className="text-teal-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white border border-gray-300 focus:border-teal-500/50 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            className="w-full bg-white border border-gray-300 focus:border-teal-500/50 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                            placeholder="Your company (optional)"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full bg-white border border-gray-300 focus:border-teal-500/50 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                            placeholder="Your phone (optional)"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-teal-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full bg-white border border-gray-300 focus:border-teal-500/50 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                        placeholder="Tell us about your project or inquiry"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-md font-medium rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-600/30"
                    >
                        Send Message <Send size={18} className="ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;
