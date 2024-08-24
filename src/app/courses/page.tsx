'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";

function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black py-12 pt-36">
            <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-teal-400 underline underline-offset-8">
                All Courses ({courseData.courses.length})
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {courseData.courses.map((course) => (
                    <CardContainer key={course.id} className="inter-var m-4 max-w-sm">
                        <CardBody className="bg-gray-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-gray-700 border-gray-600 w-full h-auto rounded-xl p-6 border transition-transform transform hover:-translate-y-2 duration-300 hover:bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 dark:hover:from-gray-600 dark:hover:via-gray-700 dark:hover:to-gray-800">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-teal-400 dark:text-teal-300"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-gray-400 text-sm mt-2 dark:text-gray-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={course.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt={course.title}
                                />
                            </CardItem>
                            <div className="flex justify-center items-center mt-4">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    className="px-4 py-2 rounded-lg text-xs font-normal text-teal-400 hover:bg-teal-600 hover:text-white transition-all duration-300"
                                    href={`courses/${course.slug}`}
                                >
                                    Enroll Now →
                                </CardItem>
                                {/* <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-lg bg-teal-600 text-white text-xs font-bold hover:bg-teal-700 transition-all duration-300"
                                >
                                    Enroll Now
                                </CardItem> */}
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}

export default Page;
