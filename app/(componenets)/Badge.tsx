import React from 'react'

export default function Badge({text} : {text : string}) {
  return (
    <div className='bg-[#7C1874] w-fit text-white px-2.5 py-1 rounded-full'>{text}</div>
  )
}
