'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import logo from '@/public/logo.png'
import Button from './PrimaryButton'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const menuItems1 = [
    'Real Estate',
    'Healthcare',
    'Hospitality',
    'Legal & Law',
]

const menuItems2 = [
    'Government and Public Sector',
    'Education',
    'FMCG & Retail',
    'FinTech',
]

export default function Navbar() {
    const [megaMenu, setMegaMenu] = useState(false)
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    const openMenu = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        setMegaMenu(true)
    }

    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setMegaMenu(false), 200)
    }

    return (
        <>
            {megaMenu && (
                <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm pointer-events-none" />
            )}

            <nav className="relative flex items-center justify-between py-2 lg:mx-16 mx-8 z-50">

                {/* Logo */}
                <Image src={logo} width={135} height={65} alt="logo" />

                {/* Center Nav */}
                <div className="relative flex items-center justify-center py-10 overflow-visible">

                    {/* Left Line */}
                    <div className="hidden md:block w-32 h-[1px] bg-white/30 mr-5"></div>

                    {/* Nav Links */}
                    <div
                        className="
            relative
            flex
            items-center
            gap-8
            rounded-lg
            border
            border-white/30
            bg-white/5
            px-10
            py-4
            backdrop-blur-xl
            shadow-[0_0_30px_rgba(255,255,255,0.05)]

            before:content-['']
            before:absolute
            before:inset-0
            before:rounded-full
            before:bg-[url('/nav-light.png')]
            before:bg-cover
            before:bg-center
            before:opacity-20
            before:pointer-events-none
          "
                    >
                        <Link
                            href="/"
                            className="text-sm text-white transition hover:text-white/70"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="text-sm text-white transition hover:text-white/70"
                        >
                            About
                        </Link>

                        <div
                            className="relative"
                            onMouseEnter={openMenu}
                            onMouseLeave={scheduleClose}
                        >
                            <button className="text-sm text-white transition hover:text-white/70">
                                Services
                            </button>

                            {/* Invisible bridge — fills gap between button and mega menu */}
                            {megaMenu && (
                                <div className="absolute left-0 right-0 h-4 top-full" />
                            )}

                            {/* Mega Menu */}
                            {megaMenu && (
                                <div
                                    className="absolute left-30 mx-auto top-[calc(100%+56px)] -translate-x-1/2 w-[90vw] rounded-[28px] border border-white/10 bg-black p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)]"
                                    onMouseEnter={openMenu}
                                    onMouseLeave={scheduleClose}
                                >
                                    <div className="grid grid-cols-3 gap-16">

                                        {/* Left Column */}
                                        <div className="space-y-8">
                                            {menuItems1.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href="/"
                                                    className="group flex items-center justify-between border-b border-white/10 pb-5"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-3 w-3 rounded-full bg-[#b100ff] shadow-[0_0_20px_#b100ff]"></div>
                                                        <span className="text-lg font-medium text-white transition group-hover:text-[#b100ff]">
                                                            {item}
                                                        </span>
                                                    </div>
                                                    <ChevronRight
                                                        size={22}
                                                        className="text-white transition group-hover:translate-x-1"
                                                    />
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Center Column */}
                                        <div className="space-y-8">
                                            {menuItems2.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    href="/"
                                                    className="group flex items-center justify-between border-b border-white/10 pb-5"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-3 w-3 rounded-full bg-[#b100ff] shadow-[0_0_20px_#b100ff]"></div>
                                                        <span className="text-lg font-medium text-white transition group-hover:text-[#b100ff]">
                                                            {item}
                                                        </span>
                                                    </div>
                                                    <ChevronRight
                                                        size={22}
                                                        className="text-white transition group-hover:translate-x-1"
                                                    />
                                                </Link>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/portfolio"
                            className="text-sm text-white transition hover:text-white/70"
                        >
                            Portfolio
                        </Link>

                        <Link
                            href="/contact"
                            className="text-sm text-white transition hover:text-white/70"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Right Line */}
                    <div className="hidden md:block w-32 h-[1px] bg-white/30 ml-5"></div>
                </div>

                {/* CTA */}
                <Button
                    variant="primary"
                    type="button"
                    text="Schedule a Free Consultation"
                />
            </nav>
        </>
    )
}
