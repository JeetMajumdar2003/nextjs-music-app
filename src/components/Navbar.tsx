'use client'    // used to indicate that this file is a client-side file and Now we can use React and other client-side libraries inside Next.js
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={'/'}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                        {/* Home */}
                    </MenuItem>
                </Link>

                {/* Courses */}
                <Link href={'/courses'}>
                    <MenuItem setActive={setActive} active={active} item="Courses">
                        <div className="grid grid-cols-2 gap-5 p-4 text-sm">
                            <HoveredLink href="/courses/basic-muisc-theory">Basic Music Theory</HoveredLink>
                            <HoveredLink href="/courses/guitar-fundamentals">Guitar Fundamentals</HoveredLink>
                            <HoveredLink href="/courses/advance-composition">Advance Composition</HoveredLink>
                            <HoveredLink href="/courses/music-production">Music Production</HoveredLink>
                            <HoveredLink href="/courses/songwriting">Songwriting</HoveredLink>
                            <HoveredLink href="/courses">All Courses...</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>

                {/* // Musical Instruments */}
                <MenuItem setActive={setActive} active={active} item="Musical Instruments">
                    <div className="text-sm grid grid-cols-3 gap-10 p-4">
                        <ProductItem
                            title="Acoustic Guitar"
                            href="https://www.pexels.com/photo/person-playing-brown-guitar-1407322/"
                            src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg"
                            description="High-quality acoustic guitar with a rich sound."
                        />
                        <ProductItem
                            title="Electric Piano"
                            href="https://www.pexels.com/photo/electronic-keyboard-2876659/"
                            src="https://images.pexels.com/photos/2876659/pexels-photo-2876659.jpeg"
                            description="Versatile electric piano with multiple sound options."
                        />
                        <ProductItem
                            title="Drum Set"
                            href="https://www.pexels.com/photo/brass-drums-1327430/"
                            src="https://images.pexels.com/photos/1327430/pexels-photo-1327430.jpeg"
                            description="Complete drum set for professional drummers."
                        />
                        <ProductItem
                            title="Violin"
                            href="https://www.pexels.com/photo/close-up-photo-of-violin-3120109/"
                            src="https://images.pexels.com/photos/3120109/pexels-photo-3120109.jpeg"
                            description="Elegant violin with a beautiful tone."
                        />
                        <ProductItem
                            title="Flute"
                            href="https://www.pexels.com/photo/person-playing-wind-instrument-2254140/"
                            src="https://images.pexels.com/photos/2254140/pexels-photo-2254140.jpeg"
                            description="Silver flute with a clear, bright sound."
                        />
                        <ProductItem
                            title="Saxophone"
                            href="https://www.pexels.com/photo/person-in-black-shirt-playing-brass-colored-saxophone-1049690/"
                            src="https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            description="Alto saxophone perfect for jazz and classical music."
                        />
                        <ProductItem
                            title="Trumpet"
                            href="https://www.pexels.com/photo/silver-gold-musical-instrument-51932/"
                            src="https://images.pexels.com/photos/51932/rotary-valves-tuba-valves-stimmzug-51932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            description="Brass trumpet with a powerful, resonant tone."
                        />
                        <ProductItem
                            title="Cello"
                            href="https://www.pexels.com/photo/close-up-shot-of-a-person-playing-a-cello-8519647/"
                            src="https://images.pexels.com/photos/8519647/pexels-photo-8519647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            description="Full-size cello with a deep, rich sound."
                        />
                        <ProductItem
                            title="Clarinet"
                            href="https://www.pexels.com/photo/close-up-photo-of-a-woman-holding-a-black-clarinet-7970108/"
                            src="https://images.pexels.com/photos/7970105/pexels-photo-7970105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            description="Wooden clarinet with a smooth, warm tone."
                        />
                        <ProductItem
                            title="Harp"
                            href="https://images.pexels.com/photos/25182746/pexels-photo-25182746/free-photo-of-a-person-playing-harp.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            src="https://images.pexels.com/photos/25182746/pexels-photo-25182746/free-photo-of-a-person-playing-harp.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            description="Elegant harp with a beautiful, ethereal sound."
                        />
                        <ProductItem
                            title="And Many More..."
                            href="https://www.pexels.com/photo/woman-sitting-in-a-recording-production-studio-5657664/"
                            src="https://images.pexels.com/photos/5657664/pexels-photo-5657664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            description="Explore our full range of musical instruments."
                        />
                    </div>
                </MenuItem>

                <Link href={'/about'}>
                    <MenuItem setActive={setActive} active={active} item="About Us">
                        {/* About Us */}
                    </MenuItem>
                </Link>

                <Link href={'/contact'} target="_blank">
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                        {/* Contact Us */}
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar