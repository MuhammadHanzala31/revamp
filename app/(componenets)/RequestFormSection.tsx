import React from 'react'
import RequestForm from './RequestForm'

export default function RequestFormSection() {
    return (
        <section className='relative mx-16 my-20 flex lg:flex-row flex-col items-center bg-linear-to-l to-[#b8b8b813] from-5% from-black/30 rounded-3xl p-12'>
            <h3 className='text-[#FFFFFF0A] font-aeonik text-[204px] left-[12vw] font-extrabold top-0 absolute uppercase -z-1'>Contact</h3>
            <div className='flex flex-col lg:w-1/2 w-full gap-4'>
                <div className='flex flex-col'>
                    <h5 className='text-white font-neue-montreal text-5xl font-bolds'>Start your journey With Us</h5>
                    <p className='text-white font-neue-montreal text-[16px] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </div>
                <div className='bg-linear-to-l to-[#ffffff52]  p-2   to-90% rounded-md from-black/30 flex flex-row items-center gap-3'>
                    <div className='w-13 h-13 rounded-lg flex justify-center items-center bg-[#7C1874]'>
                        <i className="ri-phone-fill text-2xl text-white"></i>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-2xl font-medium font-neue-montreal text-white'>phone</span>
                        <span className='text-[16px] font-noral font-neue-montreal text-white'>Lorem</span>
                    </div>
                </div>
                <div className='bg-linear-to-l to-[#ffffff52]  p-2   to-90% rounded-md from-black/30 flex flex-row items-center gap-3'>
                    <div className='w-13 h-13 rounded-lg flex justify-center items-center bg-[#7C1874]'>
                        <i className="ri-phone-fill text-2xl text-white"></i>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl font-medium font-neue-montreal text-white'>phone</span>
                        <span className='text-[16px] font-noral font-neue-montreal text-white'>Lorem</span>
                    </div>
                </div>
                <div className='bg-linear-to-l to-[#ffffff52]  p-2   to-90% rounded-md from-black/30 flex flex-row items-center gap-3'>
                    <div className='w-13 h-13 rounded-lg flex justify-center items-center bg-[#7C1874]'>
                        <i className="ri-phone-fill text-2xl text-white"></i>
                    </div>
                    <div className='flex flex-col '>
                        <span className='text-2xl font-medium font-neue-montreal text-white'>phone</span>
                        <span className='text-[16px] font-noral font-neue-montreal text-white'>Lorem</span>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 w-full'>
                <RequestForm/>
            </div>
        </section>
    )
}
