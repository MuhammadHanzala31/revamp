import React from 'react'
import Badge from './Badge'
import Image from 'next/image'
import gif from '@/public/choose.gif'
import Button from './PrimaryButton'

export default function ChooseUs() {
    return (
        <section className='px-16 my-[80px]'>
            <div className='flex flex-col items-center max-w-[56.571vw] w-full mx-auto text-center gap-6'>
                <Badge text='Why Businesses Choose Us' />
                <h3 className='text-white font-aeonik text-[3.333vw] font-medium leading-[60px]'>
                    Traditional agencies often focus on activity. We focus on outcomes!
                </h3>
                <p className='text-white text-xl font-neue-montreal font-normal text-center'>Instead of relying on one-size-fits-all templates or disconnected campaigns, SISPN Tech creates custom solutions powered by AI, strategy, and execution that are built around results.</p>
            </div>
            <div className='flex flex-row gap-16 mt-16 justify-center items-center'>
                <div className='flex flex-col gap-3.5'>
                    <span className='text-5xl font-neue-montreal font-medium text-white text-center '>2400+</span>
                    <span className='text-white font-neue-montreal font-normal text-3xl '>Projects Delivered</span>
                </div>
                <span className='w-[1px] h-[83px] bg-white'></span>
                <div className='flex flex-col gap-3.5'>
                    <span className='text-5xl font-neue-montreal font-medium text-white text-center '>200+</span>
                    <span className='text-white font-neue-montreal font-normal text-3xl '>Team of Experts</span>
                </div>
                <span className='w-[1px] h-[83px] bg-white'></span>
                <div className='flex flex-col gap-3.5'>
                    <span className='text-5xl font-neue-montreal font-medium text-white text-center '>400+</span>
                    <span className='text-white font-neue-montreal font-normal text-3xl '>Clients Globally</span>
                </div>
                <span className='w-[1px] h-[83px] bg-white'></span>
                <div className='flex flex-col gap-3.5'>
                    <span className='text-5xl font-neue-montreal font-medium text-white text-center '>15+</span>
                    <span className='text-white font-neue-montreal font-normal text-3xl '>Years of Experience</span>
                </div>
            </div>
            <div className='flex flex-row gap-4 items-center mt-32 '>
                <div className='flex flex-col gap-4 lg:w-[30%]'>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Revenue-first mindset</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">We do not chase vanity metrics like impressions or likes. Every decision is made with ROI, conversions, and business growth in mind.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Custom-Built, Not Cookie-Cutter</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">Your business is not a template, and your marketing should not be either. We design solutions tailored to your goals, industry, and audience.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">AI-Based execution</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">We use AI to work smarter, personalize better, and move faster, so your business stays ahead in a market where automation and intelligence are becoming standard.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Systems that scale</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">We build marketing systems that grow with you, so you are not starting over every time you expand.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center w-[40%]'>
                    <Image src={gif} alt='gif' className='w-full h-full' />
                </div>
                <div className='flex flex-col gap-4 lg:w-[30%]'>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Speed without sacrificing quality</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">We move quickly, execute efficiently, and keep momentum high, helping you beat slower competitors.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Data-Led decisions</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">We track what matters, analyze performance closely, and optimize continuously to improve results over time.</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-xl text-white font-medium font-neue-montreal tracking-widest uppercase">Built for Competitive Markets</span>
                        <p className="text-[16px] text-[#CFCFCF] font-normal font-neue-montreal leading-relaxed">Our strategies are designed for high-competition environments, where attention is expensive and only performance-driven execution wins.</p>
                    </div>
                    <Button text='Schedule a Free Consultation' variant='primary'/>
                </div>
            </div>
        </section>
    )
}
