"use client";

import { useState } from "react";
import Badge from "./Badge";
import Image from "next/image";
import icon from '@/public/service-arrow.png'
const services = [
    {
        id: "design",
        label: "Design",
        icon: "✦",
        subLinks: [
            "Web & Digital Design",
            "Specialized Tech Design",
            "Frontend & Creative Design",
            "3D & Motion Design",
            "Strategy & Product Thinking Design",
        ],
    },
    {
        id: "development",
        label: "Development",
        icon: "⌥",
        subLinks: [
            "Web Development",
            "Mobile App Development",
            "Backend & API Development",
            "DevOps & Cloud Solutions",
            "CMS & E-Commerce Development",
        ],
    },
    {
        id: "digital-marketing",
        label: "Digital Marketing",
        icon: "◈",
        subLinks: [
            "SEO & Content Strategy",
            "Social Media Marketing",
            "Email Marketing Campaigns",
            "Performance & Paid Ads",
            "Analytics & Growth Hacking",
        ],
    },
    {
        id: "emerging-tech",
        label: "Emerging Tech",
        icon: "⬡",
        subLinks: [
            "AI & Machine Learning",
            "Blockchain & Web3",
            "AR / VR Experiences",
            "IoT Solutions",
            "Automation & RPA",
        ],
    },
    {
        id: "advertising",
        label: "Advertising & Creative",
        icon: "◉",
        subLinks: [
            "Brand Identity & Strategy",
            "Video Production",
            "Copywriting & Storytelling",
            "Print & OOH Advertising",
            "Campaign Conceptualisation",
        ],
    },
];

export default function ServicesNav() {
    const [active, setActive] = useState(services[0]);
    const [hoveredSub, setHoveredSub] = useState<number | null>(null);

    return (
        <section className="min-h-screen relative text-white flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 font-sans">

            <div className="flex flex-col md:flex-row gap-0 border-neutral-800">
                <div className="md:w-1/2 border-b md:border-b-0 md:border-r border-neutral-800">
                    <Badge text='Our Services' />
                    <h3 className='text-white my-8 font-aeonik text-[3.333vw] font-medium leading-[4.167vw]'>
                        Our Services Are Built to Scale Your Revenue
                    </h3>
                    {services.map((service, i) => {
                        const isActive = active.id === service.id;
                        return (
                            <button
                                key={service.id}
                                onClick={() => setActive(service)}
                                className={`
                  group w-full flex items-center justify-between
                  px-0 pr-8 py-1 
                  text-left transition-all duration-300 cursor-pointer
                  ${isActive ? "text-white" : "text-[#FFFFFFA6] hover:text-white"}
                `}
                            >
                                <div className="flex items-center gap-2">
                                    {/* active indicator arrow */}
                                    {
                                        isActive ? <Image src={icon} alt="icon" width={42} height={42} /> : null
                                    }

                                    <span
                                        className={`text-[3.333vw]  font-medium tracking-tight transition-all font-neue-montreal duration-300 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"
                                            }`}
                                    >
                                        {service.label}
                                    </span>
                                </div>

                            </button>
                        );
                    })}
                </div>

                <div className="bg-[url(/services-before.png)] absolute right-4 top-0 h-screen" />

                <div className="md:w-1/2 md:pl-12 bg-[url(/services-before.png)] flex flex-col justify-center py-6">
                    {/* Active category label */}
                    <div className="flex items-center gap-2 mb-8">
                        <span className="text-[1.111vw] tracking-[0.25em] uppercase text-neutral-600">
                            {active.label}
                        </span>
                        <span className="flex-1 h-px bg-neutral-800" />
                    </div>

                    <ul className="space-y-1">
                        {active.subLinks.map((link, idx) => (
                            <li key={link}>
                                <button
                                    onMouseEnter={() => setHoveredSub(idx)}
                                    onMouseLeave={() => setHoveredSub(null)}
                                    className={`
                    group/sub w-full text-left flex items-center gap-3
                    py-3 transition-all duration-200 cursor-pointer
                    ${hoveredSub === idx
                                            ? "text-white"
                                            : hoveredSub !== null
                                                ? "text-neutral-600"
                                                : "text-white"
                                        }
                  `}
                                >
                                    {/* animated dash */}
                                    <span
                                        className={`inline-block h-px bg-current transition-all duration-300 ${hoveredSub === idx ? "w-6" : "w-3"
                                            }`}
                                    />
                                    <span className="text-[1.563vw] font-neue-montreal font-normal   tracking-tight">
                                        {link}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}