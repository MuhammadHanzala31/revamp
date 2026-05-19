import React from 'react'
import Badge from './Badge'
import Button from './PrimaryButton'
import CaseStudySlider from './CaseStudySlider'

export default function CaseStudies() {
    return (
        <section className='px-16 my-[5.556vw]'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col gap-4 w-[40%]'>
                    <Badge text='Case Studies' />
                    <h3 className='text-white font-aeonik text-[3.333vw] font-medium leading-[4.167vw]'>
                        Real Results. Real Business Growth.
                    </h3>
                </div>
                <div className='flex flex-col gap-4 lg:w-1/2'>
                    <p className='text-[1.111vw] text-white font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                     <Button text='View All Case Studies' variant='simple'/>
                </div>
            </div>
            <CaseStudySlider/>
        </section>
    )
}
