"use client";
import React, { useEffect, useState } from "react";

function Footer() {

    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Simulate email sending
        setEmailSent(true);
        setTimeout(() => {
            setEmailSent(false);
            setEmail("");
        }, 3000);
    };

    const links = [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Courses', url: '/courses' },
        { name: 'Contact', url: '/contact' },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 py-16 font-sans overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 animate-[spin_15s_linear_infinite] rounded-full"></div>
                <div className="absolute bottom-10 right-0 w-80 h-80 bg-gradient-to-tl from-pink-500/30 to-yellow-500/30 animate-[bounce_3s_infinite] rounded-full"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full filter blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full filter blur-2xl opacity-20 animate-pulse"></div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* About Us */}
                    <div className="space-y-6 p-6 border border-indigo-500 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-500">
                        <h2 className="text-white text-2xl font-extrabold relative mb-4">
                            About Us
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-indigo-500 transform -rotate-3"></span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.
                        </p>
                        <p className="text-indigo-400 italic font-medium">
                            Join us to learn from the best and become a part of our growing family.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6 p-6 border border-purple-500 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-500">
                        <h2 className="text-white text-2xl font-extrabold mb-4 relative">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-purple-500 transform -rotate-3"></span>
                        </h2>
                        <ul className="space-y-3">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.url}
                                        className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
                                    >
                                        <span className="mr-3 text-purple-500 group-hover:text-white transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">›</span>
                                        <span className="relative overflow-hidden">
                                            <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">{link.name}</span>
                                            <span className="absolute top-0 left-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">{link.name}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-6 p-6 border border-pink-500 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-shadow duration-500">
                        <h2 className="text-white text-2xl font-extrabold mb-4 relative">
                            Follow Us
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-pink-500 transform -rotate-3"></span>
                        </h2>
                        <div className="flex space-x-4">
                            {[
                                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A5 5 0 0122.5 11.5v11a5 5 0 01-5 5h-11a5 5 0 01-5-5v-11a5 5 0 015-5z' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="bg-gray-700 p-4 rounded-full text-pink-400 hover:bg-pink-600 hover:text-white transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-3"
                                    aria-label={social.name}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={social.icon}></path>
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-6 p-6 border border-yellow-500 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-500">
                        <h2 className="text-white text-2xl font-extrabold mb-4 relative">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-500 transform -rotate-3"></span>
                        </h2>
                        <address className="text-gray-400 space-y-4">
                            {[
                                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', text: 'New Delhi, India' },
                                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', text: 'info@musicschool.com' },
                                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', text: '(123) 456-7890' }
                            ].map((item, index) => (
                                <p key={index} className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                                    </svg>
                                    <span className="hover:text-yellow-400 transition-colors duration-300">{item.text}</span>
                                </p>
                            ))}
                        </address>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="relative z-10 p-6 mb-6 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-indigo-500/50 max-w-lg mx-auto transition-all duration-500">
                    {emailSent ? (
                        <p className="text-center text-indigo-400 font-semibold">
                            Thank you for subscribing! 🎉
                        </p>
                    ) : (
                        <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-4">
                            <h3 className="text-white text-xl font-bold mb-4 relative">
                                Subscribe to our Newsletter
                                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-indigo-500 transform -skew-x-12"></span>
                            </h3>
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 rounded-l-md bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 ease-in-out"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-r-md bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition-all duration-300 ease-in-out"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Scroll-to-top Button */}
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`fixed bottom-5 right-5 z-20 w-12 h-12 rounded-full bg-indigo-500 text-white shadow-lg transform transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        } hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                    aria-label="Scroll to Top"
                >
                    ↑
                </button>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-sm text-gray-400">
                        © 2024 Music School. All rights reserved.
                    </p>
                    <p className="text-center text-xs text-gray-500 mt-2">
                        Crafted with <span className="text-red-500">♥</span> by music lovers for music lovers
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
