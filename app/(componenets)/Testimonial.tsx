import React from 'react'
import Badge from './Badge'
import test1 from '@/public/testi-1.png'
import test2 from '@/public/testi-2.png'
import test3 from '@/public/testi-3.png'
import test4 from '@/public/testi-4.png'
import test5 from '@/public/testi-5.png'
import Image from 'next/image'

export default function Testimonial() {
    return (
        <section className='px-[4.444vw] my-[5.556vw]'>
            <div className='flex flex-col items-center max-w-[57.571vw] w-full mx-auto text-center gap-6'>
                <Badge text='Client Testimonials & Reviews' />
                <h3 className='text-white font-aeonik text-[3.333vw] font-medium leading-[4.167vw]'>
                    What Our Happy Clients Say About Us
                </h3>
                <p className='text-white text-xl font-neue-montreal font-normal text-center'>Instead of relying on one-size-fits-all templates or disconnected campaigns, SISPN Tech creates custom solutions powered by AI, strategy, and execution that are built around results.</p>
            </div>
            <div className='flex flex-row gap-6 items-center justify-between mt-11'>
                <div className='relative'>
                    <Image src={test1} alt='sory' />
                    <div className='absolute top-1/2 left-[40%]'>
                        <i className="ri-play-circle-line text-white text-4xl"></i>
                    </div>
                    <div className='flex justify-between flex-row w-full items-center absolute bottom-5 px-3'>
                        <span className='text-xl font-bold text-white font-neue-montreal'>Logo</span>
                        <span className='text-xl font-normal text-white font-neue-montreal'>client Name</span>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={test2} alt='sory' />
                    <div className='absolute top-1/2 left-[40%]'>
                        <i className="ri-play-circle-line text-white text-4xl"></i>
                    </div>
                    <div className='flex justify-between flex-row w-full items-center absolute bottom-5 px-3'>
                        <span className='text-xl font-bold text-white font-neue-montreal'>Logo</span>
                        <span className='text-xl font-normal text-white font-neue-montreal'>client Name</span>
                    </div>
                </div>
                <div className='relative'>
                    <div className='absolute top-1/2 left-[40%]'>
                        <i className="ri-play-circle-line text-white text-4xl"></i>
                    </div>
                    <Image src={test3} alt='sory' />
                    <div className='flex justify-between flex-row w-full items-center absolute bottom-5 px-3'>
                        <span className='text-xl font-bold text-white font-neue-montreal'>Logo</span>
                        <span className='text-xl font-normal text-white font-neue-montreal'>client Name</span>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={test4} alt='sory' />
                    <div className='absolute top-1/2 left-[40%]'>
                        <i className="ri-play-circle-line text-white text-4xl"></i>
                    </div>
                    <div className='flex justify-between flex-row w-full items-center absolute bottom-5 px-3'>
                        <span className='text-xl font-bold text-white font-neue-montreal'>Logo</span>
                        <span className='text-xl font-normal text-white font-neue-montreal'>client Name</span>
                    </div>
                </div>
                <div className='relative'>
                    <Image src={test5} alt='sory' />
                    <div className='absolute top-1/2 left-[40%]'>
                        <i className="ri-play-circle-line text-white text-4xl"></i>
                    </div>
                    <div className='flex justify-between flex-row w-full items-center absolute bottom-5 px-3'>
                        <span className='text-xl font-bold text-white font-neue-montreal'>Logo</span>
                        <span className='text-xl font-normal text-white font-neue-montreal'>client Name</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
