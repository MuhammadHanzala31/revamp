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
    variant?: 'primary' | 'secondary' | 'outline'
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
        ' transition-all duration-300 cursor-pointer hover:scale-[1.1]'

    const variants = {
        primary:
            'bg-[#7C1874] border border-[#7C1874] shadow-md shadow-[#7C1874] rounded-full text-[#F3F3F3] font-neue-montreal font-[400] text-[16px] hover:opacity-90 px-[18px] py-[10px] flex items-center gap-2',
        secondary:
            'bg-black text-white hover:bg-neutral-800',
        outline:
            'bg-transparent shadow-lg border border-[#F3F3F3] rounded-[50px] text-[#F3F3F3] font-neue-montreal font-[400] text-[16px] hover:opacity-90 px-[18px] py-[10px] flex items-center gap-2',
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