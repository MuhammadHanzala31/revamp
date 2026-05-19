import React from 'react'
import Badge from './Badge'
import Accordion from './Faqs'
import Image from 'next/image'
import img from '@/public/btn-img.png'

export default function Faqs() {
    return (
        <section className='flex lg:flex-row justify-between flex-col px-16 my-20'>
            <div className='flex flex-col gap-4 lg:w-[40%] w-full'>
                <Badge text='FAQ’s' />
                <h3 className='text-white font-aeonik text-[3.333vw] font-medium leading-[3.472vw]'>
                    Got Questions? We’ve Got Clear Answers
                </h3>
                <p className='text-white text-xl font-neue-montreal font-normal'>Everything you need to know before getting started..</p>
            </div>
            <div className='lg:w-[60%] w-full flex flex-col gap-6'>
                <Accordion/>
                <div className='flex flex-row bg-[#FFFFFF0A] rounded-[0.972vw] py-2 px-6 justify-between w-full items-center'>
                    <div className='flex flex-col gap-2'>
                        <h5 className='text-white font-neue-montreal text-3xl font-medium'>Still have questions?</h5>
                        <p className='text-white font-neue-montreal text-lg font-normal'>Reach out and we’ll walk you through everything.</p>
                    </div>
                    <button className='bg-[#7C1874]  transition-all w-fit duration-300 cursor-pointer hover:scale-[1.1] border border-[#7C1874] shadow-md shadow-[#7C1874] rounded-full text-[#F3F3F3] font-neue-montreal font-[400] text-[1.111vw] hover:opacity-90 px-[1.25vw] py-[0.694vw] flex items-center gap-2'>
                        <Image src={img} width={28} height={28} alt='btn-img'/>
                         <span>Contact US</span>
                         <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </section>
    )
}
