"use client";

import ContactPage from '@/components/home/Contact';
import { HeroSection } from '@/components/home/Hero';
import { ProjectsSection } from '@/components/home/Projects';

export default function Home() {
    return (
        <>
            <HeroSection />
            <ProjectsSection />
            <ContactPage />
        </>
    )
}
