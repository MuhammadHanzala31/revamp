import React from 'react'
import Button from './PrimaryButton'

export default function RequestForm() {
  return (
    <div className='bg-[#4848481C] p-8 rounded-3xl flex flex-col gap-6 w-[90%] mx-auto'>
        <div className='relative'>
            <i className="ri-user-3-line text-[#404040] text-xl absolute left-4 top-3"></i>
            <input type="text" className='bg-white w-full rounded-xl py-3 outline-none px-3 pl-10 placeholder:text-lg placeholder:text-[#404040] placeholder:font-normal placeholder:font-neue-montreal text-lg text-[#404040]' placeholder='Enter your name' />
        </div>
        <div className='relative'>
            <i className="ri-mail-line text-[#404040] text-xl absolute left-4 top-3"></i>
            <input type="text" className='bg-white w-full rounded-xl py-3 outline-none px-3 pl-10 placeholder:text-lg placeholder:text-[#404040] placeholder:font-normal placeholder:font-neue-montreal text-lg text-[#404040]' placeholder='Enter your Email' />
        </div>
        <div className='relative'>
            <i className="ri-phone-line text-[#404040] text-xl absolute left-4 top-3"></i>
            <input type="text" className='bg-white w-full rounded-xl py-3 outline-none px-3 pl-10 placeholder:text-lg placeholder:text-[#404040] placeholder:font-normal placeholder:font-neue-montreal text-lg text-[#404040]' placeholder='Enter your Phone number' />
        </div>
        <div className='relative'>
            <i className="ri-question-answer-line text-[#404040] text-xl absolute left-4 top-3"></i>
            <textarea  className='bg-white w-full rounded-xl py-3 outline-none px-3 pl-10 placeholder:text-lg placeholder:text-[#404040] placeholder:font-normal placeholder:font-neue-montreal text-lg text-[#404040] resize-none h-[245px]' placeholder='Enter your Message' />
        </div>
        <Button text='Submit' variant='primary'/>
    </div>
  )
}
