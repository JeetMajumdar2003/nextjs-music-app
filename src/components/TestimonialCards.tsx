"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote:
            "This platform has completely transformed the way I learn music. The interactive lessons make it so much fun!",
        name: "Aarav Patel",
        title: "Guitar Fundamentals",
    },
    {
        quote:
            "I love how I can practice at my own pace and get instant feedback. It's like having a personal tutor with me all the time.",
        name: "Mia Sharma",
        title: "Piano Basics",
    },
    {
        quote:
            "The variety of courses available is amazing. I've learned so much about different instruments and music theory.",
        name: "Liam Roy",
        title: "Music Theory 101",
    },
    {
        quote:
            "The platform's community features are great. I can collaborate with my friends and share our progress.",
        name: "Sophia Das",
        title: "Vocal Training",
    },
    {
        quote:
            "The interactive animations make learning music so engaging. I've never been this excited about my music classes!",
        name: "Rohan Gupta",
        title: "Drumming Essentials",
    },
    {
        quote:
            "The detailed tutorials and step-by-step instructions have made it easy for me to learn new instruments.",
        name: "Ananya Sen",
        title: "Violin for Beginners",
    },
    {
        quote:
            "The platform's adaptive learning technology ensures that I get a personalized learning experience. It's truly innovative.",
        name: "Arjun Mehta",
        title: "Advanced Guitar Techniques",
    },
    {
        quote:
            "The engaging content and interactive exercises have made learning music theory fun and accessible.",
        name: "Ishita Bose",
        title: "Music Theory 101",
    },
    {
        quote:
            "The user-friendly interface and comprehensive resources have made it an invaluable tool for my music studies.",
        name: "Kabir Singh",
        title: "Piano Basics",
    },
    {
        quote:
            "The ability to track my progress and receive instant feedback has greatly improved my learning experience.",
        name: "Nisha Kapoor",
        title: "Vocal Training",
    },
    {
        quote:
            "Music:Eyes brings music to life with mesmerizing, interactive animations. This gets students right into the music. Short of learning an instrument, I’ve never seen anything engage them like this.",
        name: "Dr. James Isaacs",
        title: "Head of Music, Hull’s School, Zurich, Switzerland",
    },
    {
        quote:
            "Thanks to Moosiko, my students aren’t missing a beat. The platform is pre-sequenced: Students learn a chord, play it with quality sound, practice it, and have to hit benchmarks before they move on.",
        name: "Sarah Gulish, Ph.D.",
        title: "Music Teacher, Lower Moreland High School, Pennsylvania",
    },
    {
        quote:
            "Soundtrap lets groups of students work together in real time. There are other digital audio workstations, but Soundtrap facilitates collaboration between students in person and at home.",
        name: "Tracy Wheeler Williamson",
        title: "General Music Teacher, Gorham Middle School",
    },
    {
        quote:
            "The platform's intuitive design and engaging content have made learning music theory a breeze for my students. They are more motivated than ever!",
        name: "John Smith",
        title: "Music Teacher, Lincoln High School",
    },
    {
        quote:
            "With this platform, my students can practice at their own pace and receive instant feedback. It's like having a personal tutor available 24/7.",
        name: "Emily Johnson",
        title: "Private Music Instructor",
    },
];



function TestimonialCards() {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.09] items-center justify-center relative overflow-hidden">
            <h2 className="text-4xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    );
}

export default TestimonialCards;