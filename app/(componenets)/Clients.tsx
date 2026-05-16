import React from 'react'
import ClientSlider from './ClientSlider'

export default function Clients() {
  return (
    <section className='bg-black w-[90%] mx-auto relative -top-[3.75vw]
     rounded-4xl flex flex-col gap-12 py-9 shadow shadow-gray-900'>
        <h4 className='max-w-146 w-full text-5xl mx-auto text-center text-white'>Trusted by Businesses That Care About Growth</h4>
         <ClientSlider/>
         <div className='flex flex-row gap-9 items-center justify-center'>
            <span className='text-4xl font-normal text-white'>3M+ <span className='text-lg font-light'>Revenue Generated</span></span>
            <span className='text-4xl font-normal text-white'>1k+ <span className='text-lg font-light'>Campaigns Launched</span></span>
            <span className='text-4xl font-normal text-white'>24% <span className='text-lg font-light'>Avg ROI Increase</span></span>
         </div>
    </section>
  )
}
