"use client";
import React from 'react'
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/moving-border";
import coursesData from "@/data/music_courses.json";
import Link from 'next/link';
import Image from 'next/image';

function FeaturedCourses() {

    // Define the Course interface(Structure of a course) -[TypeScript]
    interface Course {
        id: number;
        title: string;
        slug: string;
        description: string;
        price: number;
        instructor: string;
        isFeatured: boolean;
        image: string;
    }

    // Get all the featured courses from the data
    const featuredCourses = coursesData.courses.filter((course: Course) => course.isFeatured === true);

    return (
        <div className='py-12 bg-slate-950 bg-grid-white/[0.05]'>
            <div className='text-center'>
                {/* Heading */}
                <h2 className='text-base text-teal-600 font-semibold tracking-wider underline underline-offset-2'>COURSES WE OFFER</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl underline underline-offset-2'>Learn Form the BEST in Class Tutors and with Technology</p>
            </div>
            <div className='mt-20 flex justify-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-16 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className='flex'>
                            <BackgroundGradient
                                className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full w-[22rem] max-w-sm font-bold'
                            >
                                <div className='p-4 sm:p-6 flex flex-col items-center text-current flex-grow'>
                                    {/* Course Image */}
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        height="400"
                                        width="400"
                                        className="object-cover border border-black rounded-lg h-[250px]"
                                    />
                                    {/* Course Title */}
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                        {course.title}
                                    </p>
                                    {/* Course Description */}
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {course.description}
                                    </p>
                                    {/* Buy Now Button */}
                                    <Link href={`/courses/${course.slug}`}>
                                        <button type='button' className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span>Buy now </span>
                                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                                ${course.price}
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-20 text-center'>
                {/* View All Courses Button */}
                <Link href='/courses'>
                    <Button
                        borderRadius="1.75rem"
                        containerClassName='h-10'
                        className="bg-white dark:bg-teal-600 text-black dark:text-black border-neutral-200 dark:border-slate-800 font-semibold"
                    >
                        View All Courses
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses