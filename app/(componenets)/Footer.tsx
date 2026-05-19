import React from 'react'
import logo from '@/public/logo.png'
import sispn from '@/public/SISPN.png'
import Image from 'next/image'
import Link from 'next/link'
import img from '@/public/btn-icon.png'

export default function Footer() {
    return (
        <footer className='relative  px-16 mt-55'>
            <Image src={sispn} className='absolute -top-50 w-[90%] mx-auto flex justify-center left-[4vw]' alt='sispn' />

            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 mb-8">

                <div className='flex flex-col gap-6'>
                    <Image src={logo} alt='footer' />
                    <p className='text-white font-neue-montreal text-[1.111vw] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-white text-2xl font-medium font-neue-montreal'>Services</h4>
                    <div className='flex flex-col gap-4'>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Website Design</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Web Development</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Branding</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>UI/UX</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>SEO</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Digital Marketing</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Automation</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-5 '>
                    <h4 className='text-white text-2xl font-medium font-neue-montreal'>Industries we cover</h4>
                    <div className='flex flex-col gap-4'>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Healthcare & Medical</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>E-Commerce & Retail</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Real Estate</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Restaurants & Food</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Education</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Legal & Financial</Link>
                        <Link href={'/'} className='text-gray-500 text-xl font-normal font-neue-montreal'>Beauty & Wellness</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-0.5'>
                        <h6 className='text-2xl font-bold font-aeonik text-white'>Subscribe to our newsletter</h6>
                        <p className='text-xl font-normal font-neue-montreal text-white'>Be the first to hear about latest offers.</p>
                    </div>
                    <div className='relative'>
                        <button className='bg-[#7C1874] absolute right-2 top-1  transition-all w-fit duration-300 cursor-pointer hover:scale-[0.9] border border-[#7C1874] shadow-md shadow-[#7C1874] rounded-full text-[#F3F3F3] font-neue-montreal font-[400] text-[1.111vw] hover:opacity-90 px-[1.25vw] py-[0.556vw] flex items-center gap-2'>
                            <Image src={img} width={28} height={28} alt='btn-img' />
                            <span>Submit</span>
                        </button>
                        <input type="text" placeholder="Enter your email here" className='bg-white px-6 py-4.5 outline-none pr-14 w-full rounded-full placeholder:text-[#404040] placeholder:text-[1.111vw] font-normal text-[1.111vw] placeholder:font-normal placeholder:font-neue-montreal font-neue-montreal' />
                    </div>
                </div>
            </div>
            <div className="border-t border-[#FFFFFF38] py-4 flex flex-row items-center justify-between">
                <span className="text-white text-xl font-normal font-neue-montreal">Copyright © 2026 <span className="text-[#7C1874]">SISPN</span> All rights reserved.</span>
                <div className="flex flex-row items-center gap-5">
                    <Link href="/" className="text-xl font-normal font-neue-montreal text-[#FFFFFFE0]">Privacy Policy </Link>
                    <Link href="/" className="text-xl font-normal font-neue-montreal text-[#FFFFFFE0]"> Terms & Conditions </Link>
                </div>
            </div>
        </footer>
    )
}
