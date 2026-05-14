import React from 'react'
import Button from './PrimaryButton'
import SocialSidebar from './HeroSocials'

export default function Hero() {
    return (
        <section className='flex relative flex-col lg:w-[60%] w-full gap-4 justify-end h-[60vh]  text-white px-16 pl-40'>
             <SocialSidebar/>
            <h1 className='text-6xl font-bold not-italic font-aeonik text-white'>Turning Ideas Into Revenue-Driven Brands</h1>
            <p className='text-white text-xl w-[80%] font-normal font-neue-montreal'>From customer acquisition to revenue growth, we build marketing systems that deliver measurable results.</p>
            <div className='flex items-center gap-4 '>
                <Button type="button" variant='primary' text='Schedule a Free Consultation' />
                <Button type="button" variant='outline' text='Start Your Project' />

            </div>
        </section>
    )
}
