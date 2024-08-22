"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
    {
        title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
        description:
            "Engage with interactive lessons that adapt to your learning pace. Our platform offers a variety of exercises and tutorials to help you master your instrument. Whether you're a beginner or an advanced player, our lessons cater to all skill levels.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
                Interactive Lessons
            </div>
        ),
    },
    {
        title: "Real-time Feedback",
        description:
            "Receive instant feedback on your playing. Our platform analyzes your performance and provides tips to improve your skills in real time. With our advanced algorithms, you'll get precise feedback on your timing, technique, and musicality.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Real-time Feedback
            </div>
        ),
    },
    {
        title: "Practice Tools",
        description:
            "Access a variety of practice tools, including metronomes, tuners, and backing tracks. Our platform helps you stay on beat and in tune while you practice. Whether you're practicing scales, chords, or complex melodies, our tools will assist you in honing your skills.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
                Practice Tools
            </div>
        ),
    },
    {
        title: "Community Support",
        description:
            "Join a community of fellow learners and experienced musicians. Share your progress, ask questions, and get support from others on the same journey. Our community is a welcoming and inclusive space where you can connect with like-minded individuals and grow together.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
                Community Support
            </div>
        ),
    },
];

function WhyChooseUs() {
    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    );
}

export default WhyChooseUs;