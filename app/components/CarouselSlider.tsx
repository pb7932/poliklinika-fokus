"use client"
import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoplayPlugin from 'embla-carousel-autoplay'
import Image from 'next/image';

// Example image URLs; replace with your own 12 images
const images = [
  '/galerija/galerija-1.jpg', '/galerija/galerija-2.jpeg', '/galerija/galerija-3.jpeg', '/galerija/galerija-4.jpg',
  '/galerija/galerija-5.jpeg', '/galerija/galerija-6.jpeg', '/galerija/galerija-7.jpeg', '/galerija/galerija-8.jpg',
  '/galerija/galerija-9.jpg', '/galerija/galerija-10.jpg', '/galerija/galerija-11.jpeg', '/galerija/galerija-12.jpg',
]

export default function CarouselSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [AutoplayPlugin({ delay: 3000, stopOnInteraction: false })]
  )

  // initialize autoplay tracking (no buttons rendered)

  return (
    <div className="embla w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {images.map((src, idx) => (
          <div key={idx} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2 filter brightness-70">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full aspect-square object-cover rounded-md"
              width={400}
              height={400}
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </div>
  )
}