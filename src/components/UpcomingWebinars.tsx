'use client';
import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/moving-border';
import { HoverEffect } from "@/components/ui/card-hover-effect";

function UpcomingWebinars() {
    const webinars = [
        {
            title: "Mastering the Art of Guitar",
            description:
                "Join our expert guitarist to learn advanced techniques and tips for mastering the guitar. Perfect for intermediate to advanced players.",
            slug: "guitar-masterclass",
        },
        {
            title: "Vocal Training for Beginners",
            description:
                "A comprehensive guide to vocal training for beginners. Learn the basics of singing, breathing techniques, and vocal exercises.",
            slug: "vocal-training",
        },
        {
            title: "Music Production 101",
            description:
                "An introductory webinar on music production. Learn how to use digital audio workstations (DAWs) and create your own music tracks.",
            slug: "music-production",
        },
        {
            title: "Songwriting Secrets",
            description:
                "Discover the secrets of successful songwriting. Learn about song structure, lyrics, and melody creation from industry professionals.",
            slug: "songwriting-secrets",
        },
        {
            title: "Jazz Improvisation",
            description:
                "Explore the world of jazz improvisation. Learn scales, chords, and improvisation techniques to enhance your jazz performance.",
            slug: "jazz-improvisation",
        },
        {
            title: "Electronic Music Production",
            description:
                "Dive into the world of electronic music production. Learn about synthesizers, drum machines, and creating electronic music.",
            slug: "electronic-music",
        },
    ];

    return (
        <div className='p-12 bg-gray-900 bg-dot-white/[0.05]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>

                <div className='text-center'>
                    <h2>
                        <span className='text-base text-teal-600 font-semibold tracking-wider underline underline-offset-2'>FEATURED WEBINARS</span>
                        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl underline underline-offset-2'>Enhance Your Musical Journey</p>
                    </h2>
                </div>

                <div className='mt-10'>
                    <HoverEffect
                        items={webinars.map(webinar => (
                            {
                                title: webinar.title,
                                description: webinar.description,
                                link: `webinars/${webinar.slug}`,
                            }
                        ))}
                    />
                </div>

                <div className='mt-10 text-center'>
                    <Link href='/webinars'>
                        <Button
                            borderRadius="1.75rem"
                            containerClassName='h-10'
                            className="bg-white dark:bg-teal-600 text-black dark:text-black border-neutral-200 dark:border-slate-800 font-semibold"
                        >
                            View All Webinars
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default UpcomingWebinars