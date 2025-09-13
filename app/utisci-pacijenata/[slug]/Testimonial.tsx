'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import testimonials from '@/app/constants/testimonials';
import { FaQuoteRight, FaArrowRight  } from 'react-icons/fa';
import Image from 'next/image';

const Testimonial = () => {
    const pathname = usePathname();
    const slug = pathname.split('/').filter(Boolean).pop();
    const [testimonial, setTestimonial] = useState({id: '', heading: '', text: '', imgUrl: '', name: '', about: ''})

    useEffect(() => {
        setTestimonial(testimonials.filter(t => t.id == slug)[0])
    }, [slug])
  return (
    <section className='pt-12 relative'>
                <section
                  className="relative w-full h-[70vh]
                             bg-[url('/images/laser-eye-surgery-main-velika.jpg')]
                             bg-top bg-cover bg-blend-darken bg-black/50
                             flex items-end justify-end px-4 lg:px-24 py-24"
                >
                  <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-6xl font-bold text-white text-end px-4 flex justify-end uppercase">
                    Iskustva naših pacijenata
                  </h1>
                </section>
                <div className='relative text-black w-full max-w-6xl mx-auto py-24 px-4 z-10'>
                    {testimonial &&
                        <>
                            <h2 className='text-2xl lg:text-3xl font-semibold mb-8'>{testimonial.heading}</h2>
                            <p className='mb-8 lg:text-lg'>{testimonial.text}</p>
                            {testimonial.imgUrl && <Image className='max-w-lg rounded-md mb-4' src={testimonial.imgUrl} alt='Utisak pacijenta' />}
                            <p className="">- {testimonial.name}{testimonial.about && <>, <span className='text-gray-500'>{testimonial.about}</span></>}</p>
                        </>
                    }
                </div>

                <FaQuoteRight className="max-md:hidden text-neutral-200 h-auto w-md -z-10 absolute bottom-0 right-0" />
            </section>
  )
}

export default Testimonial