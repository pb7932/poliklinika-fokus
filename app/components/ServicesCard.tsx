import React from 'react'
import Link from 'next/link';
import { FaArrowRight  } from 'react-icons/fa';
import Image from 'next/image'


const ServicesCard = ({bgImage, heading, text, link}) => {
  return (
    <article className="relative w-full p-4 transition-all min-h-[24rem] lg:min-h-[44rem] duration-300 shadow-xl hover:shadow-black/50 flex flex-col justify-end bg-cover bg-center text-white bg-blend-darken bg-black/35"  aria-labelledby={`${heading.toLowerCase()}-heading`}>
            <div className={`absolute inset-0 w-full min-h-full overflow-hidden bg-blend-darken`}>
                  <Image
                    src={bgImage}
                    alt={"alt"}
                    fill                  // <-- makes the img fill the parent div
                    sizes="100vw"         // <-- hint to the browser that it'll be full viewport width
                    width={0}             // <-- satisfy the required props without affecting layout
                    height={0}
                    loading='lazy'
                    className='transition-all duration-300 hover:scale-105 filter brightness-60  '            // <-- satisfy the required props without affecting layout
                    style={{
                      objectFit: 'cover', // or 'contain', depending on how you want it to scale
                      objectPosition: 'center',
                    }}
                  />
                </div>
            <div className='z-10'>
                {/* <div className="w-full h-64 bg-cover rounded-md mb-6" style={{ backgroundImage: bgImage }}>
                </div> */}
                <h3 id={`${heading.toLowerCase()}-heading`} className="text-2xl lg:text-4xl font-semibold mb-8 font-open-sans uppercase" style={{fontFamily: 'var(--font-open-sans)'}}>{heading}</h3>
                <p className="text-gray-100 mb-8 text-lg">{text}</p>
            </div>
            <div className='z-10' role="button">
                <Link href={link} aria-label={`Saznajte više o usluzi ${heading}`}>
                  <p className="px-6 py-3 bg-white text-black rounded-md transition-all duration-300 flex flex-row justify-center items-center gap-2 group">
                    Saznajte više
                    <FaArrowRight className='w-0 group-hover:w-6 transition-all duration-300' />
                  </p>
                </Link>
            </div>
    </article>
  )
}

export default ServicesCard