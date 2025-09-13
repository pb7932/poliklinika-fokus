import Link from 'next/link';
import React from 'react'
import { FaArrowRight  } from 'react-icons/fa';

const HeroSliderCard = ({bgClass, heading, ctaText, url}) => {
  return (
    <div className={`h-[90vh] w-full ${bgClass} bg-no-repeat bg-cover bg-center bg-blend-darken bg-black/60 flex flex-row justify-center items-center`} role="group" aria-label={heading}>
        <div className='mx-auto w-full max-w-6xl px-4'>
            <h1 className='font-semibold text-4xl lg:text-5xl mb-12'>{heading}</h1>
            <Link href={url} role="button" className="bg-white text-black text-lg lg:text-xl border-2 border-white transition-all duration-300 hover:bg-transparent hover:text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md cursor-pointer flex flex-row justify-center items-center group max-w-56">
                <button className='cursor-pointer flex flex-row justify-center items-center gap-2'>
                    {ctaText}
                    <FaArrowRight className='w-0 group-hover:w-4 m-0 p-0 transition-all duration-300 text-white' />
                </button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSliderCard