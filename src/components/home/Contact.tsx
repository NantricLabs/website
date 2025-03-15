"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Phone, Check } from 'lucide-react';
import Link from 'next/link';
import { submitMessage } from '@/functions/contact';

export const ContactPage = () => {
    return (
        <section className="relative py-32" id="contact">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15),transparent_50%)]" />
                <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,184,166,0.1),transparent_50%)]" />
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>
                {/* Abstract Elements */}
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-medium mb-6 backdrop-blur-xl">
                            <Mail size={14} className="text-teal-400" />
                            Get in Touch
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                            Let's Start a{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-400 to-white animate-gradient">
                                Conversation
                            </span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Have a project in mind or need assistance with your digital solutions? We're here to help.
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
                        <div className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-6 bg-white/5 shadow-xl shadow-black/20 h-full">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
                                        <Mail size={18} className="text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white/80 mb-1">Email</h4>
                                        <Link
                                            href="mailto:info@nantric.com"
                                            className="text-white/60 hover:text-teal-400 transition-colors"
                                        >
                                            info@nantric.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10">
                                        <MapPin size={18} className="text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white/80 mb-1">Office</h4>
                                        <p className="text-white/60">
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
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState<Record<string, string | null>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when field is edited
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: null,
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formState.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formState.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await submitMessage(formState); // Call the submitMessage function with form data
            setIsSubmitting(false);
            setIsSubmitted(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormState({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    message: '',
                });
            }, 5000);
        } catch (error) {
            console.error('Error submitting message:', error);
            setIsSubmitting(false);
        }
    };

    return (
        <div className="border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-6 bg-white/5 shadow-xl shadow-black/20 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

            {isSubmitted ? (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-10"
                >
                    <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
                        <Check size={32} className="text-teal-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-center max-w-md">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                Name <span className="text-teal-400">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                className={`w-full bg-black/30 border ${errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-teal-500/50'
                                    } rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-teal-500/50`}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                                Email <span className="text-teal-400">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                className={`w-full bg-black/30 border ${errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-teal-500/50'
                                    } rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-teal-500/50`}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formState.company}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 focus:border-teal-500/50 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                                placeholder="Your company (optional)"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                className="w-full bg-black/30 border border-white/10 focus:border-teal-500/50 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                                placeholder="Your phone (optional)"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                            Message <span className="text-teal-400">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            rows={6}
                            className={`w-full bg-black/30 border ${errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-teal-500/50'
                                } rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-teal-500/50`}
                            placeholder="Tell us about your project or inquiry"
                        ></textarea>
                        {errors.message && (
                            <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                        )}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center bg-teal-500 hover:bg-teal-400 text-black px-8 py-4 text-md font-medium rounded-full shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-400/30 disabled:opacity-70 disabled:pointer-events-none"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message <Send size={18} className="ml-2" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ContactPage;