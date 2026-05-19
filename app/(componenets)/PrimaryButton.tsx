'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import i from '@/public/btn-icon.png'

type ButtonProps = {
    text: string
    href?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline' | 'simple'
    className?: string
    disabled?: boolean
}

export default function Button({
    text,
    href,
    onClick,
    type = 'button',
    variant = 'primary',
    className = '',
    disabled = false,
}: ButtonProps) {
    const baseStyles =
        ' transition-all w-fit duration-300 cursor-pointer hover:scale-[1.1]'

    const variants = {
        primary:
            'bg-[#7C1874]  border-[#FF00EB] border-l-[3px] border-b shadow-md shadow-[#7C1874] rounded-full text-[#F3F3F3] font-neue-montreal font-[400] text-[1.111vw] hover:opacity-90 px-[1.25vw] py-[0.694vw] flex items-center gap-2',
        secondary:
            'bg-black text-white hover:bg-neutral-800',
            simple : 'bg-[#7C1874]  shadow-md shadow-[#7C1874] rounded-full text-[#F3F3F3] font-neue-montreal font-[400] text-[1.111vw] hover:opacity-90 px-[1.25vw] py-[0.694vw] flex items-center gap-2',
        outline:
            'bg-transparent shadow-lg border border-[#F3F3F3] rounded-[3.472vw] text-[#F3F3F3] font-neue-montreal font-[400] text-[1.111vw] hover:opacity-90 px-[1.25vw] py-[0.694vw] flex items-center gap-2',
    }

    const styles = `${baseStyles} ${variants[variant]} ${className}`

    if (href) {
        return (
            <Link href={href} className={styles}>
                {text}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles}
        >
            <Image width={24} height={24} src={i} alt='btn-i' />
            {text}
        </button>
    )
}